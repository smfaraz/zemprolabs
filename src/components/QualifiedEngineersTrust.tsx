import React from 'react';
import { Cpu, Briefcase, RefreshCw, ShieldCheck } from 'lucide-react';

export const QualifiedEngineersTrust: React.FC = () => {
  const pillars = [
    {
      title: 'Engineering Mindset',
      desc: 'Solutions are designed with maintainability, scalability and real-world requirements in mind. We prioritize clean code architecture, type safety, and documented APIs.',
      icon: Cpu,
      color: '#FF6B00'
    },
    {
      title: 'Business Understanding',
      desc: 'Technology is built around business goals rather than technology for its own sake. We design storefronts, applications, and workflows that directly drive operational efficiency.',
      icon: Briefcase,
      color: '#004AAD'
    },
    {
      title: 'Long-Term Support',
      desc: 'Our relationship does not have to end when the project launches. We continue maintaining and managing your digital systems, providing reliable ongoing technical custody.',
      icon: RefreshCw,
      color: '#10B981'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] p-8 sm:p-12 shadow-xl space-y-10">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PRAGMATIC ENGINEERING STANDARDS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Qualified Engineers. Trusted Technology.
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Technology decisions have long-term consequences. Our engineering team focuses on building solutions that are practical, maintainable and aligned with the way your business actually operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.1)] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
