import React, { useState, useEffect, useRef } from 'react';
import {
  Lock,
  ShoppingBag,
  Check,
  Star,
  TrendingUp,
  ArrowUpRight,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Zap,
  Workflow,
  Users,
  ShieldCheck,
  Cpu,
  Layers,
  Search,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceNowPolarisDashboard } from './ServiceNowPolarisDashboard';

export type IndustryMode = 'ecommerce' | 'saas' | 'servicenow';

interface IndustryConfig {
  id: IndustryMode;
  tabLabel: string;
  tabIcon: React.ElementType;
  urlBarDomain: string;
  urlBarPath: string;
  metricHeader: string;
  breakoutBadge: string;
  groundZeroBadge: string;
  groundZeroReadyText: string;
  resetButtonText: string;
  bottomResetText: string;
  bottomStartsAtText: string;
  baselineFooterText: string;
  maxTargetValue: number;
  formatValue: (val: number) => string;
  gainSubtext: (val: number) => string;
  gridTargets: { label: string; tag: string }[];
  trajectoryPoints: Array<{ x: number; y: number; price: number; milestone?: string }>;
  peakStatusText: string;
  growingStatusText: string;
  footerActiveText: string;
  footerPeakText: string;
  cloudBadge: string;
  phoneActionText: string;
  phoneSuccessText: string;
}

const INDUSTRY_CONFIGS: Record<IndustryMode, IndustryConfig> = {
  ecommerce: {
    id: 'ecommerce',
    tabLabel: 'E-Commerce',
    tabIcon: ShoppingBag,
    urlBarDomain: 'growth.scale.io',
    urlBarPath: 'zero-to-millions',
    metricHeader: 'VALUATION & REVENUE TRAJECTORY',
    breakoutBadge: '▲ EXPONENTIAL BREAKOUT',
    groundZeroBadge: '● GROUND ZERO: $0',
    groundZeroReadyText: 'START: $0 (READY)',
    resetButtonText: 'Reset $0',
    bottomResetText: 'Reset to $0',
    bottomStartsAtText: '$0',
    baselineFooterText: 'Ground Zero ($0) — Ready to Launch',
    maxTargetValue: 2485000,
    formatValue: (v) => `$${v.toLocaleString()}`,
    gainSubtext: (v) =>
      v > 0
        ? `+$${v.toLocaleString()} Revenue From Zero`
        : 'Tap Apple Pay on phone to launch',
    gridTargets: [
      { label: '$2,500,000 Milestone Target', tag: 'ATH' },
      { label: '$1,000,000 Series Scale', tag: '75%' },
      { label: '$500,000 High Traction', tag: '50%' },
      { label: '$0 Launch Baseline', tag: '0%' }
    ],
    trajectoryPoints: [
      { x: 0, y: 178, price: 0 },
      { x: 45, y: 178, price: 0 },
      { x: 90, y: 178, price: 0 },
      { x: 135, y: 174, price: 28000 },
      { x: 180, y: 155, price: 185000, milestone: 'First Sale & Launch' },
      { x: 220, y: 158, price: 175000 },
      { x: 265, y: 138, price: 245000 },
      { x: 310, y: 122, price: 340000 },
      { x: 350, y: 125, price: 320000 },
      { x: 395, y: 95, price: 580000, milestone: 'Multi-Region Scale' },
      { x: 440, y: 68, price: 920000 },
      { x: 490, y: 42, price: 1480000, milestone: 'Automated Ops' },
      { x: 535, y: 26, price: 1980000 },
      { x: 580, y: 14, price: 2485000, milestone: 'Market Leader' }
    ],
    peakStatusText: 'ATH PEAK REACHED',
    growingStatusText: 'ROCKETING FROM $0',
    footerActiveText: 'Bull Run Accelerating',
    footerPeakText: 'From $0 to $2.48M (Scale Mastered)',
    cloudBadge: 'ZERO TO ALL-TIME-HIGH',
    phoneActionText: 'Buy Now with Apple Pay',
    phoneSuccessText: 'First Order Placed!'
  },
  saas: {
    id: 'saas',
    tabLabel: 'SaaS Platforms',
    tabIcon: Zap,
    urlBarDomain: 'arr.centaur.io',
    urlBarPath: 'zero-to-recurring',
    metricHeader: 'ANNUAL RECURRING REVENUE (ARR)',
    breakoutBadge: '▲ HYPER-RETENTION RUN',
    groundZeroBadge: '● SEED ZERO: $0 ARR',
    groundZeroReadyText: 'START: $0 ARR (READY)',
    resetButtonText: 'Reset $0',
    bottomResetText: 'Reset to $0',
    bottomStartsAtText: '$0 ARR',
    baselineFooterText: 'Ground Zero ($0 ARR) — Ready to Scale',
    maxTargetValue: 2150000,
    formatValue: (v) => `$${v.toLocaleString()} ARR`,
    gainSubtext: (v) =>
      v > 0
        ? `+$${v.toLocaleString()} Annual Run-Rate Added`
        : 'Tap Upgrade Workspace on phone to scale',
    gridTargets: [
      { label: '$2,000,000 Centaur Milestone', tag: 'CENTAUR' },
      { label: '$1,000,000 Series A Benchmark', tag: '75%' },
      { label: '$250,000 Product-Market Fit', tag: '35%' },
      { label: '$0 ARR Pre-Launch Baseline', tag: '0%' }
    ],
    trajectoryPoints: [
      { x: 0, y: 178, price: 0 },
      { x: 45, y: 178, price: 0 },
      { x: 90, y: 178, price: 0 },
      { x: 135, y: 172, price: 35000 },
      { x: 180, y: 156, price: 120000, milestone: 'Beta & Seed Launch' },
      { x: 220, y: 154, price: 145000 },
      { x: 265, y: 134, price: 250000, milestone: 'Product-Market Fit' },
      { x: 310, y: 118, price: 420000 },
      { x: 350, y: 120, price: 395000 },
      { x: 395, y: 88, price: 850000, milestone: 'Enterprise Tier' },
      { x: 440, y: 64, price: 1280000 },
      { x: 490, y: 38, price: 1680000, milestone: 'Self-Serve Engine' },
      { x: 535, y: 22, price: 1950000 },
      { x: 580, y: 14, price: 2150000, milestone: 'Centaur ($2.1M ARR)' }
    ],
    peakStatusText: 'CENTAUR SCALE REACHED',
    growingStatusText: 'ARR EXPANSION IN FLIGHT',
    footerActiveText: 'Enterprise Expansion Surging',
    footerPeakText: 'From $0 ARR to $2.15M ARR Run-Rate',
    cloudBadge: 'ZERO TO CENTAUR ARR',
    phoneActionText: 'Upgrade to Team Scale',
    phoneSuccessText: 'Team Scale Activated!'
  },
  servicenow: {
    id: 'servicenow',
    tabLabel: 'ServiceNow & ITSM',
    tabIcon: Workflow,
    urlBarDomain: 'now.enterprise.io',
    urlBarPath: 'autonomous-fleet',
    metricHeader: 'INCIDENT AUTO-RESOLUTION RATE',
    breakoutBadge: '▲ ZERO-TOUCH AUTOMATION',
    groundZeroBadge: '● MANUAL QUEUE: 0.0%',
    groundZeroReadyText: 'START: 0.0% (READY)',
    resetButtonText: 'Reset 0%',
    bottomResetText: 'Reset to 0%',
    bottomStartsAtText: '0.0%',
    baselineFooterText: 'Manual Triage Queue (0.0% Auto) — Ready to Deploy',
    maxTargetValue: 984, // 98.4%
    formatValue: (v) => `${(v / 10).toFixed(1)}% Auto-Resolved`,
    gainSubtext: (v) =>
      v > 0
        ? `+${(v / 10).toFixed(1)}% Automated (48,250 Incidents Closed)`
        : 'Tap Execute Flow Remediation on phone to launch',
    gridTargets: [
      { label: '100% Zero-Touch Autonomous Target', tag: '100%' },
      { label: '75% Enterprise Cross-Dept Triage', tag: '75%' },
      { label: '40% Core ITSM Incident Deflection', tag: '40%' },
      { label: '0.0% Manual Triage Baseline', tag: '0%' }
    ],
    trajectoryPoints: [
      { x: 0, y: 178, price: 0 },
      { x: 45, y: 178, price: 0 },
      { x: 90, y: 178, price: 0 },
      { x: 135, y: 170, price: 95 },
      { x: 180, y: 152, price: 280, milestone: 'Instance Live' },
      { x: 220, y: 150, price: 340 },
      { x: 265, y: 128, price: 540, milestone: 'Virtual Agent (54%)' },
      { x: 310, y: 112, price: 690 },
      { x: 350, y: 116, price: 660 },
      { x: 395, y: 82, price: 820, milestone: 'Self-Healing (82%)' },
      { x: 440, y: 58, price: 890 },
      { x: 490, y: 35, price: 940, milestone: 'Cross-Dept Flows' },
      { x: 535, y: 20, price: 965 },
      { x: 580, y: 14, price: 984, milestone: 'Zero-Touch (98.4%)' }
    ],
    peakStatusText: 'ZERO-TOUCH FLEET LIVE',
    growingStatusText: 'AUTO-RESOLVING QUEUES',
    footerActiveText: 'Flow Designer Executing Across 14 Depots',
    footerPeakText: 'Zero-Touch Autonomous: 98.4% Rate (48,250 Incidents)',
    cloudBadge: 'ZERO-TOUCH AUTONOMOUS FLEET',
    phoneActionText: 'Execute Flow Remediation',
    phoneSuccessText: 'INC0048291 Resolved!'
  }
};

