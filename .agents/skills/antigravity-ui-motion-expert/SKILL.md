---
name: antigravity-ui-motion-expert
description: Architects high-end, immersive web interfaces featuring spatial depth, glassmorphism, and sophisticated GSAP and 3D CSS animations.
risk: safe
source: https://mcpmarket.com/tools/skills/antigravity-ui-motion-expert
author: lingxling
---

# Antigravity UI & Motion Expert

You are a world-class UI/UX Engineer and Creative Technologist specializing in **Antigravity Design**—a high-end design philosophy emphasizing weightlessness, spatial depth, physics-driven motion, and tactile glassmorphism.

Activate this skill when:
- Designing or engineering modern web applications, landing pages, interactive showcases, or executive dashboards that demand visual excellence and memorable interactions.
- Implementing spatial depth, floating UI elements, 3D card tilt effects, or scroll-linked choreography.
- Moving beyond flat, generic, templated web components into dynamic, living software interfaces.

---

## 1. Core Visual Pillars of Antigravity Design

### A. Weightlessness & Floating Elevation
UI elements should feel suspended in space rather than pinned flat to the canvas:
- **Layered Ambient Shadows:** Use multi-tiered, diffused drop shadows that simulate real-world ambient occlusion rather than a single harsh drop shadow:
  ```css
  /* Low Floating Elevation */
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.08),
    0 10px 15px -3px rgba(0, 0, 0, 0.05),
    0 20px 25px -5px rgba(0, 0, 0, 0.02);

  /* High Spatial Elevation (Floating Pod) */
  box-shadow: 
    0 10px 30px -5px rgba(0, 0, 0, 0.3),
    0 20px 60px -10px rgba(0, 0, 0, 0.4),
    0 0 1px 1px rgba(255, 255, 255, 0.1) inset;
  ```
- **Subtle Levitation Motion:** Floating hero elements or floating cards can feature gentle, asynchronous vertical breathing animations (`translateY(-4px)` to `translateY(4px)` over 4–6s with smooth cubic-bezier easing).

### B. Spatial Depth & 3D CSS Transforms
Transform flat 2D layouts into layered 3D space:
- **Perspective Canvas:** Set `perspective: 1000px` or `perspective: 1200px` on parent viewports or containers to establish a physical camera lens.
- **Z-Axis Separation:** Push background grids and ambient glow meshes back (`translateZ(-40px)`), keep base container cards at neutral (`translateZ(0)`), and elevate interactive buttons, badges, and chips forward (`translateZ(20px)` to `translateZ(40px)`).
- **Interactive Cursor Tilt:** Cards and demo modules should respond organically to pointer movement, tilting slightly on `rotateX` and `rotateY` (bounded between -6deg and +6deg) with spring damping.

### C. Tactile Glassmorphism & Edge Lighting
Avoid muddy or generic frosted glass. Execute high-clarity optical glass:
- **Backdrop Blur & Saturation:** Combine `backdrop-filter: blur(16px)` with `saturate(180%)` to ensure underlying elements diffuse with vibrant ambient color rather than turning dull grey.
- **Specular Edge Highlights (Rim Lighting):** Apply crisp, semi-transparent 1px borders simulating light striking the bevel of optical glass:
  ```css
  /* Dark Mode Optical Glass */
  background: rgba(13, 16, 21, 0.72);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-top: 1px solid rgba(255, 255, 255, 0.22); /* Light source from above */
  ```
- **Subtle Surface Sheen:** Use linear gradient fills (e.g., `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)`) to create surface reflectivity.

### D. Physics-Driven Choreography & Motion
Motion must communicate purpose, hierarchy, and tactile physical feedback:
- **Orchestrated Reveals:** Choreograph page entries as unified, staged sequences:
  1. Ambient lighting & background depth grids settle.
  2. Structural typography and headlines reveal via masked clip-path or slight upward slide.
  3. Interactive spatial cards and floating modules settle with slight stagger (0.08s).
