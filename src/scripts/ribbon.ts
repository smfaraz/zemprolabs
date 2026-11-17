/**
 * Hero ribbon: a big, slow, twisting band of glossy slabs (WebGL, one InstancedMesh).
 * The band is split into thirds = the three pillars: 0 Build, 1 Grow, 2 Run.
 *
 * - Hover a third (or call setActive) to lift and light it; onActive reports changes.
 * - When idle it cycles through the pillars by itself.
 * - setProgress(0..1) (scroll) calms and straightens the band and tilts it away.
 * - onLabels gives screen positions for the pillar tags every frame.
 */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const PALETTE = ['#FFC25A', '#FF8A3D', '#F2464B', '#C2366F', '#6B2E8F', '#C2366F', '#FF8A3D'];

type Opts = {
  onActive?: (pillar: number) => void;
  onLabels?: (pts: { x: number; y: number; visible: boolean }[]) => void;
};
export type Ribbon = { setProgress: (p: number) => void; setActive: (i: number | null) => void; destroy: () => void };

export function createRibbon(canvas: HTMLCanvasElement, opts: Opts = {}): Ribbon {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile = matchMedia('(max-width: 767px)').matches;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !mobile, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.2 : 1.75));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  const key = new THREE.DirectionalLight('#fff4e6', 1.6);
  key.position.set(3, 6, 8);
  scene.add(key, new THREE.AmbientLight('#ffffff', 0.35));
  const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 100);

  // ---- slabs (bigger than before) ----
  const N = mobile ? 72 : 180;
  const LENGTH = 13;
  const geo = new THREE.BoxGeometry(0.075, 1.9, 1.35);
  // phones get a much cheaper glossy material (no clearcoat / iridescence / sheen passes)
  const mat = mobile
    ? new THREE.MeshStandardMaterial({ roughness: 0.28, metalness: 0.08 })
    : new THREE.MeshPhysicalMaterial({
        roughness: 0.24,
        metalness: 0.06,
        clearcoat: 1,
        clearcoatRoughness: 0.15,
        iridescence: 0.4,
        iridescenceIOR: 1.35,
        sheen: 0.35,
        sheenColor: new THREE.Color('#ffffff'),
      });
  const mesh = new THREE.InstancedMesh(geo, mat, N);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

  const stops = PALETTE.map((c) => new THREE.Color(c));
  const base: THREE.Color[] = [];
  for (let i = 0; i < N; i++) {
    const f = (i / (N - 1)) * (stops.length - 1);
    const a = Math.floor(f);
    const c = stops[a].clone().lerp(stops[Math.min(a + 1, stops.length - 1)], f - a);
    c.offsetHSL(0, 0, Math.sin(i * 12.9898) * 0.02);
    base.push(c);
    mesh.setColorAt(i, c);
  }
  const group = new THREE.Group();
  group.add(mesh);
  scene.add(group);

  // ---- state ----
  let progress = 0;
  let target = 0;
  let active: number | null = null;
  let hovered: number | null = null;
  let manual: number | null = null;
  let lastInteract = -999;
  const hl = [0, 0, 0];
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const dummy = new THREE.Object3D();
  const col = new THREE.Color();
  const thirds = (i: number) => Math.min(2, Math.floor((i / N) * 3));
  // label anchor positions (group space), refreshed every layout
  const anchors = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
  const anchorIdx = [0, 1, 2].map((k) => Math.round(((k + 0.5) / 3) * (N - 1)));

  function layout(time: number) {
    const calm = 1 - progress * 0.9;
    const T = time * 0.38; // slow: ~a third of the original speed
    const anyActive = Math.max(hl[0], hl[1], hl[2]);
    for (let i = 0; i < N; i++) {
      const u = i / (N - 1);
      const x = (u - 0.5) * LENGTH;
      const cx = 0.55 + Math.sin(T * 0.25) * 0.08;
      const crest = Math.exp(-Math.pow((u - cx) / 0.12, 2));
      const lift = hl[thirds(i)];
      const twist = (u * Math.PI * 3 + T * 0.55) * calm + crest * 0.8 * calm;
      const y = (Math.sin(u * Math.PI * 2 + T * 0.7) * 0.45 + crest * 0.7) * calm;
      const z = Math.cos(u * Math.PI * 1.5 + T * 0.45) * 0.7 * calm + lift * 0.6 * calm;
      dummy.position.set(x, y + lift * 0.15 * calm, z);
      dummy.rotation.set(twist, Math.sin(u * 6 + T * 0.8) * 0.1 * calm, crest * 0.3 * calm);
      const sc = 1 + crest * 0.45 * calm + lift * 0.14 * calm;
      dummy.scale.set(1, sc, 1);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      const k = anchorIdx.indexOf(i);
      if (k >= 0) anchors[k].set(x, y + 1.45 * sc, z);
      const dim = 1 - (anyActive - lift) * 0.5 * calm;
      col.copy(base[i]).multiplyScalar(dim + lift * 0.12);
      mesh.setColorAt(i, col);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }

  function fit() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const tan = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const needW = (LENGTH * 0.47) / (tan * camera.aspect);
    const needH = 2.9 / tan;
    camera.position.set(0, 0, Math.max(needW, needH));
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }

  const v = new THREE.Vector3();
  function emitLabels() {
    if (!opts.onLabels) return;
    group.updateMatrixWorld();
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const show = progress < 0.15;
    opts.onLabels(
      anchors.map((a) => {
        v.copy(a).applyMatrix4(group.matrixWorld).project(camera);
        return { x: (v.x * 0.5 + 0.5) * w, y: (-v.y * 0.5 + 0.5) * h, visible: show };
      })
    );
  }

  // ---- interaction ----
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const clock = new THREE.Clock();
  const onCanvasMove = (e: PointerEvent) => {
    if (progress > 0.1) return;
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObject(mesh, false)[0];
    hovered = hit && hit.instanceId != null ? thirds(hit.instanceId) : null;
    canvas.style.cursor = hovered == null ? '' : 'pointer';
    if (hovered != null) lastInteract = clock.getElapsedTime();
  };
  const onCanvasLeave = () => { hovered = null; canvas.style.cursor = ''; };
  canvas.addEventListener('pointermove', onCanvasMove);
  canvas.addEventListener('pointerleave', onCanvasLeave);
  const onMove = (e: PointerEvent) => {
    pointer.tx = e.clientX / window.innerWidth - 0.5;
    pointer.ty = e.clientY / window.innerHeight - 0.5;
  };
  window.addEventListener('pointermove', onMove, { passive: true });

  // ---- loop ----
  let running = false;
  let raf = 0;
  function frame() {
    const t = clock.getElapsedTime();
    progress += (target - progress) * 0.07;
    pointer.x += (pointer.tx - pointer.x) * 0.035;
    pointer.y += (pointer.ty - pointer.y) * 0.035;

    let want: number | null = hovered ?? manual;
    if (want == null && t - lastInteract > 5) want = Math.floor((t / 4) % 3);
    if (progress > 0.1) want = null;
    if (want !== active) {
      active = want;
      opts.onActive?.(active ?? -1);
    }
    for (let k = 0; k < 3; k++) hl[k] += ((active === k ? 1 : 0) - hl[k]) * 0.06;

    layout(t);
    group.rotation.z = 0.16 * (1 - progress);
    group.rotation.y = -0.18 + pointer.x * 0.14 + progress * 0.45;
    group.rotation.x = 0.1 + pointer.y * 0.08 + progress * 0.45;
    renderer.render(scene, camera);
    emitLabels();
    if (running) raf = requestAnimationFrame(frame);
  }
  function start() {
    if (running) return;
    running = true;
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  const still = () => { layout(3); group.rotation.set(0.1, -0.18, 0.16); renderer.render(scene, camera); emitLabels(); };
  const ro = new ResizeObserver(() => { fit(); if (!running) still(); });
  ro.observe(canvas);
  fit();
  still();

  const io = new IntersectionObserver(([e]) => (e.isIntersecting && !reduced ? start() : stop()));
  io.observe(canvas);

  return {
    setProgress(p) {
      target = Math.min(1, Math.max(0, p));
      if (reduced) { progress = target; still(); }
    },
    setActive(i) {
      manual = i;
      if (i != null) lastInteract = clock.getElapsedTime();
      if (reduced) {
        active = i;
        for (let k = 0; k < 3; k++) hl[k] = active === k ? 1 : 0;
        still();
        opts.onActive?.(i ?? -1);
      }
    },
    destroy() {
      stop();
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener('pointermove', onCanvasMove);
      canvas.removeEventListener('pointerleave', onCanvasLeave);
      window.removeEventListener('pointermove', onMove);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    },
  };
}
