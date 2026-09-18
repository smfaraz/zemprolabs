import React from 'react';
import {
  Workflow,
  Search,
  ChevronDown
} from 'lucide-react';

interface ServiceNowPolarisDashboardProps {
  displayedValue: number;
  isGrowing: boolean;
  reachedPeak: boolean;
  isProcessing: boolean;
  showFinale: boolean;
  onTriggerRemediation: () => void;
}

export const ServiceNowPolarisDashboard: React.FC<ServiceNowPolarisDashboardProps> = ({
  displayedValue,
  isGrowing,
  reachedPeak,
  isProcessing,
  showFinale,
  onTriggerRemediation
}) => {
  const currentResolutionPct = (displayedValue / 10).toFixed(1);
  const incidentsResolvedCount = Math.round(48250 * (displayedValue / 984)).toLocaleString();
  const criticalOutagesCount = isGrowing
    ? reachedPeak
      ? 0
      : Math.max(0, 14 - Math.round(14 * (displayedValue / 984)))
    : 14;
  const slaCompliancePct = isGrowing
    ? (72 + Math.round(27.8 * (displayedValue / 984))) + '%'
    : '72.4%';

  return (
    <div className="relative bg-[#F8FAFC] text-slate-900 w-full h-full flex flex-col justify-between overflow-hidden text-left font-sans">
      {/* 1. ServiceNow Next Experience (Polaris) Top Banner */}
      <div className="bg-[#032D42] text-white px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center justify-between shrink-0 border-b border-[#054363]">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* ServiceNow Logo Emblem */}
          <div className="flex items-center gap-1 sm:gap-1.5 font-bold tracking-tight text-[10px] sm:text-xs text-white">
            <div className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full border border-emerald-400 flex items-center justify-center">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400" />
            </div>
            <span>ServiceNow</span>
          </div>

          {/* Polaris Top Nav Menu Items */}
          <div className="hidden sm:flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-300 font-medium pl-2 border-l border-white/15">
            <span className="text-white hover:text-emerald-300 cursor-pointer">All</span>
            <span className="hover:text-white cursor-pointer">Favorites</span>
            <span className="hover:text-white cursor-pointer">History</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-0.5 cursor-pointer">
              Workspaces <ChevronDown className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Filter Search & User Profile */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="hidden md:flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 text-[9px] sm:text-[10px] text-slate-300 border border-white/10">
            <Search className="w-2.5 h-2.5 text-slate-400" />
            <span className="font-mono text-slate-300">incident.list</span>
          </div>
          <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">corp-prod.service-now.com</span>
            <span className="sm:hidden text-[8px]">PROD</span>
          </div>
        </div>
      </div>

      {/* 2. Workspace Breadcrumbs & Action Toolbar */}
      <div className="bg-[#0A3D56] text-white px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center justify-between shrink-0 text-[9px] sm:text-[10px]">
        <div className="flex items-center gap-1 text-slate-200">
          <span className="hidden sm:inline text-slate-400">Service Operations Workspace / </span>
          <span className="text-white font-semibold">Incident Queue</span>
          <span className="ml-1 sm:ml-1.5 px-1 sm:px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 font-mono text-[8px] sm:text-[9px] font-bold border border-red-500/30">
            {reachedPeak ? '0 P1' : isGrowing ? 'Auto-Remediating' : '14 P1'}
          </span>
        </div>

        {/* Interactive Button right on the desktop toolbar! */}
        <button
          type="button"
          onClick={onTriggerRemediation}
          disabled={isProcessing || isGrowing || reachedPeak || showFinale}
          className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-mono text-[8px] xs:text-[9px] sm:text-[10px] shadow-sm transition-all active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
        >
          <Workflow className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
          <span>
            {reachedPeak
              ? 'Remediated (98.4%)'
              : isGrowing
              ? 'Healing...'
              : '⚡ Auto-Remediate Fleet'}
          </span>
        </button>
      </div>

      {/* 3. ITSM Performance Analytics KPI Cards */}
      <div className="p-1.5 sm:p-2.5 grid grid-cols-3 gap-1.5 sm:gap-2 shrink-0 bg-[#F1F5F9] border-b border-slate-200">
        {/* KPI 1 */}
        <div className="p-1.5 sm:p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
          <div className="text-[7.5px] xs:text-[8px] sm:text-[9px] font-mono font-medium text-slate-500 uppercase tracking-wider truncate">
            Critical P1 Queue
          </div>
          <div className="mt-0.5 flex items-baseline gap-1">
            <span
              className={`text-sm xs:text-base sm:text-xl font-bold font-display ${
                reachedPeak ? 'text-emerald-600' : isGrowing ? 'text-amber-600' : 'text-red-600'
              }`}
            >
              {criticalOutagesCount}
            </span>
            <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-mono text-slate-500 truncate">
              {reachedPeak ? '0 active' : 'active'}
            </span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="p-1.5 sm:p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
          <div className="text-[7.5px] xs:text-[8px] sm:text-[9px] font-mono font-medium text-slate-500 uppercase tracking-wider truncate">
            SLA Compliance
          </div>
          <div className="mt-0.5 flex items-baseline gap-1">
            <span className="text-sm xs:text-base sm:text-xl font-bold font-display text-emerald-600">
              {slaCompliancePct}
            </span>
            <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-mono text-slate-500 truncate">
              {reachedPeak ? 'Target Met' : '14m risk'}
            </span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="p-1.5 sm:p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
          <div className="text-[7.5px] xs:text-[8px] sm:text-[9px] font-mono font-medium text-slate-500 uppercase tracking-wider truncate">
            Auto-Resolution
          </div>
          <div className="mt-0.5 flex items-baseline gap-1">
            <span className="text-sm xs:text-base sm:text-xl font-bold font-display text-emerald-600">
              {currentResolutionPct}%
            </span>
            <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-mono text-slate-500 truncate">
              {reachedPeak ? `${incidentsResolvedCount} Clsd` : 'Goal 98.4%'}
            </span>
          </div>
        </div>
      </div>

      {/* 4. Real Incident Data Table (`incident.do`) */}
      <div className="flex-1 p-1.5 sm:p-2.5 md:p-3 pr-28 xs:pr-32 sm:pr-2.5 md:pr-3 overflow-hidden bg-white flex flex-col justify-between">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[8px] sm:text-[10px] border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-[7.5px] sm:text-[9px] font-mono text-slate-500 uppercase tracking-wider bg-slate-50/70">
                <th className="hidden xs:table-cell py-0.5 sm:py-1 px-1 sm:px-1.5 w-5 sm:w-6 text-center">
                  <input type="checkbox" defaultChecked className="rounded text-emerald-600 scale-75 sm:scale-100" readOnly />
                </th>
                <th className="py-0.5 sm:py-1 px-1 sm:px-2">Number</th>
                <th className="py-0.5 sm:py-1 px-1 sm:px-2">Priority</th>
                <th className="py-0.5 sm:py-1 px-1 sm:px-2">State</th>
                <th className="py-0.5 sm:py-1 px-1 sm:px-2">Short Description</th>
                <th className="py-0.5 sm:py-1 px-1 sm:px-2 hidden md:table-cell">Assignment Group</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* Row 1 */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="hidden xs:table-cell py-0.5 sm:py-1 px-1 sm:px-1.5 text-center">
                  <input type="checkbox" defaultChecked className="rounded text-emerald-600 scale-75 sm:scale-100" readOnly />
                </td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2 font-mono font-bold text-slate-900">INC0048291</td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2">
                  <span className="px-1 sm:px-1.5 py-0.5 rounded bg-red-100 text-red-700 font-mono text-[7px] sm:text-[8px] font-bold">
                    P1
                  </span>
                </td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2">
                  <span
                    className={`px-1 sm:px-1.5 py-0.5 rounded font-mono text-[7px] sm:text-[8px] font-medium ${
                      reachedPeak
                        ? 'bg-emerald-100 text-emerald-800'
                        : isGrowing
                        ? 'bg-amber-100 text-amber-800 animate-pulse'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {reachedPeak
                      ? 'Closed'
                      : isGrowing
                      ? 'Healing...'
                      : 'In Progress'}
                  </span>
                </td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2 text-slate-800 font-medium truncate max-w-[85px] xs:max-w-[130px] sm:max-w-[200px]">
                  SAP ERP Gateway: Settlement Timeout
                </td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2 text-slate-500 hidden md:table-cell font-mono text-[9px]">
                  Cloud SRE &amp; Ops
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="hidden xs:table-cell py-0.5 sm:py-1 px-1 sm:px-1.5 text-center">
                  <input type="checkbox" defaultChecked className="rounded text-emerald-600 scale-75 sm:scale-100" readOnly />
                </td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2 font-mono font-bold text-slate-900">INC0048288</td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2">
                  <span className="px-1 sm:px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-mono text-[7px] sm:text-[8px] font-bold">
                    P2
                  </span>
                </td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2">
                  <span
                    className={`px-1 sm:px-1.5 py-0.5 rounded font-mono text-[7px] sm:text-[8px] font-medium ${
                      reachedPeak
                        ? 'bg-emerald-100 text-emerald-800'
                        : isGrowing
                        ? 'bg-amber-100 text-amber-800 animate-pulse'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {reachedPeak ? 'Closed' : isGrowing ? 'Auto-Triage' : 'New'}
                  </span>
                </td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2 text-slate-800 font-medium truncate max-w-[85px] xs:max-w-[130px] sm:max-w-[200px]">
                  Okta Multi-Tenant SSO Degraded
                </td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2 text-slate-500 hidden md:table-cell font-mono text-[9px]">
                  Identity Ops
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="hidden xs:table-cell py-0.5 sm:py-1 px-1 sm:px-1.5 text-center">
                  <input type="checkbox" defaultChecked className="rounded text-emerald-600 scale-75 sm:scale-100" readOnly />
                </td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2 font-mono font-bold text-slate-900">INC0048274</td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2">
                  <span className="px-1 sm:px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-mono text-[7px] sm:text-[8px] font-bold">
                    P2
                  </span>
                </td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2">
                  <span
                    className={`px-1 sm:px-1.5 py-0.5 rounded font-mono text-[7px] sm:text-[8px] font-medium ${
                      reachedPeak
                        ? 'bg-emerald-100 text-emerald-800'
                        : isGrowing
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {reachedPeak ? 'Closed' : isGrowing ? 'Self-Healed' : 'Pending'}
                  </span>
                </td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2 text-slate-800 font-medium truncate max-w-[85px] xs:max-w-[130px] sm:max-w-[200px]">
                  Kafka Consumer Lag &gt; 10k
                </td>
                <td className="py-0.5 sm:py-1 px-1 sm:px-2 text-slate-500 hidden md:table-cell font-mono text-[9px]">
                  Data Platform
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Console Activity Status */}
        <div className="pt-1 sm:pt-2 border-t border-slate-100 flex items-center justify-between text-[7.5px] xs:text-[8px] sm:text-[9px] font-mono text-slate-500">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <span
              className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${
                isGrowing
                  ? 'bg-emerald-500 animate-ping'
                  : reachedPeak
                  ? 'bg-emerald-500'
                  : 'bg-slate-400'
              }`}
            />
            <span className="text-slate-700 font-medium truncate max-w-[140px] xs:max-w-[220px] sm:max-w-none">
              {reachedPeak
                ? 'Zero-Touch: 98.4% Rate (48,250 Closed)'
                : isGrowing
                ? 'Flow Designer Self-Healing 14 Workflows...'
                : 'Manual Queue: 0.0% Auto-Deflection'}
            </span>
          </div>
          <span className="hidden xs:inline text-emerald-600 font-bold">
            {reachedPeak ? 'ALL RESOLVED' : 'Flow Ready'}
          </span>
        </div>
      </div>
    </div>
  );
};
