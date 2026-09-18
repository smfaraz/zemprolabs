import React from 'react';
import { Check, Minus } from 'lucide-react';

export const ServiceComparisonTable: React.FC = () => {
  const rows = [
    { service: 'Custom Website / Web App', build: '✓', maintain: '✓', manage: '✓' },
    { service: 'Shopify Storefront', build: '✓', maintain: '✓', manage: '✓' },
    { service: 'Firebase / Cloud Backend', build: '✓', maintain: '✓', manage: '✓' },
    { service: 'Product & Content Updates', build: 'Optional', maintain: 'Optional', manage: '✓' },
    { service: 'Technical & Uptime Monitoring', build: 'Optional', maintain: '✓', manage: '✓' },
    { service: 'Day-to-Day Store Operations', build: '—', maintain: 'Optional', manage: '✓' },
    { service: 'Continuous UX & Conversion Iterations', build: '—', maintain: 'Optional', manage: '✓' }
  ];

  const renderStatus = (val: string, col: string) => {
    if (val === '✓') {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#10B981]/20 text-[#10B981]">
          <Check className="w-4 h-4 stroke-[3]" />
        </span>
      );
    }
    if (val === '—') {
      return (
        <span className="text-[#94A3B8] font-mono">
          <Minus className="w-4 h-4 mx-auto opacity-40" />
        </span>
      );
    }
    return (
      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-[#94A3B8]">
        {val}
      </span>
    );
  };

  return (
    <div className="rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] p-4 sm:p-6 md:p-8 shadow-xl space-y-6">
      <div className="text-left space-y-2">
        <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider">
          // SERVICE COVERAGE MATRIX
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
          Compare Our Delivery Models
        </h3>
        <p className="text-xs sm:text-sm text-[#94A3B8]">
          Choose whether you need a one-time build, routine technical care, or end-to-end managed storefront operations.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[580px]">
          <thead>
            <tr className="border-b border-[rgba(148,163,184,0.15)] text-xs font-mono text-[#94A3B8]">
              <th className="py-4 px-4 font-semibold text-white">Capability / Deliverable</th>
              <th className="py-4 px-4 text-center text-[#FF6B00] font-bold">BUILD</th>
              <th className="py-4 px-4 text-center text-[#004AAD] font-bold">MAINTAIN</th>
              <th className="py-4 px-4 text-center text-[#10B981] font-bold">MANAGE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(148,163,184,0.08)] text-xs sm:text-sm">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-4 font-medium text-white">{row.service}</td>
                <td className="py-3.5 px-4 text-center">{renderStatus(row.build, 'build')}</td>
                <td className="py-3.5 px-4 text-center">{renderStatus(row.maintain, 'maintain')}</td>
                <td className="py-3.5 px-4 text-center">{renderStatus(row.manage, 'manage')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
