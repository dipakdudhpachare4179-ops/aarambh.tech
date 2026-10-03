import React, { useState } from 'react';
import { 
  Megaphone, 
  Share2, 
  Video, 
  Camera, 
  Globe, 
  Sparkles, 
  Palette, 
  TrendingUp, 
  Cpu, 
  Users, 
  Compass,
  ArrowRight
} from 'lucide-react';

const DISCIPLINES = [
  { id: 'strategy', label: 'Strategy', icon: Compass, desc: 'Audience research, positioning roadmap, and performance milestones' },
  { id: 'content', label: 'Content Creation', icon: Video, desc: 'High-retention reel scripts, storytelling angles, and creative assets' },
  { id: 'shoots', label: 'Professional Shoots', icon: Camera, desc: 'Property, product, business, and face-to-camera production' },
  { id: 'social', label: 'Social Media', icon: Share2, desc: 'Daily organic posting, distribution, captioning, and community growth' },
  { id: 'web', label: 'Website Development', icon: Globe, desc: 'Modern high-converting web apps, landing pages, and responsive UI/UX' },
  { id: 'branding', label: 'Branding', icon: Sparkles, desc: 'Visual identity, logo systems, typography, and cohesive voice' },
  { id: 'design', label: 'Graphic Design', icon: Palette, desc: 'High-impact social carousels, display ads, and promotional banners' },
  { id: 'ads', label: 'Advertising', icon: TrendingUp, desc: 'Targeted Meta and Google ad campaigns optimized for ROAS' },
  { id: 'leads', label: 'Lead Generation', icon: Users, desc: 'High-intent funnels, landing flows, and qualification mechanisms' },
  { id: 'automation', label: 'Automation', icon: Cpu, desc: 'Instagram DM triggers, CRM workflows, and WhatsApp inquiry funnels' },
  { id: 'marketing', label: 'Digital Marketing', icon: Megaphone, desc: 'Omnichannel orchestration uniting every digital touchpoint' },
];

export const AboutSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState(DISCIPLINES[0]);

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#080a0e] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-blue-400 tracking-wider uppercase mb-3">
            <span>01. Agency Overview</span>
            <span aria-hidden="true">/</span>
            <span className="text-neutral-500">आरंभ टेक एजेंसी</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            A creative technology & digital growth partner built for modern execution.
          </h2>

          <p className="font-body text-lg sm:text-xl text-neutral-300 leading-relaxed">
            <strong className="text-white font-semibold">Aarambh Tech Agency</strong> is a creative technology and digital growth agency helping businesses establish, improve and scale their online presence.
          </p>
        </div>

        {/* Interactive 3D Connected Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Capability Nodes */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {DISCIPLINES.map((item) => {
              const Icon = item.icon;
              const isSelected = activeItem.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600/15 border-blue-500/60 shadow-lg shadow-blue-500/10 scale-[1.02]'
                      : 'bg-neutral-900/50 border-neutral-800/60 hover:bg-neutral-900 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-500 text-white' : 'bg-neutral-800 text-neutral-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
                    )}
                  </div>
                  <div className="font-display font-semibold text-sm text-white leading-tight">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1 line-clamp-2">
                    {item.desc}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: 3D Perspective Card & Ecosystem Connection */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="text-xs font-mono-custom text-neutral-400 uppercase tracking-wider mb-2">
                Unified Ecosystem
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-4">
                How our disciplines interconnect
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-body">
                Rather than treating design, code, shoots, and advertising as isolated silos, Aarambh Tech Agency operates them as an integrated loop. Strategy informs content, content powers shoots, shoots feed ads and websites, and automation captures resulting customer demand.
              </p>

              {/* Active Discipline Spotlight */}
              <div className="p-5 rounded-xl bg-neutral-950/70 border border-blue-500/30 mb-6">
                <div className="text-xs font-mono-custom text-blue-400 uppercase tracking-wider mb-1">
                  Selected Focus
                </div>
                <div className="text-lg font-bold text-white font-display mb-1">
                  {activeItem.label}
                </div>
                <p className="text-xs text-neutral-300 font-body leading-relaxed">
                  {activeItem.desc}
                </p>
              </div>

              {/* Real Operational Principle */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span>Single Point of Strategic Accountability</span>
                <a href="#workflow" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 font-medium">
                  <span>See Full Workflow</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
