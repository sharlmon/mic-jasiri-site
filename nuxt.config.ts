const SITE_URL = process.env.NUXT_PUBLIC_SITE_URL || 'https://micjasiri.co.ke'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  telemetry: false,

  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots', 'nuxt-schema-org', 'nuxt-security'],

  // Fonts are self-hosted (no requests to Google at runtime).
  css: [
    '@fontsource/dm-sans/latin-300.css',
    '@fontsource/dm-sans/latin-400.css',
    '@fontsource/dm-sans/latin-500.css',
    '@fontsource/dm-sans/latin-600.css',
    '@fontsource/oswald/latin-400.css',
    '@fontsource/oswald/latin-500.css',
    '@fontsource/oswald/latin-600.css',
    '@fontsource/playfair-display/latin-500.css',
    '@fontsource/playfair-display/latin-500-italic.css',
    '~/assets/css/site.css',
  ],

  site: {
    url: SITE_URL,
    name: 'Mic-Jasiri Productions',
    description: 'Mic-Jasiri Productions is a Nairobi film, television, commercial and live production company.',
    defaultLocale: 'en',
    trailingSlash: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en', 'data-theme': 'dark' },
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'theme-color', content: '#090909' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      // Applies the saved theme before first paint (hashed into the CSP at build time).
      script: [{
        innerHTML: "(()=>{try{document.documentElement.dataset.theme=localStorage.getItem('micjasiri-theme')||'dark'}catch(e){}})()",
        tagPosition: 'head',
      }],
    },
  },

  // No data fetching on this site, so skip per-route payload files.
  experimental: { payloadExtraction: false },

  nitro: {
    prerender: { crawlLinks: true, routes: ['/', '/404.html'] },
  },

  sitemap: {
    xsl: false,
    discoverImages: false,
    defaults: { changefreq: 'monthly' },
  },

  robots: {
    groups: [{ userAgent: '*', allow: '/' }],
  },

  schemaOrg: { identity: undefined },

  security: {
    // Static output: the CSP is delivered as a <meta> tag with per-script hashes,
    // and real response headers are added at the Cloudflare edge (see docs/).
    ssg: { hashScripts: true, hashStyles: false, meta: true },
    strict: false,
    nonce: false,
    sri: false,
    headers: {
      contentSecurityPolicy: {
        'default-src': ["'none'"],
        'script-src': ["'self'"],
        'style-src': ["'self'"],
        'img-src': ["'self'", 'data:'],
        'font-src': ["'self'"],
        'media-src': ["'self'"],
        'connect-src': ["'self'"],
        'frame-src': ['https://www.youtube-nocookie.com'],
        'object-src': ["'none'"],
        'base-uri': ["'self'"],
        'form-action': ["'self'"],
        'manifest-src': ["'self'"],
        'upgrade-insecure-requests': true,
      },
      crossOriginEmbedderPolicy: 'unsafe-none',
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginResourcePolicy: 'same-origin',
      referrerPolicy: 'strict-origin-when-cross-origin',
      permissionsPolicy: { camera: [], microphone: [], geolocation: [], payment: [], usb: [] },
    },
    rateLimiter: false,
    requestSizeLimiter: false,
    xssValidator: false,
    corsHandler: false,
    allowedMethodsRestricter: false,
  },
})
