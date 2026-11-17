import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const EASE = 'expo.out';

/* ---------------- Live clocks (always on) ---------------- */
function clocks() {
  const els = document.querySelectorAll<HTMLElement>('[data-clock]');
  if (!els.length) return;
  const tick = () =>
    els.forEach((el) => {
      el.textContent = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: el.dataset.clock,
      }).format(new Date());
    });
  tick();
  setInterval(tick, 15_000);
}

/* ---------------- Smooth scroll ---------------- */
let lenis: Lenis | null = null;
function smoothScroll() {
  // Phones keep the browser's own momentum scrolling: it's what fingers expect, and the
  // address bar showing/hiding must not make the page re-measure itself mid-scroll.
  ScrollTrigger.config({ ignoreMobileResize: true });
  const touch = matchMedia('(hover: none), (pointer: coarse)').matches;
  if (!touch) {
    lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis!.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    (window as any).__lenis = lenis;
  }

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!;
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -80 });
      else window.scrollTo({ top: (target as HTMLElement).getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' });
    })
  );
}

/* ---------------- Split headlines into words ---------------- */
function splitWords(el: HTMLElement) {
  const walk = (node: Node): Node[] => {
    if (node.nodeType === Node.TEXT_NODE) {
      const parts = (node.textContent ?? '').split(/(\s+)/);
      return parts.map((p) => {
        if (/^\s+$/.test(p) || p === '') return document.createTextNode(p);
        const outer = document.createElement('span');
        outer.className = 'split-line';
        outer.style.display = 'inline-block';
        const inner = document.createElement('span');
        inner.className = 'split-word';
        inner.textContent = p;
        outer.appendChild(inner);
        return outer;
      });
    }
    if (node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName !== 'BR') {
      const clone = node.cloneNode(false) as HTMLElement;
      node.childNodes.forEach((c) => walk(c).forEach((n) => clone.appendChild(n)));
      return [clone];
    }
    return [node.cloneNode(true)];
  };
  const label = el.textContent?.replace(/\s+/g, ' ').trim() ?? '';
  const frag = document.createDocumentFragment();
  el.childNodes.forEach((c) => walk(c).forEach((n) => frag.appendChild(n)));
  el.replaceChildren(frag);
  el.setAttribute('aria-label', label);
  el.querySelectorAll('.split-line').forEach((s) => s.setAttribute('aria-hidden', 'true'));
  return el.querySelectorAll<HTMLElement>('.split-word');
}

function headlines() {
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    const words = splitWords(el);
    gsap.set(words, { yPercent: 115 });
    const immediate = el.dataset.split === 'load';
    gsap.to(words, {
      yPercent: 0,
      duration: 1.3,
      ease: EASE,
      stagger: 0.05,
      delay: immediate ? 0.15 : 0,
      scrollTrigger: immediate ? undefined : { trigger: el, start: 'top 88%' },
    });
  });
}

/* ---------------- Scroll-lit statement text ---------------- */
function scrubText() {
  document.querySelectorAll<HTMLElement>('[data-scrub-text]').forEach((el) => {
    const words = splitWords(el);
    el.querySelectorAll('.split-line').forEach((s) => ((s as HTMLElement).style.overflow = 'visible'));
    gsap.fromTo(
      words,
      { opacity: 0.14 },
      { opacity: 1, stagger: 0.05, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true } }
    );
  });
}

/* ---------------- Generic reveals ---------------- */
function reveals() {
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 90%',
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, duration: 1.1, ease: EASE, stagger: 0.08, overwrite: true }),
  });

  document.querySelectorAll<HTMLElement>('[data-mask]').forEach((el) => {
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%' } });
    tl.to(el, { clipPath: 'inset(0% 0% 0% 0% round 10px)', duration: 1.5, ease: EASE }).to(
      el.children,
      { scale: 1, duration: 1.8, ease: EASE },
      0
    );
  });

  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const amt = parseFloat(el.dataset.parallax || '12');
    gsap.fromTo(
      el,
      { yPercent: -amt / 2 },
      { yPercent: amt / 2, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } }
    );
  });

  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count!);
    const obj = { v: 0 };
    el.textContent = '0';
    gsap.to(obj, {
      v: end,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
      onUpdate: () => (el.textContent = String(Math.round(obj.v))),
    });
  });
}

