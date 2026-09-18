import React from 'react';
import { SEO } from '../components/SEO';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Terminal, CheckCircle2 } from 'lucide-react';
import { company } from '../data/company';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <SEO
        title="Contact Us | Let's Build Something That Works"
        description="Have a project, e-commerce store, website or technology requirement? Tell us what you need and our team will get back to you."
        canonicalPath="/contact"
      />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
            <span>INITIATE PROJECT BRIEF</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
            Let's Build Something That Works.
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Have a project, e-commerce store, website or technology requirement? Tell us what you need and our team will get back to you.
          </p>
        </div>
      </section>

      {/* Main Form & Next Steps Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column (Spans 7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Sidebar: Contact Us & What Happens Next (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Us Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] shadow-xl space-y-5">
              <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider">
                // CONTACT US
              </div>

              <div className="space-y-4">
                {/* Email */}
                <div>
                  <span className="block text-xs font-mono text-[#94A3B8] mb-1">Email</span>
                  <a
                    href={company.emailHref}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-white hover:text-[#FF6B00] transition-colors group break-all"
                  >
                    <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span>{company.email}</span>
                  </a>
                </div>

                {/* Phone & WhatsApp */}
                <div>
                  <span className="block text-xs font-mono text-[#94A3B8] mb-1">Direct Phone &amp; WhatsApp</span>
                  <div className="space-y-2.5">
                    {/* Primary Number */}
                    <div className="p-2.5 rounded-lg bg-[#05070D] border border-white/10 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase text-[#10B981] font-bold">PRIMARY NUMBER</span>
                        <span className="text-[10px] font-mono text-slate-400">Direct Line &amp; WhatsApp</span>
                      </div>
                      <a
                        href={company.phoneHref}
                        className="flex items-center gap-2 text-sm sm:text-base font-mono text-white hover:text-[#FF6B00] transition-colors group"
                      >
                        <Phone className="w-4 h-4 text-[#10B981] shrink-0" />
                        <span>{company.phone}</span>
                      </a>
                      <a
                        href={company.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with Zemprolabs on WhatsApp"
                        className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#10B981]/15 border border-[#10B981]/30 text-xs font-mono text-[#10B981] hover:bg-[#10B981]/25 transition-all w-full justify-center"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                        <span>Chat on WhatsApp ({company.phone})</span>
                      </a>
                    </div>

                    {/* Secondary Number */}
                    <div className="p-2.5 rounded-lg bg-[#05070D] border border-white/5 space-y-1">
                      <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">SECONDARY / BACKUP</div>
                      <a
                        href={company.phoneSecondaryHref}
                        className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-300 hover:text-white transition-colors group"
                      >
                        <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>{company.phoneSecondary}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office */}
                <div>
                  <span className="block text-xs font-mono text-[#94A3B8] mb-1">Office</span>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-[#F8FAFC] leading-relaxed pt-0.5">
                    <MapPin className="w-4 h-4 text-[#004AAD] shrink-0 mt-0.5" />
                    <span>{company.address.full}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] shadow-xl space-y-6">
              <div className="text-xs font-mono text-[#10B981] uppercase tracking-wider">
                // WHAT HAPPENS NEXT?
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/25 flex items-center justify-center text-[#FF6B00] font-mono font-bold text-xs shrink-0 mt-0.5">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-display mb-1">
                      Technical Scope Review
                    </h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Our engineering team examines your specifications, technical stack preferences, and integration points to verify technical fit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#004AAD]/10 border border-[#004AAD]/25 flex items-center justify-center text-[#004AAD] font-mono font-bold text-xs shrink-0 mt-0.5">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-display mb-1">
                      Discovery &amp; Roadmap Call
                    </h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      We schedule a 30-minute discovery call to align on sprint milestones, database schemas, deliverables, and commercial parameters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 border border-[#10B981]/25 flex items-center justify-center text-[#10B981] font-mono font-bold text-xs shrink-0 mt-0.5">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-display mb-1">
                      Sprint 1 Kick-Off
                    </h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Upon agreement, repository setup, staging pipelines, and your first 2-week agile sprint kick off immediately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(148,163,184,0.1)] space-y-2 text-xs font-mono text-[#94A3B8]">
                <div className="flex items-center gap-2 text-[#10B981]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Direct &lt;24h Response SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#004AAD]" />
                  <span>Mutual Non-Disclosure Agreement (NDA)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
