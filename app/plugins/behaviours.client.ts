import { initLayout, initPage } from '~/utils/behaviours.js'

// Wires the interactive behaviours (theme, menu, modals, galleries, reveal-on-scroll).
// The layout runs once; the page behaviours re-run after every route change.
export default defineNuxtPlugin((nuxtApp) => {
  let layout: { closeMenu: () => void } | undefined
  let cleanup: (() => void) | undefined

  const run = () => {
    cleanup?.()
    cleanup = initPage({ navigate: (to: string) => navigateTo(to) })
  }

  nuxtApp.hook('app:mounted', () => {
    layout = initLayout()
    run()
  })
  nuxtApp.hook('page:finish', () => {
    if (!layout) return
    layout.closeMenu()
    run()
  })
})
