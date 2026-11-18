# Mic-Jasiri Productions website

Nuxt 4, statically generated (`nuxt generate`) and hosted on GitHub Pages behind Cloudflare.

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static site in .output/public
```

Node 22+ is recommended (CI uses 22).

## Layout

| Path | What |
| --- | --- |
| `app/pages/` | One file per route (`index`, `about`, `work`, `services`, `clients`, `contact`, 3 project pages) |
| `app/layouts/default.vue` | Header, mobile menu, footer, WhatsApp button |
| `app/components/`, `app/data/` | `AchievementGrid` and its data (add a project by adding one object) |
| `app/composables/usePageSeo.ts` | Title, description, canonical, Open Graph, Twitter, breadcrumb schema per page |
| `app/plugins/site-schema.ts` | Site-wide Organization / LocalBusiness / WebSite JSON-LD |
| `app/utils/behaviours.js` | Theme, menu, modals, galleries, reveal-on-scroll |
| `public/` | Images, video, favicons, `og/` social cards, `CNAME` |
| `scripts/optimize-images.mjs` | Downsizes photos and renders the 1200x630 social cards |

See `docs/DEPLOY-AND-SECURITY.md` for hosting, the Cloudflare headers and the security model.
