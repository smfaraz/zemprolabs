# Zemprolabs Website — Master Technical Specification & Architecture Manual

> **Version:** 2.4.0  
> **Status:** Production-Ready  
> **Studio:** Zemprolabs (Hyderabad, India)  
> **Tagline:** Technology, Commerce & Beyond  
> **Positioning:** *Qualified Engineers. Trusted Technology.*

---

## Table of Contents

1. [Executive Summary & Studio Identity](#1-executive-summary--studio-identity)
2. [Technical Stack & Infrastructure](#2-technical-stack--infrastructure)
3. [Design System & Visual Language](#3-design-system--visual-language)
4. [Information Architecture & Route Matrix](#4-information-architecture--route-matrix)
5. [Page-by-Page Technical Breakdown](#5-page-by-page-technical-breakdown)
   - [5.1 Home (`/`)](#51-home-)
   - [5.2 Services (`/services`)](#52-services-services)
   - [5.3 Work & Case Studies (`/work`)](#53-work--case-studies-work)
   - [5.4 Project Detail Exploration (`/work/:id`, `/project/:id`)](#54-project-detail-exploration-workid-projectid)
   - [5.5 Process (`/process`)](#55-process-process)
   - [5.6 Project Estimation (`/project-estimation`)](#56-project-estimation-project-estimation)
   - [5.7 About (`/about`)](#57-about-about)
   - [5.8 Contact (`/contact`)](#58-contact-contact)
   - [5.9 404 Not Found (`*`)](#59-404-not-found-)
6. [Component Library Catalog](#6-component-library-catalog)
7. [Data Architecture & Schemas](#7-data-architecture--schemas)
8. [Client Messaging & Communication Rules](#8-client-messaging--communication-rules)
9. [SEO, Performance & Security Standards](#9-seo-performance--security-standards)
10. [Development, Build & Deployment Guide](#10-development-build--deployment-guide)

---

## 1. Executive Summary & Studio Identity

**Zemprolabs** is an independent digital product engineering and cloud architecture studio headquartered in Hyderabad, India. The studio builds custom web applications, scalable SaaS systems, high-converting e-commerce flagships (Shopify Plus & custom headless), mobile applications (iOS/Android), and enterprise platforms.

### Core Studio Philosophy
- **Human-First & Grounded:** We communicate in plain English. No agency buzzwords, inflated acronyms, or corporate bloat.
- **Direct Senior Engineer Access:** No non-technical account managers or sales middlemen. Clients message and collaborate directly with the senior developers writing their software.
- **Weekly Tangible Demos:** Clients never wait months in the dark. Every Friday, a working staging link and video walkthrough are delivered.
- **100% Intellectual Property Ownership:** All code is pushed to the client’s private GitHub repository, design tokens are transferred to their Figma account, and all cloud hosting is registered in their name from day one.
- **Zero-Pricing Transparency:** Instead of deceptive fixed-tier pricing packages that omit critical infrastructure or add surprise change orders, Zemprolabs provides bespoke, milestone-based estimates via an interactive project scoping console.

### Official Studio Contact Directory
| Attribute | Detail | Technical Handler |
|---|---|---|
| **Studio Headquarters** | 6th Floor, Ehtesham Heights, Golden Heights Colony, Upperpally, Hyderabad, India | `company.address` |
| **Primary Line & WhatsApp** | `+91 744 755 7577` | `tel:+917447557577` / `https://wa.me/917447557577` |
| **Secondary Line / Backup** | `+91 744 755 7599` | `tel:+917447557599` / `https://wa.me/917447557599` |
| **Engineering Inquiries** | `info@zemprolabs.com` | `mailto:info@zemprolabs.com` |

---

## 2. Technical Stack & Infrastructure

The application is structured as a modern single-page application (SPA) with server-grade performance, lightning-fast client transitions, and comprehensive SEO optimization.

```
┌────────────────────────────────────────────────────────────┐
│                      Client Browser                        │
└─────────────────────────────┬──────────────────────────────┘
                              │
                              ▼
┌────────────────────────────────────────────────────────────┐
│               React 18 + TypeScript 5 (Vite)               │
│                                                            │
│  ┌───────────────────────┐    ┌─────────────────────────┐  │
│  │   React Router v6     │    │      Tailwind CSS       │  │
│  │   Dynamic Routing     │    │   Custom Design Tokens  │  │
│  └───────────────────────┘    └─────────────────────────┘  │
│  ┌───────────────────────┐    ┌─────────────────────────┐  │
│  │      Lucide Icons     │    │   Dynamic HTML5 Canvas  │  │
│  │  Clean SVG Ecosystem  │    │   Light Beams / Trails  │  │
│  └───────────────────────┘    └─────────────────────────┘  │
│  ┌───────────────────────┐    ┌─────────────────────────┐  │
│  │    Dynamic SEO Hub    │    │ Interactive Data Models │  │
│  │  OpenGraph / Twitter  │    │  Projects, Specs, Teams │  │
│  └───────────────────────┘    └─────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

### Core Technologies
- **Runtime & UI Library:** React `^18.3.1` with strict TypeScript typing (`typescript@^5.5.3`).
- **Build Engine & Bundler:** Vite `^5.4.2` (`@vitejs/plugin-react@^4.3.1`). Provides sub-50ms Hot Module Replacement (HMR) and tree-shaken production bundles.
- **Routing Engine:** `react-router-dom@^6.26.1` with programmatic scroll restoration (`ScrollToTop`).
- **Styling Architecture:** Tailwind CSS `^3.4.1` with custom extended theme tokens (custom radial drop shadows, glassmorphism filters, responsive grid templates, and custom scrollbar styling).
- **Icons & Visual Accents:** `lucide-react@^0.344.0` delivering lightweight, accessible inline vector graphics.
- **Graphic Renderers:** HTML5 2D Canvas context rendering for atmospheric particles, multi-device SVG isometric software workstations, and interactive SVG transit blueprints.

---

## 3. Design System & Visual Language

The visual system is engineered to convey **high-tech software craft**, precision engineering, and calm visual confidence.

### 3.1 Color Palette & Semantic Tokens

```
 Deep Space Canvas           Brand Orange Accent          Cyan Architecture          Production Emerald
   #02050A / #05070D               #FF6B00                    #38BDF8                    #10B981
┌─────────────────────┐    ┌─────────────────────┐    ┌─────────────────────┐    ┌─────────────────────┐
│  Dark Background    │    │  Primary Highlights │    │  Technical Systems  │    │  Live Status / QA   │
│  High-Contrast Base │    │  Interactive CTAs   │    │  Prototypes & Data  │    │  Guarantees & SLA   │
└─────────────────────┘    └─────────────────────┘    └─────────────────────┘    └─────────────────────┘
```

| Token Name | Hex Code | Purpose & Usage |
|---|---|---|
| **Background Primary** | `#02050A` | Deepest root canvas; eliminates eye strain, provides maximum contrast. |
| **Background Surface** | `#070D1A` / `#0B0F17` | Card backgrounds, elevated modules, form containers. |
| **Background Overlay** | `#081224` | Active interactive cards, preview panels, sticky consoles. |
| **Brand Primary** | `#FF6B00` | Primary action buttons, brand logo spark, key highlights, badges. |
| **Tech Cyan** | `#38BDF8` / `#06B6D4` | Architectural lines, technical diagrams, Figma preview modes. |
| **Success Emerald** | `#10B981` | Live production badges, verification checks, SLA indicators. |
| **Warning Amber** | `#F59E0B` | Launch pre-flight verifications, QA milestones. |
| **Text Heading** | `#FFFFFF` / `#F8FAFC` | High-contrast display typography. |
| **Text Muted** | `#94A3B8` / `#64748B` | Secondary descriptions, subheadings, metadata labels. |
| **Border Subtle** | `rgba(255, 255, 255, 0.08)` | Minimal dividers, card frames, input outlines. |
| **Border Active** | `rgba(255, 107, 0, 0.35)` | Focused inputs, active tab highlights. |

### 3.2 Typography Hierarchy
- **Display Headlines:** Inter / Display sans-serif with `-0.02em` tracking, bold weight (`700` / `800`), leading `[1.08] - [1.15]`.
- **Body Copy:** Sans-serif neutral with `leading-relaxed` (`1.65`), optimized for high legibility on dark backgrounds.
- **Telemetry & Technical Micro-Copy:** JetBrains Mono / Monospace, uppercase tracking (`0.05em` to `0.1em`), font size `10px` to `12px` for badges, phases, and status flags.

### 3.3 Calibrated Animation Standard
Per strict usability standards, **distracting flashing, pulsating, or pinging animations (`animate-pulse`, `animate-ping`) are eliminated** across all live cards, heroes, badges, and forms. Indicators use steady, solid emerald/orange dots for a calm, premium aesthetic.

### 3.4 Zero-Gap Footer Docking Standard
All page root elements use `pb-0`, and closing CTA sections utilize calibrated bottom margins (`mb-12`) to ensure seamless, pixel-perfect docking directly into `<Footer />` without awkward background bands or double padding.

---

## 4. Information Architecture & Route Matrix

```
                          ┌───────────────────────────┐
                          │         App.tsx           │
                          │   BrowserRouter + Nav     │
                          └─────────────┬─────────────┘
                                        │
     ┌──────────────┬─────────────┬─────┴───────┬──────────────┬──────────────┐
     │              │             │             │              │              │
     ▼              ▼             ▼             ▼              ▼              ▼
┌─────────┐   ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌──────────────┐ ┌─────────┐
│  Home   │   │ Services  │ │   Work    │ │  Process  │ │  Estimation  │ │  About  │
│   `/`   │   │`/services`│ │  `/work`  │ │`/process` │ │  `/project-  │ │ `/about`│
└─────────┘   └───────────┘ └─────┬─────┘ └───────────┘ │ estimation`  │ └─────────┘
                                  │                     └──────────────┘
                                  ▼
                        ┌───────────────────┐
                        │   Project Detail  │
                        │  `/work/:id`      │
                        │  `/project/:id`   │
                        └───────────────────┘
```

### Complete Route Map
| Route URL | Component | Purpose | Status |
|---|---|---|---|
| `/` | `<Home />` | Main studio introduction, showcase, credibility anchors, FAQ | Active |
| `/services` | `<Services />` | 6 core capabilities, Transit Blueprint, Harbor Docks | Active |
| `/managed-services` | `<Navigate to="/services" />` | Permanent redirect (consolidated into `/services`) | Redirect |
| `/work` | `<Work />` | Filterable client projects, live links, 3D/isometric hero | Active |
| `/work/:id` | `<ProjectDetail />` | Full-page deep dive, video walkthrough, deliverables checklist | Active |
| `/project/:id` | `<ProjectDetail />` | Alias route for case study links | Active |
| `/process` | `<Process />` | 5-phase transparent workflow, interactive pipeline console | Active |
| `/project-estimation` | `<ProjectEstimation />` | Interactive scope builder & direct inquiry (Zero prices) | Active |
| `/estimation` | `<Navigate to="/project-estimation" />` | Short alias redirect | Redirect |
| `/pricing` | `<Navigate to="/project-estimation" />` | Legacy pricing URL redirect to project estimation | Redirect |
| `/about` | `<About />` | Hyderabad lab narrative, engineering principles, stack, studio | Active |
| `/contact` | `<Contact />` | Direct brief form, primary/secondary phone lines, WhatsApp | Active |
| `*` | `<NotFound />` | 404 recovery page with navigational anchors | Fallback |

---

## 5. Page-by-Page Technical Breakdown

### 5.1 Home (`/`)
- **Hero Light Beam System (`HeroLightBeamSystem.tsx`):** Interactive canvas beam and particle system responding to pointer movement.
- **Hero Showcase (`HeroShowcase.tsx`):** Live telemetry metrics, technology stack badges, and primary call-to-actions.
- **Credibility System (`HomepageCredibility.tsx`):** Highlights 100% code ownership, direct engineers, and reliable uptime.
- **Platform Cockpit Station (`HomePlatformAndPricingTeaser.tsx`):** Split interactive station comparing managed operations vs. bespoke ground-up architecture.
- **FAQ Section (`HomeFAQSection.tsx`):** Common questions regarding engagement models, timelines, and guarantees.
- **Bottom Contact Module (`HomeContactSection.tsx`):** Quick project inquiry form directly embedded on the home page.

### 5.2 Services (`/services`)
- **River Hero Architecture (`ServicesRiverHero.tsx`):** 12-column hero with status badge `FULL DIGITAL LIFECYCLE // NO JARGON, NO SURPRISES` and 3 anchors (*Direct Engineers*, *Weekly Live Demos*, *100% Code Ownership*).
- **Transit Blueprint (`ServicesRiverTransitBlueprint.tsx`):** Interactive segmented tab switcher covering:
  - Phase 1: Interactive Prototype (Figma clickables, user flows)
  - Phase 2: Live Engineering & Sprints (React, Node, Supabase, staging link)
  - Phase 3: Launch & Production Care (Zero-downtime cutover, 24/7 monitoring)
- **Harbor Docks System (`ServicesHarborDocks.tsx`):** Deep architectural telemetry card detailing stack layers, payment gateways, and custom Shopify Plus builds.
- **Six Core Services Grid:**
  1. *Custom Web Applications & SaaS Platforms*
  2. *High-Converting Shopify & E-Commerce Stores*
  3. *Mobile Apps (iOS & Android Native)*
  4. *Speed Optimization & Technical SEO*
  5. *Enterprise Cloud Backends & APIs*
  6. *Monthly Technical Maintenance & Ongoing Care*

### 5.3 Work & Case Studies (`/work`)
- **Multi-Device Software Workstation Hero (`WorkHeroIllustration.tsx`):**
  - Isometric SVG software command station featuring a dark-glass MacBook Pro (running live dashboard and IDE), floating smartphone (rendering a checkout payment modal with Apple Pay / UPI), a cloud database cylinder stack with green telemetry lights, and floating metric chips.
  - Free of distracting pulsing animations for a calm, professional look.
- **Segmented Filter Tabs:** Real-time client-side filtering with counts across:
  - *All Platforms*
  - *Web Applications*
  - *Shopify Stores*
  - *Mobile & Cloud*
- **Interactive Project Cards (`ProjectCard.tsx`):**
  - HTML5 video preview with fallback.
  - "Visit Live" direct website link button (with event propagation safety).
  - Whole-card navigation to `/work/:id`.
  - Solid emerald "LIVE IN PRODUCTION" badge.

### 5.4 Project Detail Exploration (`/work/:id`, `/project/:id`)
- **Media Showcase:** Full-width 16:9 embedded video player with ambient gradient depth glow.
- **Human Narrative Structure:**
  - *What the Client Needed:* Clear, business-focused problem statement.
  - *How We Built It:* Plain-English engineering explanation.
  - *What Was Delivered:* Concrete checklist with green checkmarks.
- **Direct Live Link:** External link button with custom hover animation.
- **Adjacent Navigator:** Seamless next/previous project switching.

### 5.5 Process (`/process`)
- **Hero Section:** Credibility anchors for *Direct Engineers*, *Weekly Live Demos*, and *100% Your Code*.
- **Interactive Pipeline Visual (`ProcessPipelineVisual.tsx`):**
  - Clickable 5-stage console (01 Plan, 02 Design, 03 Build, 04 Launch, 05 Support).
  - Dynamic preview pane switching between realistic mockups:
    - *Plan:* Notion scope and plain-English roadmap mockup.
    - *Design:* Clickable mobile Figma canvas prototype.
    - *Build:* Private staging URL card with Git commit hash.
    - *Launch:* Pre-flight verification checklist with 99/100 Lighthouse score.
    - *Support:* Direct engineer chat message exchange.
- **The Zemprolabs Way vs. Traditional Agency:** Side-by-side comparison addressing communication speed, staging access, language transparency, and code ownership.
- **The 4 Non-Negotiable Rules:** Zero Tech Jargon, Prompt Answers, 100% Code Ownership, No Surprise Fees.
- **FAQ Accordion:** Answers to technical experience, change management, and long-term support.

### 5.6 Project Estimation (`/project-estimation`)
- **Zero-Pricing Architecture:** Replaced all generic rate tables, numbers, dollar/INR values, and price cards with an interactive project scope builder.
- **4-Step Configurator:**
  - *Step 1 (Target Platform):* Web App / SaaS, Shopify Plus Store, Mobile App, Platform Rebuild, Brand Website.
  - *Step 2 (Capabilities):* Multi-select pills for UI/UX, auth, checkout, CMS, catalog, APIs, database, realtime notifications, SEO, ongoing care.
  - *Step 3 (Timeline):* Fast Track (2–4 weeks), Standard (1–2 months), Comprehensive (2–4 months), Flexible.
  - *Step 4 (Current Status):* From scratch, Figma ready, Rebuild existing code.
- **Live Scope Summary & Embedded Inquiry Form:**
  - Displays selected parameters and module count.
  - Reassures client: *Custom Engineer Scope // Zero Generic Estimates*.
  - Inline submission capturing Name, Email, Phone/WhatsApp, Company, and Project Notes.
  - Instant visual confirmation card confirming lead engineer review within 24 hours.
- **"Why We Don't Post Generic Price Tags":** Practical justification of why tailored scoping prevents surprise change-order fees.

### 5.7 About (`/about`)
- **Studio Identity & Narrative:** The story of why Zemprolabs was founded—to provide founders with direct engineer access, clean code, and honest collaboration without agency games.
- **The 4 Core Principles:** *Simplicity Over Hype*, *Direct Engineer Access*, *Brutally Honest Advice*, *Pride in Craftsmanship*.
- **Production Toolkit:** Detailed breakdown of active stacks (React, Next.js, TypeScript, Node.js, Supabase, Shopify Plus, React Native).
- **Physical Studio Card:** Details on the Hyderabad laboratory (Upperpally), direct phone lines, WhatsApp, and engineering email.
- **FAQ Accordion:** Answers regarding team location, in-house developers, and IP ownership.

### 5.8 Contact (`/contact`)
- **Initiate Project Brief:** Clean, high-converting contact form.
- **Streamlined Inputs:** Full Name, Work Email, Company / Organization (optional), Primary Capability Required, Engagement Model, Project Description.
- **Removed Fields:** Completely removed the obsolete budget allocation selector (`Estimated Budget Allocation`).
- **Sidebar Contact Details:**
  - Primary Number: `+91 744 755 7577` (with direct WhatsApp trigger)
  - Secondary Number: `+91 744 755 7599`
  - Office location and email.
  - "What Happens Next" 3-step turnaround guide.

---

## 6. Component Library Catalog

```
src/components/
├── BrandLogo.tsx                     # Vector brand identity mark with responsive sizing
├── BuildRunGrow.tsx                  # 3-phase horizontal pipeline rail
├── ContactForm.tsx                   # Main contact brief dispatch form
├── CostTransparencySection.tsx       # Explains what professional engineering includes
├── FirebasePricingReference.tsx      # Infrastructure billing reference documentation
├── Footer.tsx                        # Global 5-column footer with policies, phones, logo
├── HandledForYouCTA.tsx              # Standalone conversion banner with WhatsApp link
├── HeroLightBeamSystem.tsx           # Interactive canvas particle light beam system
├── HeroShowcase.tsx                  # Homepage telemetry & tech showcase
├── HomeContactSection.tsx            # Embedded homepage contact section
├── HomeFAQSection.tsx                # Accordion FAQ module for homepage
├── HomePlatformAndPricingTeaser.tsx  # Dual station platform cockpit module
├── HomeServiceCard.tsx               # Minimal service card with hover glow
├── HomepageCredibility.tsx           # Credibility badges (100% code, direct engineers)
├── LeadershipSection.tsx             # Studio team presentation module
├── LighthouseHeroSystem.tsx          # Lighthouse optical hero simulation
├── LighthouseShowcase.tsx            # Core Web Vitals telemetry showcase
├── Navbar.tsx                        # Global fixed header with desktop and mobile nav
├── OpticalTerminal.tsx               # Interactive simulated command line terminal
├── PolicyModal.tsx                   # Modal renderer for Privacy, Terms, NDA, SLA policies
├── ProcessPipelineVisual.tsx         # 5-phase interactive workflow preview console
├── Project3DScrollTracker.tsx        # Scroll progress and active section tracker
├── ProjectCard.tsx                   # Video preview card with Visit Live & detail link
├── ProjectModal.tsx                  # Lightweight modal preview for case studies
├── QualifiedEngineersTrust.tsx       # Engineering standards & trust pillars
├── ROICalculator.tsx                 # Business value projection calculator
├── ScopeEstimator.tsx                # Custom scope builder engine
├── SEO.tsx                           # Dynamic document title & OpenGraph metadata head
├── ServiceCard.tsx                   # Standard service capability card
├── ServiceComparisonTable.tsx        # In-house vs typical agency comparison matrix
├── ServicesHarborDocks.tsx           # E-commerce & web app deep-dive telemetry card
├── ServicesRiverHero.tsx             # 12-column hero for Services page
├── ServicesRiverTransitBlueprint.tsx # Interactive 3-stage services blueprint console
├── ShopifyPricingReference.tsx       # Shopify subscription transparency disclaimer
├── Terminal.tsx                      # Code execution simulator terminal
├── TrustSection.tsx                  # Security, compliance, and NDA trust badges
└── WorkHeroIllustration.tsx          # Isometric software workstation multi-device SVG
```

---

## 7. Data Architecture & Schemas

All dynamic content is maintained in modular, type-safe data files in `src/data/`:

### 7.1 Company Identity (`src/data/company.ts`)
```typescript
export interface PhoneRecord {
  display: string;
  href: string;
  whatsappHref: string;
  label: string;
  isPrimary: boolean;
}

export const company = {
  name: 'Zemprolabs',
  legalName: 'Zemprolabs',
  tagline: 'Technology, Commerce & Beyond',
  positioning: 'Qualified Engineers. Trusted Technology.',
  positioningSub: 'Zemprolabs brings together qualified engineers and technology professionals to design, build, maintain and manage digital solutions for businesses.',
  email: 'info@zemprolabs.com',
  emailHref: 'mailto:info@zemprolabs.com',
  phone: '+91 744 755 7577',               // Primary Phone
  phoneHref: 'tel:+917447557577',
  phoneSecondary: '+91 744 755 7599',      // Secondary Phone
  phoneSecondaryHref: 'tel:+917447557599',
  whatsapp: '+91 744 755 7577',            // Primary WhatsApp
  whatsappHref: 'https://wa.me/917447557577',
  whatsappSecondary: '+91 744 755 7599',   // Secondary WhatsApp
  whatsappSecondaryHref: 'https://wa.me/917447557599',
  phones: [
    { display: '+91 744 755 7577', href: 'tel:+917447557577', whatsappHref: 'https://wa.me/917447557577', label: 'Primary', isPrimary: true },
    { display: '+91 744 755 7599', href: 'tel:+917447557599', whatsappHref: 'https://wa.me/917447557599', label: 'Secondary', isPrimary: false }
  ],
  address: {
    line1: '6th Floor, Ehtesham Heights',
    line2: 'Golden Heights Colony',
    line3: 'Upperpally, Hyderabad',
    full: '6th Floor, Ehtesham Heights, Golden Heights Colony, Upperpally, Hyderabad',
    city: 'Hyderabad',
    country: 'India'
  }
};
```

### 7.2 Projects & Case Studies (`src/data/projects.ts`)
Each project record contains:
- `id`: URL-safe slug (e.g. `nara-organics`, `elevate-fit`, `craft-coffee`).
- `title` & `subtitle`: Commercial product designation.
- `domain`: Industry classification (e.g. `Health & Wellness E-Commerce`).
- `category`: Internal filter category (`web`, `shopify`, `mobile`).
- `videoUrl`: Production video demo asset.
- `metrics`: Quantified commercial impact (e.g. `+142% Conversion Rate`).
- `techStack`: Array of used technologies (`Shopify Plus`, `Liquid`, `Next.js`).
- `link`: Verified live production URL.
- `humanStory`: Object detailing `challenge`, `approach`, and `deliverables`.

---

## 8. Client Messaging & Communication Rules

Every developer, designer, and contributor must follow these non-negotiable communication rules when writing copy or creating components:

1. **The Human Touch Rule:**
   - Always sound like an experienced engineer talking honestly over coffee.
   - Avoid pretentious corporate jargon. Never use phrases like: *"paradigm-shifting full-cycle synergy"*, *"omnichannel telemetry vector"*, or *"bleeding-edge cognitive monetization"*.
   - Use direct, grounded phrases: *"What the client needed"*, *"How we built it"*, *"What was delivered"*, *"We write clean code and stand behind it"*.

2. **The Zero-Pricing Rule:**
   - **Never reveal fixed currency prices, hourly rates, or rate cards on public pages.**
   - Software requirements vary too wildly for static rates. Direct clients to the interactive **Project Estimation** configurator and direct enquiry form.

3. **The Calm Visual Rule:**
   - Do not use rapid blinking, pulsating, or pinging animations (`animate-pulse`, `animate-ping`) on production badges or illustrations.
   - Use steady, solid indicator lights with high contrast.

4. **The Code Ownership Guarantee:**
   - Prominently remind clients that they own 100% of their source code, designs, and cloud accounts with zero vendor lock-in.

5. **The Verified Phone Standard:**
   - Primary: `+91 744 755 7577` (Used for primary WhatsApp and telephone actions).
   - Secondary: `+91 744 755 7599` (Listed as backup / alternate direct line).

---

## 9. SEO, Performance & Security Standards

### Dynamic SEO Management
Every page invokes the centralized `<SEO />` component:
```tsx
<SEO
  title="Our Working Process | Transparent & Human Software Craft"
  description="Clear steps, weekly progress, and zero guesswork. Learn how Zemprolabs turns your vision into working software."
  canonicalPath="/process"
/>
```
- Sets `<title>` dynamically with consistent branding format: `[Page Title] | Zemprolabs`.
- Injects high-conversion `<meta name="description">`.
- Sets `<link rel="canonical" href="https://zemprolabs.com[canonicalPath]">`.
- Generates OpenGraph (`og:title`, `og:description`, `og:url`, `og:type`) and Twitter Card metadata.

### Performance Targets
- **Target Lighthouse Performance Score:** `> 95/100` on mobile and desktop.
- **Largest Contentful Paint (LCP):** `< 1.2s`.
- **First Input Delay (FID) / INP:** `< 50ms`.
- **Cumulative Layout Shift (CLS):** `0.00` (strict aspect ratios on all visual containers).

### Security & Privacy
- Zero client-side storage of sensitive credentials.
- Strict external link attributes: `target="_blank" rel="noopener noreferrer"`.
- Dedicated policy modals for GDPR Privacy, MSA Terms, Non-Disclosure & IP Assignment, SLA Commitments, and Security Standards.

---

## 10. Development, Build & Deployment Guide

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Local Development
```bash
# 1. Install dependencies
npm install

# 2. Run local development server (with Hot Module Replacement)
npm run dev
# Server initiates on http://localhost:3000 (or next open port e.g. 3001)
```

### Verification & Quality Gates
```bash
# 1. Full TypeScript compilation check (Strict mode, zero errors required)
npx tsc --noEmit

# 2. Production build bundle creation
npm run build

# 3. Preview production bundle locally
npm run preview
```

### Environment Configuration (`.env`)
```bash
# Optional API endpoint for direct backend form submissions
VITE_CONTACT_ENDPOINT=
```
*(If `VITE_CONTACT_ENDPOINT` is left empty, `ContactForm.tsx` automatically provides a smooth fallback providing direct mail client dispatch).*

---

*Document compiled and verified for Zemprolabs engineering standards.*  
*All rights reserved &copy; 2026 Zemprolabs.*
