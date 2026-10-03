import React, { useState } from 'react';
import { 
  User, 
  Film, 
  Code2, 
  Palette, 
  FileText, 
  CalendarDays, 
  Compass, 
  Camera, 
  TrendingUp, 
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

interface TeamRole {
  role: string;
  lead?: string;
  icon: React.ComponentType<{ className?: string }>;
  focus: string;
  responsibility: string;
  isFounder?: boolean;
}

const ROLES: TeamRole[] = [
  {
    role: 'Founder / Creative Strategist',
    lead: 'Paras Dudhapachare',
    icon: Sparkles,
    focus: 'Vision, Creative Direction & Growth Roadmaps',
    responsibility: 'Translates business targets into end-to-end creative positioning, overseeing shoot concepts, tech architecture, and client partnerships.',
    isFounder: true,
  },
  {
    role: 'Video Editor',
    icon: Film,
    focus: 'Pacing, Sound Design & Retention Cuts',
    responsibility: 'Transforms raw footage into fast-paced, high-retention vertical reels, commercials, and YouTube content with custom sound effects and motion typography.',
  },
  {
    role: 'Web Builder / Web Developer',
    icon: Code2,
    focus: 'Modern Frontends, 3D Web & Conversion Funnels',
    responsibility: 'Codes fast, responsive, and aesthetically stunning web applications and landing pages engineered for maximum conversion velocity.',
  },
  {
    role: 'Graphic Designer',
    icon: Palette,
    focus: 'Visual Identity, Carousels & Brand Assets',
    responsibility: 'Crafts bespoke digital visual collateral, social media banners, advertisement creatives, and brand kits that maintain visual consistency.',
  },
  {
    role: 'Script Writer',
    icon: FileText,
    focus: 'Psychological Hooks, Angles & CTAs',
    responsibility: 'Researches viral hooks, direct-response storytelling angles, and conversion-focused scripts for reels, advertisements, and promotional campaigns.',
  },
  {
    role: 'Content Planner',
    icon: CalendarDays,
    focus: 'Calendars, Frequency & Organic Distribution',
    responsibility: 'Structures monthly publishing schedules, content buckets, and distribution timing to ensure consistent organic brand authority.',
  },
  {
    role: 'Strategy Planner',
    icon: Compass,
    focus: 'Audience Demographics & Competitor Intelligence',
    responsibility: 'Analyzes market gaps, competitor messaging, and customer pain points to establish defensible positioning strategies.',
  },
  {
    role: 'Shoot Team',
    icon: Camera,
    focus: 'Cinema Production, Lighting & On-Location Capture',
    responsibility: 'Operates on-site cameras, lighting, gimbals, and audio equipment for property tours, product shoots, and face-to-camera creator reels.',
  },
  {
    role: 'Ads / Performance Marketing',
    icon: TrendingUp,
    focus: 'Meta Ads, Google Ads & Algorithmic Scaling',
    responsibility: 'Configures conversion tracking, executes systematic A/B creative testing, and optimizes media campaigns to reduce acquisition costs.',
  },
  {
    role: 'Automation / Technical Support',
    icon: Cpu,
    focus: 'Instagram DMs, WhatsApp Funnels & CRM Sync',
    responsibility: 'Builds automated keyword reply triggers, lead sorting systems, and CRM integrations to convert organic engagement into qualified pipeline.',
  },
];

export const TeamSection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<TeamRole>(ROLES[0]);

  return (
    <section id="team" className="relative py-24 sm:py-32 bg-[#07080a] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-blue-400 tracking-wider uppercase mb-3">
            <span>04. Specialists & Execution Units</span>
            <span aria-hidden="true">/</span>
            <span className="text-neutral-500">हमारी टीम</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            ONE AGENCY. MULTIPLE SPECIALISTS.
          </h2>

          <p className="font-body text-lg text-neutral-300">
            Different skills. One coordinated system.
          </p>
          <p className="font-body text-sm text-neutral-400 mt-2">
            We structure our team around specialized functional roles rather than inflated titles. Every department connects directly to our central agency workflow.
          </p>
        </div>

        {/* Coordinated System Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Role Navigation Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {ROLES.map((r, i) => {
              const Icon = r.icon;
              const isCurrent = selectedRole.role === r.role;
              return (
                <button
                  key={r.role}
                  onClick={() => setSelectedRole(r)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                    isCurrent
                      ? 'bg-blue-600/15 border-blue-500/60 shadow-lg shadow-blue-500/10'
                      : 'bg-neutral-900/50 border-neutral-800/70 hover:bg-neutral-900 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className={`p-2 rounded-lg ${isCurrent ? 'bg-blue-600 text-white' : 'bg-neutral-800 text-neutral-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {r.isFounder && (
                      <span className="text-[10px] font-mono-custom text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                        Agency Lead
                      </span>
                    )}
                  </div>
                  
                  <div className="font-display font-bold text-sm text-white leading-snug">
                    {r.role}
                  </div>
                  {r.lead && (
                    <div className="text-xs text-blue-400 font-medium mt-0.5">
                      {r.lead}
                    </div>
                  )}
                  <div className="text-[11px] text-neutral-400 mt-1 line-clamp-1 font-body">
                    {r.focus}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Specialist Hub & Network Architecture */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-neutral-800 p-8 rounded-2xl sticky top-28 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-mono-custom text-blue-400 uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Role Specification</span>
            </div>

            <div className="font-display text-2xl font-bold text-white mb-1">
              {selectedRole.role}
            </div>

            {selectedRole.lead && (
              <div className="text-sm font-semibold text-blue-400 font-mono-custom mb-4">
                Assigned: {selectedRole.lead}
              </div>
            )}

            <div className="py-4 my-4 border-y border-neutral-800 space-y-4">
              <div>
                <span className="text-[10px] font-mono-custom uppercase tracking-wider text-neutral-400 block mb-1">
                  Core Mandate
                </span>
                <p className="text-sm text-white font-medium">
                  {selectedRole.focus}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono-custom uppercase tracking-wider text-neutral-400 block mb-1">
                  Operational Responsibility
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed font-body">
                  {selectedRole.responsibility}
                </p>
              </div>
            </div>

            {/* Hub Integration Diagram */}
            <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
              <div className="text-[10px] font-mono-custom text-neutral-400 uppercase tracking-wider mb-2">
                Agency Coordination Protocol
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-300">
                <span>Brief & Strategy</span>
                <span className="text-neutral-600">→</span>
                <span className="text-blue-400 font-medium">Specialist Unit</span>
                <span className="text-neutral-600">→</span>
                <span>Client Review</span>
              </div>
            </div>

            <div className="mt-6 text-[11px] text-neutral-400 font-body">
              * Aarambh Tech Agency utilizes dedicated specialist roles to deliver reliable results without administrative overhead.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TeamSection;