/* ---------------- Hero: fanned project cards ---------------- */
function heroFan() {
  const host = document.querySelector<HTMLElement>('[data-fan]');
  if (!host) return;
  const cards = host.querySelectorAll<HTMLElement>('[data-fan-card]');
  const spread = [
    { x: -16, r: -7, y: 4 },
    { x: 0, r: 0, y: -2 },
    { x: 16, r: 7, y: 4 },
  ];
  gsap.set(cards, { yPercent: 30, opacity: 0, rotate: 0, xPercent: 0 });
  gsap.to(cards, {
    yPercent: (i) => spread[i]?.y ?? 0,
    xPercent: (i) => spread[i]?.x ?? 0,
    rotate: (i) => spread[i]?.r ?? 0,
    opacity: 1,
    duration: 1.6,
    ease: EASE,
    stagger: 0.1,
    delay: 0.35,
  });
  // Scroll spread: explicit start values = the resting fan, so scrolling back to the top
  // returns the cards exactly where the intro left them (not to the pre-intro offset).
  gsap.fromTo(
    cards,
    {
      xPercent: (i) => spread[i]?.x ?? 0,
      rotate: (i) => spread[i]?.r ?? 0,
      yPercent: (i) => spread[i]?.y ?? 0,
    },
    {
      xPercent: (i) => (spread[i]?.x ?? 0) * 2.1,
      rotate: (i) => (spread[i]?.r ?? 0) * 1.8,
      yPercent: (i) => (spread[i]?.y ?? 0) - 6,
      ease: 'none',
      immediateRender: false,
      scrollTrigger: { trigger: host.closest('section') ?? host, start: 'top top', end: 'bottom top', scrub: 0.6 },
    }
  );
}

/* ---------------- Service deck: deal-in + 3D tilt ---------------- */
function deck() {
  const host = document.querySelector<HTMLElement>('[data-deck]');
  if (!host) return;
  const cards = gsap.utils.toArray<HTMLElement>('[data-deck-card]', host);

  // Deal the cards in like a hand of cards
  gsap.fromTo(
    cards,
    { y: 160, rotate: (i) => [-7, 5, -4, 6, -5, 4, -3][i % 7], opacity: 0, scale: 0.92 },
    {
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      duration: 1.3,
      ease: 'expo.out',
      stagger: { each: 0.09, from: 'start' },
      scrollTrigger: { trigger: host, start: 'top 82%' },
    }
  );

  if (!finePointer) return;
  cards.forEach((card) => {
    const rx = gsap.quickTo(card, 'rotationX', { duration: 0.6, ease: 'power3' });
    const ry = gsap.quickTo(card, 'rotationY', { duration: 0.6, ease: 'power3' });
    const layers = [...card.querySelectorAll<HTMLElement>('[data-depth]')].map((el) => ({
      d: parseFloat(el.dataset.depth || '1'),
      x: gsap.quickTo(el, 'x', { duration: 0.7, ease: 'power3' }),
      y: gsap.quickTo(el, 'y', { duration: 0.7, ease: 'power3' }),
    }));
    gsap.set(card, { transformPerspective: 900 });
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      ry(px * 9);
      rx(-py * 9);
      layers.forEach((l) => { l.x(px * 14 * l.d); l.y(py * 14 * l.d); });
      card.style.setProperty('--mx', `${(px + 0.5) * 100}%`);
      card.style.setProperty('--my', `${(py + 0.5) * 100}%`);
    });
    card.addEventListener('mouseleave', () => {
      rx(0);
      ry(0);
      layers.forEach((l) => { l.x(0); l.y(0); });
    });
  });
}

