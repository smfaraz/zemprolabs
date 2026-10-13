import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Percent, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ROICalculator: React.FC = () => {
  const [visitors, setVisitors] = useState<number>(45000);
  const [currentCR, setCurrentCR] = useState<number>(1.4);
  const [targetCR, setTargetCR] = useState<number>(2.2);
  const [aov, setAov] = useState<number>(78);

  // Transparent calculations
  const currentMonthlyOrders = Math.round(visitors * (currentCR / 100));
  const currentMonthlyRevenue = Math.round(currentMonthlyOrders * aov);
  const currentAnnualRevenue = currentMonthlyRevenue * 12;

  const projectedMonthlyOrders = Math.round(visitors * (targetCR / 100));
  const projectedMonthlyRevenue = Math.round(projectedMonthlyOrders * aov);
  const projectedAnnualRevenue = projectedMonthlyRevenue * 12;

  const annualDifference = projectedAnnualRevenue - currentAnnualRevenue;

  return (
    <div className="rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] p-6 sm:p-10 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-[rgba(148,163,184,0.12)] gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#06B6D4] mb-2 uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>E-Commerce Economics</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            E-Commerce Conversion Lift & ROI Calculator
          </h3>
          <p className="text-sm text-[#94A3B8] mt-1">
            Simulate how checkout UX enhancements, sub-second page speed, and conversion optimization impact top-line revenue.
          </p>
        </div>
        <div className="px-3 py-1.5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-xs font-mono shrink-0 flex items-center gap-1.5 w-fit">
          <span>MATHEMATICAL MODEL</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Input Sliders */}
        <div className="space-y-6">
          {/* Monthly Visitors */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono text-[#94A3B8] flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>Monthly Storefront Visitors</span>
              </label>
              <span className="font-mono text-sm font-bold text-white">
                {visitors.toLocaleString()} /mo
              </span>
            </div>
            <input
              type="range"
              min="2000"
              max="500000"
              step="1000"
              value={visitors}
              onChange={(e) => setVisitors(Number(e.target.value))}
              className="w-full accent-[#06B6D4] h-2 bg-[#05070D] rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#94A3B8] mt-1">
              <span>2k</span>
              <span>250k</span>
              <span>500k+</span>
            </div>
          </div>

          {/* Current Conversion Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono text-[#94A3B8] flex items-center gap-1.5">
                <Percent className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Current Baseline Conversion Rate</span>
              </label>
              <span className="font-mono text-sm font-bold text-white">
                {currentCR.toFixed(1)}%
              </span>
            </div>
            <input
              type="range"
              min="0.4"
              max="5.0"
              step="0.1"
              value={currentCR}
              onChange={(e) => {
                const val = Number(e.target.value);
                setCurrentCR(val);
                if (val >= targetCR) setTargetCR(Number((val + 0.5).toFixed(1)));
              }}
              className="w-full accent-[#FF6B00] h-2 bg-[#05070D] rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#94A3B8] mt-1">
              <span>0.4%</span>
              <span>2.5%</span>
              <span>5.0%</span>
            </div>
          </div>

          {/* Target Conversion Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono text-[#94A3B8] flex items-center gap-1.5">
                <Percent className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Target Optimized Conversion Rate</span>
              </label>
              <span className="font-mono text-sm font-bold text-[#10B981]">
                {targetCR.toFixed(1)}% (+{(targetCR - currentCR).toFixed(1)}% lift)
              </span>
            </div>
            <input
              type="range"
              min={(currentCR + 0.1).toFixed(1)}
              max="8.0"
              step="0.1"
              value={targetCR}
              onChange={(e) => setTargetCR(Number(e.target.value))}
              className="w-full accent-[#10B981] h-2 bg-[#05070D] rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#94A3B8] mt-1">
              <span>{(currentCR + 0.1).toFixed(1)}%</span>
              <span>4.0%</span>
              <span>8.0%</span>
            </div>
          </div>

          {/* Average Order Value */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono text-[#94A3B8] flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-[#004AAD]" />
                <span>Average Order Value (AOV)</span>
              </label>
              <span className="font-mono text-sm font-bold text-white">
                ${aov}
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="500"
              step="5"
              value={aov}
              onChange={(e) => setAov(Number(e.target.value))}
              className="w-full accent-[#004AAD] h-2 bg-[#05070D] rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#94A3B8] mt-1">
              <span>$15</span>
              <span>$250</span>
              <span>$500+</span>
            </div>
          </div>
        </div>

        {/* Right: Calculated Outputs */}
        <div className="rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.15)] p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] pb-3 border-b border-[rgba(148,163,184,0.1)]">
              // PROJECTED REVENUE DELTA
            </div>

            {/* Current vs Projected Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3.5 rounded-lg bg-[#0B0F17] border border-[rgba(148,163,184,0.1)]">
                <div className="text-[11px] font-mono text-[#94A3B8] mb-1">CURRENT ANNUAL</div>
                <div className="text-lg sm:text-xl font-bold font-display text-white">
                  ${currentAnnualRevenue.toLocaleString()}
                </div>
                <div className="text-[10px] font-mono text-[#94A3B8] mt-1">
                  ~{currentMonthlyOrders.toLocaleString()} orders/mo
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#0B0F17] border border-[rgba(148,163,184,0.1)]">
                <div className="text-[11px] font-mono text-[#94A3B8] mb-1">PROJECTED ANNUAL</div>
                <div className="text-lg sm:text-xl font-bold font-display text-[#10B981]">
                  ${projectedAnnualRevenue.toLocaleString()}
                </div>
                <div className="text-[10px] font-mono text-[#94A3B8] mt-1">
                  ~{projectedMonthlyOrders.toLocaleString()} orders/mo
                </div>
              </div>
            </div>

            {/* Potential Annual Difference */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#10B981]/15 via-[#0B0F17] to-[#05070D] border border-[#10B981]/30">
              <div className="text-xs font-mono text-[#10B981] font-semibold uppercase tracking-wider mb-1">
                POTENTIAL ANNUAL REVENUE GAIN
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-display text-white">
                +${annualDifference.toLocaleString()}
              </div>
              <div className="text-xs text-[#94A3B8] mt-2">
                Equivalent to an additional{' '}
                <strong className="text-white">
                  +${Math.round(annualDifference / 12).toLocaleString()}/month
                </strong>{' '}
                with zero extra ad spend.
              </div>
            </div>

            {/* Transparent Disclaimer */}
            <div className="text-[11px] text-[#94A3B8] flex items-start gap-1.5 leading-relaxed">
              <HelpCircle className="w-3.5 h-3.5 text-[#94A3B8] shrink-0 mt-0.5" />
              <span>
                <strong>Methodology:</strong> Calculated as: <em>Visitors &times; (Target CR% - Current CR%) &times; AOV &times; 12 months</em>. Projections reflect pure mathematical models and do not guarantee specific commercial outcomes.
              </span>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/contact?service=ecommerce"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#06B6D4] text-black hover:bg-[#22d3ee] transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <span>Scope Headless E-Commerce Optimization</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
