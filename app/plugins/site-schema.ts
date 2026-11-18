// Site-wide structured data: the production company and the website.
export default defineNuxtPlugin(() => {
  const site = useSiteConfig()
  const base = site.url.replace(/\/$/, '')
  useSchemaOrg([
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': `${base}/#organization`,
      name: 'Mic-Jasiri Productions',
      legalName: 'Mic-Jasiri Productions Ltd',
      alternateName: 'Mic Jasiri',
      url: `${base}/`,
      logo: `${base}/mic-jasiri-logo-white.png`,
      image: `${base}/og/default.jpg`,
      description: site.description,
      foundingDate: '2019',
      email: 'info@micjasiri.co.ke',
      telephone: '+254721561704',
      address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
      areaServed: ['Kenya', 'East Africa'],
      knowsAbout: ['Film production', 'Television production', 'Commercial production', 'Live streaming', 'Event photography', 'Documentary'],
      sameAs: [
        'https://www.instagram.com/mic_jasiri',
        'https://www.facebook.com/share/1CodxeUPYJ/',
        'https://www.youtube.com/@MICJASIRI',
        'https://www.linkedin.com/company/mic-jasiri/',
        'https://www.tiktok.com/@mic.jasiri.produc',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${base}/#website`,
      url: `${base}/`,
      name: 'Mic-Jasiri Productions',
      publisher: { '@id': `${base}/#organization` },
      inLanguage: 'en-KE',
    },
  ])
})
