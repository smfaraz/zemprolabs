import React, { useState } from 'react';

export const BuildRunGrow: React.FC = () => {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const phases = [
    {
      num: '01',
      phase: 'PHASE 01 //',
      title: 'BUILD',
      description: 'Design and develop your digital product.',
      accent: '#FF6B00',
    },
    {
      num: '02',
      phase: 'PHASE 02 //',
      title: 'RUN',
      description: 'Keep your platform secure, stable and maintained.',
      accent: '#38BDF8',
    },
    {
      num: '03',
      phase: 'PHASE 03 //',
      title: 'SCALE',
      description: 'Improve, automate and grow as your business evolves.',
      accent: '#10B981',
    },
  ];

  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-[rgba(148,163,184,0.08)] bg-[#05070D] relative select-none overflow-hidden">
      {/* Subtle brand ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-24 bg-gradient-to-r from-[#FF6B00]/[0.03] via-[#004AAD]/[0.04] to-[#10B981]/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Continuous Horizontal Laser Pipeline Rail */}
        <div className="relative">
          {/* Background Track (desktop) */}
          <div className="hidden md:block absolute top-[18px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[rgba(148,163,184,0.14)] to-transparent z-0" />

          {/* Active Laser Shimmer on Hover */}
          <div
            className="hidden md:block absolute top-[18px] left-0 right-0 h-[1px] transition-all duration-500 z-0 pointer-events-none"
            style={{
              background:
                activeHover !== null
                  ? `radial-gradient(ellipse 400px 2px at ${
                      activeHover === 0 ? '16%' : activeHover === 1 ? '50%' : '84%'
                    } 50%, ${phases[activeHover].accent}, transparent)`
                  : 'transparent',
            }}
          />

          {/* 3 Connected Pipeline Nodes & Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {phases.map((item, idx) => {
              const isHovered = activeHover === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveHover(idx)}
                  onMouseLeave={() => setActiveHover(null)}
                  className="group relative cursor-default"
                >
                  {/* Top Node / Pulsing Beacon Header */}
                  <div className="flex items-center gap-3 mb-3">
                    {/* Glowing Node Dot */}
                    <div className="relative flex items-center justify-center w-9 h-9">
                      <div
                        className="absolute inset-0 rounded-full blur-sm transition-opacity duration-300"
                        style={{
                          backgroundColor: item.accent,
                          opacity: isHovered ? 0.5 : 0.15,
                        }}
                      />
                      <div
                        className="w-3.5 h-3.5 rounded-full border transition-all duration-300 flex items-center justify-center bg-[#05070D]"
                        style={{
                          borderColor: item.accent,
                          boxShadow: isHovered ? `0 0 12px ${item.accent}` : 'none',
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full transition-transform duration-300"
                          style={{
                            backgroundColor: item.accent,
                            transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                          }}
                        />
                      </div>
                    </div>

                    {/* Phase Mono Tag */}
                    <span
                      className="text-xs font-mono font-bold tracking-widest uppercase"
                      style={{ color: item.accent }}
                    >
                      {item.phase}
                    </span>
                  </div>

                  {/* High-Contrast Bold Wordmark */}
                  <h3 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white mb-2 transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>

                  {/* Clean Description Underneath */}
                  <p className="text-sm text-[#94A3B8] group-hover:text-[#F8FAFC] transition-colors duration-200 leading-relaxed max-w-sm">
                    {item.description}
                  </p>

                  {/* Subtle Accent Bottom Rail Glow */}
                  <div
                    className="mt-5 h-[1px] w-12 transition-all duration-500 group-hover:w-full"
                    style={{
                      background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
