import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Check, 
  MessageSquare
} from 'lucide-react';
import { company } from '../data/company';

interface SimpleContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export const HomeContactSection: React.FC = () => {
  const [formData, setFormData] = useState<SimpleContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Websites & E-Commerce',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'dev_notice' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const setService = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
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
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setStatus('success');
        } else {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || 'Submission failed. Please reach out directly.');
        }
      } catch (err: any) {
        setStatus('error');
        setErrorMessage(err.message || 'Unable to connect to submission gateway.');
      }
    } else {
      setTimeout(() => {
        setStatus('dev_notice');
      }, 500);
    }
  };

  const mailtoLink = `mailto:${company.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.company || formData.name} (${formData.service})`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Phone / WhatsApp: ${formData.phone}\n` +
    `Company / Website: ${formData.company || 'N/A'}\n` +
    `Interest: ${formData.service}\n\n` +
    `Project Overview:\n${formData.message}`
  )}`;

  const whatsappMessage = encodeURIComponent(
    `Hello Zemprolabs Team,\n\nI would like to discuss a project.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || 'N/A'}\n*Company:* ${formData.company || 'N/A'}\n*Interest:* ${formData.service}\n\n*Project Overview:*\n${formData.message}`
  );
  const whatsappLink = `https://wa.me/917447557577?text=${whatsappMessage}`;

  const services = [
    'Websites & E-Commerce',
    'Custom Software / Apps',
    '24/7 Platform Care',
    'Speed & Optimization'
  ];

  return (
    <section id="contact-form" className="pt-14 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-t border-[rgba(148,163,184,0.08)] bg-[#04060A] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-80 bg-[#FF6B00]/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Context & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START A PROJECT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-[1.1]">
                Let&apos;s build something great.
              </h2>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Have a project in mind or need dedicated ongoing technical care? Drop us a quick note and our senior engineering lead will get back to you within 24 hours.
              </p>
            </div>

            {/* Direct Communication Channels */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#080D18]/95 border border-white/[0.08] space-y-4 shadow-xl">
              <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider font-semibold">
                // INSTANT DIRECT CHAT
              </div>

              <div className="space-y-3">
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] hover:bg-[#10B981]/20 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold font-mono">
                      Chat on WhatsApp
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#10B981] group-hover:translate-x-0.5 transition-transform">
                    {company.phone} &rarr;
                  </span>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={company.emailHref}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-300 hover:text-white hover:border-white/20 transition-all text-xs font-mono"
                  >
                    <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="truncate">{company.email}</span>
                  </a>

                  <a
                    href={company.phoneHref}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-300 hover:text-white hover:border-white/20 transition-all text-xs font-mono"
                  >
                    <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span className="truncate">{company.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="space-y-2.5 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Strict NDA &bull; 100% Client Code Ownership</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Fast response &bull; Detailed proposal within 24–48 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Uncluttered Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#080D18]/95 border border-white/[0.08] p-6 sm:p-8 shadow-2xl relative">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-70" />

              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center mx-auto text-[#10B981]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Message Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
                    Thank you! Our technical lead will review your message and reply to {formData.email || 'you'} within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 px-5 py-2 rounded-lg text-xs font-mono bg-white/10 hover:bg-white/15 text-white transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : status === 'dev_notice' ? (
                <div className="space-y-5 py-4">
                  <div className="p-4 rounded-xl bg-[#0B1528] border border-[#38BDF8]/40 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>MESSAGE READY TO SEND</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Click below to send your inquiry directly to our engineering inbox.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={mailtoLink}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)] font-mono font-bold"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-[#10B981]/20 border border-[#10B981]/50 text-[#10B981] hover:bg-[#10B981]/30 transition-all font-mono font-bold"
                    >
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setStatus('idle')}
                    className="w-full text-center text-xs font-mono text-slate-400 hover:text-white transition-colors pt-1"
                  >
                    &larr; Back to form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Service Pills */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold mb-2">
                      I&apos;M INTERESTED IN:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((svc) => {
                        const isSelected = formData.service === svc;
                        return (
                          <button
                            type="button"
                            key={svc}
                            onClick={() => setService(svc)}
                            className={`px-3 py-2.5 rounded-lg border text-xs font-medium text-left transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#FF6B00]/15 border-[#FF6B00] text-white'
                                : 'bg-[#04060A] border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20'
                            }`}
                          >
                            <span className="truncate">{svc}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 ml-1" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04060A] border border-white/[0.08] focus:border-[#FF6B00] text-white text-xs placeholder:text-slate-600 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04060A] border border-white/[0.08] focus:border-[#FF6B00] text-white text-xs placeholder:text-slate-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04060A] border border-white/[0.08] focus:border-[#FF6B00] text-white text-xs placeholder:text-slate-600 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        Company or Website (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc / acme.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04060A] border border-white/[0.08] focus:border-[#FF6B00] text-white text-xs placeholder:text-slate-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      Project Details or Questions *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us a little about what you're looking to build, any specific goals, or your expected timeline..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#04060A] border border-white/[0.08] focus:border-[#FF6B00] text-white text-xs placeholder:text-slate-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)] active:scale-[0.99] disabled:opacity-50 font-mono font-bold cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <span>SENDING MESSAGE...</span>
                    ) : (
                      <>
                        <span>SEND INQUIRY &rarr; GET RESPONSE IN 24H</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-slate-500 pt-0.5">
                    <span>100% Confidential</span>
                    <span>&bull;</span>
                    <span>NDA Protected</span>
                    <span>&bull;</span>
                    <span>Direct Senior Lead Chat</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
