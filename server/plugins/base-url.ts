// The site's markup uses root-relative URLs ("/work/", "/og/x.jpg"). When the site is served from a
// sub-path (the github.io preview) this prefixes them with the app base URL. At the domain root the
// base is "/" and nothing is changed.
export default defineNitroPlugin((nitroApp) => {
  const base = (useRuntimeConfig().app.baseURL || '/').replace(/\/$/, '')
  if (!base) return
  const attr = /(\s(?:src|href|poster|data-image|data-link|data-backdrop)=")\/(?!\/)/g
  const prefix = (s: string) =>
    s.replace(attr, (m, a, offset, str) => (str.startsWith(`${base}/`, offset + m.length - 1) ? m : `${a}${base}/`))
  nitroApp.hooks.hook('render:html', (html) => {
    html.head = html.head.map(prefix)
    html.bodyPrepend = html.bodyPrepend.map(prefix)
    html.body = html.body.map(prefix)
    html.bodyAppend = html.bodyAppend.map(prefix)
  })
})
