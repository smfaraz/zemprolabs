import React from 'react';
import { SEO } from '../components/SEO';
import { maintenancePlans } from '../data/maintenancePlans';
import { ServiceComparisonTable } from '../components/ServiceComparisonTable';
import { HandledForYouCTA } from '../components/HandledForYouCTA';
import { Link } from 'react-router-dom';
import {
  Wrench,
  ShoppingBag,
  Check,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Info,
  Server,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export const ManagedServices: React.FC = () => {
  const maintainFeatures = [
    'Website maintenance & continuous oversight',
    'Bug fixes, regression patches & code remediation',
    'Security updates & NPM / platform dependency patching',
    'Performance checks & Core Web Vitals scans',
    'Technical support & ticketing triage'
  ];

  const manageFeatures = [
    'E-commerce store management & daily operations',
    'Shopify store operations & admin management',
    'Product updates, variant staging & descriptions',
    'Storefront updates, banners & announcement bars',
    'Technical monitoring & checkout flow verification'
  ];

  const infrastructureFeatures = [
    'Firebase database & Cloud Firestore monitoring',
    'Backend API endpoints & serverless function health',
    'Hosting, server & Cloudflare DNS oversight',
    'Uptime monitoring & automated error alerts',
    'API integrations & third-party webhook verification'
  ];

  const growthSupportFeatures = [
    'Technical SEO audit remediation & crawl monitoring',
    'Product SEO & schema structured data upkeep',
    'Branding consistency & search presence alignment',
    'Conversion improvements & checkout friction review'
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <SEO
        title="Managed Services | Maintain, Manage, Infrastructure & Growth Support"
        description="Zemprolabs provides continuous digital operations: Website maintenance, Shopify store management, cloud infrastructure oversight, and technical growth support."
        canonicalPath="/managed-services"
      />

      {/* Hero Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONTINUOUS TECHNICAL OPERATIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
            We Build It. Then We Keep It Running For You.
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Zemprolabs doesn't disappear after your launch. Whether you need monthly technical security updates, backend monitoring, or a partner to run your day-to-day Shopify storefront, we handle the technology so you can focus on growing your business.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#plans"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)]"
            >
              <span>Explore Maintenance Retainers</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/contact?service=Website%20Maintenance&engagement=Monthly%20Maintenance"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#0B0F17] text-white hover:bg-white/5 border border-[rgba(148,163,184,0.2)] transition-all"
            >
              <span>Request Custom Scope</span>
            </Link>
          </div>
        </div>
      </section>

      {/* The 4 Core Managed Pillars: Maintain • Manage • Infrastructure • Growth Support */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider">
            // OPERATIONAL PILLARS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Four Areas of Ongoing Custody
          </h2>
          <p className="text-sm text-[#94A3B8]">
            Proactive maintenance, e-commerce storefront operations, backend cloud care, and search growth support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1. Maintain */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] hover:border-[#FF6B00]/40 transition-all space-y-5 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(148,163,184,0.1)]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#FF6B00]/15 flex items-center justify-center text-[#FF6B00]">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#FF6B00] uppercase">PILLAR 01</span>
                  <h3 className="text-xl font-bold font-display text-white">Maintain</h3>
                </div>
              </div>
              <span className="text-xs font-mono text-[#94A3B8]">Technical Care</span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Continuous technical oversight keeping your web applications and websites secure, fast, and bug-free.
            </p>

            <div className="space-y-2 pt-2">
              {maintainFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#F8FAFC]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Manage */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] hover:border-[#10B981]/40 transition-all space-y-5 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(148,163,184,0.1)]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#10B981]/15 flex items-center justify-center text-[#10B981]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#10B981] uppercase">PILLAR 02</span>
                  <h3 className="text-xl font-bold font-display text-white">Manage</h3>
                </div>
              </div>
              <span className="text-xs font-mono text-[#94A3B8]">Storefront Operations</span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              We run your store's day-to-day digital operations: product uploads, discounts, carousels, and catalog upkeep.
            </p>

            <div className="space-y-2 pt-2">
              {manageFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#F8FAFC]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Infrastructure */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] hover:border-[#004AAD]/40 transition-all space-y-5 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(148,163,184,0.1)]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#004AAD]/15 flex items-center justify-center text-[#004AAD]">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#004AAD] uppercase">PILLAR 03</span>
                  <h3 className="text-xl font-bold font-display text-white">Infrastructure</h3>
                </div>
              </div>
              <span className="text-xs font-mono text-[#94A3B8]">Cloud &amp; Backend</span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Cloud backend guardianship: Firebase, Node.js APIs, database schemas, server monitoring, and error alerts.
            </p>

            <div className="space-y-2 pt-2">
              {infrastructureFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#F8FAFC]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Growth Support */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] hover:border-[#06B6D4]/40 transition-all space-y-5 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(148,163,184,0.1)]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#06B6D4]/15 flex items-center justify-center text-[#06B6D4]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#06B6D4] uppercase">PILLAR 04</span>
                  <h3 className="text-xl font-bold font-display text-white">Growth Support</h3>
                </div>
              </div>
              <span className="text-xs font-mono text-[#94A3B8]">SEO &amp; Branding</span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Structured technical SEO audits, product page metadata optimization, digital brand alignment, and conversion tuning.
            </p>

            <div className="space-y-2 pt-2">
              {growthSupportFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#F8FAFC]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scope Disclaimer */}
      <section className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        <div className="p-4 rounded-xl bg-[#0B0F17] border border-[rgba(148,163,184,0.15)] text-xs text-[#94A3B8] flex items-start gap-3 leading-relaxed">
          <Info className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
          <div>
            <strong>Operational Scope Clarification:</strong> Zemprolabs manages the technical storefront and software layer (code, plugins, templates, catalog listings, metadata, and cloud databases). Physical warehouse storage, shipping fulfillment, customer support tickets, and accounting are retained by client personnel unless specifically contracted under a custom service agreement.
          </div>
        </div>
      </section>

      {/* Monthly Maintenance Plans (Strictly INR) */}
      <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0F17]/40 border-t border-[rgba(148,163,184,0.12)]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider">
              // RECURRING OPERATIONAL RETAINERS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Monthly Maintenance &amp; Operations Plans
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Transparent monthly retainer tiers structured for modern business platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  plan.popular
                    ? 'bg-[#0B0F17] border-2 border-[#FF6B00] shadow-[0_0_30px_rgba(255,107,0,0.2)] relative'
                    : 'bg-[#0B0F17] border border-[rgba(148,163,184,0.15)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#FF6B00] font-bold">
                      {plan.tag}
                    </span>
                    {plan.popular && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FF6B00] text-black text-[10px] font-mono font-bold">
                        RECOMMENDED
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold font-display text-white mb-2">{plan.name}</h3>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-bold font-display text-white">{plan.displayUSD}</span>
                      <span className="text-xs font-mono text-[#94A3B8]">{plan.period}</span>
                    </div>
                    <div className="text-xs font-mono text-[#94A3B8] mt-1.5 flex items-center gap-1.5">
                      <span className="text-[#F8FAFC]/90">{plan.displayINR}{plan.period}</span>
                      <span className="text-[11px] text-[#94A3B8]">— INR reference</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[rgba(148,163,184,0.1)] mb-8">
                    <div className="text-[11px] font-mono text-[#94A3B8] uppercase">
                      Included Deliverables:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-[#F8FAFC]">
                        <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/contact?service=Website%20Maintenance&engagement=${encodeURIComponent(
                    plan.name
                  )}`}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-[#FF6B00] text-black hover:bg-[#ff7b1a] shadow-[0_0_20px_rgba(255,107,0,0.3)]'
                      : 'bg-[#05070D] text-white hover:bg-white/5 border border-[rgba(148,163,184,0.2)]'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison Matrix */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <ServiceComparisonTable />
      </section>

      {/* Handled For You CTA */}
      <HandledForYouCTA />
    </div>
  );
};
