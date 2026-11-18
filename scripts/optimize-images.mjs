// One-off, idempotent: downsizes oversized photos in /public in place (same filenames, so no
// references change) and renders the 1200x630 social cards into /public/og.
import { readdirSync, statSync, mkdirSync, renameSync } from 'node:fs'
import { join, extname } from 'node:path'
import sharp from 'sharp'

const PUBLIC = new URL('../public/', import.meta.url).pathname
const MAX_WIDTH = 2000
const MIN_BYTES = 250 * 1024

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) { if (name !== 'og') yield* walk(p) } else yield p
  }
}

let saved = 0
for (const file of walk(PUBLIC)) {
  if (!/\.jpe?g$/i.test(extname(file))) continue
  const before = statSync(file).size
  if (before < MIN_BYTES) continue
  const img = sharp(file, { failOn: 'none' }).rotate()
  const meta = await img.metadata()
  const out = await img
    .resize({ width: Math.min(meta.width || MAX_WIDTH, MAX_WIDTH), withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toBuffer()
  if (out.length < before * 0.9) {
    await sharp(out).toFile(file + '.tmp')
    renameSync(file + '.tmp', file)
    saved += before - out.length
    console.log(`${file.replace(PUBLIC, '')}: ${(before / 1024) | 0}KB -> ${(out.length / 1024) | 0}KB`)
  }
}
console.log(`saved ${(saved / 1048576).toFixed(1)}MB`)

mkdirSync(join(PUBLIC, 'og'), { recursive: true })
const cards = {
  default: 'REMY4796.jpg', index: 'assets/work/2N0A0928.jpg', about: '5Y5A9016.jpg', work: 'REMY4796.jpg',
  services: 'REMY4390.jpg', clients: 'assets/work/conference-audience.jpg', contact: 'REMY4420.jpg',
  'project-bizbazaar': 'assets/work/2N0A0928.jpg', 'project-manama': 'manama.jpg', 'project-women-on-board': 'assets/work/conference-audience.jpg',
}
const logo = await sharp(join(PUBLIC, 'mic-jasiri-logo-white.png')).resize({ height: 150 }).toBuffer()
for (const [name, src] of Object.entries(cards)) {
  await sharp(join(PUBLIC, src), { failOn: 'none' }).rotate()
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .modulate({ brightness: 0.75 })
    .composite([{ input: logo, gravity: 'southwest', left: 48, top: 450 }])
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(join(PUBLIC, 'og', `${name}.jpg`))
}
console.log('og cards done')
