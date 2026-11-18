# Deploy, SEO and security notes

## How it is hosted

- Static output from `nuxt generate`, deployed by `.github/workflows/deploy.yml` on every push to `main`.
- GitHub Pages **source must be "GitHub Actions"** (Settings > Pages > Build and deployment). While the old
  static site is live the source is "Deploy from a branch"; switch it when this branch is merged.
- `public/CNAME` pins the custom domain `micjasiri.co.ke`.
- Cloudflare sits in front of the domain (DNS proxied, orange cloud) to add the response headers GitHub Pages
  cannot send.

## DNS cut-over checklist

1. Merge `nuxt` into `main`; set Pages source to GitHub Actions; wait for the first deploy to go green.
2. DNS (Cloudflare): `A` records for the apex to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153`; `CNAME www` to `sharlmon.github.io`. Proxy status: proxied.
3. Pages settings: custom domain `micjasiri.co.ke`, tick **Enforce HTTPS**. Cloudflare SSL/TLS mode: **Full (strict)**.
4. Add the header rules below, purge the Cloudflare cache, and re-test.
5. Retire the old cPanel site: delete `.well-known.zip` from `public_html`, and rotate any password that was
   ever used in the old browser-side admin login.

## Security headers (Cloudflare > Rules > Transform Rules > Modify Response Header)

Apply to all requests on the hostname:

| Header | Value |
| --- | --- |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` (add `preload` only after submitting to hstspreload.org) |
| `Content-Security-Policy` | see below |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=(), usb=()` |
| `Cross-Origin-Opener-Policy` | `same-origin` |

CSP header (the same policy is also embedded as a `<meta>` tag with per-script SHA-256 hashes at build time,
so the site is protected even without the Cloudflare rule; the header adds `frame-ancestors`, which a meta tag
cannot carry):

```
default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self';
media-src 'self'; connect-src 'self'; frame-src https://www.youtube-nocookie.com; object-src 'none';
base-uri 'self'; form-action 'self'; manifest-src 'self'; frame-ancestors 'none'; upgrade-insecure-requests
```

> The header form of `script-src 'self'` will block the small inline theme script because the hashes only
> exist in the meta tag. Either keep the meta tag as the script policy (omit `script-src` from the header
> rule) or add the hashes from the built HTML (`grep -o "sha256-[^']*" .output/public/index.html`) to the header.

Cache rule: `/_nuxt/*` and `/_fonts/*` edge TTL 1 year, browser cache `immutable`; HTML revalidates.

## Security model

- No server, database, admin area, credentials or user-supplied data: nothing to authenticate or inject into.
  The old site's browser-side admin login and embedded contact records are gone for good.
- The contact form never posts to a server. It builds a WhatsApp message in the visitor's browser, so there is
  no endpoint to spam and no personal data stored.
- Strict CSP: no inline scripts or styles (inline `style` attributes were replaced with classes), no third-party
  scripts, fonts or analytics. The only third-party origin is the YouTube privacy-enhanced player (`youtube-nocookie.com`),
  loaded only after a visitor clicks play.
- All external links use `rel="noopener noreferrer"`.
- Fonts are self-hosted (previously loaded from Google at runtime).
- Dependencies: run `npm audit` before releases and keep Nuxt updated.

## SEO

- Unique title, description, canonical URL, Open Graph and Twitter card (with a dedicated 1200x630 image) per page.
- Structured data: Organization + LocalBusiness + WebSite site-wide; WebPage + BreadcrumbList per page.
- `sitemap.xml` and `robots.txt` generated at build; clean `/page/` URLs with matching canonicals; real 404 page.
- Performance: photos downsized (about 40 MB to 20 MB), explicit image dimensions to avoid layout shift,
  lazy-loaded images, self-hosted fonts, no render-blocking third-party requests.
- After launch: add the domain to Google Search Console and Bing Webmaster Tools and submit the sitemap;
  claim/refresh the Google Business Profile with the same name, address and phone.
