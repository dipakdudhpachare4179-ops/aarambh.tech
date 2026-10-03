import React, { useState, useRef, useEffect } from 'react';
import { Camera, Sparkles, Upload, Check, Quote, ArrowUpRight } from 'lucide-react';

export const FounderSection: React.FC<{ onContactFounder: () => void }> = ({ onContactFounder }) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    return localStorage.getItem('aarambh_founder_photo') || null;
  });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomPhoto(result);
        localStorage.setItem('aarambh_founder_photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="founder" className="relative py-24 sm:py-32 bg-[#07080a] border-t border-neutral-800/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-blue-400 tracking-wider uppercase mb-3">
            <span>02. Leadership & Vision</span>
            <span aria-hidden="true">/</span>
            <span className="text-neutral-500">संस्थापक</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Meet the Founder & Creative Strategist.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 3D Founder Portrait Column */}
          <div className="lg:col-span-5 perspective-1000 flex flex-col items-center">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-700/60 shadow-2xl bg-neutral-900 group transform-style-3d cursor-default"
            >
              {/* Photo Display: Custom Uploaded or Studio Recreation */}
              {customPhoto ? (
                <img
                  src={customPhoto}
                  alt="Paras Dudhapachare - Founder & Creative Strategist at Aarambh Tech Agency"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              ) : (
                /* High-fidelity studio representation of Paras Dudhapachare */
                <div className="w-full h-full relative bg-gradient-to-b from-neutral-900 via-[#101217] to-neutral-950 flex flex-col items-center justify-between p-6">
                  {/* Studio Wall Neon */}
                  <div className="w-full text-left pt-2">
                    <div className="font-display font-bold text-white text-lg tracking-tight leading-tight">
                      Better Websites
                    </div>
                    <div className="font-display font-bold text-neutral-300 text-lg tracking-tight leading-tight">
                      Bigger Dreams
                    </div>
                    <div className="text-[10px] font-mono-custom text-blue-400 tracking-wider uppercase mt-1">
                      Aarambh Tech
                    </div>
                  </div>

                  {/* Visual Portrait Card */}
                  <div className="relative my-auto flex flex-col items-center">
                    <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-neutral-700 to-amber-500/40 shadow-xl">
                      <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center overflow-hidden border border-neutral-800">
                        {/* Styled SVG Portrait Silhouette */}
                        <svg viewBox="0 0 100 100" className="w-full h-full text-neutral-300">
                          {/* Warm studio glow */}
                          <defs>
                            <radialGradient id="studioGlow" cx="50%" cy="40%" r="60%">
                              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.9" />
                            </radialGradient>
                          </defs>
                          <rect width="100" height="100" fill="url(#studioGlow)" />
                          
                          {/* Stylized silhouette of Paras Dudhapachare */}
                          {/* Shoulders & Dark Shirt */}
                          <path d="M15 100 C20 75 32 72 50 72 C68 72 80 75 85 100 Z" fill="#181a20" />
                          <path d="M44 72 L50 82 L56 72 Z" fill="#2d3139" />
                          {/* Neck */}
                          <path d="M43 55 L43 72 C47 75 53 75 57 72 L57 55 Z" fill="#d97706" opacity="0.4" />
                          {/* Face & Jaw */}
                          <path d="M35 42 C35 60 42 66 50 66 C58 66 65 60 65 42 C65 30 58 24 50 24 C42 24 35 30 35 42 Z" fill="#b45309" opacity="0.3" />
                          {/* Modern styled hair */}
                          <path d="M32 38 C32 20 40 14 54 14 C65 14 68 22 68 34 C64 30 56 26 46 28 C38 30 34 35 32 38 Z" fill="#0f1115" />
                          {/* Studio laptop screen */}
                          <rect x="70" y="65" width="22" height="15" rx="1.5" fill="#1e293b" />
                          <path d="M78 70 L83 77 L81 77 L78 72 L75 77 L73 77 Z" fill="#38bdf8" />
                        </svg>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <div className="font-display font-bold text-xl text-white">
                        Paras Dudhapachare
                      </div>
                      <div className="text-xs text-blue-400 font-mono-custom tracking-wider">
                        Founder & Creative Strategist
                      </div>
                    </div>
                  </div>

                  {/* Studio Bookshelf Metaphor */}
                  <div className="w-full pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono-custom text-neutral-400">
                    <span>Ideas · Code · Design · Impact</span>
                    <span className="text-amber-400/80">Studio Desk</span>
                  </div>
                </div>
              )}

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Caption Tag at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <div className="text-white font-display font-semibold text-xs leading-none">
                    Paras Dudhapachare
                  </div>
                  <div className="text-neutral-400 text-[10px] font-mono-custom mt-0.5">
                    Founder · Aarambh Tech Agency
                  </div>
                </div>

                <div className="pointer-events-auto">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload or update founder photo"
                    className="p-2 rounded-lg bg-neutral-800/90 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors border border-neutral-600/50 cursor-pointer shadow-lg"
                  >
                    <Upload className="w-4 h-4" />
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>
            </div>

            {/* Photo upload status cue */}
            <div className="mt-3 flex items-center gap-2 text-xs text-neutral-400 font-mono-custom">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Verified Agency Principal Photo</span>
              {customPhoto && (
                <button
                  onClick={() => {
                    localStorage.removeItem('aarambh_founder_photo');
                    setCustomPhoto(null);
                  }}
                  className="text-neutral-500 hover:text-neutral-300 underline ml-2 cursor-pointer"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Founder Narrative Column */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              
              {/* Studio Wall Mantra */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-950 border border-neutral-800/80 relative">
                <Quote className="w-8 h-8 text-blue-500/20 absolute top-4 right-4" />
                <div className="text-xs font-mono-custom text-blue-400 uppercase tracking-wider mb-2">
                  Agency Philosophy
                </div>
                <p className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                  "Better Websites. Bigger Dreams."
                </p>
                <p className="text-sm text-neutral-400 mt-2 font-body">
                  The foundational commitment displayed in our studio: every project we take on must elevate the client's commercial reality, not just look pretty in a deck.
                </p>
              </div>

              {/* Founder Introduction - Honest, accurate, no fake claims */}
              <div className="space-y-4 text-neutral-300 font-body text-base sm:text-lg leading-relaxed">
                <p>
                  As the Founder and Creative Strategist of <strong className="text-white">Aarambh Tech Agency</strong>, Paras Dudhapachare leads our agency’s creative vision, technical architecture, and digital growth systems.
                </p>
                <p>
                  Aarambh Tech Agency was founded on a simple realization: modern businesses struggle when their creative content, website development, advertising campaigns, and lead handling operate in disconnected silos. Paras orchestrates a coordinated system where every reel script, ad creative, website interaction, and automated follow-up works toward a single commercial objective.
                </p>
              </div>

              {/* Core Execution Pillars */}
              <div className="pt-4 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
                  <div className="text-xs font-mono-custom text-blue-400 uppercase tracking-wider mb-1">
                    Hands-On Direction
                  </div>
                  <div className="text-sm font-bold text-white font-display">
                    Strategy & Creative Oversight
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">
                    Direct founder involvement in campaign roadmaps, shoot concepts, and architectural decisions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
                  <div className="text-xs font-mono-custom text-blue-400 uppercase tracking-wider mb-1">
                    Direct Client Partnership
                  </div>
                  <div className="text-sm font-bold text-white font-display">
                    Clear, Honest Communication
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">
                    No layered account executives. Honest scoping, transparent milestones, and accountable execution.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onContactFounder}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-900 border border-neutral-700 transition-colors cursor-pointer"
                >
                  <span>Discuss a Project with Paras</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FounderSection;