/* ---------------- Stacking pillar cards ---------------- */
function stackCards() {
  const cards = gsap.utils.toArray<HTMLElement>('[data-stack-card]');
  cards.forEach((card, i) => {
    const next = cards[i + 1];
    if (!next) return;
    gsap.fromTo(card.firstElementChild, { scale: 1, filter: 'brightness(1)' }, {
      scale: 0.94,
      filter: 'brightness(0.86)',
      ease: 'none',
      scrollTrigger: { trigger: next, start: 'top bottom', end: 'top top+=96', scrub: true },
    });
  });
}

/* ---------------- Horizontal work gallery ---------------- */
function horizontal() {
  const mm = gsap.matchMedia();
  mm.add('(min-width: 1024px)', () => {
    document.querySelectorAll<HTMLElement>('[data-hscroll]').forEach((section) => {
      const track = section.querySelector<HTMLElement>('[data-hscroll-track]')!;
      const bar = section.querySelector<HTMLElement>('[data-hscroll-bar]');
      const distance = () => track.scrollWidth - window.innerWidth + 80;
      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => '+=' + distance(),
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (st) => bar && (bar.style.transform = `scaleX(${st.progress})`),
        },
      });
    });
  });
}

/* ---------------- Process line ---------------- */
function processLine() {
  document.querySelectorAll<HTMLElement>('[data-process]').forEach((host) => {
    const steps = host.querySelectorAll<HTMLElement>('[data-process-step]');
    const st = { trigger: host, start: 'top 75%', end: 'bottom 55%', scrub: 0.6 };
    host.querySelectorAll<HTMLElement>('[data-process-line]').forEach((line) => {
      const axis = line.dataset.processLine === 'y' ? 'scaleY' : 'scaleX';
      gsap.fromTo(line, { [axis]: 0 }, { [axis]: 1, ease: 'none', scrollTrigger: st });
    });
    steps.forEach((s, i) =>
      ScrollTrigger.create({
        trigger: host,
        start: () => `top+=${(i / steps.length) * host.offsetHeight * 0.6} 70%`,
        onEnter: () => s.classList.add('is-on'),
        onLeaveBack: () => s.classList.remove('is-on'),
      })
    );
  });
}

/* ---------------- Hover-follow preview (services index) ---------------- */
function hoverPreview() {
  if (!finePointer) return;
  document.querySelectorAll<HTMLElement>('[data-preview-list]').forEach((list) => {
    const box = list.querySelector<HTMLElement>('[data-preview-box]');
    if (!box) return;
    const imgs = box.querySelectorAll<HTMLElement>('[data-preview-img]');
    gsap.set(box, { scale: 0.6, opacity: 0 });
    const xTo = gsap.quickTo(box, 'x', { duration: 0.6, ease: 'power3' });
    const yTo = gsap.quickTo(box, 'y', { duration: 0.6, ease: 'power3' });
    list.addEventListener('mousemove', (e) => {
      const r = list.getBoundingClientRect();
      xTo(e.clientX - r.left);
      yTo(e.clientY - r.top);
    });
    list.querySelectorAll<HTMLElement>('[data-preview]').forEach((row) => {
      row.addEventListener('mouseenter', () => {
        imgs.forEach((img) => img.classList.toggle('opacity-100', img.dataset.previewImg === row.dataset.preview));
        gsap.to(box, { scale: 1, opacity: 1, duration: 0.5, ease: EASE });
      });
    });
    list.addEventListener('mouseleave', () => gsap.to(box, { scale: 0.6, opacity: 0, duration: 0.4, ease: 'power3' }));
  });
}

