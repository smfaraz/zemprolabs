import React from 'react';
import { Service } from '../types';
import { Check, ArrowRight, Sparkles, Globe, Compass, Radio, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
  isSelected?: boolean;
}

const serviceMeta: Record<string, { tag: string; beaconColor: string; subtitle: string }> = {
  development: { tag: 'MOST POPULAR', beaconColor: '#FF6B00', subtitle: 'Websites, Online Stores & Mobile Apps' },
  'seo-growth': { tag: 'HIGH IMPACT', beaconColor: '#38BDF8', subtitle: 'Google Search Ranking & Fast Loading' },
  enterprise: { tag: 'BUSINESS AUTOMATION', beaconColor: '#10B981', subtitle: 'ServiceNow & Custom Workflows' },
  marketing: { tag: 'CUSTOMER ACQUISITION', beaconColor: '#F59E0B', subtitle: 'Google & Social Media Ads' },
  research: { tag: 'DECISION SUPPORT', beaconColor: '#A855F7', subtitle: 'Market Analysis & Technical Feasibility' },
  recruitment: { tag: 'TALENT SOURCING', beaconColor: '#0EA5E9', subtitle: 'Doctors, Nurses & Senior Developers' },
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, isSelected = false }) => {
  const meta = serviceMeta[service.id] || {
    tag: 'SERVICE',
    beaconColor: '#FF6B00',
    subtitle: 'Digital Capability'
  };

  return (
    <div
      id={service.id}
      className={`rounded-2xl bg-[#070D18]/95 border transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden shadow-xl ${
        isSelected
          ? 'border-[#FF6B00] shadow-[0_0_30px_rgba(255,107,0,0.18)] scale-[1.01]'
          : 'border-white/[0.1] hover:border-white/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)]'
      }`}
    >
      {/* Corner crosshairs (+) */}
      <span className="absolute top-2.5 left-2.5 font-mono text-xs text-white/20 select-none">+</span>
      <span className="absolute top-2.5 right-2.5 font-mono text-xs text-white/20 select-none">+</span>
      <span className="absolute bottom-2.5 left-2.5 font-mono text-xs text-white/20 select-none">+</span>
      <span className="absolute bottom-2.5 right-2.5 font-mono text-xs text-white/20 select-none">+</span>

      {/* Top Telemetry Row */}
      <div>
        <div className="flex items-center justify-between mb-3.5 flex-wrap gap-2 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: meta.beaconColor }}
            />
            <span className="font-bold tracking-wider text-slate-300">
              SERVICE {service.num}
            </span>
          </div>

          <span className="text-[10px] font-mono tracking-wide px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]" style={{ color: meta.beaconColor }}>
            {meta.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1 group-hover:text-[#FF6B00] transition-colors">
          {service.title}
        </h3>

        {/* Subtitle */}
        <div className="mb-3">
          <span className="text-xs font-medium text-slate-400">
            {meta.subtitle}
          </span>
        </div>

        {/* Short Descriptor */}
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
          {service.shortDesc}
        </p>

        {/* Capabilities Checklist */}
        <div className="space-y-2 mb-6">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-[#FF6B00]" />
            <span>What we handle for you:</span>
          </div>

          {service.capabilities.slice(0, 5).map((cap, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
              <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
              <span className="leading-snug">{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Tags & CTA Button */}
      <div className="pt-4 border-t border-white/[0.08]">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {service.techStack.slice(0, 6).map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#03060C] text-slate-400 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#FF6B00] group-hover:text-white transition-colors"
        >
          <span>TALK TO US ABOUT THIS &rarr;</span>
        </Link>
      </div>
    </div>
  );
};
