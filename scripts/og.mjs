// Generates social share images (1200×630) into public/og/.
// Run: npm run og   (re-run whenever titles, case studies or services change)
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const W = 1200, H = 630;
const C = { paper: '#FBF4EA', sand: '#F4EADD', ink: '#1A1218', soft: '#7B6A66', ember: '#F2464B', forest: '#2A1B30', mist: '#F2CFC4', line: '#E3D2C0' };
const TINT = { sand: C.sand, forest: C.forest, ember: C.ember, mist: C.mist };
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/’/g, '’');

/* ---------- read data files (lightweight parse, no TS runtime needed) ---------- */
const src = async (f) => (await fs.readFile(f, 'utf8')).replace(/\r\n/g, '\n'); // tolerate Windows line endings
const importsOf = (code) => Object.fromEntries([...code.matchAll(/import (\w+) from '@\/(assets\/[^']+)'/g)].map((m) => [m[1], 'src/' + m[2]]));
const blocks = (code) => code.split(/\n  \{\n/).slice(1).map((b) => '\n' + b);
const field = (b, k) => b.match(new RegExp(`\\n    ${k}:\\s*\\n?\\s*'((?:[^'\\\\]|\\\\.)*)'`))?.[1]?.replace(/\\'/g, "'");
const ref = (b, k) => b.match(new RegExp(`\\n    ${k}: (\\w+),`))?.[1];

const workCode = await src('src/data/work.ts');
const wImports = importsOf(workCode);
const work = blocks(workCode.split('export const work')[1]).map((b) => ({
  slug: field(b, 'slug'), client: field(b, 'client'), headline: field(b, 'headline'), sector: field(b, 'sector'),
  tint: field(b, 'tint') ?? 'sand', kind: field(b, 'kind') ?? 'screen', image: wImports[ref(b, 'image')],
})).filter((w) => w.slug);

const svcCode = await src('src/data/services.ts');
const sImports = importsOf(svcCode);
const services = blocks(svcCode.split('export const services')[1]).map((b) => ({
  slug: field(b, 'slug'), name: field(b, 'name'), headline: field(b, 'headline'), image: sImports[ref(b, 'image')],
})).filter((s) => s.slug);

/* ---------- drawing helpers ---------- */
const mark = await fs.readFile('design/logo/mark.svg');
function wrap(text, maxChars) {
  const words = text.split(' '); const lines = []; let line = '';
  for (const w of words) { if ((line + ' ' + w).trim().length > maxChars) { lines.push(line.trim()); line = w; } else line += ' ' + w; }
  if (line.trim()) lines.push(line.trim());
  return lines;
}

async function render({ file, label, title, image, tint = 'sand', kind = 'screen' }) {
  const hasImg = !!image;
  const fs_ = title.length > 62 ? 50 : title.length > 42 ? 58 : 68;
  const maxChars = Math.floor(540 / (fs_ * 0.47));
  const lines = wrap(title, maxChars).slice(0, 4);
  const lh = fs_ * 1.06;
  const first = 196 + 40 + fs_; // baseline of first headline line

  const textSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <rect width="100%" height="100%" fill="${C.paper}"/>
    <text x="134" y="104" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="600" fill="${C.ink}" letter-spacing="-0.8">zemprolabs</text>
    <text x="72" y="206" font-family="Consolas, monospace" font-size="19" letter-spacing="2" fill="${C.ember}">${esc(label.toUpperCase())}</text>
    ${lines.map((l, i) => `<text x="72" y="${first + i * lh}" font-family="Georgia, serif" font-size="${fs_}" fill="${C.ink}" letter-spacing="-1">${esc(l)}</text>`).join('')}
    <line x1="72" y1="548" x2="620" y2="548" stroke="${C.line}" stroke-width="2"/>
    <text x="72" y="584" font-family="Consolas, monospace" font-size="20" fill="${C.soft}" letter-spacing="1">ZEMPROLABS.COM</text>
    <text x="620" y="584" text-anchor="end" font-family="Consolas, monospace" font-size="20" fill="${C.soft}" letter-spacing="1">BUILD · GROW · RUN</text>
  </svg>`;

  const layers = [{ input: await sharp(mark, { density: 600 }).resize(48, 48).png().toBuffer(), left: 72, top: 68 }];

  if (!hasImg) {
    // Brand panel: large Z mark on sand
    const sx = 670, sy = 60, sw = 470, sh = 510;
    const panel = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${sw}" height="${sh}"><rect width="100%" height="100%" rx="22" fill="${C.sand}"/></svg>`);
    layers.push({ input: await sharp(panel).png().toBuffer(), left: sx, top: sy });
    layers.push({ input: await sharp(mark, { density: 1200 }).resize(300, 300).png().toBuffer(), left: sx + 85, top: sy + 105 });
  } else {
    const sx = 670, sy = 60, sw = 470, sh = 510; // stage
    const stage = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${sw}" height="${sh}"><rect width="100%" height="100%" rx="22" fill="${kind === 'art' ? C.sand : TINT[tint]}"/></svg>`);
    layers.push({ input: await sharp(stage).png().toBuffer(), left: sx, top: sy });
    if (kind === 'art') {
      // Illustration: shown whole (contain) on its sand stage rather than cropped to a portrait
      const art = await sharp(image).resize(sw - 40, sh - 40, { fit: 'contain', background: C.sand }).flatten({ background: C.sand }).extend({ top: 20, bottom: 20, left: 20, right: 20, background: C.sand }).png().toBuffer();
      const mask = Buffer.from(`<svg width="${sw}" height="${sh}"><rect width="100%" height="100%" rx="22"/></svg>`);
      layers.push({ input: await sharp(art).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer(), left: sx, top: sy });
    } else {
      // browser window, overflowing the stage on the right for a dynamic crop
      const bw = 560, bar = 34, bh = Math.round((bw * 9) / 16) + bar;
      const bx = sx + 40, by = sy + Math.round((sh - bh) / 2);
      const shot = await sharp(image).resize(bw, bh - bar, { fit: 'cover', position: 'top' }).png().toBuffer();
      const win = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${bw}" height="${bh}">
        <rect width="100%" height="100%" rx="12" fill="${C.paper}"/>
        <rect width="100%" height="${bar}" rx="12" fill="#F1E5D6"/><rect y="${bar - 12}" width="100%" height="12" fill="#F1E5D6"/>
        <circle cx="20" cy="${bar / 2}" r="5.5" fill="${C.ember}"/><circle cx="38" cy="${bar / 2}" r="5.5" fill="${C.line}"/><circle cx="56" cy="${bar / 2}" r="5.5" fill="${C.line}"/>
      </svg>`);
      const winPng = await sharp(win).composite([{ input: shot, left: 0, top: bar }]).png().toBuffer();
      const shadow = await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${bw + 80}" height="${bh + 80}"><rect x="40" y="56" width="${bw}" height="${bh}" rx="12" fill="#12221D" fill-opacity="0.35"/></svg>`)).blur(18).png().toBuffer();
      // clip window + shadow to the stage
      const M = 300; // margin so overlays can overflow before cropping back to the stage
      const big = await sharp({ create: { width: sw + 2 * M, height: sh + 2 * M, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
        .composite([{ input: shadow, left: M + bx - sx - 40, top: M + by - sy - 40 }, { input: winPng, left: M + bx - sx, top: M + by - sy }])
        .png().toBuffer();
      const stageClip = await sharp(big).extract({ left: M, top: M, width: sw, height: sh }).png().toBuffer();
      const mask = Buffer.from(`<svg width="${sw}" height="${sh}"><rect width="100%" height="100%" rx="22"/></svg>`);
      layers.push({ input: await sharp(stageClip).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer(), left: sx, top: sy });
    }
  }

  await sharp(Buffer.from(textSvg)).composite(layers).jpeg({ quality: 86, mozjpeg: true }).toFile(path.join('public/og', file + '.jpg'));
  return file;
}

await fs.mkdir('public/og', { recursive: true });
const jobs = [
  { file: 'home', label: 'Digital studio · Hyderabad → worldwide', title: 'We build, grow and run digital businesses.', image: 'src/assets/images/illus-build.jpg', kind: 'art' },
  { file: 'services', label: 'Services', title: 'Everything your business needs online, from one team.', image: 'src/assets/images/illus-run.jpg', kind: 'art' },
  { file: 'work', label: 'Work', title: 'Projects we’ve built, and still look after.', image: work.find((w) => w.slug === 'erus-academy')?.image, tint: 'ember' },
  { file: 'about', label: 'About', title: 'A small studio that sticks around.' },
  { file: 'careers', label: 'Careers', title: 'Do your best work on real businesses.' },
  { file: 'contact', label: 'Contact', title: 'Tell us what you’re working on.' },
  { file: 'privacy', label: 'Legal', title: 'Privacy policy' },
  { file: 'terms', label: 'Legal', title: 'Terms of use' },
  ...services.map((s) => ({ file: 'service-' + s.slug, label: 'Service · ' + s.name, title: s.headline, image: s.image, kind: s.image?.includes('illus-') ? 'art' : 'art' })),
  ...work.map((w) => ({ file: 'work-' + w.slug, label: 'Case study · ' + w.sector, title: w.headline, image: w.image, tint: w.tint, kind: w.kind })),
];
for (const j of jobs) console.log('og/' + (await render(j)) + '.jpg');
