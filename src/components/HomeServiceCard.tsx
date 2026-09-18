import React from 'react';
import { HomeService } from '../data/homeServices';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeServiceCardProps {
  service: HomeService;
}

export const HomeServiceCard: React.FC<HomeServiceCardProps> = ({ service }) => {
  return (
    <div className="rounded-xl bg-[#0B0F17] border border-[rgba(148,163,184,0.15)] hover:border-[rgba(255,107,0,0.4)] transition-all duration-300 p-6 flex flex-col justify-between group shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1">
      <div>
        {/* Number & Top Tag */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-mono text-[#FF6B00] font-semibold tracking-wider">
            {service.num} //
          </span>
          {service.id === 'development' && (
            <span className="flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/25">
              <Sparkles className="w-3 h-3" />
              <span>CORE</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2.5 group-hover:text-[#FF6B00] transition-colors">
          {service.title}
        </h3>

        {/* 1 Short Description */}
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
          {service.desc}
        </p>

        {/* 3-5 Key Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.highlights.map((item, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#05070D] text-[#F8FAFC] border border-[rgba(148,163,184,0.12)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Direct Service CTA */}
      <div className="pt-4 border-t border-[rgba(148,163,184,0.1)]">
        <Link
          to={service.link}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#FF6B00] group-hover:text-white transition-colors"
        >
          <span>{service.cta}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
