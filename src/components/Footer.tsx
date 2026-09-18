import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  Terminal, 
  Lock, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Shield, 
  Sparkles,
  RefreshCw,
  Scale
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { company } from '../data/company';
import { PolicyModal, PolicyType } from './PolicyModal';

export const Footer: React.FC = () => {
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<PolicyType>('privacy');

  const openPolicy = (policy: PolicyType) => {
    setSelectedPolicy(policy);
    setPolicyModalOpen(true);
  };

  return (
    <>
      <footer className="border-t border-[rgba(148,163,184,0.12)] bg-[#03060C] text-[#94A3B8] pt-14 pb-10 relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-64 bg-[#FF6B00]/[0.015] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main 5-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
            
            {/* Col 1: Brand & Credo (Spans 4 cols on desktop) */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <BrandLogo variant="full" size="lg" />
              </div>

              <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed max-w-sm pt-1 font-sans">
                <span className="text-white font-medium block mb-1">{company.positioning}</span>
                {company.positioningSub}
              </p>

              {/* WhatsApp Quick Chat */}
              <div className="pt-2">
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-xs font-mono font-semibold hover:bg-[#10B981]/20 transition-all group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>Direct WhatsApp Chat: {company.phone} &rarr;</span>
                </a>
              </div>
            </div>

            {/* Col 2: Core Engineering (Spans 2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-white text-xs font-mono tracking-wider uppercase text-[#F8FAFC]">
                // Solutions
              </h4>
              <ul className="space-y-2 text-xs font-medium">
                <li>
                  <Link to="/services" className="hover:text-white transition-colors block py-0.5">
                    Custom Web Apps &amp; SaaS
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors block py-0.5">
                    Shopify E-Commerce Stores
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors block py-0.5">
                    Mobile Apps (iOS &amp; Android)
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors block py-0.5">
                    Speed &amp; SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors block py-0.5">
                    Enterprise Integrations
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors block py-0.5">
                    Cloud &amp; DevOps Pipelines
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Technical Support (Spans 2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-white text-xs font-mono tracking-wider uppercase text-[#F8FAFC]">
                // Technical Support
              </h4>
              <ul className="space-y-2 text-xs font-medium">
                <li>
                  <Link to="/services" className="hover:text-white transition-colors block py-0.5">
                    Web &amp; App Development
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors block py-0.5">
                    Shopify &amp; Online Stores
                  </Link>
                </li>
                <li>
                  <Link to="/project-estimation" className="hover:text-white transition-colors block py-0.5">
                    Project Scope &amp; Estimation
                  </Link>
                </li>
                <li>
                  <Link to="/project-estimation" className="hover:text-white transition-colors block py-0.5">
                    Request Project Estimate
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-white transition-colors block py-0.5">
                    Case Studies &amp; Work
                  </Link>
                </li>
                <li>
                  <Link to="/process" className="hover:text-white transition-colors block py-0.5">
                    How We Engineer &amp; Deliver
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Important Policies & Legal (Spans 2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-[#FF6B00]" />
                <h4 className="text-white text-xs font-mono tracking-wider uppercase text-[#F8FAFC]">
                  Policies &amp; Legal
                </h4>
              </div>
              <ul className="space-y-2 text-xs font-medium">
                <li>
                  <button
                    onClick={() => openPolicy('privacy')}
                    className="text-left text-slate-300 hover:text-[#FF6B00] transition-colors block py-0.5"
                  >
                    Privacy Policy &bull; GDPR
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPolicy('terms')}
                    className="text-left text-slate-300 hover:text-[#FF6B00] transition-colors block py-0.5"
                  >
                    Terms of Service (MSA)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPolicy('nda')}
                    className="text-left text-slate-300 hover:text-[#10B981] transition-colors block py-0.5 flex items-center gap-1.5"
                  >
                    <span>NDA &amp; IP Ownership</span>
                    <span className="text-[9px] font-mono bg-[#10B981]/15 text-[#10B981] px-1.5 py-0.2 rounded">100%</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPolicy('sla')}
                    className="text-left text-slate-300 hover:text-[#38BDF8] transition-colors block py-0.5"
                  >
                    SLA &amp; Incident Times
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPolicy('refund')}
                    className="text-left text-slate-300 hover:text-[#FF6B00] transition-colors block py-0.5"
                  >
                    Refund &amp; Cancellation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPolicy('security')}
                    className="text-left text-slate-300 hover:text-white transition-colors block py-0.5"
                  >
                    Security &amp; DevSecOps
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 5: Contact & Global Office (Spans 2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-white text-xs font-mono tracking-wider uppercase text-[#F8FAFC]">
                // Office &amp; Inquiries
              </h4>
              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="block text-white font-semibold text-xs uppercase tracking-wider font-mono">
                    {company.name}
                  </span>
                  <span className="text-[10px] text-[#94A3B8] font-mono block">
                    {company.positioning}
                  </span>
                </div>

                {/* Email */}
                <a
                  href={company.emailHref}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group pt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                  <span className="font-mono text-[11px] truncate">{company.email}</span>
                </a>

                {/* Primary Phone */}
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span className="font-mono text-[11px]">{company.phone} <span className="text-slate-500 text-[9px]">(Primary)</span></span>
                </a>

                {/* Secondary Phone */}
                <a
                  href={company.phoneSecondaryHref}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span className="font-mono text-[11px]">{company.phoneSecondary} <span className="text-slate-600 text-[9px]">(Secondary)</span></span>
                </a>

                {/* Office Address */}
                <div className="flex items-start gap-2 text-[#94A3B8] pt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                  <span className="leading-snug text-[11px]">
                    {company.address.full}
                  </span>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#FF6B00] hover:underline font-semibold"
                  >
                    <span>Submit Project Scope &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Trust Guarantees Bar */}
          <div className="border-t border-white/[0.06] py-5 my-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-[#10B981] shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">Full IP Transfer</div>
                  <div className="text-[10px] text-slate-400 font-mono">You own 100% of source code</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">Strict Bilateral NDA</div>
                  <div className="text-[10px] text-slate-400 font-mono">Protected trade secrets</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">Guaranteed SLA</div>
                  <div className="text-[10px] text-slate-400 font-mono">&lt; 30 min critical emergency response</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#A855F7] shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">Zero Vendor Lock-in</div>
                  <div className="text-[10px] text-slate-400 font-mono">Open standard technologies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright, Compliance & Policy Links */}
          <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <div className="text-center md:text-left">
              &copy; {new Date().getFullYear()} {company.name}. All rights reserved. Registered Technology Practice.
            </div>

            {/* Quick Policy Triggers in Bottom Bar */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px]">
              <button onClick={() => openPolicy('privacy')} className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <span>&bull;</span>
              <button onClick={() => openPolicy('terms')} className="hover:text-white transition-colors">
                Terms of Service
              </button>
              <span>&bull;</span>
              <button onClick={() => openPolicy('nda')} className="hover:text-white transition-colors">
                NDA &amp; IP Ownership
              </button>
              <span>&bull;</span>
              <button onClick={() => openPolicy('sla')} className="hover:text-white transition-colors">
                SLA
              </button>
              <span>&bull;</span>
              <button onClick={() => openPolicy('refund')} className="hover:text-white transition-colors">
                Refund Policy
              </button>
              <span>&bull;</span>
              <button onClick={() => openPolicy('security')} className="hover:text-white transition-colors">
                Security
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Global Interactive Policy Modal */}
      <PolicyModal
        isOpen={policyModalOpen}
        onClose={() => setPolicyModalOpen(false)}
        initialPolicy={selectedPolicy}
      />
    </>
  );
};
