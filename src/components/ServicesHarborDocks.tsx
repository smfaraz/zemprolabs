import React, { useState } from 'react';
import { ShoppingBag, Server, ArrowRight, ShieldCheck, Zap, Database, Globe, Lock, Cpu, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesHarborDocks: React.FC = () => {
  const [activeDock, setActiveDock] = useState<'shopify' | 'cloud'>('shopify');

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#040812] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-96 bg-[#FF6B00]/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4 border-b border-white/[0.08] pb-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>WHAT WE SPECIALIZE IN // FULL CODE OWNERSHIP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Custom Shopify Stores &amp; Reliable Cloud Backends.
            </h2>

            <p className="text-xs sm:text-sm text-[#94A3B8] mt-2">
              Two areas where businesses often need deep technical care: high-performing online stores and backends that never slow down.
            </p>
          </div>

          {/* Toggle Pills */}
          <div className="flex items-center p-1 rounded-xl bg-[#060B16] border border-white/10 shrink-0">
            <button
              onClick={() => setActiveDock('shopify')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeDock === 'shopify'
                  ? 'bg-[#10B981] text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>01 // ONLINE STORES (SHOPIFY)</span>
            </button>

            <button
              onClick={() => setActiveDock('cloud')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeDock === 'cloud'
                  ? 'bg-[#38BDF8] text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>02 // APPS &amp; CLOUD BACKENDS</span>
            </button>
          </div>
        </div>

        {/* Dock 01: Shopify Plus E-Commerce Architecture */}
        {activeDock === 'shopify' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-in fade-in duration-300">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] uppercase tracking-wider font-semibold">
                <ShoppingBag className="w-4 h-4" />
                <span>ONLINE STORES // BUILT FOR REAL SALES</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white leading-tight">
                Fast, beautiful online stores tailored to your brand.
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                We don’t just tweak off-the-shelf templates. We build custom Shopify stores that load in the blink of an eye, make buying effortless on mobile phones, and handle big festival sales rushes without a hiccup.
              </p>

              {/* Architecture Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {[
                  'Custom store design tailored to your brand identity',
                  'Smooth, fast mobile checkout that prevents lost sales',
                  'Selling across India & internationally (INR & USD)',
                  'Easy payment setup (UPI, Cards, NetBanking, Razorpay, Stripe)',
                  'Automatic inventory and warehouse order sync',
                  'Fast loading speeds with zero annoying page jumps'
                ].map((cap, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-200 flex items-start gap-2.5"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap gap-4">
                <Link
                  to="/contact?service=Websites%20%26%20E-Commerce"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#10B981] text-black hover:bg-[#0ea572] transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] font-mono font-bold"
                >
                  <span>Discuss an Online Store</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/project-estimation"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#08101E] text-white hover:bg-white/10 border border-white/15 transition-colors font-mono"
                >
                  <span>Request Project Estimate</span>
                </Link>
              </div>
            </div>

            {/* Right Architecture Telemetry Diagram (6 cols) */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-[#070E1A] border border-white/[0.12] shadow-2xl space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-slate-400">// REAL CLIENT SETUP</span>
                  <span className="text-[#10B981] font-bold">CASE STUDY: BAEMEDS (INDIA &amp; USA)</span>
                </div>

                {/* Step 1: Storefront Layer */}
                <div className="p-4 rounded-xl bg-[#040810] border border-[#10B981]/30 space-y-1">
                  <div className="flex items-center justify-between text-white font-bold text-xs">
                    <span className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>01. LIGHTNING-FAST STOREFRONT</span>
                    </span>
                    <span className="text-[10px] text-[#10B981]">SUB-SECOND LOAD</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Pages load in under 1 second on mobile devices with instant product filters and a clean, clutter-free layout.
                  </p>
                </div>

                {/* Flow Arrow */}
                <div className="text-center text-slate-600 select-none text-xs">&darr; &darr; &darr;</div>

                {/* Step 2: Regional Checkout & Payment Routing */}
                <div className="p-4 rounded-xl bg-[#040810] border border-[#38BDF8]/30 space-y-1">
                  <div className="flex items-center justify-between text-white font-bold text-xs">
                    <span className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>02. LOCALIZED CHECKOUT &amp; PAYMENTS</span>
                    </span>
                    <span className="text-[10px] text-[#38BDF8]">INR &bull; USD</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Indian customers see INR prices and one-click UPI; US customers see USD prices and Apple Pay automatically.
                  </p>
                </div>

                {/* Flow Arrow */}
                <div className="text-center text-slate-600 select-none text-xs">&darr; &darr; &darr;</div>

                {/* Step 3: ERP Sync & 24/7 Monitoring */}
                <div className="p-4 rounded-xl bg-[#040810] border border-[#FF6B00]/30 space-y-1">
                  <div className="flex items-center justify-between text-white font-bold text-xs">
                    <span className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>03. AUTOMATED INVENTORY &amp; SUPPORT</span>
                    </span>
                    <span className="text-[10px] text-[#FF6B00]">LIVE SYNC</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Orders sync instantly to warehouse fulfillment teams, and our monitoring checks ensure checkout is always working.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Dock 02: Real-Time Cloud & Backend Infrastructure */}
        {activeDock === 'cloud' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-in fade-in duration-300">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider font-semibold">
                <Server className="w-4 h-4" />
                <span>CLOUD SYSTEMS // BUILT TO LAST</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white leading-tight">
                Solid backends and databases that keep your apps running 24/7.
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                We build dependable backends for web and mobile applications. Whether using Google Cloud Firebase, AWS, Node.js, or PostgreSQL databases, we ensure customer data is safe, your app never crashes under heavy usage, and you own 100% of your accounts.
              </p>

              {/* Cloud Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {[
                  'Clean, secure databases (PostgreSQL, Firebase, MongoDB)',
                  'Fast APIs so your website and mobile app respond instantly',
                  'Automated daily backups saved securely off-site',
                  'Protection against spam bots, brute force & downtime',
                  'Customer data privacy and secure user password logins',
                  'Zero vendor lock-in — everything is in your own company accounts'
                ].map((cap, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-200 flex items-start gap-2.5"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap gap-4">
                <Link
                  to="/contact?service=Custom%20Software%20%2F%20Apps"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#38BDF8] text-black hover:bg-[#0284c7] transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] font-mono font-bold"
                >
                  <span>Talk About a Custom Backend</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/process"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#08101E] text-white hover:bg-white/10 border border-white/15 transition-colors font-mono"
                >
                  <span>How We Build Software</span>
                </Link>
              </div>
            </div>

            {/* Right Telemetry Spec (6 cols) */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-[#070E1A] border border-white/[0.12] shadow-2xl space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-slate-400">// HOW WE PROTECT YOUR APP</span>
                  <span className="text-[#38BDF8] font-bold">RELIABILITY GUARANTEE</span>
                </div>

                {/* Cloud Grid Tags */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#040810] border border-white/5 space-y-1">
                    <div className="text-[10px] text-[#38BDF8] font-bold">SECURITY &amp; SPEED</div>
                    <div className="text-white font-semibold text-xs">Global CDN &amp; Firewall</div>
                    <div className="text-[10px] text-slate-500">Blocks spam &bull; SSL encrypted</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#040810] border border-white/5 space-y-1">
                    <div className="text-[10px] text-[#10B981] font-bold">AUTOMATIC SCALE</div>
                    <div className="text-white font-semibold text-xs">Smart Serverless Setup</div>
                    <div className="text-[10px] text-slate-500">Handles busy traffic easily</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#040810] border border-white/5 space-y-1">
                    <div className="text-[10px] text-[#FF6B00] font-bold">SAFE DATA STORAGE</div>
                    <div className="text-white font-semibold text-xs">Organized Databases</div>
                    <div className="text-[10px] text-slate-500">Encrypted &bull; Never shared</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#040810] border border-white/5 space-y-1">
                    <div className="text-[10px] text-[#A855F7] font-bold">PEACE OF MIND</div>
                    <div className="text-white font-semibold text-xs">Daily Auto Backups</div>
                    <div className="text-[10px] text-slate-500">Restore in minutes if needed</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-300 text-[11px] leading-relaxed">
                  <strong className="text-white">You Own Everything:</strong> All cloud services, databases, and code repositories are created directly in your company’s accounts (AWS / Google Cloud / Cloudflare). You hold 100% ownership from day one.
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
