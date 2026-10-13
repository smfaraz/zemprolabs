import React from 'react';
import { SEO } from '../components/SEO';
import { ContactForm } from '../components/ContactForm';
import {
  ScrollReveal,
  FloatingParticles,
  AntigravityTiltCard,
} from '../components/motion';

export const Contact: React.FC = () => {
  return (
    <div className="w-full bg-[#090A0D] text-white min-h-screen selection:bg-[#FF6B00] selection:text-black relative overflow-hidden">
      <SEO
        title="Contact Us | Direct Engineering Access | Zemprolabs"
        description="Initiate your project brief with Zemprolabs. Talk directly with the engineering team leading your build. Sub-24h response SLA."
        canonicalPath="/contact"
      />

      {/* Ambient Floating Luminous Energy Particles */}
      <FloatingParticles count={20} />

      <section className="px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 sm:pb-28 max-w-3xl mx-auto relative z-10">
        <ScrollReveal preset="fade-up" className="mb-8 space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF6B00]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
            <span>DIRECT LEAD ARCHITECT REVIEW &bull; 24-HOUR SLA</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white mt-3">
            Initiate your project brief
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            Share your technical requirements below. Our engineering team will review your brief and reply within 24 hours.
          </p>
        </ScrollReveal>

        <ScrollReveal preset="fade-up" delay={0.15}>
          <AntigravityTiltCard tiltMax={3} className="rounded-2xl">
            <ContactForm />
          </AntigravityTiltCard>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Contact;
