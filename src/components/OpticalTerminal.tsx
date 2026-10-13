import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Cpu, Activity, Layers, Sparkles, ShieldCheck } from 'lucide-react';

interface OpticalTerminalProps {
  onEmitterPositionUpdate?: (x: number, y: number) => void;
  targetAngle?: number;
}

type TabKey = 'SYSTEM' | 'METRICS' | 'ARCHITECTURE';

export const OpticalTerminal: React.FC<OpticalTerminalProps> = ({
  onEmitterPositionUpdate,
  targetAngle = 180
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('SYSTEM');
  const [logs, setLogs] = useState<string[]>([]);
  const emitterRef = useRef<HTMLDivElement>(null);

  const systemLogs = [
    '> optical inspector: BEAM EMITTER ONLINE [100%]',
    '> tracking mode: 0-LATENCY REALTIME POINTER [ACTIVE]',
    '> runtime check: node.js 22 & react 19 verified [OK]',
    '> architecture: strict types, 0 third-party bloat',
    '> mission: reveal verified production blueprints'
  ];

  useEffect(() => {
    setLogs(systemLogs);
  }, [activeTab]);

  // Update emitter position whenever layout renders or resizes
  useEffect(() => {
    const updatePosition = () => {
      if (!emitterRef.current) return;
      const rect = emitterRef.current.getBoundingClientRect();
      const parentRect = emitterRef.current.closest('section')?.getBoundingClientRect();
      if (parentRect && onEmitterPositionUpdate) {
        const x = rect.left + rect.width / 2 - parentRect.left;
        const y = rect.top + rect.height / 2 - parentRect.top;
        onEmitterPositionUpdate(x, y);
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    const interval = setInterval(updatePosition, 1000);
    return () => {
      window.removeEventListener('resize', updatePosition);
      clearInterval(interval);
    };
  }, [onEmitterPositionUpdate]);

  return (
    <div className="w-full rounded-2xl bg-[#080C14] border border-[rgba(148,163,184,0.2)] shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300 relative group">
      {/* Terminal Titlebar with Optical Emitter Lens */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#05070D] border-b border-[rgba(148,163,184,0.14)] gap-2">
        <div className="flex items-center gap-3">
          {/* macOS window dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block"></span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8]">
            <TerminalIcon className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span className="text-white font-medium">zempro-cli // beam-scanner v3</span>
          </div>
        </div>

        {/* The Physical Optical Lens / Beam Emitter Aperture */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[10px] font-mono text-[#FF6B00]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse"></span>
            <span>BEAM ACTIVE</span>
          </div>

          {/* Glowing Optical Lens Aperture */}
          <div
            ref={emitterRef}
            className="w-5 h-5 rounded-full bg-[#FF6B00] flex items-center justify-center shadow-[0_0_15px_#FF6B00] border-2 border-white relative cursor-crosshair"
            title="Optical Projector Aperture"
          >
            <div
              className="w-1.5 h-1.5 rounded-full bg-white transition-transform duration-75"
              style={{
                transform: `rotate(${targetAngle}deg) translateX(2px)`
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#06090F] border-b border-[rgba(148,163,184,0.08)] text-xs font-mono">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('SYSTEM')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'SYSTEM'
                ? 'bg-[#FF6B00] text-black font-semibold'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            SYSTEM
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('METRICS')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'METRICS'
                ? 'bg-[#FF6B00] text-black font-semibold'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            METRICS
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ARCHITECTURE')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'ARCHITECTURE'
                ? 'bg-[#FF6B00] text-black font-semibold'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            ARCH
          </button>
        </div>

        <div className="text-[11px] font-mono text-[#10B981] flex items-center gap-1">
          <ShieldCheck className="w-3 h-3" />
          <span>INSPECTOR READY</span>
        </div>
      </div>

      {/* Terminal Screen Content */}
      <div className="p-4 sm:p-5 font-mono text-xs space-y-2 min-h-[220px] bg-[#070B13]/90">
        {activeTab === 'SYSTEM' && (
          <div className="space-y-1.5">
            {logs.map((log, i) => (
              <div
                key={i}
                className={
                  log.includes('[100%]') || log.includes('[ACTIVE]')
                    ? 'text-[#10B981]'
                    : log.includes('zemprolabs')
                    ? 'text-[#FF6B00]'
                    : 'text-[#94A3B8]'
                }
              >
                {log}
              </div>
            ))}
            <div className="pt-2 text-[11px] text-[#64748B] flex items-center gap-1.5 border-t border-[rgba(148,163,184,0.1)]">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping"></span>
              <span>Light beam tracks your cursor with 0 delay. Aim across the hero to reveal hidden blueprints.</span>
            </div>
          </div>
        )}

        {activeTab === 'METRICS' && (
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.1)]">
              <div className="text-[#94A3B8] text-[10px]">CORE WEB VITALS</div>
              <div className="text-[#10B981] font-bold text-sm">LCP &lt; 0.65s</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.1)]">
              <div className="text-[#94A3B8] text-[10px]">MONITORED UPTIME</div>
              <div className="text-[#38BDF8] font-bold text-sm">99.98% SLA</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.1)]">
              <div className="text-[#94A3B8] text-[10px]">CLIENT VOLUME</div>
              <div className="text-[#FF6B00] font-bold text-sm">$4.2M+ Scaled</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.1)]">
              <div className="text-[#94A3B8] text-[10px]">CODE OWNERSHIP</div>
              <div className="text-white font-bold text-sm">100% Client IP</div>
            </div>
          </div>
        )}

        {activeTab === 'ARCHITECTURE' && (
          <div className="space-y-2 text-[11px] text-[#94A3B8]">
            <div className="flex items-center justify-between text-white pb-1 border-b border-[rgba(148,163,184,0.1)]">
              <span>PLATFORM ENGINE:</span>
              <span className="text-[#FF6B00]">HYBRID REACT 19 / NEXT.JS</span>
            </div>
            <div className="flex items-center justify-between">
              <span>COMMERCE GATEWAY:</span>
              <span className="text-[#10B981]">SHOPIFY PLUS &amp; HEADLESS</span>
            </div>
            <div className="flex items-center justify-between">
              <span>CLOUD TELEMETRY:</span>
              <span className="text-[#38BDF8]">FIREBASE &amp; AWS EDGE</span>
            </div>
            <div className="flex items-center justify-between">
              <span>SLA ESCALATION:</span>
              <span className="text-[#A855F7]">&lt; 24H DIRECT CHANNEL</span>
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="px-4 py-2 bg-[#05070D] border-t border-[rgba(148,163,184,0.12)] flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
          <span>EMITTER APERTURE: ONLINE</span>
        </span>
        <span className="text-[#FF6B00]">AIM AT HERO TEXT</span>
      </div>
    </div>
  );
};
