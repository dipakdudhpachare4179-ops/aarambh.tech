import React, { useState } from 'react';
import { 
  Search, 
  Compass, 
  Calendar, 
  Wrench, 
  Rocket, 
  SlidersHorizontal, 
  BarChart3, 
  TrendingUp,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface Stage {
  id: string;
  step: string;
  name: string;
  tagline: string;
  desc: string;
  activities: string[];
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}

const STAGES: Stage[] = [
  {
    id: 'discover',
    step: '01',
    name: 'DISCOVER',
    tagline: 'Understand business, audience and goals.',
    desc: 'We begin with an exhaustive deep-dive into your existing commercial model, customer demographics, past marketing performance, and exact revenue targets.',
    activities: ['Commercial model audit', 'Audience profiling & pain point mapping', 'Competitor positioning review', 'Resource & asset inventory'],
    icon: Search,
    accent: '#60a5fa',
  },
  {
    id: 'strategy',
    step: '02',
    name: 'STRATEGY',
    tagline: 'Build the right content and marketing direction.',
    desc: 'We formulate a defensible marketing blueprint: selecting which channels, creative formats, and conversion mechanisms will generate the highest return.',
    activities: ['Channel priority matrix', 'Core content pillar definition', 'Offer & funnel architecture', 'Media budget allocation roadmap'],
    icon: Compass,
    accent: '#38bdf8',
  },
  {
    id: 'plan',
    step: '03',
    name: 'PLAN',
    tagline: 'Create campaigns, content calendars and execution plans.',
    desc: 'Translating strategy into concrete timelines: monthly reel concepts, production schedules, shoot shotlists, and technical deliverables.',
    activities: ['Monthly content calendar', 'Hook & script writeups', 'Production shotlists & location scouting', 'Ad campaign launch schedules'],
    icon: Calendar,
    accent: '#a78bfa',
  },
  {
    id: 'create',
    step: '04',
    name: 'CREATE',
    tagline: 'Shoot, design, edit and develop.',
    desc: 'Hands-on execution where cinema cameras roll, motion graphics are designed, websites are coded, and high-retention cuts are finalized.',
    activities: ['On-location camera shoots', 'Rapid-cut video editing & sound design', 'Graphic creative design & carousels', 'Conversion-engineered web development'],
    icon: Wrench,
    accent: '#f43f5e',
  },
  {
    id: 'launch',
    step: '05',
    name: 'LAUNCH',
    tagline: 'Publish content and launch campaigns.',
    desc: 'Coordinated publishing across organic social channels and programmatic deployment of Meta and Google ad campaigns.',
    activities: ['Peak-time social distribution', 'Ad campaign rollout & pixel check', 'Automation triggers deployment', 'Landing page go-live validation'],
    icon: Rocket,
    accent: '#fbbf24',
  },
  {
    id: 'optimize',
    step: '06',
    name: 'OPTIMIZE',
    tagline: 'Analyze performance and improve.',
    desc: 'Daily monitoring of hook retention, cost per lead, click-through rates, and conversion bottlenecks to ruthlessly kill underperformers.',
    activities: ['Creative retention & drop-off analysis', 'Ad spend reallocation to top ad sets', 'A/B test headline variants', 'Funnel friction troubleshooting'],
    icon: SlidersHorizontal,
    accent: '#34d399',
  },
  {
    id: 'report',
    step: '07',
    name: 'REPORT',
    tagline: 'Share important performance insights.',
    desc: 'Transparent monthly reporting breaking down exact ad spend, organic reach, leads generated, and qualitative customer learnings.',
    activities: ['Plain-English metrics summary', 'ROAS & cost-per-lead benchmarks', 'Organic engagement trajectory', 'Founder-level strategy call'],
    icon: BarChart3,
    accent: '#818cf8',
  },
  {
    id: 'grow',
    step: '08',
    name: 'GROW',
    tagline: 'Use learnings to improve future campaigns.',
    desc: 'Compound your digital footprint over time. Winning angles are scaled into broader campaigns, higher-tier funnels, and automated revenue engines.',
    activities: ['Scale winning creative assets', 'Retarget warm pipeline with new offers', 'Systematize organic brand authority', 'Next-quarter expansion roadmap'],
    icon: TrendingUp,
    accent: '#10b981',
  },
];

export const HowWeWorkSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<Stage>(STAGES[0]);

  return (
    <section id="workflow" className="relative py-24 sm:py-32 bg-[#080a0e] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-blue-400 tracking-wider uppercase mb-3">
            <span>05. Methodology</span>
            <span aria-hidden="true">/</span>
            <span className="text-neutral-500">कार्य प्रणाली</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            HOW WE WORK: AN 8-STAGE SYSTEM.
          </h2>

          <p className="font-body text-lg text-neutral-300">
            A structured progression from commercial discovery to sustained compounding growth.
          </p>
        </div>

        {/* Interactive 8-Stage Horizontal Timeline / Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-10">
          {STAGES.map((stg) => {
            const isSelected = activeStage.id === stg.id;
            return (
              <button
                key={stg.id}
                onClick={() => setActiveStage(stg)}
                className={`p-3.5 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'bg-neutral-950/60 border-neutral-800/70 hover:bg-neutral-900'
                }`}
              >
                <div className="font-mono-custom text-xs font-semibold text-neutral-400 mb-1">
                  {stg.step}
                </div>
                <div className="font-display font-bold text-xs text-white truncate">
                  {stg.name}
                </div>
                <div 
                  className="w-full h-1 mt-3 rounded-full transition-all duration-300"
                  style={{ 
                    backgroundColor: isSelected ? stg.accent : 'rgba(255,255,255,0.06)',
                    boxShadow: isSelected ? `0 0 8px ${stg.accent}` : 'none'
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Selected Stage Cinematic Deep Dive Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: activeStage.accent }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono-custom uppercase tracking-wider text-neutral-400">
                <span style={{ color: activeStage.accent }}>Stage {activeStage.step} of 08</span>
                <span aria-hidden="true">·</span>
                <span>Structured Delivery</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {activeStage.name}: {activeStage.tagline}
              </h3>

              <p className="font-body text-base sm:text-lg text-neutral-300 leading-relaxed">
                {activeStage.desc}
              </p>

              <div className="pt-4 border-t border-neutral-800">
                <div className="text-xs font-mono-custom text-neutral-400 uppercase tracking-wider mb-3">
                  Key Stage Activities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStage.activities.map((act, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Stage Badge */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-neutral-950/70 border border-neutral-800">
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-2xl"
                style={{ 
                  backgroundColor: `${activeStage.accent}18`,
                  border: `1px solid ${activeStage.accent}40`,
                  color: activeStage.accent
                }}
              >
                {React.createElement(activeStage.icon, { className: 'w-10 h-10' })}
              </div>

              <div className="font-display font-extrabold text-2xl text-white text-center">
                {activeStage.name}
              </div>
              <div className="text-xs text-neutral-400 font-mono-custom mt-1 text-center">
                Phase {activeStage.step} Milestone
              </div>

              {/* Navigation between steps */}
              <div className="flex items-center gap-3 mt-6">
                <button
                  disabled={activeStage.step === '01'}
                  onClick={() => {
                    const idx = STAGES.findIndex(s => s.id === activeStage.id);
                    if (idx > 0) setActiveStage(STAGES[idx - 1]);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed hover:bg-neutral-800"
                >
                  Previous
                </button>
                <button
                  disabled={activeStage.step === '08'}
                  onClick={() => {
                    const idx = STAGES.findIndex(s => s.id === activeStage.id);
                    if (idx < STAGES.length - 1) setActiveStage(STAGES[idx + 1]);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 text-xs font-semibold text-white disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed hover:bg-blue-500"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWorkSection;
