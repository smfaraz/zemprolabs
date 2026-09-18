import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../components/BrandLogo';
import { ArrowLeft, Home } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 text-center">
      <SEO
        title="404 — Page Not Found"
        description="The requested page could not be located on the Zemprolabs digital platform."
      />

      <div className="max-w-md mx-auto space-y-6">
        <div>
          <BrandLogo variant="full" size="lg" />
        </div>

        <div className="space-y-2 pt-4">
          <span className="text-xs font-mono text-[#FF6B00] tracking-wider uppercase">
            // ERROR 404: RESOURCE NOT FOUND
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Page Does Not Exist
          </h1>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            The route or resource you are looking for has been relocated, renamed, or is unavailable in our current production deployment.
          </p>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)]"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
