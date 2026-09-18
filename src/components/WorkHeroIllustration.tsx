import React from 'react';

export const WorkHeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-[540px] mx-auto aspect-[540/400] select-none group">
      {/* Ambient Depth Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF6B00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />

      {/* SVG Multi-Device & Cloud Architecture Illustration */}
      <svg
        viewBox="0 0 540 400"
        className="w-full h-full overflow-visible drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        <defs>
          {/* Gradients for Devices & Glass UI */}
          <linearGradient id="laptopBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="50%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="laptopScreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#070D1A" />
            <stop offset="100%" stopColor="#020409" />
          </linearGradient>

          <linearGradient id="phoneBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="50%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0A0F1D" />
          </linearGradient>

          <linearGradient id="phoneScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#091224" />
            <stop offset="100%" stopColor="#040711" />
          </linearGradient>

          <linearGradient id="accentOrangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="100%" stopColor="#FFA14A" />
          </linearGradient>

          <linearGradient id="accentCyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>

          <linearGradient id="accentEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>

          {/* Glass Card Shadow Filter */}
          <filter id="glassDropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.6" />
          </filter>

          {/* Neon Glow Filter */}
          <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ======================================================== */}
        {/* BACKGROUND DATA CONNECTIONS (Curved Glowing Bus Lines)   */}
        {/* ======================================================== */}
        <g opacity="0.6">
          {/* Cloud to Laptop */}
          <path
            d="M 440 85 C 400 130, 320 120, 240 140"
            fill="none"
            stroke="url(#accentCyanGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Laptop to Phone */}
          <path
            d="M 220 280 C 260 310, 340 300, 380 270"
            fill="none"
            stroke="url(#accentOrangeGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Mobile to Analytics */}
          <path
            d="M 420 330 C 470 340, 480 260, 470 210"
            fill="none"
            stroke="url(#accentEmeraldGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </g>

        {/* ======================================================== */}
        {/* 1. CLOUD BACKEND & DATABASE STACK (Top Right Layer)      */}
        {/* ======================================================== */}
        <g transform="translate(420, 50)" filter="url(#glassDropShadow)" className="transition-transform duration-700 hover:-translate-y-1">
          {/* Ambient Glow behind Database */}
          <circle cx="25" cy="35" r="35" fill="#38BDF8" opacity="0.15" filter="url(#neonGlow)" />

          {/* Isometric Database Cylinder Layers */}
          {/* Layer 3 (Bottom) */}
          <g transform="translate(0, 40)">
            <ellipse cx="25" cy="14" rx="28" ry="12" fill="#0A1324" stroke="#38BDF8" strokeWidth="1" />
            <path d="M -3 14 A 28 12 0 0 0 53 14 L 53 24 A 28 12 0 0 1 -3 24 Z" fill="#060C18" stroke="#38BDF8" strokeWidth="1" />
            <circle cx="25" cy="20" r="1.5" fill="#10B981" />
          </g>
          {/* Layer 2 (Middle) */}
          <g transform="translate(0, 20)">
            <ellipse cx="25" cy="14" rx="28" ry="12" fill="#0A1324" stroke="#38BDF8" strokeWidth="1" />
            <path d="M -3 14 A 28 12 0 0 0 53 14 L 53 24 A 28 12 0 0 1 -3 24 Z" fill="#060C18" stroke="#38BDF8" strokeWidth="1" />
            <circle cx="25" cy="20" r="1.5" fill="#38BDF8" />
          </g>
          {/* Layer 1 (Top) */}
          <g transform="translate(0, 0)">
            <ellipse cx="25" cy="14" rx="28" ry="12" fill="#0F1F38" stroke="#38BDF8" strokeWidth="1.2" />
            <circle cx="25" cy="14" r="6" fill="#38BDF8" opacity="0.4" />
            <circle cx="25" cy="14" r="2.5" fill="#FFF" />
          </g>

          {/* Database Pill Tag */}
          <g transform="translate(-15, 68)">
            <rect x="0" y="0" width="80" height="18" rx="5" fill="#030712" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
            <text x="40" y="12" fill="#38BDF8" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              CLOUD DB &bull; API
            </text>
          </g>
        </g>

        {/* ======================================================== */}
        {/* 2. THE MAIN LAPTOP / DESKTOP WORKSTATION (Center-Left)   */}
        {/* ======================================================== */}
        <g transform="translate(45, 60)" filter="url(#glassDropShadow)">
          {/* Laptop Screen Lid / Frame */}
          <rect
            x="0"
            y="0"
            width="340"
            height="215"
            rx="14"
            fill="url(#laptopBodyGrad)"
            stroke="rgba(255, 255, 255, 0.18)"
            strokeWidth="1.5"
          />

          {/* Camera Notch */}
          <circle cx="170" cy="7" r="2" fill="#334155" />

          {/* Inner Display Surface */}
          <rect
            x="8"
            y="14"
            width="324"
            height="193"
            rx="8"
            fill="url(#laptopScreenGrad)"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1"
          />

          {/* Top Window Navigation Bar */}
          <rect x="8" y="14" width="324" height="24" rx="8" fill="#060B16" />
          {/* Window Buttons */}
          <circle cx="22" cy="26" r="3.5" fill="#EF4444" opacity="0.8" />
          <circle cx="33" cy="26" r="3.5" fill="#F59E0B" opacity="0.8" />
          <circle cx="44" cy="26" r="3.5" fill="#10B981" opacity="0.8" />

          {/* URL / Branch Address Bar */}
          <rect x="62" y="19" width="160" height="14" rx="4" fill="#0D1527" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
          <text x="70" y="29.5" fill="#94A3B8" fontSize="8" fontFamily="monospace">
            app.zemprolabs.dev/live
          </text>

          {/* Live Status Pill in Window */}
          <g transform="translate(236, 19)">
            <rect x="0" y="0" width="88" height="14" rx="4" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" strokeWidth="0.8" />
            <circle cx="7" cy="7" r="2" fill="#10B981" />
            <text x="14" y="10.5" fill="#10B981" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
              BUILD: DEPLOYED
            </text>
          </g>

          {/* Laptop Screen Content - IDE & UI Grid */}
          {/* Left Mini Sidebar */}
          <rect x="8" y="38" width="36" height="169" fill="#040812" />
          <g transform="translate(18, 48)">
            <rect x="0" y="0" width="16" height="12" rx="2" fill="#FF6B00" opacity="0.8" />
            <rect x="0" y="18" width="16" height="12" rx="2" fill="white" opacity="0.15" />
            <rect x="0" y="36" width="16" height="12" rx="2" fill="white" opacity="0.15" />
            <rect x="0" y="54" width="16" height="12" rx="2" fill="white" opacity="0.15" />
          </g>

          {/* Code & UI Workspace (Middle Panel) */}
          <g transform="translate(54, 46)">
            {/* Syntax lines representing high-speed application code */}
            <rect x="0" y="0" width="80" height="6" rx="2" fill="#FF6B00" opacity="0.8" />
            <rect x="90" y="0" width="40" height="6" rx="2" fill="#38BDF8" opacity="0.7" />

            <rect x="12" y="12" width="60" height="5" rx="1.5" fill="#94A3B8" opacity="0.4" />
            <rect x="78" y="12" width="50" height="5" rx="1.5" fill="#10B981" opacity="0.6" />

            <rect x="24" y="23" width="90" height="5" rx="1.5" fill="#F59E0B" opacity="0.5" />
            <rect x="120" y="23" width="30" height="5" rx="1.5" fill="#94A3B8" opacity="0.3" />

            {/* Clean Interactive Cursor */}
            <rect x="156" y="22" width="2" height="7" fill="#FF6B00" />

            {/* Inset Store / App Dashboard Preview Card */}
            <g transform="translate(0, 36)">
              <rect x="0" y="0" width="180" height="100" rx="8" fill="#070E1C" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              
              {/* Card Header */}
              <rect x="10" y="10" width="50" height="5" rx="2" fill="#FFF" opacity="0.7" />
              <rect x="130" y="8" width="40" height="10" rx="3" fill="#FF6B00" opacity="0.2" />
              <text x="150" y="15.5" fill="#FF6B00" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                SHOPIFY+
              </text>

              {/* Data Graph / Line Chart */}
              <path
                d="M 12 70 Q 40 45, 70 58 T 130 35 T 170 28"
                fill="none"
                stroke="url(#accentOrangeGrad)"
                strokeWidth="2"
              />
              <path
                d="M 12 70 Q 40 45, 70 58 T 130 35 T 170 28 L 170 80 L 12 80 Z"
                fill="url(#accentOrangeGrad)"
                opacity="0.1"
              />

              {/* Stat Chips */}
              <g transform="translate(12, 75)">
                <rect x="0" y="0" width="45" height="14" rx="3" fill="#02050D" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
                <text x="22.5" y="10" fill="#10B981" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  99.9% UPTIME
                </text>
              </g>
              <g transform="translate(62, 75)">
                <rect x="0" y="0" width="50" height="14" rx="3" fill="#02050D" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
                <text x="25" y="10" fill="#38BDF8" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  0.8s LCP SPEED
                </text>
              </g>
            </g>
          </g>

          {/* Right Micro Inspector Panel on Laptop */}
          <g transform="translate(245, 46)">
            <rect x="0" y="0" width="80" height="145" rx="6" fill="#040814" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <text x="10" y="14" fill="#94A3B8" fontSize="7" fontFamily="monospace" fontWeight="bold">
              // TELEMETRY
            </text>
            <rect x="10" y="22" width="60" height="4" rx="1" fill="#38BDF8" opacity="0.6" />
            <rect x="10" y="30" width="45" height="4" rx="1" fill="#FFF" opacity="0.3" />
            <rect x="10" y="38" width="55" height="4" rx="1" fill="#FFF" opacity="0.3" />

            {/* Small circular gauge */}
            <circle cx="40" cy="72" r="18" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
            <circle
              cx="40"
              cy="72"
              r="18"
              fill="none"
              stroke="#10B981"
              strokeWidth="3"
              strokeDasharray="80 113"
              strokeLinecap="round"
              transform="rotate(-90 40 72)"
            />
            <text x="40" y="75" fill="#FFF" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              100%
            </text>
            <text x="40" y="98" fill="#94A3B8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">
              CODE OWNED
            </text>

            <rect x="10" y="112" width="60" height="18" rx="4" fill="#10B981" opacity="0.15" stroke="#10B981" strokeWidth="0.8" />
            <text x="40" y="124" fill="#10B981" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              HEALTHY
            </text>
          </g>

          {/* Laptop Base / Keyboard Deck */}
          <polygon
            points="-20,215 360,215 385,230 -45,230"
            fill="#0F172A"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1.5"
          />
          {/* Front Notch for Opening */}
          <rect x="150" y="215" width="40" height="4" rx="2" fill="#334155" />
          {/* Base bottom lip reflection */}
          <line x1="-42" y1="229" x2="382" y2="229" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
        </g>

        {/* ======================================================== */}
        {/* 3. THE SMARTPHONE / MOBILE APP (Floating Foreground Right)*/}
        {/* ======================================================== */}
        <g transform="translate(345, 140)" filter="url(#glassDropShadow)" className="transition-transform duration-500 hover:-translate-y-2">
          {/* Phone Outer Chassis with Glass Bezel */}
          <rect
            x="0"
            y="0"
            width="145"
            height="225"
            rx="24"
            fill="url(#phoneBodyGrad)"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="1.5"
          />

          {/* Phone Screen Surface */}
          <rect
            x="5"
            y="5"
            width="135"
            height="215"
            rx="20"
            fill="url(#phoneScreenGrad)"
          />

          {/* Dynamic Island Notch */}
          <rect x="52" y="12" width="41" height="9" rx="4.5" fill="#000" />
          <circle cx="85" cy="16.5" r="1.5" fill="#1E293B" />

          {/* Mobile App UI Elements */}
          {/* Top Bar with Profile & Cart */}
          <g transform="translate(16, 30)">
            <circle cx="6" cy="6" r="6" fill="#38BDF8" opacity="0.3" />
            <rect x="18" y="3" width="40" height="6" rx="2" fill="#FFF" opacity="0.8" />
            
            <circle cx="106" cy="6" r="6" fill="#FF6B00" opacity="0.3" />
            <circle cx="106" cy="6" r="2.5" fill="#FF6B00" />
          </g>

          {/* Mobile Banner / Video Card (Erus / BaeMeds preview) */}
          <g transform="translate(15, 48)">
            <rect x="0" y="0" width="115" height="65" rx="10" fill="#0F172A" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
            
            {/* Play Button Indicator */}
            <circle cx="57.5" cy="28" r="12" fill="#FF6B00" />
            <polygon points="54,23 64,28 54,33" fill="#000" />

            {/* Bottom mini progress bar */}
            <rect x="10" y="50" width="95" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
            <rect x="10" y="50" width="60" height="3" rx="1.5" fill="#FF6B00" />
          </g>

          {/* Mobile Fast Action Cards */}
          <g transform="translate(15, 122)">
            <rect x="0" y="0" width="115" height="28" rx="8" fill="#060C18" stroke="rgba(56,189,248,0.25)" strokeWidth="0.8" />
            <circle cx="16" cy="14" r="6" fill="#10B981" opacity="0.2" />
            <circle cx="16" cy="14" r="2" fill="#10B981" />
            <text x="28" y="12" fill="#FFF" fontSize="7" fontFamily="sans-serif" fontWeight="bold">
              Instant Mobile Checkout
            </text>
            <text x="28" y="20" fill="#94A3B8" fontSize="5.5" fontFamily="monospace">
              UPI &bull; Razorpay &bull; Apple Pay
            </text>
          </g>

          {/* Mobile Success Toast Notification (Floating on screen) */}
          <g transform="translate(15, 158)">
            <rect x="0" y="0" width="115" height="26" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10B981" strokeWidth="0.8" />
            <text x="12" y="12" fill="#10B981" fontSize="7" fontFamily="monospace" fontWeight="bold">
              &bull; ORDER PROCESSED
            </text>
            <text x="12" y="20" fill="#FFF" fontSize="6" fontFamily="sans-serif">
              Syncing to fulfillment warehouse...
            </text>
          </g>

          {/* Bottom Home Indicator Bar */}
          <rect x="47" y="210" width="51" height="2.5" rx="1.25" fill="#94A3B8" opacity="0.6" />
        </g>

        {/* ======================================================== */}
        {/* 4. FLOATING PERFORMANCE BADGE (Top Center Ambient Tag)   */}
        {/* ======================================================== */}
        <g transform="translate(190, 20)" filter="url(#glassDropShadow)" className="transition-transform duration-500 hover:scale-105">
          <rect
            x="0"
            y="0"
            width="160"
            height="32"
            rx="16"
            fill="#060C1A"
            stroke="rgba(255, 107, 0, 0.4)"
            strokeWidth="1.2"
          />
          <circle cx="16" cy="16" r="4.5" fill="#FF6B00" />

          <text x="32" y="16" fill="#FFF" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
            WEB &bull; MOBILE &bull; CLOUD
          </text>
          <text x="32" y="24" fill="#94A3B8" fontSize="7" fontFamily="monospace">
            BUILT FOR REAL CLIENTS
          </text>
        </g>

        {/* ======================================================== */}
        {/* 5. FLOATING BOTTOM METRIC CHIP (Front Bottom Left)       */}
        {/* ======================================================== */}
        <g transform="translate(18, 305)" filter="url(#glassDropShadow)" className="transition-transform duration-500 hover:scale-105">
          <rect
            x="0"
            y="0"
            width="175"
            height="44"
            rx="14"
            fill="#060C18"
            stroke="rgba(16, 185, 129, 0.35)"
            strokeWidth="1.2"
          />
          <g transform="translate(14, 13)">
            <circle cx="9" cy="9" r="9" fill="#10B981" opacity="0.2" />
            <path d="M 5 9 L 8 12 L 14 6" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          <text x="44" y="20" fill="#FFF" fontSize="9.5" fontFamily="display" fontWeight="bold">
            100% In Production
          </text>
          <text x="44" y="32" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">
            Active real-world client traffic
          </text>
        </g>
      </svg>
    </div>
  );
};
