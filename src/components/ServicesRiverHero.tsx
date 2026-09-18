import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Radio, Compass, Anchor, Waves } from 'lucide-react';

interface ServicesRiverHeroProps {
  activeDiscipline: string;
  onSelectDiscipline: (id: string) => void;
}

export const ServicesRiverHero: React.FC<ServicesRiverHeroProps> = ({
  activeDiscipline,
  onSelectDiscipline
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [beamAngle, setBeamAngle] = useState(25); // degrees
  const mousePos = useRef({ x: 0.5, y: 0.5 });

  // Map discipline to target beacon angle
  const disciplineAngles: Record<string, number> = {
    all: 25,
    development: 12,
    'seo-growth': 22,
    enterprise: 32,
    marketing: 40,
    research: 48,
    recruitment: 56
  };

  useEffect(() => {
    const target = disciplineAngles[activeDiscipline] ?? 25;
    setBeamAngle(target);
  }, [activeDiscipline]);

  // River and boat water simulation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // River currents particles
    const particles: { x: number; y: number; speed: number; length: number; alpha: number; color: string }[] = [];
    const colors = ['#06B6D4', '#10B981', '#38BDF8', '#FF6B00'];

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 0.8 + Math.random() * 1.6,
        length: 20 + Math.random() * 50,
        alpha: 0.15 + Math.random() * 0.35,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Boat state
    let boatProgress = 0.15;
    const boatSpeed = 0.0007;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep water gradient
      const waterGrad = ctx.createLinearGradient(0, 0, width, height);
      waterGrad.addColorStop(0, '#030712');
      waterGrad.addColorStop(0.5, '#040E1E');
      waterGrad.addColorStop(1, '#020610');
      ctx.fillStyle = waterGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw flowing river currents
      particles.forEach((p) => {
        p.x += p.speed;
        p.y += Math.sin(p.x * 0.005) * 0.4;
        if (p.x > width + 60) {
          p.x = -60;
          p.y = Math.random() * height;
        }

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.length, p.y + Math.sin((p.x + p.length) * 0.005) * 0.4);
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });
      ctx.globalAlpha = 1.0;

      // Calculate boat position along curved river channel
      boatProgress += boatSpeed;
      if (boatProgress > 1.2) boatProgress = -0.2;

      const boatX = boatProgress * width;
      const boatY = height * 0.65 + Math.sin(boatProgress * Math.PI * 2) * (height * 0.12);

      // Draw boat water wake (caustics behind the vessel)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(boatX - 8, boatY);
      ctx.lineTo(boatX - 70, boatY - 14);
      ctx.lineTo(boatX - 90, boatY);
      ctx.lineTo(boatX - 70, boatY + 14);
      ctx.closePath();
      const wakeGrad = ctx.createRadialGradient(boatX - 40, boatY, 2, boatX - 40, boatY, 60);
      wakeGrad.addColorStop(0, 'rgba(6, 182, 212, 0.25)');
      wakeGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = wakeGrad;
      ctx.fill();

      // Draw sleek streamlined vessel (the boat navigating the river)
      ctx.translate(boatX, boatY);
      const angle = Math.atan2(
        Math.sin((boatProgress + 0.01) * Math.PI * 2) * (height * 0.12) - Math.sin(boatProgress * Math.PI * 2) * (height * 0.12),
        0.01 * width
      );
      ctx.rotate(angle);

      // Boat Hull
      ctx.beginPath();
      ctx.moveTo(18, 0); // bow
      ctx.lineTo(-12, -7);
      ctx.lineTo(-18, -4);
      ctx.lineTo(-18, 4);
      ctx.lineTo(-12, 7);
      ctx.closePath();
      ctx.fillStyle = '#0F172A';
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 1.2;
      ctx.fill();
      ctx.stroke();

      // Cabin / Bridge
      ctx.fillStyle = '#1E293B';
      ctx.fillRect(-8, -3, 10, 6);

      // Mast light / Nav beacon on boat
      ctx.beginPath();
      ctx.arc(0, 0, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#FF6B00';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(0, 0, 6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 107, 0, 0.35)';
      ctx.fill();

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const disciplines = [
    { id: 'all', label: 'All Services (06)', code: 'ALL' },
    { id: 'development', label: '01. Websites & Apps', code: 'DEV' },
    { id: 'seo-growth', label: '02. SEO & Traffic', code: 'SEO' },
    { id: 'enterprise', label: '03. Enterprise Tools', code: 'ENT' },
    { id: 'marketing', label: '04. Digital Marketing', code: 'MKT' },
    { id: 'research', label: '05. Business Research', code: 'RES' },
    { id: 'recruitment', label: '06. Hiring & Staffing', code: 'REC' },
  ];

  return (
    <div className="relative w-full overflow-hidden border-b border-white/[0.08] bg-[#02050A]">
      {/* Background River Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />

      {/* Coastal Bluff & Lighthouse Vector (Left Shoreline) */}
      <div className="absolute -left-4 sm:left-4 bottom-0 z-10 w-32 sm:w-44 h-64 sm:h-84 pointer-events-none select-none opacity-90">
        <svg viewBox="0 0 160 320" className="w-full h-full overflow-visible drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
          <defs>
            {/* Sweeping Optical Beacon Beam */}
            <linearGradient id="riverHeroBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="12%" stopColor="#FF6B00" stopOpacity="0.6" />
              <stop offset="45%" stopColor="#06B6D4" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Optical Beam rotating smoothly toward selected channel */}
          <g
            style={{
              transformOrigin: '75px 110px',
              transform: `rotate(${beamAngle}deg)`,
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <polygon
              points="75,108 1400,-150 1450,380 75,112"
              fill="url(#riverHeroBeam)"
              style={{ opacity: 0.8 }}
            />
            <line
              x1="75"
              y1="110"
              x2="1100"
              y2="110"
              stroke="#FFFBEB"
              strokeWidth="2.5"
              strokeOpacity="0.5"
            />
          </g>

          {/* Coastal Rocky Shore */}
          <polygon points="0,290 40,280 90,285 140,282 160,320 0,320" fill="#070B14" stroke="#1E293B" strokeWidth="1.5" />
          
          {/* Foundation & Lighthouse Structure */}
          <polygon points="40,283 110,283 116,272 34,272" fill="#0F172A" stroke="#334155" strokeWidth="1" />
          <polygon points="41,266 109,266 104,230 46,230" fill="#E2E8F0" />
          <polygon points="46,230 104,230 99,195 51,195" fill="#FF6B00" />
          <polygon points="51,195 99,195 95,160 55,160" fill="#E2E8F0" />
          <polygon points="55,160 95,160 91,130 59,130" fill="#FF6B00" />

          {/* Windows */}
          <rect x="71" y="240" width="8" height="13" rx="2" fill="#05070D" stroke="#FF6B00" strokeWidth="1" />
          <rect x="72" y="175" width="6" height="11" rx="2" fill="#05070D" stroke="#06B6D4" strokeWidth="0.8" />

          {/* Balcony & Lantern Room */}
          <polygon points="54,130 96,130 100,122 50,122" fill="#1E293B" stroke="#475569" strokeWidth="1" />
          <rect x="58" y="98" width="34" height="24" fill="rgba(255,255,255,0.15)" stroke="#64748B" strokeWidth="1" />
          <path d="M 56 98 Q 75 80, 94 98 Z" fill="#0F172A" stroke="#334155" strokeWidth="1.2" />

          {/* Glowing Beacon Core */}
          <circle cx="75" cy="110" r="7" fill="#FFFFFF" style={{ filter: 'drop-shadow(0 0 16px #FFFFFF)' }} />
          <circle cx="75" cy="110" r="16" fill="#FF6B00" opacity="0.8" />
        </svg>
      </div>

      {/* Atmospheric Radial Shading */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-96 bg-[#06B6D4]/[0.025] blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-14 sm:pb-20 relative z-20">
        <div className="max-w-3xl space-y-5 ml-auto lg:ml-28">
          
          {/* Technical Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4] text-xs font-mono">
            <Compass className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>HOW WE HELP // SIX CORE SERVICES</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.08]">
            We build and manage software that helps your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#06B6D4] to-[#10B981]">
              business grow.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
            Whether you need a new website, an online store, a mobile app, or someone reliable to look after your existing tech—you work directly with our senior engineers. No middlemen, no confusion.
          </p>

          {/* Interactive Channel Filter Pills */}
          <div className="pt-3">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <Radio className="w-3 h-3 text-[#10B981] animate-pulse" />
              <span>CHOOSE A SERVICE:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {disciplines.map((d) => {
                const isSelected = activeDiscipline === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => onSelectDiscipline(d.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#FF6B00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.35)] scale-[1.02]'
                        : 'bg-[#080E1A]/90 border border-white/10 text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{d.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
