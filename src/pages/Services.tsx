import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { services } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { ServicesRiverHero } from '../components/ServicesRiverHero';
import { ServicesHarborDocks } from '../components/ServicesHarborDocks';
import { ServicesRiverTransitBlueprint } from '../components/ServicesRiverTransitBlueprint';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Layers, Radio } from 'lucide-react';

export const Services: React.FC = () => {
  const [activeDiscipline, setActiveDiscipline] = useState<string>('all');

  const filteredServices = activeDiscipline === 'all'
    ? services
    : services.filter((s) => s.id === activeDiscipline);

  const handleSelectDiscipline = (id: string) => {
    setActiveDiscipline(id);
    if (id !== 'all') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-0 bg-[#02050A]">
      <SEO
        title="Services & What We Build | Websites, Mobile Apps & Technical Care"
        description="Custom web applications, fast online stores, mobile apps, and ongoing technical support. Work directly with senior developers who take care of your code."
        canonicalPath="/services"
      />

      {/* 1. Full-Stack Engineering Studio Hero */}
      <ServicesRiverHero
        activeDiscipline={activeDiscipline}
        onSelectDiscipline={handleSelectDiscipline}
      />

      {/* 2. Primary 6 Disciplines Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14 pb-4 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider mb-1.5 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              <span>// WHAT WE DO FOR YOU</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">
              Simple, reliable software built for real businesses.
            </h2>
          </div>

          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <Radio className="w-3 h-3 text-[#10B981] animate-pulse" />
            <span>Showing {filteredServices.length} of 6 Services</span>
            {activeDiscipline !== 'all' && (
              <button
                onClick={() => setActiveDiscipline('all')}
                className="text-[#FF6B00] hover:underline ml-2"
              >
                (Show All Services)
              </button>
            )}
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={activeDiscipline === service.id}
            />
          ))}
        </div>
      </section>

      {/* 3. Architectural Specializations (Shopify Plus & Real-Time Cloud) */}
      <ServicesHarborDocks />

      {/* 4. The 4-Stage Delivery Blueprint (How We Work) */}
      <ServicesRiverTransitBlueprint />

      {/* 5. Safe & Welcoming Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#060C18] border border-white/[0.12] max-w-4xl mx-auto space-y-6 shadow-2xl relative">
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-75" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DIRECT DEVELOPER ACCESS // ESTIMATE IN 48 HOURS</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Ready to Build or Improve Your Software?
          </h3>

          <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            Whether you are launching a new online store, building a custom web or mobile app, or looking for reliable engineers to maintain your existing tech—we are ready to help.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_25px_rgba(255,107,0,0.35)] w-full sm:w-auto font-mono font-bold"
            >
              <span>Tell Us About Your Project &rarr;</span>
            </Link>

            <Link
              to="/project-estimation"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0A1222] border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all w-full sm:w-auto font-mono"
            >
              <span>Explore Project Estimation</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-slate-500 pt-2">
            <span>&bull; Strict NDA Protected</span>
            <span>&bull; 100% Code Ownership</span>
            <span>&bull; Detailed Estimate in 48 Hours</span>
          </div>
        </div>
      </section>
    </div>
  );
};
