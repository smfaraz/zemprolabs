import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';

// Code-split route components for optimal production bundle performance
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const Work = lazy(() => import('./pages/Work').then((m) => ({ default: m.Work })));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })));
const Process = lazy(() => import('./pages/Process').then((m) => ({ default: m.Process })));
const ProjectEstimation = lazy(() => import('./pages/ProjectEstimation').then((m) => ({ default: m.ProjectEstimation })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

// ScrollToTop component to reset scroll position on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Lightweight, seamless fallback during route transitions
const RouteSuspenseFallback: React.FC = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-[#FF6B00]/20 border-t-[#FF6B00] animate-spin" />
      <span className="text-[11px] font-mono text-slate-500 tracking-wider">LOADING ARCHITECTURE...</span>
    </div>
  </div>
);

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#05070D] text-[#F8FAFC] flex flex-col relative w-full max-w-full overflow-x-hidden selection:bg-[#FF6B00] selection:text-black">
          {/* Atmospheric Background Pattern */}
          <div className="bg-grid-pattern"></div>

          {/* Global Navigation */}
          <Navbar />

          {/* Dynamic Route Pages with Code-Splitting */}
          <main className="flex-1 w-full max-w-full overflow-x-hidden">
            <Suspense fallback={<RouteSuspenseFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/managed-services" element={<Navigate to="/services" replace />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/:id" element={<ProjectDetail />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/process" element={<Process />} />
                <Route path="/project-estimation" element={<ProjectEstimation />} />
                <Route path="/estimation" element={<Navigate to="/project-estimation" replace />} />
                <Route path="/pricing" element={<Navigate to="/project-estimation" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* 404 Catch-All Page */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
