import React from 'react';
import { ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';

interface FinalCTASectionProps {
  onStartProject: () => void;
  onTalkToAgency: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onStartProject, onTalkToAgency }) => {
  return (
    <section className="relative py-28 sm:py-36 bg-gradient-to-b from-[#07080a] via-[#0b0e14] to-[#07080a] border-t border-neutral-800/80 overflow-hidden">
      {/* 3D Kinetic Light Rings in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-blue-400 tracking-wider uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Take the First Step</span>
          <span aria-hidden="true">/</span>
          <span className="text-neutral-500">आरंभ</span>
        </div>

        <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] text-balance mb-6">
          LET'S BUILD YOUR DIGITAL PRESENCE.
        </h2>

        <p className="font-body text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Have a business, idea or project in mind? Let's discuss what we can build together.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onTalkToAgency}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 transition-all duration-200 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span>Talk to Aarambh Tech Agency</span>
          </button>
        </div>

        {/* Brand attribution footer badge */}
        <div className="mt-14 pt-8 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono-custom">
          <span>Aarambh Tech Agency</span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span>Founder — Paras Dudhapachare</span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span>Strategy · Content · Websites · Ads · Automation</span>
        </div>

      </div>
    </section>
  );
};

export default FinalCTASection;