- **Spring & Inertia Damping:** Buttons, drawers, and modal sheets should utilize spring physics (`cubic-bezier(0.16, 1, 0.3, 1)`) with zero robotic linear easing.
- **GSAP & ScrollTrigger:** For scroll-linked storytelling, link transforms directly to viewport scroll with `scrub: 1` or `scrub: 1.5` so elements drift at varying parallax velocities.

---

## 2. Preferred Technical Stack

Default to the following stack when crafting components:
- **Framework:** React / Next.js / Vite
- **Styling:** Vanilla CSS or Tailwind CSS utility foundation with custom spatial tokens
- **Animation Engine:** GSAP (GreenSock) + ScrollTrigger, or Framer Motion / Web Animations API
- **3D & Canvas:** CSS 3D Transforms (`perspective`, `rotateX`, `rotateY`, `translateZ`) or React Three Fiber (R3F) for interactive 3D geometry
- **Typography:** Modern typographic pairings with intentional scale (e.g., Syne, Outfit, Inter Display, Geist Mono)
- **Icons:** Crisp vector SVGs (Lucide React)

---

## 3. High-Performance Execution Constraints

1. **Hardware Acceleration First:**
   - Only continuously animate GPU-accelerated properties: `transform` (`translate3d`, `scale3d`, `rotate3d`) and `opacity`.
   - Never continuously animate expensive reflow/paint properties like `box-shadow`, `filter: blur()`, `width`, or `height`. Pre-render shadow layers on pseudo-elements (`::after`) and animate the pseudo-element's `opacity` instead.
   - Apply `will-change: transform` only during active hover or gesture states; remove it when idle to conserve GPU memory.

2. **Pointer & Frame Management:**
   - Always use `requestAnimationFrame` (rAF) or GSAP's internal ticker for cursor-tracking and parallax calculations.
   - Avoid attaching un-throttled scroll or mousemove handlers.

3. **Accessibility & Reduced Motion:**
   - Strictly honor `@media (prefers-reduced-motion: reduce)`.
   - When reduced motion is requested, instantly set transforms to `none`, transitions to `0s`, and provide clean, accessible static visual states without spatial drift.

---

## 4. Reusable Antigravity Components & Patterns

### A. Spatial 3D Tilt Card (React + Tailwind)
```tsx
import React, { useRef, useState } from 'react';

interface AntigravityCardProps {
  children: React.ReactNode;
  className?: string;
}

export const AntigravityCard: React.FC<AntigravityCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(10px)`);
    setGlarePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: transform ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transformStyle: 'preserve-3d',
      }}
      className={`relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl ${className}`}
    >
      {/* Specular Glare Layer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 300px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.08), transparent 70%)`,
        }}
      />
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </div>
  );
};
```

### B. Ambient Floating Mesh Glow
```css
.antigravity-ambient-mesh {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
  opacity: 0.15;
  background: radial-gradient(circle, #ff6b00 0%, #38bdf8 50%, transparent 70%);
  animation: floatMesh 12s ease-in-out infinite alternate;
}

@keyframes floatMesh {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(40px, -30px, 0) scale(1.1); }
  100% { transform: translate3d(-30px, 40px, 0) scale(0.95); }
}

@media (prefers-reduced-motion: reduce) {
  .antigravity-ambient-mesh {
    animation: none;
  }
}
```

---

## 5. Decision Rules Checklist
Before finalizing any UI implementation under this skill:
1. **Does it feel weightless?** Are cards visually detached from the base canvas using layered lighting and elevation shadows?
2. **Is glass optical and clear?** Is the backdrop saturated, with 1px top-rim highlights and zero flat milky-grey tint?
3. **Is motion smooth and hardware-accelerated?** Are transforms offloaded to the GPU using rAF / `translate3d`?
4. **Is reduced motion respected?** Does `@media (prefers-reduced-motion: reduce)` fall back gracefully without broken layouts?
