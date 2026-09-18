import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Info, Server, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pricingConfig, PlatformDevOption, AddonOption, EngagementDevOption } from '../data/pricing';

export const ScopeEstimator: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformDevOption>(
    pricingConfig.platformOptions[2] // default Shopify
  );
  const [selectedEngagement, setSelectedEngagement] = useState<EngagementDevOption>(
    pricingConfig.engagementOptions[1] // default Essential Care
  );
  const projectBaseINR = pricingConfig.estimatorBaseBuildINR; // ₹2,50,000
  const projectBaseUSD = pricingConfig.estimatorBaseBuildUSD; // $2,600

  // Add-ons
  const [activeAddons, setActiveAddons] = useState<string[]>(['seo', 'design']);

  const toggleAddon = (id: string) => {
    setActiveAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const addonsTotalINR = pricingConfig.addonOptions
    .filter((a: AddonOption) => activeAddons.includes(a.id))
    .reduce((sum: number, a: AddonOption) => sum + a.costINR, 0);

  const addonsTotalUSD = pricingConfig.addonOptions
    .filter((a: AddonOption) => activeAddons.includes(a.id))
    .reduce((sum: number, a: AddonOption) => sum + a.costUSD, 0);

  const estimatedDevCostINR = projectBaseINR + selectedPlatform.surchargeINR + addonsTotalINR;
  const estimatedDevCostUSD = projectBaseUSD + selectedPlatform.surchargeUSD + addonsTotalUSD;

  const estimatedMonthlyServiceINR = selectedEngagement.monthlyServiceCostINR;
  const estimatedMonthlyServiceUSD = selectedEngagement.monthlyServiceCostUSD;

  // Currency formatters
  const formatINR = (val: number) => '₹' + val.toLocaleString('en-IN');
  const formatUSD = (val: number) => '$' + val.toLocaleString('en-US');

  return (
    <div className="rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] p-6 sm:p-10 shadow-2xl space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[rgba(148,163,184,0.12)] gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF6B00] mb-2 uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>COMMERCIAL SCOPE ENGINE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Build, Platform &amp; Maintenance Cost Estimator
          </h3>
          <p className="text-sm text-[#94A3B8] mt-1">
            Configure your development scope, platform layer, and ongoing management model with transparent USD pricing and INR reference equivalents.
          </p>
        </div>
        <div className="px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-xs font-mono shrink-0 flex items-center gap-1.5 w-fit">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span>ESTIMATOR (USD / INR)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Controls Column (Spans 7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Platform Infrastructure */}
          <div>
            <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>1. Target Platform &amp; Backend Infrastructure</span>
            </label>
            <div className="space-y-2">
              {pricingConfig.platformOptions.map((plat: PlatformDevOption) => (
                <button
                  key={plat.id}
                  type="button"
                  onClick={() => setSelectedPlatform(plat)}
                  className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-center justify-between ${
                    selectedPlatform.id === plat.id
                      ? 'bg-[#05070D] border-[#FF6B00] text-white shadow-[0_0_12px_rgba(255,107,0,0.15)]'
                      : 'bg-[#05070D]/40 border-[rgba(148,163,184,0.1)] text-[#94A3B8] hover:text-white hover:border-white/20'
                  }`}
                >
                  <span className="font-medium">{plat.name}</span>
                  {plat.surchargeUSD > 0 && (
                    <span className="text-right shrink-0 ml-2">
                      <span className="text-xs font-mono font-semibold text-[#FF6B00] block">{plat.displaySurchargeUSD}</span>
                      <span className="text-[10px] font-mono text-[#94A3B8] block">{plat.displaySurcharge} (INR ref)</span>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Engagement Type */}
          <div>
            <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#004AAD]" />
              <span>2. Engagement &amp; Ongoing Operational Support</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {pricingConfig.engagementOptions.map((eng: EngagementDevOption) => (
                <button
                  key={eng.id}
                  type="button"
                  onClick={() => setSelectedEngagement(eng)}
                  className={`p-3 rounded-lg border text-left text-xs transition-all ${
                    selectedEngagement.id === eng.id
                      ? 'bg-[#004AAD] text-white border-[#004AAD] font-semibold shadow-[0_0_15px_rgba(0,74,173,0.3)]'
                      : 'bg-[#05070D] text-[#94A3B8] border-[rgba(148,163,184,0.12)] hover:text-white'
                  }`}
                >
                  <div className="font-bold text-sm mb-1">{eng.name}</div>
                  <div className="text-xs text-white font-mono font-bold mb-0.5">
                    {eng.displayCostUSD}
                  </div>
                  {eng.monthlyServiceCostINR > 0 && (
                    <div className="text-[10px] text-[#94A3B8] font-mono mb-1">
                      {eng.displayCost} (INR reference)
                    </div>
                  )}
                  <div className="text-[11px] opacity-90">{eng.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Add-ons */}
          <div>
            <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2.5">
              3. Architectural Add-ons
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pricingConfig.addonOptions.map((addon: AddonOption) => {
                const checked = activeAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-center justify-between p-2.5 rounded-lg border cursor-pointer text-xs ${
                      checked
                        ? 'bg-[#05070D] border-[#FF6B00]/40 text-white'
                        : 'bg-[#05070D]/40 border-[rgba(148,163,184,0.1)] text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
                          checked
                            ? 'bg-[#FF6B00] border-[#FF6B00] text-black'
                            : 'border-[rgba(148,163,184,0.3)]'
                        }`}
                      >
                        {checked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                      <span>{addon.name}</span>
                    </div>
                    <span className="font-mono text-right shrink-0 ml-1">
                      <span className="text-xs text-white block">{addon.displayCostUSD}</span>
                      <span className="text-[10px] text-[#94A3B8] block">{addon.displayCost} (INR ref)</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Column (Spans 5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.15)] p-6 sm:p-7 space-y-6">
          <div className="space-y-5">
            <div className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] pb-3 border-b border-[rgba(148,163,184,0.1)]">
              // STRUCTURED ESTIMATION BREAKDOWN
            </div>

            {/* 1. Development Cost */}
            <div className="p-3.5 rounded-lg bg-[#0B0F17] border border-[rgba(148,163,184,0.1)]">
              <div className="text-[11px] font-mono text-[#94A3B8] uppercase mb-0.5">
                1. ESTIMATED PROFESSIONAL DEVELOPMENT FEE
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold font-display text-white">
                    {formatUSD(estimatedDevCostUSD)}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#94A3B8] mt-1">
                  {formatINR(estimatedDevCostINR)} — INR reference
                </div>
              </div>
              <div className="text-[11px] text-[#94A3B8] mt-1.5">
                Estimated one-time milestone fee for architecture, development &amp; deployment.
              </div>
            </div>

            {/* 2. Monthly Service */}
            <div className="p-3.5 rounded-lg bg-[#0B0F17] border border-[rgba(148,163,184,0.1)]">
              <div className="text-[11px] font-mono text-[#94A3B8] uppercase mb-0.5">
                2. ESTIMATED MONTHLY ZEMPROLABS SERVICE
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold font-display text-[#10B981]">
                    {formatUSD(estimatedMonthlyServiceUSD)}
                    {estimatedMonthlyServiceUSD > 0 && (
                      <span className="text-xs font-normal text-white">/month</span>
                    )}
                  </span>
                </div>
                {estimatedMonthlyServiceINR > 0 && (
                  <div className="text-xs font-mono text-[#94A3B8] mt-1">
                    {formatINR(estimatedMonthlyServiceINR)}/month — INR reference
                  </div>
                )}
              </div>
              <div className="text-[11px] text-[#94A3B8] mt-1.5">
                {selectedEngagement.id === 'one_time'
                  ? 'No recurring fee (Codebase delivered to client)'
                  : `${selectedEngagement.name} support retainer.`}
              </div>
            </div>

            {/* 3. Third-Party Platform Cost */}
            <div className="p-3.5 rounded-lg bg-[#0B0F17] border border-[rgba(148,163,184,0.1)]">
              <div className="text-[11px] font-mono text-[#94A3B8] uppercase mb-0.5">
                3. THIRD-PARTY PLATFORM &amp; INFRASTRUCTURE COST
              </div>
              <div className="text-xs font-semibold text-white mt-1">
                {selectedPlatform.platformCostNote}
              </div>
              <div className="text-[10px] text-[#94A3B8] mt-1 font-mono">
                {selectedPlatform.provider === 'Shopify'
                  ? 'Billed directly by Shopify Inc. (Separate from Zemprolabs fees).'
                  : selectedPlatform.provider === 'Google'
                  ? 'Billed directly by Google on actual consumption (Generous free tier included).'
                  : selectedPlatform.provider === 'Hosting'
                  ? 'Billed directly by your server/cloud hosting provider.'
                  : 'Zero third-party infrastructure cost.'}
              </div>
            </div>

            {/* Notice */}
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-[#94A3B8] flex items-start gap-2 leading-relaxed">
              <Info className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 mt-0.5" />
              <span>
                Final proposal confirms exact milestones following initial technical assessment. Third-party infrastructure and subscription costs are paid directly to providers.
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-[rgba(148,163,184,0.1)]">
            <Link
              to={`/contact?service=development&engagement=${selectedEngagement.id}`}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)]"
            >
              <span>Submit Project Scope</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