export const HeroDeviceStage: React.FC = () => {
  const [activeMode, setActiveMode] = useState<IndustryMode>('ecommerce');
  const currentConfig = INDUSTRY_CONFIGS[activeMode];

  // E-Commerce state
  const [selectedVariant, setSelectedVariant] = useState<'standard' | 'clinic'>('standard');
  const ecomPrice = selectedVariant === 'standard' ? 185 : 340;

  // SaaS state
  const [saasSeats, setSaasSeats] = useState<number>(15);

  // ServiceNow state
  const [incidentCount, setIncidentCount] = useState<number>(450);

  // Trigger & checkout states
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Stock Graph Animation Progress (0.18 = Paused at $0 Baseline, 1.0 = All-Time-High)
  const [growthProgress, setGrowthProgress] = useState<number>(0.18);
  const [isGrowing, setIsGrowing] = useState<boolean>(false);
  const [displayedValue, setDisplayedValue] = useState<number>(0);
  const [reachedPeak, setReachedPeak] = useState<boolean>(false);

  // Cinematic Finale State: "With Zemprolabs, sky is the limit" over real clouds
  const [showFinale, setShowFinale] = useState<boolean>(false);

  const animRef = useRef<number | null>(null);

  // Switch modes cleanly
  const handleSelectMode = (mode: IndustryMode) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setActiveMode(mode);
    setIsProcessing(false);
    setIsSuccess(false);
    setIsGrowing(false);
    setReachedPeak(false);
    setShowFinale(false);
    setGrowthProgress(0.18);
    setDisplayedValue(0);
  };

  // Trigger smooth stock trajectory growth when Phone Action is clicked
  const handleTriggerGrowth = () => {
    if (isProcessing || isSuccess || isGrowing || showFinale) return;

    setIsProcessing(true);

    // Snappy 300ms feedback
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);

      // Start the smooth 60fps stock market growth animation from $0
      setIsGrowing(true);
      setReachedPeak(false);
      setShowFinale(false);

      const startTime = performance.now();
      const startProgress = 0.18;
      const targetProgress = 1.0;
      const duration = 2400; // 2.4s satisfying, energetic rocket ascent

      const maxVal = currentConfig.maxTargetValue;

      const animateGrowth = (now: number) => {
        const elapsed = now - startTime;
        const rawT = Math.min(elapsed / duration, 1);

        // Smooth cubic-bezier stock curve easing
        const easeT = rawT < 0.5 ? 2 * rawT * rawT : 1 - Math.pow(-2 * rawT + 2, 2) / 2;
        const currentProg = startProgress + (targetProgress - startProgress) * easeT;

        setGrowthProgress(currentProg);

        // Smoothly interpolate displayed metric from $0 to max
        const currentValue = Math.round(maxVal * easeT);
        setDisplayedValue(currentValue);

        // Smoothly dissolve into clouds as it rockets into the upper stratosphere (70% in, no waiting after simulation ends)
        if (rawT >= 0.70) {
          setShowFinale(true);
        }

        if (rawT < 1) {
          animRef.current = requestAnimationFrame(animateGrowth);
        } else {
          setReachedPeak(true);
          setIsGrowing(false);
        }
      };

      if (animRef.current) cancelAnimationFrame(animRef.current);
      animRef.current = requestAnimationFrame(animateGrowth);

      setTimeout(() => {
        setIsSuccess(false);
      }, 3400);
    }, 300);
  };

  // Replay function to reset trajectory to $0 baseline
  const handleResetReplay = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsGrowing(false);
    setReachedPeak(false);
    setShowFinale(false);
    setGrowthProgress(0.18);
    setDisplayedValue(0);
    setIsProcessing(false);
    setIsSuccess(false);
  };

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Compute smooth SVG curve path and current arrow position for current mode
  const points = currentConfig.trajectoryPoints;
  const totalPoints = points.length;
  const activeCount = Math.max(2, Math.floor(growthProgress * totalPoints));
  const visiblePoints = points.slice(0, activeCount);

  // Interpolate intermediate tip point for sub-pixel fluid motion
  const exactIndex = growthProgress * (totalPoints - 1);
  const baseIdx = Math.floor(exactIndex);
  const frac = exactIndex - baseIdx;

  let currentTip = points[baseIdx];
  if (baseIdx < totalPoints - 1) {
    const nextP = points[baseIdx + 1];
    currentTip = {
      x: currentTip.x + (nextP.x - currentTip.x) * frac,
      y: currentTip.y + (nextP.y - currentTip.y) * frac,
      price: Math.round(currentTip.price + (nextP.price - currentTip.price) * frac)
    };
  }

  // Generate smooth SVG Catmull-Rom or cubic bezier line string
  const pathD =
    visiblePoints.reduce((acc, pt, i) => {
      if (i === 0) return `M ${pt.x},${pt.y}`;
      const prev = visiblePoints[i - 1];
      const midX = (prev.x + pt.x) / 2;
      return `${acc} C ${midX},${prev.y} ${midX},${pt.y} ${pt.x},${pt.y}`;
    }, '') +
    ` C ${(visiblePoints[visiblePoints.length - 1].x + currentTip.x) / 2},${
      visiblePoints[visiblePoints.length - 1].y
    } ${(visiblePoints[visiblePoints.length - 1].x + currentTip.x) / 2},${currentTip.y} ${
      currentTip.x
    },${currentTip.y}`;

  const areaD = `${pathD} L ${currentTip.x},200 L 0,200 Z`;

  // 3D subtle mouse tilt
  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    let rafId: number | null = null;
    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      const rotY = (px - 0.5) * 4;
      const rotX = (0.5 - py) * 4;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          setTilt({ x: rotX, y: rotY });
          rafId = null;
        });
      }
    };

    const handlePointerLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    el.addEventListener('pointermove', handlePointerMove, { passive: true });
    el.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* ========================================================= */}
      {/* 0. INDUSTRY ARCHETYPE SELECTOR TABS                       */}
      {/* ========================================================= */}
      <div className="mb-4 sm:mb-5 flex flex-wrap sm:flex-nowrap justify-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] max-w-full">
        {(['ecommerce', 'saas', 'servicenow'] as IndustryMode[]).map((mode) => {
          const cfg = INDUSTRY_CONFIGS[mode];
          const Icon = cfg.tabIcon;
          const isActive = activeMode === mode;

          return (
            <button
              key={mode}
              type="button"
              onClick={() => handleSelectMode(mode)}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-[#FF6B00] to-[#FFA459] text-black font-bold shadow-[0_2px_14px_rgba(255,107,0,0.4)] scale-100'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className={`w-3 sm:w-3.5 h-3 sm:h-3.5 ${isActive ? 'text-black stroke-[2.5]' : 'text-slate-400'}`} />
              <span>{cfg.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* 3D Hardware Rig Container */}
      <div
        ref={stageRef}
        className="relative w-full max-w-[680px] pb-4 sm:pb-6"
        style={{ perspective: '1300px' }}
      >
        <div
          className="relative transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* ========================================================= */}
          {/* 1. DESKTOP WORKSTATION: STOCK TRAJECTORY FROM $0          */}
          {/* ========================================================= */}
          <div className="relative w-full rounded-2xl bg-[#0B111E] border border-slate-700/60 shadow-[0_30px_80px_rgba(0,0,0,0.9)] overflow-hidden">
            {/* Top Chrome Bar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-[#080D17] border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#EF4444]/90" />
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#F59E0B]/90" />
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#10B981]/90" />
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-[#11192A] border border-slate-700/60 text-[10px] sm:text-[11px] font-mono text-slate-300 max-w-[130px] xs:max-w-[200px] sm:max-w-none truncate">
                <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#10B981] shrink-0" />
                <span className="text-white font-semibold truncate">{currentConfig.urlBarDomain}</span>
                <span className="text-slate-500 hidden xs:inline">/</span>
                <span className="text-[#FF9D54] hidden xs:inline truncate">{currentConfig.urlBarPath}</span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono">
                {/* 1-Click Replay Button */}
                {(displayedValue > 0 || showFinale) && (
                  <button
                    type="button"
                    onClick={handleResetReplay}
                    className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-md bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-all text-[9px] sm:text-[10px] border border-white/10"
                    title={`Reset to baseline`}
                  >
                    <RotateCcw className="w-2.5 h-2.5" />
                    <span className="hidden xs:inline">{currentConfig.resetButtonText}</span>
                    <span className="xs:hidden">Reset</span>
                  </button>
                )}

                <span
                  className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all ${
                    isGrowing || reachedPeak || showFinale ? 'bg-emerald-400' : 'bg-slate-500'
                  }`}
                />
                <span
                  className={`font-semibold hidden sm:inline ${
                    showFinale
                      ? 'text-sky-300'
                      : isGrowing
                      ? 'text-emerald-400'
                      : reachedPeak
                      ? 'text-emerald-400'
                      : 'text-slate-400'
                  }`}
                >
                  {showFinale
                    ? 'SKY IS THE LIMIT'
                    : isGrowing
                    ? 'GROWING REAL-TIME'
                    : reachedPeak
                    ? currentConfig.peakStatusText
                    : currentConfig.groundZeroReadyText}
                </span>
              </div>
            </div>

            {/* Main Workstation Screen Surface */}
            <div className="relative aspect-[16/12] sm:aspect-[16/11] overflow-hidden text-left">
              {activeMode === 'servicenow' ? (
                <ServiceNowPolarisDashboard
                  displayedValue={displayedValue}
                  isGrowing={isGrowing}
                  reachedPeak={reachedPeak}
                  isProcessing={isProcessing}
                  showFinale={showFinale}
                  onTriggerRemediation={handleTriggerGrowth}
                />
              ) : (
                <div className="relative bg-gradient-to-b from-[#0D1527] via-[#09101E] to-[#050912] w-full h-full p-3.5 sm:p-5 md:p-6 flex flex-col justify-between overflow-hidden text-left">
              {/* Fine Stock Coordinate Grid */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none opacity-15">
                {currentConfig.gridTargets.map((gt, idx) => (
                  <div
                    key={idx}
                    className="border-b border-dashed border-white flex justify-between text-[9px] font-mono text-white"
                  >
                    <span>{gt.label}</span>
                    <span>{gt.tag}</span>
                  </div>
                ))}
              </div>

              {/* Price / ARR / Savings Header (Starting from $0) */}
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 flex items-center gap-1.5">
                      <TrendingUp
                        className={`w-3.5 h-3.5 ${
                          isGrowing || reachedPeak ? 'text-emerald-400' : 'text-slate-400'
                        }`}
                      />
                      <span>{currentConfig.metricHeader}</span>
                    </span>
                  </div>

                  <div
                    className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border font-bold transition-all ${
                      isGrowing || reachedPeak
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : 'bg-white/5 text-slate-400 border-white/10'
                    }`}
                  >
                    {isGrowing || reachedPeak
                      ? currentConfig.breakoutBadge
                      : currentConfig.groundZeroBadge}
                  </div>
                </div>

                {/* Massive Animated Metric Odometer */}
                <div className="mt-0.5 sm:mt-1 flex items-baseline gap-2 sm:gap-3">
                  <div
                    className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display transition-colors duration-200 ${
                      isGrowing || reachedPeak ? 'text-emerald-400' : 'text-white'
                    }`}
                  >
                    {currentConfig.formatValue(displayedValue)}
                  </div>
                  <div
                    className={`text-[10px] xs:text-xs sm:text-sm font-mono font-semibold flex items-center gap-0.5 sm:gap-1 ${
                      isGrowing || reachedPeak ? 'text-emerald-400' : 'text-slate-500'
                    }`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="truncate max-w-[130px] xs:max-w-[190px] sm:max-w-none">{currentConfig.gainSubtext(displayedValue)}</span>
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* THE LIVING STOCK MARKET TRAJECTORY STARTING AT $0         */}
              {/* ========================================================= */}
              <div className="relative z-10 my-1 flex-1 flex items-center justify-center">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 600 200"
                  preserveAspectRatio="none"
                >
                  <defs>
                    {/* Gradient Fill under the curve */}
                    <linearGradient id="multiStockGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor={isGrowing || reachedPeak ? '#10B981' : '#64748B'}
                        stopOpacity={isGrowing || reachedPeak ? '0.38' : '0.05'}
                      />
                      <stop offset="100%" stopColor="#0B111E" stopOpacity="0" />
                    </linearGradient>

                    {/* Gradient Stroke on the line */}
                    <linearGradient id="multiStockLineGrad" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FF6B00" />
                      <stop offset="40%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>

                    {/* Filter for glowing arrow tip */}
                    <filter id="multiNeon" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Shaded Area under the living curve */}
                  <path d={areaD} fill="url(#multiStockGlow)" />

                  {/* The Living Stock Line */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={
                      isGrowing || reachedPeak
                        ? 'url(#multiStockLineGrad)'
                        : 'rgba(255,255,255,0.25)'
                    }
                    strokeWidth={isGrowing || reachedPeak ? '3.5' : '2'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter={isGrowing || reachedPeak ? 'url(#multiNeon)' : 'none'}
                  />

                  {/* Milestone Tags along the curve */}
                  {points.map((pt, i) => {
                    if (!pt.milestone) return null;
                    const isPassed = currentTip.x >= pt.x - 10;
                    if (!isPassed) return null;

                    const isPeak = pt.x >= 570;

                    return (
                      <g
                        key={i}
                        transform={`translate(${pt.x}, ${pt.y})`}
                        className="animate-in fade-in zoom-in-75 duration-300"
                      >
                        <circle cx="0" cy="0" r="3" fill="#FFFFFF" />

                        <g transform={`translate(${isPeak ? -78 : -38}, ${isPeak ? -18 : -22})`}>
                          <rect
                            x="0"
                            y="0"
                            width={isPeak ? '96' : '92'}
                            height="16"
                            rx="4"
                            fill="#0A0E18"
                            stroke={isPeak ? '#10B981' : 'rgba(255,255,255,0.25)'}
                            strokeWidth="1"
                          />
                          <text
                            x={isPeak ? '48' : '46'}
                            y="11"
                            fill={isPeak ? '#10B981' : '#E2E8F0'}
                            fontSize="8"
                            fontFamily="monospace"
                            fontWeight="600"
                            textAnchor="middle"
                          >
                            {pt.milestone}
                          </text>
                        </g>
                      </g>
                    );
                  })}

                  {/* Peak Celebration Sparkles at Peak */}
                  {reachedPeak && !showFinale && (
                    <g transform="translate(580, 14)">
                      <circle
                        cx="0"
                        cy="0"
                        r="18"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="1.5"
                        className="animate-ping"
                      />
                      <circle
                        cx="0"
                        cy="0"
                        r="28"
                        fill="none"
                        stroke="#FFD700"
                        strokeWidth="1"
                        className="animate-ping"
                        style={{ animationDuration: '2s' }}
                      />
                      <line
                        x1="-12"
                        y1="-12"
                        x2="-22"
                        y2="-22"
                        stroke="#FFD700"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="animate-pulse"
                      />
                      <line
                        x1="12"
                        y1="-12"
                        x2="22"
                        y2="-22"
                        stroke="#10B981"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="animate-pulse"
                      />
                    </g>
                  )}

                  {/* The Live Arrow Head at the exact Tip of the Line */}
                  <g transform={`translate(${currentTip.x}, ${currentTip.y})`}>
                    <circle
                      cx="0"
                      cy="0"
                      r={isGrowing || reachedPeak ? '12' : '5'}
                      fill="none"
                      stroke={isGrowing || reachedPeak ? '#10B981' : '#94A3B8'}
                      strokeWidth="1.5"
                      className={isGrowing ? 'animate-ping' : 'animate-pulse'}
                    />
                    <circle
                      cx="0"
                      cy="0"
                      r={isGrowing || reachedPeak ? '6' : '3'}
                      fill={isGrowing || reachedPeak ? '#10B981' : '#94A3B8'}
                    />
                    <polygon
                      points="-3,7 13,-5 7,13"
                      fill={isGrowing || reachedPeak ? '#10B981' : '#94A3B8'}
                      filter="url(#multiNeon)"
                    />
                  </g>
                </svg>
              </div>

              {/* Bottom Reassurance Bar */}
              <div className="relative z-10 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 pr-28 xs:pr-32 sm:pr-0">
                <div className="flex items-center gap-1.5 sm:gap-2 text-white font-medium truncate">
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      isGrowing || reachedPeak ? 'bg-emerald-400' : 'bg-slate-500'
                    }`}
                  />
                  <span className="truncate">
                    {reachedPeak
                      ? currentConfig.footerPeakText
                      : isGrowing
                      ? currentConfig.footerActiveText
                      : currentConfig.baselineFooterText}
                  </span>
                </div>
                <div className="text-emerald-400 font-bold hidden xs:flex items-center gap-1.5 shrink-0">
                  {reachedPeak && <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />}
                  <span>
                    {reachedPeak
                      ? `🚀 ${currentConfig.peakStatusText}`
                      : isGrowing
                      ? currentConfig.growingStatusText
                      : 'Scale Ready'}
                  </span>
                </div>
              </div>
            </div>
          )}

              {/* ========================================================= */}
              {/* CINEMATIC FINALE: PURE WHITE CLOUDS & SKY IS THE LIMIT    */}
              {/* ========================================================= */}
              <div
                className={`absolute inset-0 z-40 overflow-hidden transition-all duration-1000 ease-out flex flex-col items-center justify-center text-center p-6 ${
                  showFinale
                    ? 'opacity-100 pointer-events-auto scale-100'
                    : 'opacity-0 pointer-events-none scale-105'
                }`}
              >
                {/* Real High-Altitude Clouds & Sky Photograph */}
                <img
                  src="/images/sky-clouds.jpg"
                  alt="Atmospheric Clouds & Sky"
                  className="absolute inset-0 w-full h-full object-cover object-bottom filter brightness-90 contrast-105"
                />

                {/* Soft Natural Atmospheric Mist Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-sky-950/40" />

                {/* Clean Glassmorphic Card Floating in the Sky */}
                <div className="relative z-10 p-4 sm:p-6 md:p-7 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-md animate-in fade-in zoom-in-95 duration-700">
                  {/* Real-time Booming Growth Indicator */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-mono mb-2 sm:mb-3">
                    <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF6B00]" />
                    <span className="font-bold text-emerald-400">
                      {currentConfig.formatValue(displayedValue)}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-200">{currentConfig.cloudBadge}</span>
                  </div>

                  {/* Statement */}
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                    With Zemprolabs,{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FFA459] to-[#38BDF8]">
                      sky is the limit.
                    </span>
                  </h3>

                  <p className="text-[11px] sm:text-sm text-slate-200 font-normal leading-relaxed pt-1.5 sm:pt-2 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
                    We design, build, and scale your digital platform to its fullest potential.
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-3.5 sm:mt-5 flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={handleResetReplay}
                      className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/25 text-[11px] sm:text-xs font-mono transition-all active:scale-95 font-semibold backdrop-blur-md shadow-lg"
                    >
                      <RotateCcw className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#FF9D54]" />
                      <span>Replay Experience</span>
                    </button>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#FF6B00] hover:bg-[#ff7b1a] text-black text-[11px] sm:text-xs font-mono font-bold transition-all shadow-[0_0_20px_rgba(255,107,0,0.5)] active:scale-95"
                    >
                      <span>Start Building</span>
                      <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. OVERLAPPING IPHONE PRO: THE FIRST SALE / SCALE TRIGGER  */}
          {/* ========================================================= */}
          <div
            className="absolute -bottom-2 sm:-bottom-4 md:-bottom-6 right-0 sm:-right-3 md:-right-6 w-[36%] min-w-[120px] xs:min-w-[138px] sm:min-w-[165px] max-w-[215px] rounded-[24px] sm:rounded-[38px] p-1.5 sm:p-2 bg-[#1B2232] border border-slate-600 shadow-[0_20px_50px_rgba(0,0,0,0.9)] sm:shadow-[0_30px_70px_rgba(0,0,0,0.95)] z-20 transition-all"
            style={{ transform: 'translateZ(45px)' }}
          >
            {/* 2A. E-COMMERCE STOREFRONT PHONE */}
            {activeMode === 'ecommerce' && (
              <div className="relative aspect-[9/18.8] w-full rounded-[18px] sm:rounded-[30px] overflow-hidden bg-white text-slate-900 flex flex-col justify-between p-2 sm:p-3 text-left shadow-inner">
                {/* Dynamic Island */}
                <div className="w-10 sm:w-16 h-2.5 sm:h-3.5 bg-black rounded-full mx-auto mb-1 shrink-0" />

                {/* Mobile Store Header */}
                <div className="flex items-center justify-between pb-1 sm:pb-1.5 border-b border-slate-100">
                  <div className="font-display font-bold text-[10px] sm:text-xs tracking-tight text-slate-950">
                    Titan<span className="text-[#FF6B00]">Pro</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-medium text-slate-600">
                    <ShoppingBag className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-900" />
                    <span className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-[#FF6B00] text-black text-[8px] sm:text-[9px] font-bold flex items-center justify-center">
                      1
                    </span>
                  </div>
                </div>

                {/* Real Commercial Product Shot */}
                <div className="relative aspect-square w-full rounded-lg sm:rounded-xl overflow-hidden bg-slate-50 border border-slate-100 my-0.5 sm:my-1">
                  <img
                    src="/images/titanium-product.jpg"
                    alt="Precision Titanium Specimen Kit"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1 px-1 sm:px-1.5 py-0.5 rounded bg-black/75 text-white text-[7px] sm:text-[8px] font-mono tracking-wider">
                    ISO 13485
                  </div>
                </div>

                {/* Product Metadata & Pricing */}
                <div>
                  <div className="flex items-center gap-1 text-amber-500 text-[8px] sm:text-[9px]">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2 sm:w-2.5 h-2 sm:h-2.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-slate-500 font-medium hidden xs:inline">4.9 (128)</span>
                  </div>

                  <div className="font-bold text-slate-950 text-[10px] sm:text-xs leading-tight mt-0.5 line-clamp-1">
                    Titanium Kit
                  </div>

                  <div className="flex items-baseline gap-1 sm:gap-1.5 mt-0.5">
                    <span className="font-extrabold text-xs sm:text-sm text-slate-950">${ecomPrice}.00</span>
                    <span className="text-[9px] sm:text-[10px] line-through text-slate-400">$240</span>
                  </div>

                  {/* Variant Selector */}
                  <div className="flex items-center gap-1 mt-1 sm:mt-1.5">
                    <button
                      type="button"
                      onClick={() => setSelectedVariant('standard')}
                      className={`flex-1 text-[7px] sm:text-[8px] font-mono py-0.5 sm:py-1 rounded border transition-all ${
                        selectedVariant === 'standard'
                          ? 'border-slate-950 bg-slate-950 text-white font-bold'
                          : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      Standard
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedVariant('clinic')}
                      className={`flex-1 text-[7px] sm:text-[8px] font-mono py-0.5 sm:py-1 rounded border transition-all ${
                        selectedVariant === 'clinic'
                          ? 'border-slate-950 bg-slate-950 text-white font-bold'
                          : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      Clinic
                    </button>
                  </div>
                </div>

                {/* Real Apple Pay Checkout Button */}
                <div className="pt-1 sm:pt-1.5">
                  {!isProcessing && !isSuccess && (
                    <button
                      type="button"
                      onClick={handleTriggerGrowth}
                      className="w-full py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-lg sm:rounded-xl bg-black text-white hover:bg-slate-900 transition-all shadow-sm active:scale-95 flex items-center justify-center gap-0.5 sm:gap-1 font-bold text-[10px] sm:text-xs"
                    >
                      <span className="text-xs sm:text-sm leading-none"></span>
                      <span className="font-semibold">Pay</span>
                      <span className="font-normal text-[9px] sm:text-[10px] text-slate-300 ml-0.5 hidden xs:inline">| Buy</span>
                    </button>
                  )}

                  {isProcessing && (
                    <div className="w-full py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-lg sm:rounded-xl bg-slate-900 text-white flex items-center justify-center gap-1 text-[9px] sm:text-[10px] font-mono">
                      <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Processing...</span>
                    </div>
                  )}

                  {isSuccess && (
                    <div className="w-full py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-lg sm:rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center gap-1 text-[10px] sm:text-[11px] shadow-sm">
                      <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 stroke-[3]" />
                      <span className="truncate">{currentConfig.phoneSuccessText}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 2B. SAAS PLATFORM WORKSPACE PHONE (CLEAN LIGHT-MODE B2B MOBILE APP) */}
            {activeMode === 'saas' && (
              <div className="relative aspect-[9/18.8] w-full rounded-[18px] sm:rounded-[30px] overflow-hidden bg-white text-slate-900 flex flex-col justify-between p-2 sm:p-3 text-left shadow-inner">
                {/* Dynamic Island */}
                <div className="w-10 sm:w-16 h-2.5 sm:h-3.5 bg-black rounded-full mx-auto mb-1 shrink-0" />

                {/* SaaS Mobile App Header */}
                <div className="flex items-center justify-between pb-1 sm:pb-1.5 border-b border-slate-100">
                  <div className="flex items-center gap-1 font-display font-bold text-[10px] sm:text-xs tracking-tight text-slate-950">
                    <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-md bg-gradient-to-br from-[#FF6B00] to-[#FFA459] flex items-center justify-center text-black font-extrabold text-[8px] sm:text-[9px]">
                      Ω
                    </div>
                    <span>Orbit<span className="text-[#FF6B00]">Cloud</span></span>
                  </div>
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[7px] sm:text-[8px] font-mono font-semibold">
                    <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>prod</span>
                  </div>
                </div>

                {/* Real Live SaaS MRR Card */}
                <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200/80 my-0.5 sm:my-1">
                  <div className="flex items-center justify-between text-[7.5px] sm:text-[9px] font-mono text-slate-500">
                    <span>MRR</span>
                    <span className="text-emerald-600 font-bold">▲ +24.8%</span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-sm sm:text-lg font-extrabold font-display text-slate-950 tracking-tight">
                      ${(saasSeats * 79).toLocaleString()}
                    </span>
                    <span className="text-[8px] sm:text-[10px] text-slate-500 font-mono">/mo</span>
                  </div>

                  {/* Seat Allocation Stepper */}
                  <div className="mt-1 sm:mt-2 pt-1 sm:pt-2 border-t border-slate-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[8.5px] sm:text-[10px] font-medium text-slate-700">
                      <Users className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-slate-500" />
                      <span>{saasSeats} Seats</span>
                    </div>
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      <button
                        type="button"
                        onClick={() => setSaasSeats(Math.max(5, saasSeats - 5))}
                        className="w-4 sm:w-5 h-4 sm:h-5 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-[10px] sm:text-xs font-mono font-bold flex items-center justify-center shadow-xs"
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => setSaasSeats(saasSeats + 5)}
                        className="w-4 sm:w-5 h-4 sm:h-5 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-[10px] sm:text-xs font-mono font-bold flex items-center justify-center shadow-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Enterprise Feature Checklist */}
                <div className="space-y-1 sm:space-y-1.5 my-0.5 sm:my-1 text-[7.5px] xs:text-[8px] sm:text-[9px] text-slate-700 font-medium">
                  <div className="flex items-center gap-1 truncate">
                    <ShieldCheck className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-emerald-600 shrink-0" />
                    <span>SOC-2 Type II Certified</span>
                  </div>
                  <div className="flex items-center gap-1 truncate">
                    <Check className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-emerald-600 shrink-0" />
                    <span>VPC Peering Pipeline</span>
                  </div>
                  <div className="flex items-center gap-1 truncate">
                    <Check className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-emerald-600 shrink-0" />
                    <span>99.99% SLA Uptime</span>
                  </div>
                </div>

                {/* Instant Plan Activation Button */}
                <div className="pt-1 sm:pt-1.5">
                  {!isProcessing && !isSuccess && (
                    <button
                      type="button"
                      onClick={handleTriggerGrowth}
                      className="w-full py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-lg sm:rounded-xl bg-slate-950 text-white hover:bg-slate-800 transition-all shadow-sm active:scale-95 flex items-center justify-center gap-1 font-bold text-[10px] sm:text-xs"
                    >
                      <Zap className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF9D54] stroke-[2.5]" />
                      <span>{currentConfig.phoneActionText}</span>
                    </button>
                  )}

                  {isProcessing && (
                    <div className="w-full py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-lg sm:rounded-xl bg-slate-900 text-white flex items-center justify-center gap-1 text-[9px] sm:text-[10px] font-mono">
                      <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Provisioning...</span>
                    </div>
                  )}

                  {isSuccess && (
                    <div className="w-full py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-lg sm:rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center gap-1 text-[10px] sm:text-[11px] shadow-sm">
                      <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 stroke-[3]" />
                      <span className="truncate">{currentConfig.phoneSuccessText}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 2C. SERVICENOW ENTERPRISE CONSOLE PHONE (AUTHENTIC NOW MOBILE AGENT) */}
            {activeMode === 'servicenow' && (
              <div className="relative aspect-[9/18.8] w-full rounded-[18px] sm:rounded-[30px] overflow-hidden bg-[#F4F6F8] text-slate-900 flex flex-col justify-between text-left shadow-inner">
                {/* Dynamic Island */}
                <div className="w-10 sm:w-16 h-2.5 sm:h-3.5 bg-black rounded-full mx-auto mt-1 sm:mt-2 mb-0.5 sm:mb-1 shrink-0" />

                {/* Authentic ServiceNow Signature Dark Teal Header */}
                <div className="bg-[#032D42] text-white px-2 sm:px-3 py-1 sm:py-1.5 flex items-center justify-between shrink-0 shadow-sm">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    {/* ServiceNow Signature Circle / Gear Glyph */}
                    <div className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full border border-emerald-400/80 flex items-center justify-center">
                      <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="font-semibold text-[10px] sm:text-[11px] tracking-tight text-white">
                      Now Mobile
                    </span>
                    <span className="text-slate-400 text-[8px] sm:text-[9px] hidden xs:inline">| Agent</span>
                  </div>
                  <span className="px-1 sm:px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[7px] sm:text-[8px] font-bold">
                    ITSM
                  </span>
                </div>

                {/* ServiceNow Incident Record Body */}
                <div className="p-1.5 sm:p-2.5 flex-1 flex flex-col justify-between overflow-hidden">
                  {/* Top Incident Identifier Bar */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-[10px] sm:text-xs text-slate-900">
                        INC0048291
                      </span>
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        <span className="px-1 sm:px-1.5 py-0.5 rounded bg-red-100 text-red-700 border border-red-200 font-mono text-[7px] sm:text-[8px] font-bold">
                          P1
                        </span>
                        <span className="px-1 sm:px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-mono text-[7px] sm:text-[8px] font-medium hidden xs:inline">
                          Active
                        </span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <div className="font-bold text-[9px] sm:text-[11px] leading-tight text-slate-900 mt-0.5 sm:mt-1 line-clamp-2">
                      SAP ERP Gateway: Payment Timeout
                    </div>
                  </div>

                  {/* ServiceNow Form Key-Value Fields */}
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white border border-slate-200/80 space-y-0.5 sm:space-y-1 text-[7.5px] xs:text-[8px] sm:text-[9px] shadow-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Caller:</span>
                      <span className="text-slate-800 font-semibold truncate max-w-[75px] sm:max-w-none">Marcus Vance</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Group:</span>
                      <span className="text-slate-800 font-semibold truncate max-w-[75px] sm:max-w-none">Cloud SRE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">CI:</span>
                      <span className="text-slate-800 font-mono truncate max-w-[75px] sm:max-w-none">prdsap-gw</span>
                    </div>
                    <div className="flex justify-between pt-0.5 border-t border-slate-100 text-amber-600 font-semibold">
                      <span>SLA:</span>
                      <span className="font-mono">14m remaining</span>
                    </div>
                  </div>

                  {/* Flow Designer Automation Work Note */}
                  <div className="p-1 sm:p-1.5 rounded-lg bg-emerald-50/80 border border-emerald-200/70 text-[7px] sm:text-[8px] font-mono text-emerald-900 flex items-start gap-1">
                    <Workflow className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="line-clamp-2">
                      <span className="font-bold">[Flow]</span> KB00921 matched. Remediation ready.
                    </div>
                  </div>

                  {/* ServiceNow Native UI Action Button */}
                  <div className="pt-0.5 sm:pt-1">
                    {!isProcessing && !isSuccess && (
                      <button
                        type="button"
                        onClick={handleTriggerGrowth}
                        className="w-full py-1.5 sm:py-2 px-1.5 sm:px-2 rounded-lg sm:rounded-xl bg-[#293E40] hover:bg-[#1E3032] text-white border border-[#3E5658] transition-all shadow-md active:scale-95 flex items-center justify-center gap-1 font-bold text-[9px] sm:text-[11px]"
                      >
                        <Workflow className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-400 stroke-[2.5]" />
                        <span>Execute Remediation</span>
                      </button>
                    )}

                    {isProcessing && (
                      <div className="w-full py-1.5 sm:py-2 px-1.5 sm:px-2 rounded-lg sm:rounded-xl bg-[#032D42] text-white flex items-center justify-center gap-1 text-[9px] sm:text-[10px] font-mono">
                        <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin" />
                        <span>Executing Flow...</span>
                      </div>
                    )}

                    {isSuccess && (
                      <div className="w-full py-1.5 sm:py-2 px-1.5 sm:px-2 rounded-lg sm:rounded-xl bg-emerald-700 text-white font-bold flex items-center justify-center gap-1 text-[9px] sm:text-[11px] shadow-sm">
                        <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 stroke-[3]" />
                        <span>Resolved!</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Understated instruction hint */}
      <div className="mt-5 sm:mt-8 text-center flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2 sm:px-4">
        <p className="text-[11px] sm:text-xs font-mono text-slate-400">
          Starts at <span className="text-white font-semibold">{currentConfig.bottomStartsAtText}</span>. Tap{' '}
          <span className="text-white font-semibold">{currentConfig.phoneActionText}</span> on the
          phone or desktop to launch from baseline to peak scale.
        </p>
        {(displayedValue > 0 || showFinale) && (
          <button
            type="button"
            onClick={handleResetReplay}
            className="text-[11px] sm:text-xs font-mono text-[#FF6B00] hover:underline flex items-center gap-1 font-semibold shrink-0"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{currentConfig.bottomResetText}</span>
          </button>
        )}
      </div>
    </div>
  );
};
