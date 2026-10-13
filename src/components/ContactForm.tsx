import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Mail, Clock, ShieldCheck, MessageSquare, RefreshCw } from 'lucide-react';
import { company } from '../data/company';

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  timeline: string;
  message: string;
}

const SERVICE_OPTIONS = [
  'Web App & SaaS Engineering',
  'E-Commerce Platforms & Storefronts',
  'Enterprise ServiceNow',
  'Business Development Engine',
  'Cloud Infrastructure & DevOps',
  'Dedicated Agile Retainer Pod'
];

const TIMELINE_OPTIONS = [
  'Fast-track sprint (2–4 wks)',
  'Standard sprints (1–2 mos)',
  'Multi-phase platform (3+ mos)',
  'Ongoing agile retainer'
];

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: searchParams.get('service') || SERVICE_OPTIONS[0],
    timeline: searchParams.get('timeline') || TIMELINE_OPTIONS[1],
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'dev_notice' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const s = searchParams.get('service');
    const t = searchParams.get('timeline');
    if (s && SERVICE_OPTIONS.includes(s)) setFormData((prev) => ({ ...prev, service: s }));
    if (t && TIMELINE_OPTIONS.includes(t)) setFormData((prev) => ({ ...prev, timeline: t }));
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectService = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
  };

  const handleSelectTimeline = (timeline: string) => {
    setFormData((prev) => ({ ...prev, timeline }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const endpoint = (import.meta as any).env?.VITE_CONTACT_ENDPOINT;

    if (endpoint && endpoint.trim() !== '') {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          setStatus('success');
        } else {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || 'Submission failed. Please use our direct email link.');
        }
      } catch (err: any) {
        setStatus('error');
        setErrorMessage(err.message || 'Unable to connect to transmission gateway.');
      }
    } else {
      setTimeout(() => {
        setStatus('dev_notice');
      }, 350);
    }
  };

  const mailtoLink = `mailto:${company.email}?subject=${encodeURIComponent(
    `Project Brief: ${formData.service} - ${formData.name || 'Prospective Client'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone/WhatsApp: ${formData.phone || 'N/A'}\nCompany: ${formData.company || 'N/A'}\n\nDiscipline: ${formData.service}\nTimeline: ${formData.timeline}\n\nProject Scope & Technical Details:\n${formData.message}`
  )}`;

  const whatsappMessage = encodeURIComponent(
    `Hello Zemprolabs Team,\n\nI submitted a project brief on your website.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nCompany: ${formData.company || 'N/A'}\nDiscipline: ${formData.service}\nTimeline: ${formData.timeline}\n\nBrief Details:\n${formData.message}`
  );
  const whatsappLink = `https://wa.me/917447557577?text=${whatsappMessage}`;

  return (
    <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative">
      {/* Dev / Direct Dispatch State */}
      {status === 'dev_notice' && (
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-white/[0.02] border border-[#FF6B00]/40 space-y-4">
            <div className="flex items-center gap-2 text-sm text-[#FF6B00] font-semibold">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Project brief compiled and ready for dispatch</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Your technical requirements have been organized. Send your brief directly to our engineering team:
            </p>
            <div className="p-4 rounded-lg bg-[#050608] border border-white/10 text-xs text-slate-300 space-y-1.5">
              <div><strong className="text-white">Client:</strong> {formData.name} ({formData.email})</div>
              {formData.phone && <div><strong className="text-white">Phone:</strong> {formData.phone}</div>}
              {formData.company && <div><strong className="text-white">Company:</strong> {formData.company}</div>}
              <div><strong className="text-white">Discipline:</strong> {formData.service}</div>
              <div><strong className="text-white">Timeline:</strong> {formData.timeline}</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={mailtoLink}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send via Email</span>
              </a>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="px-4 py-3 rounded-xl text-xs text-slate-400 hover:text-white border border-white/15"
              >
                Edit Brief
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Production Success State */}
      {status === 'success' && (
        <div className="p-8 rounded-xl bg-white/[0.03] border border-emerald-500/40 text-center space-y-5">
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold font-display text-white">Project Brief Received</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Thank you, {formData.name}. Your specifications are in the hands of our lead engineers. We review every requirement personally and reply within 24 hours.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setStatus('idle');
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  company: '',
                  service: SERVICE_OPTIONS[0],
                  timeline: TIMELINE_OPTIONS[1],
                  message: ''
                });
              }}
              className="px-5 py-2.5 rounded-xl text-xs text-slate-400 hover:text-white border border-white/15"
            >
              Submit Another Brief
            </button>
          </div>
        </div>
      )}

      {/* Error Notice */}
      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 mb-6 text-xs text-red-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMessage}</span>
          </div>
          <a href={mailtoLink} className="underline font-semibold ml-2 text-white shrink-0">
            Send via direct email
          </a>
        </div>
      )}

      {/* Active Form */}
      {status !== 'success' && status !== 'dev_notice' && (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Selector Chips */}
          <div>
            <label className="block text-xs text-slate-300 font-medium mb-2.5">
              Select primary discipline *
            </label>
            <div className="flex flex-wrap gap-2">
              {SERVICE_OPTIONS.map((srv) => {
                const isSelected = formData.service === srv;
                return (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => handleSelectService(srv)}
                    className={`px-3.5 py-2 rounded-lg text-xs transition-all text-left ${
                      isSelected
                        ? 'bg-[#FF6B00] text-black font-semibold shadow-[0_0_15px_rgba(255,107,0,0.3)]'
                        : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {srv}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Timeline Selector Chips */}
          <div>
            <label className="block text-xs text-slate-300 font-medium mb-2.5">
              Target delivery timeline *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {TIMELINE_OPTIONS.map((t) => {
                const isSelected = formData.timeline === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => handleSelectTimeline(t)}
                    className={`px-3 py-2 rounded-lg text-xs transition-all text-center ${
                      isSelected
                        ? 'bg-white text-black font-semibold'
                        : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Client Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="form-name" className="block text-xs text-slate-300 font-medium mb-1.5">
                Full name *
              </label>
              <input
                id="form-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors placeholder:text-slate-600"
              />
            </div>

            <div>
              <label htmlFor="form-email" className="block text-xs text-slate-300 font-medium mb-1.5">
                Work email *
              </label>
              <input
                id="form-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors placeholder:text-slate-600"
              />
            </div>

            <div>
              <label htmlFor="form-phone" className="block text-xs text-slate-300 font-medium mb-1.5">
                Phone or WhatsApp (Optional)
              </label>
              <input
                id="form-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors placeholder:text-slate-600"
              />
            </div>

            <div>
              <label htmlFor="form-company" className="block text-xs text-slate-300 font-medium mb-1.5">
                Company or project name (Optional)
              </label>
              <input
                id="form-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Corp"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors placeholder:text-slate-600"
              />
            </div>
          </div>

          {/* Project Scope Description */}
          <div>
            <label htmlFor="form-message" className="block text-xs text-slate-300 font-medium mb-1.5">
              Project scope and technical requirements *
            </label>
            <textarea
              id="form-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your goals, tech stack preferences (e.g. Next.js, Shopify, ServiceNow), integrations, or repository links..."
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors resize-y placeholder:text-slate-600 leading-relaxed"
            />
          </div>

          {/* Submit Action */}
          <div className="space-y-3">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all disabled:opacity-50 shadow-[0_0_25px_rgba(255,107,0,0.3)] hover:shadow-[0_0_35px_rgba(255,107,0,0.5)] cursor-pointer"
            >
              {status === 'submitting' ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-black" />
                  <span>Submitting brief...</span>
                </>
              ) : (
                <>
                  <span>Submit Project Brief</span>
                  <Send className="w-4 h-4 stroke-[2.5]" />
                </>
              )}
            </button>

            {/* SLA Guarantee Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Clock className="w-3.5 h-3.5" />
                <span>24-hour engineering review guarantee</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Direct mutual NDA on request</span>
              </span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
