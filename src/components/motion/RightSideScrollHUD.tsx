import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowUp, Compass } from 'lucide-react';
import { useLenis } from './SmoothScroll';

export const RightSideScrollHUD: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const { scrollTo } = useLenis();
  const [percent, setPercent] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Smooth spring physics for vertical progress rail
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  // Track height is 180px; bead translation range: 0 to 170px
  const TRACK_HEIGHT = 180;
  const beadY = useTransform(smoothProgress, [0, 1], [0, TRACK_HEIGHT - 12]);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setPercent(Math.min(100, Math.max(0, Math.round(latest * 100))));
    });
  }, [scrollYProgress]);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > 60);
    });
  }, [scrollY]);

  // Click anywhere on track to scrub to that page section
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const fraction = Math.max(0, Math.min(1, clickY / rect.height));
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollTo(maxScroll * fraction, { duration: 1.0 });
  };

  const handleScrollToTop = () => {
    scrollTo(0, { duration: 1.2 });
  };

  return (
    <>
      {/* 1. Full-Height Right Viewport Laser Rail (Visible across all screens) */}
      <div className="fixed top-0 right-0 bottom-0 z-40 w-[2.5px] bg-white/[0.04] pointer-events-none">
        <motion.div
          className="w-full bg-gradient-to-b from-[#FF6B00] via-[#FFA048] to-[#00F0FF] origin-top shadow-[0_0_14px_rgba(255,107,0,0.9),0_0_28px_rgba(0,240,255,0.4)]"
          style={{ scaleY: smoothProgress, height: '100%' }}
        />
      </div>

      {/* 2. Floating Spatial HUD Capsule (Docked on Right) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: isVisible ? 1 : 0.35,
          x: isVisible ? 0 : 8,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2 select-none"
      >
        {/* Spatial Glass Container */}
        <div className="relative p-2.5 rounded-full bg-[#0B0D13]/90 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.12)] flex flex-col items-center gap-2.5 transition-all duration-300 hover:border-[#FF6B00]/40 hover:shadow-[0_0_30px_rgba(255,107,0,0.25)]">
          {/* Top Status & Digital Percentage Readout */}
          <div className="flex flex-col items-center gap-1 w-9 text-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse shadow-[0_0_8px_#FF6B00]" />
            <span className="font-mono text-[10px] font-bold text-slate-200 tabular-nums tracking-tighter">
              {percent < 10 ? `0${percent}` : percent}%
            </span>
          </div>

          {/* Interactive Vertical Track Rail (180px) */}
          <div
            ref={trackRef}
            onClick={handleTrackClick}
            title="Click to scrub page position"
            className="relative w-2 h-[180px] bg-white/[0.06] hover:bg-white/[0.1] rounded-full overflow-hidden cursor-pointer transition-colors"
          >
            {/* Filled Progress Line */}
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#FF6B00] via-[#FFA048] to-[#00F0FF] rounded-full origin-top"
              style={{ scaleY: smoothProgress, height: '100%' }}
            />

            {/* Precision Milestone Tick Marks (25%, 50%, 75%) */}
            <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-white/20 pointer-events-none" />
            <div className="absolute top-[50%] left-0 right-0 h-[1px] bg-white/25 pointer-events-none" />
            <div className="absolute top-[75%] left-0 right-0 h-[1px] bg-white/20 pointer-events-none" />
          </div>

          {/* Sliding Glowing Laser Bead */}
          <div className="absolute top-[48px] left-1/2 -translate-x-1/2 w-2 h-[180px] pointer-events-none">
            <motion.div
              style={{ y: beadY }}
              className="relative w-4 h-4 -ml-1 -mt-1 rounded-full bg-[#FF6B00] border border-white/80 shadow-[0_0_14px_#FF6B00,0_0_24px_rgba(255,107,0,0.6)] flex items-center justify-center"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_#fff]" />
              <div className="absolute inset-0 rounded-full bg-[#FF6B00] animate-ping opacity-30" />
            </motion.div>
          </div>

          {/* Quick Back-to-Top Button (Uses Lenis Smooth Gliding) */}
          <button
            type="button"
            onClick={handleScrollToTop}
            aria-label="Glide to top of page"
            className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-[#FF6B00] text-slate-400 hover:text-black transition-all flex items-center justify-center focus:outline-none cursor-pointer group shadow-sm"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Hover Tooltip / Status Badge */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? -10 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-2 px-3 py-1.5 rounded-lg bg-[#090A0D]/95 border border-white/15 text-[10px] font-mono text-slate-200 uppercase tracking-widest whitespace-nowrap backdrop-blur-xl shadow-xl flex items-center gap-1.5"
        >
          <Compass className="w-3 h-3 text-[#FF6B00]" />
          <span>{percent >= 98 ? 'FOOTER DOCKED' : percent === 0 ? 'PAGE TOP' : `TELEMETRY // ${percent}%`}</span>
        </motion.div>
      </motion.div>
    </>
  );
};
