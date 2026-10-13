import React from 'react';
import { founders } from '../data/company';
import { User, ShieldCheck } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>FOUNDING LEADERSHIP</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
          Meet the Leadership
        </h2>
        <p className="text-xs sm:text-sm text-[#94A3B8]">
          Guided by hands-on engineering experience and a commitment to dependable digital systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {founders.map((founder, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.15)] hover:border-[rgba(148,163,184,0.3)] transition-all duration-300 shadow-xl flex flex-col items-center text-center space-y-4 group"
          >
            {/* Elegant Monogram Avatar Placeholder */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center font-display font-bold text-xl border transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundColor: `${founder.accentColor}15`,
                color: founder.accentColor,
                borderColor: `${founder.accentColor}40`
              }}
            >
              <span>{founder.initials}</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold font-display text-white group-hover:text-[#FF6B00] transition-colors">
                {founder.name}
              </h3>
              <div
                className="text-xs font-mono font-semibold tracking-wider"
                style={{ color: founder.accentColor }}
              >
                {founder.role}
              </div>
            </div>

            <div className="w-12 h-0.5 rounded-full bg-[rgba(148,163,184,0.15)] pt-0.5"></div>

            <div className="text-[11px] font-mono text-[#94A3B8] flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 opacity-60" />
              <span>Engineering Leadership</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
