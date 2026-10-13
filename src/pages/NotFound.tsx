import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../components/BrandLogo';
import { Home, ArrowRight, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFound: React.FC = () => {
  return (
    <div className="w-full bg-[#090A0D] min-h-[80vh] flex items-center justify-center px-4 py-32 text-center">
      <SEO
        title="404 — Page Not Found | Zemprolabs"
        description="The requested page could not be located on the Zemprolabs engineering platform."
      />

      <div className="max-w-lg mx-auto space-y-8">
        <div className="flex justify-center">
          <BrandLogo variant="full" size="lg" />
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
            <span>// ERROR 404: RESOURCE NOT LOCATED</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md mx-auto">
            The route or resource you are looking for has been relocated, restructured, or is unavailable in our current production deployment.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all font-mono"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-mono"
          >
            <span>View Client Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
          Need immediate support? Contact our engineering desk at{' '}
          <a href="mailto:info@zemprolabs.com" className="text-[#FF6B00] hover:underline">
            info@zemprolabs.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
