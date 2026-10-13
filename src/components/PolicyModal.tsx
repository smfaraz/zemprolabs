import React, { useState, useEffect } from 'react';
import { X, Shield, FileText, Lock, Clock, RefreshCw, CheckCircle, ExternalLink } from 'lucide-react';
import { company } from '../data/company';

export type PolicyType = 'privacy' | 'terms' | 'nda' | 'sla' | 'refund' | 'security';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPolicy?: PolicyType;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  initialPolicy = 'privacy',
}) => {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(initialPolicy);

  useEffect(() => {
    if (initialPolicy) {
      setActivePolicy(initialPolicy);
    }
  }, [initialPolicy, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const policyNavItems: { id: PolicyType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
    { id: 'terms', label: 'Terms of Service', icon: FileText },
    { id: 'nda', label: 'NDA & IP Ownership', icon: Lock },
    { id: 'sla', label: 'SLA & Response Times', icon: Clock },
    { id: 'refund', label: 'Refund & Cancellation', icon: RefreshCw },
    { id: 'security', label: 'Security Standards', icon: Shield },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#080D18] border border-white/[0.12] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#05070D]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h2 id="policy-modal-title" className="text-base font-bold font-display text-white tracking-wide">
                Zemprolabs Legal, Governance &amp; Policies
              </h2>
              <p className="text-[11px] font-mono text-slate-400">
                Official documentation &bull; Last updated: January 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy Selector Tabs */}
        <div className="flex items-center gap-1.5 px-6 py-2.5 bg-[#03060E] border-b border-white/[0.06] overflow-x-auto scrollbar-none">
          {policyNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePolicy === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePolicy(item.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-[#FF6B00]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Policy Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-xs sm:text-sm leading-relaxed text-slate-300 font-sans">
          
          {/* 1. Privacy Policy */}
          {activePolicy === 'privacy' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div>
                <h3 className="text-xl font-bold font-display text-white mb-2">Privacy Policy</h3>
                <p className="text-slate-400 text-xs font-mono">Effective Date: January 1, 2026</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <p className="font-semibold text-white">Summary Commitment</p>
                <p className="text-xs text-slate-400">
                  Zemprolabs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) values your commercial and personal confidentiality. We do not sell, rent, or monetize your personal or client data. Any information collected is exclusively used to deliver engineering services, manage communication, and fulfill technical contracts.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">1. Information We Collect</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li><strong>Contact Details:</strong> Name, work email address, telephone/WhatsApp number, company name, and project scope submitted through our inquiries.</li>
                  <li><strong>Technical Infrastructure Data:</strong> For clients enrolled in Managed Digital Care, we may receive access credentials, API keys, and deployment telemetry provided willingly under bilateral non-disclosure agreements.</li>
                  <li><strong>Website Analytics:</strong> Anonymous telemetry, browser type, and navigation paths collected to improve page performance and user interface experience.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">2. How We Use Information</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li>To provide, maintain, optimize, and deliver requested software engineering, web application, and digital infrastructure services.</li>
                  <li>To communicate project milestones, status reports, emergency alerts, and invoicing.</li>
                  <li>To maintain security audits, prevent malicious attacks, and ensure compliance with global engineering standards.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">3. Global Compliance (GDPR, CCPA &amp; DPDP)</h4>
                <p>
                  Regardless of your jurisdiction, you have the right to request access to the data we hold regarding your organization, request rectification, or demand permanent deletion of non-accounting data upon contract termination. Contact our data compliance team directly at <a href={`mailto:${company.email}`} className="text-[#FF6B00] underline">{company.email}</a>.
                </p>
              </div>
            </div>
          )}

          {/* 2. Terms of Service */}
          {activePolicy === 'terms' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div>
                <h3 className="text-xl font-bold font-display text-white mb-2">Terms of Service</h3>
                <p className="text-slate-400 text-xs font-mono">Master Services Agreement (MSA) Standard Terms</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">1. Scope of Engagement &amp; SOW</h4>
                <p>
                  All project work is governed by an agreed Statement of Work (SOW) or Monthly Care Retainer. SOWs define technical architecture, deliverables, acceptance criteria, milestone schedules, and investment tiers. No scope adjustments shall occur without written confirmation.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">2. Deliverables &amp; Post-Launch Warranty</h4>
                <p>
                  Every bespoke software build or e-commerce development delivered by Zemprolabs includes a complimentary <strong>30-day post-launch warranty period</strong>. During this window, any defects, code bugs, or deviations from the signed SOW are resolved promptly at zero additional charge.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">3. Invoicing, Milestones &amp; Payment Terms</h4>
                <p>
                  Bespoke builds are structured on milestone tranches. Ongoing Managed Digital Care retainers are billed monthly in advance. Invoices not settled within thirty (30) days may lead to temporary suspension of staging deployments or non-critical maintenance tasks.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">4. Governing Law &amp; Jurisdiction</h4>
                <p>
                  These Terms are construed in accordance with the laws of Telangana, India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Hyderabad, India, or resolved via binding neutral arbitration as mutually agreed.
                </p>
              </div>
            </div>
          )}

          {/* 3. NDA & Intellectual Property Ownership */}
          {activePolicy === 'nda' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div>
                <h3 className="text-xl font-bold font-display text-white mb-2">NDA &amp; 100% Client Code Ownership</h3>
                <p className="text-slate-400 text-xs font-mono">Zero Platform Lock-in &bull; Full IP Protection</p>
              </div>

              <div className="p-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] space-y-2">
                <div className="flex items-center gap-2 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>The Zemprolabs Ownership Guarantee</span>
                </div>
                <p className="text-xs text-slate-300">
                  Unlike traditional agencies that trap you in proprietary proprietary CMS systems or retain software copyrights, <strong>you own 100% of your source code, design assets, database schemas, and digital intellectual property from day one</strong> upon final settlement.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">1. Mutual Non-Disclosure Agreement (NDA)</h4>
                <p>
                  We treat all client business concepts, algorithms, user lists, trade secrets, and financial metrics as strictly confidential. All Zemprolabs team members, engineers, and sub-contractors are bound by bilateral, enforceable NDAs prior to accessing any client repository or staging server.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">2. Code Transfer &amp; Repository Handover</h4>
                <p>
                  All project code is stored in the client&apos;s own GitHub / GitLab / Bitbucket repositories or transferred irrevocably upon milestone sign-off. We provide complete setup documentation, infrastructure blueprints, and migration procedures so your team or future developers can run the system autonomously.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">3. Third-Party Licenses</h4>
                <p>
                  Any standard open-source libraries (e.g. React, Next.js, Tailwind, PostgreSQL) remain governed by their respective permissive licenses (MIT, Apache 2.0). All custom business logic written for your project is your exclusive property.
                </p>
              </div>
            </div>
          )}

          {/* 4. SLA & Incident Response Times */}
          {activePolicy === 'sla' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div>
                <h3 className="text-xl font-bold font-display text-white mb-2">Service Level Agreement (SLA)</h3>
                <p className="text-slate-400 text-xs font-mono">Managed Operations &amp; Overwatch Guarantees</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 space-y-1">
                  <span className="text-[10px] font-mono text-red-400 font-bold uppercase">Priority 1 &bull; Critical</span>
                  <p className="text-sm font-bold text-white">&lt; 30 Mins Response</p>
                  <p className="text-[11px] text-slate-400">Site down, payment checkout broken, or critical database failure.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 space-y-1">
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">Priority 2 &bull; Major</span>
                  <p className="text-sm font-bold text-white">&lt; 2 Hours Response</p>
                  <p className="text-[11px] text-slate-400">Severe performance degradation or secondary feature failure.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/25 space-y-1">
                  <span className="text-[10px] font-mono text-[#38BDF8] font-bold uppercase">Priority 3 &bull; Standard</span>
                  <p className="text-sm font-bold text-white">Same Business Day</p>
                  <p className="text-[11px] text-slate-400">General maintenance, UI tweaks, content updates, or reporting.</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">24/7/365 Emergency Hotline</h4>
                <p>
                  Clients with active Managed Digital Care tier retainers receive a dedicated incident escalation hotline and direct WhatsApp Technical Lead bridge for critical triage outside regular business hours.
                </p>
              </div>
            </div>
          )}

          {/* 5. Refund & Cancellation Policy */}
          {activePolicy === 'refund' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div>
                <h3 className="text-xl font-bold font-display text-white mb-2">Refund &amp; Cancellation Policy</h3>
                <p className="text-slate-400 text-xs font-mono">Fair Transparency &bull; Mutual Respect</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">1. Milestone-Based Project Assurance</h4>
                <p>
                  Fixed-scope software projects are broken into verifiable milestones (e.g. Architecture &amp; Wireframes &rarr; Interactive Prototype &rarr; Full Development &rarr; Production Deployment). Milestone payments are only due upon client approval of the previous milestone deliverables. If a milestone cannot be satisfied, client obligations are limited strictly to completed and approved phases.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">2. Monthly Retainer Cancellations</h4>
                <p>
                  Ongoing Managed Services retainers operate on a month-to-month basis with a straightforward <strong>30-day written cancellation notice</strong>. There are zero exit penalties or cancellation fees. Upon termination, all backups, configuration docs, and access credentials are fully consolidated and handed back.
                </p>
              </div>
            </div>
          )}

          {/* 6. Security Standards */}
          {activePolicy === 'security' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div>
                <h3 className="text-xl font-bold font-display text-white mb-2">Infrastructure &amp; Security Standards</h3>
                <p className="text-slate-400 text-xs font-mono">DevSecOps &bull; Hardened Architectures</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">1. Security Architecture Principles</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li><strong>Zero Trust Access:</strong> Multi-factor authentication (MFA) required across all internal development servers and customer staging consoles.</li>
                  <li><strong>Automated Backups:</strong> Daily incremental backups with cross-region replication and one-click disaster recovery procedures.</li>
                  <li><strong>DDoS &amp; WAF Protection:</strong> Cloudflare Enterprise / AWS Shield web application firewalls deployed on customer edge networks.</li>
                  <li><strong>Code Auditing:</strong> Automated static application security testing (SAST) and continuous vulnerability scans for all third-party npm and Docker packages.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">2. Vulnerability Reporting</h4>
                <p>
                  Security researchers and clients are encouraged to report any suspected vulnerability to our security desk at <a href={`mailto:${company.email}`} className="text-[#FF6B00] underline">{company.email}</a>. We operate a responsible disclosure policy with rapid acknowledgment within 24 hours.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-white/[0.08] bg-[#05070D] text-xs font-mono">
          <div className="text-slate-400">
            Have questions about our legal terms? <a href={`mailto:${company.email}`} className="text-[#FF6B00] hover:underline">Contact Legal Desk &rarr;</a>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
