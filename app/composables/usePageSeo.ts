export interface PageSeo {
  /** Route path with trailing slash, e.g. "/about/" */
  path: string
  title: string
  description: string
  /** Absolute path to a 1200x630 image under /public, defaults to the shared card. */
  image?: string
  type?: 'website' | 'article'
}

const ORG_ID = '#organization'

export function usePageSeo(seo: PageSeo) {
  const site = useSiteConfig()
  const base = site.url.replace(/\/$/, '')
  const url = `${base}${seo.path}`
  const slug = seo.path.replace(/\//g, '') || 'index'
  const image = `${base}${seo.image || `/og/${slug}.jpg`}`

  useSeoMeta({
    title: seo.title,
    description: seo.description,
    ogType: seo.type || 'website',
    ogSiteName: site.name,
    ogLocale: 'en_KE',
    ogTitle: seo.title,
    ogDescription: seo.description,
    ogUrl: url,
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${site.name} — ${seo.title}`,
    twitterCard: 'summary_large_image',
    twitterTitle: seo.title,
    twitterDescription: seo.description,
    twitterImage: image,
  })
  useHead({ link: [{ rel: 'canonical', href: url }] })

  const isHome = seo.path === '/'
  const crumbs = isHome
    ? []
    : [
        { name: 'Home', item: `${base}/` },
        { name: seo.title.split('|')[0].trim(), item: url },
      ]
  useSchemaOrg([
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: seo.title,
      description: seo.description,
      isPartOf: { '@id': `${base}/#website` },
      about: { '@id': `${base}/${ORG_ID}` },
      primaryImageOfPage: image,
      inLanguage: 'en-KE',
    },
    ...(crumbs.length
      ? [{
          '@type': 'BreadcrumbList',
          itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })),
        }]
      : []),
  ])
}
