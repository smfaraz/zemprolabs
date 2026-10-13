import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
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
      <footer className="border-t border-white/10 bg-[#090A0D] text-slate-400 pt-14 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Balanced Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
            
            {/* Col 1: Brand & Contact (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <BrandLogo variant="full" size="md" />
              
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                {company.positioningSub}
              </p>

              <div className="space-y-2 pt-1 text-xs sm:text-sm">
                <a
                  href={company.emailHref}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{company.email}</span>
                </a>

                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{company.phone} <span className="text-slate-500 text-xs">(Primary &amp; WhatsApp)</span></span>
                </a>

                <div className="flex items-start gap-2 text-slate-400 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                  <span className="text-xs leading-snug">
                    Hyderabad, India — Worldwide Delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Col 2: Services (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-semibold text-slate-200">
                Services
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-white transition-colors block">
                    Web Apps &amp; SaaS
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-white transition-colors block">
                    Shopify &amp; E-Commerce
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-white transition-colors block">
                    Enterprise ServiceNow
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-white transition-colors block">
                    Business Development
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-white transition-colors block">
                    Cloud &amp; DevOps
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-white transition-colors block">
                    Speed &amp; SEO
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Company (2 cols) - with Careers */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-semibold text-slate-200">
                Company
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link to="/about" className="text-slate-400 hover:text-white transition-colors block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <span>Careers</span>
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                      Hiring
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="text-slate-400 hover:text-white transition-colors block">
                    Work &amp; Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/process" className="text-slate-400 hover:text-white transition-colors block">
                    Engineering Process
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-white transition-colors block">
                    Contact &amp; Inquiries
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Estimation & Scoping (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-semibold text-slate-200">
                Estimation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link to="/project-estimation" className="text-slate-400 hover:text-white transition-colors block">
                    Scope Calculator
                  </Link>
                </li>
                <li>
                  <Link to="/project-estimation" className="text-slate-400 hover:text-white transition-colors block">
                    Cost Estimator
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-white transition-colors block">
                    Technology Stack
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-white transition-colors block">
                    Submit Architecture Brief
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 5: Governance & Policies (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-semibold text-slate-200">
                Governance
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <button
                    onClick={() => openPolicy('nda')}
                    className="text-left text-slate-400 hover:text-white transition-colors block cursor-pointer"
                  >
                    Bilateral NDA &amp; IP
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPolicy('sla')}
                    className="text-left text-slate-400 hover:text-white transition-colors block cursor-pointer"
                  >
                    SLA &amp; Response Times
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPolicy('security')}
                    className="text-left text-slate-400 hover:text-white transition-colors block cursor-pointer"
                  >
                    Security Standards
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPolicy('privacy')}
                    className="text-left text-slate-400 hover:text-white transition-colors block cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPolicy('terms')}
                    className="text-left text-slate-400 hover:text-white transition-colors block cursor-pointer"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPolicy('refund')}
                    className="text-left text-slate-400 hover:text-white transition-colors block cursor-pointer"
                  >
                    Refund Policy
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Clean Bottom Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span>6th Floor, Ehtesham Heights, Hyderabad</span>
              <span className="text-slate-700">/</span>
              <span>Engineering Studio</span>
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


