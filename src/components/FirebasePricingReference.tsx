import React from 'react';
import { ExternalLink, Database, Server, Cpu, ShieldCheck } from 'lucide-react';

export const FirebasePricingReference: React.FC = () => {
  return (
    <div className="rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[rgba(148,163,184,0.12)] gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B] uppercase tracking-wider mb-1">
            <Database className="w-4 h-4" />
            <span>CLOUD INFRASTRUCTURE TRANSPARENCY</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Google Firebase Infrastructure Costs
          </h3>
        </div>
        <a
          href="https://firebase.google.com/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#05070D] text-xs font-mono text-white border border-[rgba(148,163,184,0.2)] hover:border-[#F59E0B] transition-colors w-fit shrink-0"
        >
          <span>View Current Firebase Pricing</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#F59E0B]" />
        </a>
      </div>

      <div className="space-y-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
        <p className="text-white font-medium">
          Firebase infrastructure is billed directly by Google based on actual usage. Eligible services include generous no-cost quotas (Spark Plan), while higher production usage is charged according to Google's current pay-as-you-go pricing (Blaze Plan).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.1)]">
            <div className="text-white font-bold text-xs sm:text-sm font-display mb-1 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>No-Cost Tier Included</span>
            </div>
            <p className="text-[11px] text-[#94A3B8]">
              Up to 50k document reads/day on Cloud Firestore, 10k phone authentications/month, and 5GB cloud storage at no initial infrastructure cost.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.1)]">
            <div className="text-white font-bold text-xs sm:text-sm font-display mb-1 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Pay Only What You Consume</span>
            </div>
            <p className="text-[11px] text-[#94A3B8]">
              Automatic scale-down to zero when idle. You never pay for idle servers or pre-allocated hardware capacity.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.1)]">
            <div className="text-white font-bold text-xs sm:text-sm font-display mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Direct Billing Account</span>
            </div>
            <p className="text-[11px] text-[#94A3B8]">
              Infrastructure costs are billed to your Google Cloud billing account directly with zero markup from Zemprolabs.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-[#94A3B8] font-mono">
          <strong>Notice:</strong> We do NOT advertise Firebase as a fixed monthly charge. Zemprolabs fees cover backend engineering, database schema architecture, Cloud Functions security rules, and ongoing database maintenance. Google infrastructure consumption is billed independently by Google.
        </div>
      </div>
    </div>
  );
};
