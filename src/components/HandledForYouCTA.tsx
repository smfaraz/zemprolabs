import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Headphones, ShieldCheck, Sparkles } from 'lucide-react';

export const HandledForYouCTA: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-br from-[#0B0F17] via-[#111827] to-[#05070D] border border-[rgba(148,163,184,0.18)] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
        <div className="ambient-glow top-0 right-0 w-80 h-80 bg-[#FF6B00]/10"></div>
        <div className="ambient-glow bottom-0 left-0 w-80 h-80 bg-[#004AAD]/15"></div>

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S BUILD SOMETHING GREAT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Start a Project with Zemprolabs
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Whether you need a new digital build, e-commerce store care, or full-stack engineering support, our qualified team is ready.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/917447557577"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Zemprolabs on WhatsApp"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#10B981]/10 text-[#10B981] hover:bg-[#10B981]/20 border border-[#10B981]/30 transition-all active:scale-95"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-[#94A3B8] border-t border-[rgba(148,163,184,0.1)]">
            <a href="tel:+917447557577" className="hover:text-white transition-colors">
              Phone: <span className="text-white">+91 744 755 7577</span>
            </a>
            <a href="https://wa.me/917447557577" target="_blank" rel="noopener noreferrer" className="hover:text-[#10B981] transition-colors">
              WhatsApp: <span className="text-[#10B981]">+91 744 755 7577</span>
            </a>
            <a href="tel:+917447557599" className="hover:text-white transition-colors">
              Alt: <span className="text-slate-300">+91 744 755 7599</span>
            </a>
            <a href="mailto:info@zemprolabs.com" className="hover:text-white transition-colors">
              Email: <span className="text-white">info@zemprolabs.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
