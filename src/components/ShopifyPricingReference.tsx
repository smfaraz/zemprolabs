import React from 'react';
import { shopifyPlanReferences } from '../data/maintenancePlans';
import { ExternalLink, ShoppingBag, Info, Check } from 'lucide-react';

export const ShopifyPricingReference: React.FC = () => {
  return (
    <div className="rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] p-6 sm:p-8 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[rgba(148,163,184,0.12)] gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] uppercase tracking-wider mb-1">
            <ShoppingBag className="w-4 h-4" />
            <span>PLATFORM COST REFERENCE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Official Shopify Platform Plans (India Reference)
          </h3>
          <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
            Shopify subscription pricing is paid directly by your business to Shopify Inc.
          </p>
        </div>
        <a
          href="https://www.shopify.com/in/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#05070D] text-xs font-mono text-white border border-[rgba(148,163,184,0.2)] hover:border-[#10B981] transition-colors w-fit shrink-0"
        >
          <span>Verify Current Shopify Pricing</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#10B981]" />
        </a>
      </div>

      {/* 4 Plans Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {shopifyPlanReferences.map((plan, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.1)] flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono text-[#FF6B00] font-semibold mb-1">
                {plan.name}
              </div>
              <div className="text-xl font-bold font-display text-white mb-0.5">
                {plan.annualMonthlyINR}
              </div>
              <div className="text-[11px] font-mono text-[#94A3B8] mb-3">
                Monthly billing: {plan.monthlyINR}
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                {plan.bestFor}
              </p>

              <div className="space-y-2 pt-3 border-t border-[rgba(148,163,184,0.08)] mb-4">
                {plan.features.map((f, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-[#F8FAFC]">
                    <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[10px] font-mono text-[#94A3B8] pt-2 border-t border-white/5">
              Billed directly by Shopify
            </div>
          </div>
        ))}
      </div>

      {/* Mandatory Regulatory & Transparency Disclaimer */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#94A3B8] leading-relaxed flex items-start gap-3">
        <Info className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p>
            <strong>Important Transparency Notice:</strong> Shopify subscription pricing is paid directly to Shopify and may change. Third-party payment-provider fees (e.g. Stripe, Razorpay), paid apps, custom domains, and logistics integrations may create additional costs.
          </p>
          <p>
            Zemprolabs professional service fees (storefront design, custom theme development, Liquid engineering, catalog setup, and ongoing store operations) are completely separate from Shopify subscription fees. Prices shown are based on Shopify India's current published reference pricing and should be verified at{' '}
            <a
              href="https://www.shopify.com/in/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6B00] underline"
            >
              shopify.com/in/pricing
            </a>{' '}
            prior to purchase.
          </p>
        </div>
      </div>
    </div>
  );
};
