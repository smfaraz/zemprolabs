import React from 'react';
import { CreditCard, Code, Server, CheckCircle2, ShieldCheck } from 'lucide-react';

export const CostTransparencySection: React.FC = () => {
  return (
    <div className="rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] p-6 sm:p-10 shadow-xl space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ZERO HIDDEN FEES &bull; 100% TRANSPARENCY</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
          What You Pay For
        </h3>
        <p className="text-xs sm:text-sm text-[#94A3B8]">
          We believe in total financial clarity. We separate third-party platform infrastructure fees from Zemprolabs professional service rates so you never pay opaque agency markups.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Box 1: Platform & Infrastructure Costs */}
        <div className="p-6 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.12)] space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[rgba(148,163,184,0.1)]">
            <div className="w-9 h-9 rounded-lg bg-[#004AAD]/20 flex items-center justify-center text-[#004AAD]">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#004AAD] uppercase">DIRECT TO PROVIDERS</span>
              <h4 className="text-base sm:text-lg font-bold font-display text-white">
                Your Platform &amp; Hosting Costs
              </h4>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            These are subscription or usage fees paid directly by your company to the infrastructure providers under your own billing accounts:
          </p>

          <ul className="space-y-2.5 text-xs text-[#F8FAFC]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#004AAD] shrink-0 mt-0.5" />
              <span><strong>Shopify Subscription:</strong> Billed directly by Shopify Inc. based on your chosen tier.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#004AAD] shrink-0 mt-0.5" />
              <span><strong>Google Firebase / Cloud:</strong> Billed by Google on actual consumption beyond free quotas.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#004AAD] shrink-0 mt-0.5" />
              <span><strong>Custom Domains:</strong> Billed by your domain registrar (Namecheap, Cloudflare, etc.).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#004AAD] shrink-0 mt-0.5" />
              <span><strong>Payment Gateways:</strong> Standard per-transaction fees charged by Stripe, Razorpay, or PayPal.</span>
            </li>
          </ul>
        </div>

        {/* Box 2: Zemprolabs Professional Services */}
        <div className="p-6 rounded-xl bg-[#05070D] border border-[rgba(255,107,0,0.25)] space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[rgba(148,163,184,0.1)]">
            <div className="w-9 h-9 rounded-lg bg-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#FF6B00] uppercase">PAID TO ZEMPROLABS</span>
              <h4 className="text-base sm:text-lg font-bold font-display text-white">
                Our Professional Services
              </h4>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            These are engineering and management fees paid to Zemprolabs for expert human labor, strategy, and continuous care:
          </p>

          <ul className="space-y-2.5 text-xs text-[#F8FAFC]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
              <span><strong>Custom Development:</strong> Writing clean frontend and backend code, schemas, and APIs.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
              <span><strong>Store Configuration:</strong> Theme customization, app setups, shipping rules, and payment pipelines.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
              <span><strong>Ongoing Maintenance:</strong> Security updates, bug fixes, uptime monitoring, and Core Web Vitals.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
              <span><strong>E-Commerce Operations:</strong> Uploading products, setting up discounts, and designing banners.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
