import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Process', path: '/process' },
    { name: 'Project Estimation', path: '/project-estimation' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (
      path === '/project-estimation' &&
      (location.pathname.startsWith('/project-estimation') ||
        location.pathname.startsWith('/estimation') ||
        location.pathname.startsWith('/pricing'))
    ) {
      return true;
    }
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 min-h-[72px] sm:min-h-[80px] flex items-center ${
          scrolled
            ? 'bg-[#05070D]/95 backdrop-blur-md border-b border-[rgba(148,163,184,0.12)] py-2.5 shadow-2xl'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Official Brand Logo */}
          <div className="shrink-0 flex items-center">
            <BrandLogo variant="responsive" size="md" priority />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                    active
                      ? 'text-white bg-white/5 border border-[rgba(255,107,0,0.3)] shadow-[0_0_12px_rgba(255,107,0,0.15)]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all duration-200 shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_25px_rgba(255,107,0,0.5)] active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#0B0F17] border-l border-[rgba(148,163,184,0.15)] p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[rgba(148,163,184,0.12)]">
            <BrandLogo variant="full" size="sm" onClick={() => setMobileOpen(false)} />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 text-[#94A3B8] hover:text-white rounded-md hover:bg-white/5"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    active
                      ? 'text-white bg-[#FF6B00]/10 border border-[#FF6B00]/30 font-semibold'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-[rgba(148,163,184,0.12)]">
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-base font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
          <div className="mt-4 text-center text-xs font-mono text-[#94A3B8]">
            // SYSTEMS ACTIVE &bull; SUB-24H SLA
          </div>
        </div>
      </div>
    </>
  );
};
