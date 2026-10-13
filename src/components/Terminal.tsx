import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Cpu, Activity, Layers, CheckCircle2 } from 'lucide-react';

type TabKey = 'SYSTEM' | 'METRICS' | 'ARCHITECTURE' | 'STATUS';

export const Terminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('SYSTEM');
  const [logs, setLogs] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const systemLogs = [
    '> initializing zemprolabs unified digital pipeline...',
    '> runtime check: node.js & react 19 verified [OK]',
    '> commerce engine: multi-currency routing enabled',
    '> enterprise gateway: servicenow sync ready',
    '> core web vitals target: lcp < 0.8s, cls = 0.00',
    '> single partner architecture engaged: 0 3rd-party vendors',
    '> status: ALL DISCIPLINE SYSTEMS OPERATIONAL [100%]'
  ];

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setLogs(systemLogs);
      return;
    }

    setLogs([]);
    setIsTyping(true);

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < systemLogs.length) {
        const nextLog = systemLogs[currentIndex];
        setLogs((prev) => [...prev, nextLog]);
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="w-full rounded-xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Terminal Titlebar & Tabs */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#080B12] border-b border-[rgba(148,163,184,0.12)] gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block"></span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8]">
            <TerminalIcon className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>zemprolabs-cli // v2.6</span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-[#05070D] p-1 rounded-lg border border-[rgba(148,163,184,0.1)]">
          <button
            type="button"
            onClick={() => setActiveTab('SYSTEM')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono transition-colors ${
              activeTab === 'SYSTEM'
                ? 'bg-[#FF6B00] text-black font-semibold'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <Cpu className="w-3 h-3" />
            <span>SYSTEM</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('METRICS')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono transition-colors ${
              activeTab === 'METRICS'
                ? 'bg-[#FF6B00] text-black font-semibold'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <Activity className="w-3 h-3" />
            <span>METRICS</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ARCHITECTURE')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono transition-colors ${
              activeTab === 'ARCHITECTURE'
                ? 'bg-[#FF6B00] text-black font-semibold'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>ARCH</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('STATUS')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono transition-colors ${
              activeTab === 'STATUS'
                ? 'bg-[#FF6B00] text-black font-semibold'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-3 h-3" />
            <span>STATUS</span>
          </button>
        </div>
      </div>

      {/* Terminal Viewport Content */}
      <div className="p-5 font-mono text-xs sm:text-sm min-h-[260px] max-h-[340px] overflow-y-auto">
        {activeTab === 'SYSTEM' && (
          <div className="space-y-2">
            {logs.map((log, i) => (
              <div
                key={i}
                className={`leading-relaxed ${
                  log.includes('[100%]')
                    ? 'text-[#10B981] font-semibold'
                    : log.includes('0 3rd-party')
                    ? 'text-[#FF6B00]'
                    : 'text-[#94A3B8]'
                }`}
              >
                {log}
              </div>
            ))}
            {isTyping && (
              <div className="inline-block w-2 h-4 bg-[#FF6B00] animate-pulse align-middle"></div>
            )}
          </div>
        )}

        {activeTab === 'METRICS' && (
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.12)]">
              <div className="text-[#94A3B8] text-[11px] mb-1">CORE WEB VITALS</div>
              <div className="text-xl font-bold font-display text-[#10B981]">LCP &lt; 0.8s</div>
              <div className="text-[10px] text-[#94A3B8] mt-1">High-speed catalog loading</div>
            </div>
            <div className="p-3 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.12)]">
              <div className="text-[#94A3B8] text-[11px] mb-1">RESPONSE SLA</div>
              <div className="text-xl font-bold font-display text-white">&lt; 24 Hours</div>
              <div className="text-[10px] text-[#94A3B8] mt-1">Direct technical triage</div>
            </div>
            <div className="p-3 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.12)]">
              <div className="text-[#94A3B8] text-[11px] mb-1">CODEBASE VENDORS</div>
              <div className="text-xl font-bold font-display text-[#FF6B00]">1 Accountable</div>
              <div className="text-[10px] text-[#94A3B8] mt-1">Zero agency fragmentation</div>
            </div>
            <div className="p-3 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.12)]">
              <div className="text-[#94A3B8] text-[11px] mb-1">DEPLOYMENT SECURITY</div>
              <div className="text-xl font-bold font-display text-[#06B6D4]">CI/CD Staged</div>
              <div className="text-[10px] text-[#94A3B8] mt-1">Zero downtime rolling deploys</div>
            </div>
          </div>
        )}

        {activeTab === 'ARCHITECTURE' && (
          <div className="space-y-3 pt-2">
            <div className="text-[#94A3B8] text-xs pb-1 border-b border-[rgba(148,163,184,0.1)]">
              // TOPOLOGY: HEADLESS COMMERCE & ENTERPRISE WORKFLOWS
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded bg-[#05070D] border border-[rgba(148,163,184,0.1)]">
                <span className="text-white font-semibold">Storefront Edge Layer:</span>
                <span className="text-[#FF6B00]">Next.js 15 &bull; Global CDN Edge</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded bg-[#05070D] border border-[rgba(148,163,184,0.1)]">
                <span className="text-white font-semibold">Checkout Pipeline:</span>
                <span className="text-[#06B6D4]">Stripe / Multi-Currency Routing</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded bg-[#05070D] border border-[rgba(148,163,184,0.1)]">
                <span className="text-white font-semibold">Enterprise Operations:</span>
                <span className="text-[#10B981]">ServiceNow Automation & APIs</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'STATUS' && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-[#10B981] font-semibold text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping"></span>
              <span>ALL PRODUCTION INFRASTRUCTURE HEALTHY</span>
            </div>
            <div className="p-3 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.12)] space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">Dedicated Technical Lead:</span>
                <span className="text-white font-semibold">Assigned Onboarding</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">Sprint Cadence:</span>
                <span className="text-white">2-Week Agile Deliverables</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">Repository Access:</span>
                <span className="text-[#10B981]">Direct GitHub & Staging Previews</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="px-4 py-2 bg-[#05070D] border-t border-[rgba(148,163,184,0.1)] flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
          <span>DISCIPLINE: SOFTWARE &bull; COMMERCE &bull; ENTERPRISE</span>
        </div>
        <span className="text-[#FF6B00] font-semibold">ZEMPROLABS RUNTIME</span>
      </div>
    </div>
  );
};
