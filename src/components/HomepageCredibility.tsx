import React from 'react';
import { Users, Code, ShoppingBag, Server, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomepageCredibility: React.FC = () => {
  const points = [
    {
      label: 'Qualified Engineering Team',
      desc: 'Hands-on software engineers dedicated to maintainable, dependable code.',
      icon: Users,
      color: '#FF6B00'
    },
    {
      label: 'Custom Digital Solutions',
      desc: 'Bespoke web applications, platforms, and SaaS products built from clean architecture.',
      icon: Code,
      color: '#004AAD'
    },
    {
      label: 'E-Commerce & Shopify',
      desc: 'High-speed storefronts, theme customization, headless commerce, and catalog systems.',
      icon: ShoppingBag,
      color: '#10B981'
    },
    {
      label: 'Backend & Cloud',
      desc: 'Serverless Firebase backends, Cloud Functions, real-time databases, and REST APIs.',
      icon: Server,
      color: '#06B6D4'
    },
    {
      label: 'Maintenance & Management',
      desc: 'Routine security updates, broken-link checks, store operations, and continuous care.',
      icon: Wrench,
      color: '#8B5CF6'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[rgba(148,163,184,0.12)]">
      <div className="rounded-3xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] p-8 sm:p-14 shadow-2xl space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider">
            // ENGINEERING CREDIBILITY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Built by Engineers. Designed for Business.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            From development to ongoing management, Zemprolabs provides engineering expertise and long-term technical support for businesses building their digital future.
          </p>
        </div>

        {/* 5 Credibility Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.1)] hover:border-[rgba(148,163,184,0.25)] transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${pt.color}15`, color: pt.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold font-display text-white">{pt.label}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[rgba(148,163,184,0.1)] text-xs font-mono text-[#94A3B8]">
          <span>// QUALIFIED ENGINEERS &bull; TRUSTED TECHNOLOGY</span>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-white hover:text-[#FF6B00] transition-colors font-semibold"
          >
            <span>Learn More About Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
