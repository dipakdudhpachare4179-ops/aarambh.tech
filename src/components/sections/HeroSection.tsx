import React from 'react';
import { HeroVideoBackground } from './HeroVideoBackground';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartProject, onExploreServices }) => {
  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Animation Video Element (Replacing the 3D element) */}
      <HeroVideoBackground />

      {/* Hero Content Container — Preserving Established Typography & CTA Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          
          {/* Agency & Founder Badge (Zero-pill discipline: unboxed clean text) */}
          <div className="inline-flex items-center gap-2.5 text-xs text-neutral-400 font-mono-custom tracking-wider mb-5">
            <span className="text-white font-semibold tracking-normal">Aarambh Tech Agency</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span className="text-blue-400">Founder: Paras Dudhapachare</span>
            <span aria-hidden="true" className="text-neutral-600 hidden sm:inline">·</span>
            <span className="text-neutral-500 hidden sm:inline">आरंभ टेक</span>
          </div>

          {/* Marquee Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] text-balance mb-6">
            WE BUILD DIGITAL PRESENCE THAT MOVES BUSINESS FORWARD.
          </h1>

          {/* Supporting Narrative */}
          <p className="font-body text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-9 font-normal">
            Aarambh Tech Agency helps businesses build a stronger digital presence through strategy, content, websites, advertising, automation and creative execution.
          </p>

          {/* Established CTAs Layout */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreServices}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Explore Our Services</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-neutral-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 active:bg-white/[0.08] transition-all duration-200 backdrop-blur-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Operational Trust Signals (Adherence to Section 1A Zero-Pill) */}
          <div className="mt-12 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 font-mono-custom">
            <div>
              <span className="text-white font-medium">Core Capabilities:</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Strategy</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>Content & Shoots</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>Websites</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>Performance Ads</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>Funnels</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-auto">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-[11px] font-mono-custom text-neutral-400 hover:text-white transition-colors"
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll to Explore</span>
          <div className="w-5 h-8 rounded-full border border-neutral-700 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-blue-400 animate-bounce" />
          </div>
        </a>
      </div>

    </section>
  );
};

export default HeroSection;