/* ---------------- Magnetic buttons + cursor ---------------- */
function magnetic() {
  if (!finePointer) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic || '0.3');
    const xTo = gsap.quickTo(el, 'x', { duration: 0.8, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.8, ease: 'elastic.out(1, 0.4)' });
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * strength);
      yTo((e.clientY - r.top - r.height / 2) * strength);
    });
    el.addEventListener('mouseleave', () => {
      xTo(0);
      yTo(0);
    });
  });
}

function cursor() {
  if (!finePointer) return;
  const c = document.createElement('div');
  c.className = 'cursor is-hidden';
  c.setAttribute('aria-hidden', 'true');
  c.innerHTML = '<span></span>';
  document.body.appendChild(c);
  const label = c.querySelector('span')!;
  const xTo = gsap.quickTo(c, 'x', { duration: 0.35, ease: 'power3' });
  const yTo = gsap.quickTo(c, 'y', { duration: 0.35, ease: 'power3' });
  addEventListener('mousemove', (e) => {
    c.classList.remove('is-hidden');
    xTo(e.clientX);
    yTo(e.clientY);
  });
  document.addEventListener('mouseleave', () => c.classList.add('is-hidden'));
  document.querySelectorAll<HTMLElement>('[data-cursor]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      label.textContent = el.dataset.cursor || 'View';
      c.classList.add('is-label');
    });
    el.addEventListener('mouseleave', () => c.classList.remove('is-label'));
  });
}

/* ---------------- Scroll progress ---------------- */
function progress() {
  const bar = document.querySelector<HTMLElement>('[data-progress]');
  if (!bar) return;
  gsap.to(bar, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });
}

/* ---------------- Page transitions ---------------- */
function transitions() {
  const wipe = document.querySelector<HTMLElement>('[data-wipe]');
  if (!wipe) return;
  if (sessionStorage.getItem('zl-wipe')) {
    sessionStorage.removeItem('zl-wipe');
    gsap.fromTo(wipe, { yPercent: 0 }, { yPercent: -100, duration: 0.9, ease: 'expo.inOut', delay: 0.05 });
  }
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest('a');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target === '_blank' || a.hasAttribute('download')) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || (url.pathname === location.pathname && url.hash)) return;
    if (url.pathname === location.pathname && url.search === location.search) return;
    e.preventDefault();
    sessionStorage.setItem('zl-wipe', '1');
    gsap.fromTo(wipe, { yPercent: 100 }, { yPercent: 0, duration: 0.6, ease: 'expo.inOut', onComplete: () => (location.href = url.href) });
  });
  // Restore if the page is shown from bfcache after a transition
  addEventListener('pageshow', (e) => {
    if ((e as PageTransitionEvent).persisted) gsap.set(wipe, { yPercent: 100 });
  });
}

/* ---------------- Hover videos ---------------- */
function hoverVideos() {
  document.querySelectorAll<HTMLVideoElement>('video[data-hover-play]').forEach((v) => {
    if (reduced) return;
    const host = v.closest('[data-media]') ?? v;
    if (finePointer) {
      host.addEventListener('mouseenter', () => void v.play().catch(() => {}));
      host.addEventListener('mouseleave', () => v.pause());
    } else {
      new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.6 }).observe(v);
    }
  });
  document.querySelectorAll<HTMLVideoElement>('video[data-autoplay]').forEach((v) => {
    if (reduced) return;
    new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.2 }).observe(v);
  });
}

/* ---------------- Boot ---------------- */
clocks();
hoverVideos();
(window as any).__zlBoot = true;
if (!reduced) {
  root.classList.add('motion');
  smoothScroll();
  headlines();
  scrubText();
  reveals();
  heroFan();
  deck();
  stackCards();
  horizontal();
  processLine();
  hoverPreview();
  magnetic();
  cursor();
  progress();
  transitions();
  addEventListener('load', () => ScrollTrigger.refresh());
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
} else {
  document.querySelectorAll('[data-process-step]').forEach((s) => s.classList.add('is-on'));
}

export const getLenis = () => lenis;
