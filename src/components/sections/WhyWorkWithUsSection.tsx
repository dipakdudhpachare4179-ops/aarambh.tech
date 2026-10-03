import React from 'react';
import { Compass, Sparkles, Workflow, MessageSquare, BarChart, ShieldCheck } from 'lucide-react';

const REASONS = [
  {
    step: '01',
    title: 'STRATEGY FIRST',
    tagline: "We don't create content randomly. We build content around business goals.",
    description: 'Every reel, post, graphic, and advertisement starts with a clear commercial purpose. We research your specific customer persona, buying triggers, and competitive landscape before firing a single camera or writing a script.',
    icon: Compass,
    accent: '#60a5fa',
  },
  {
    step: '02',
    title: 'CREATIVE EXECUTION',
    tagline: 'Content, design, websites and advertising work together.',
    description: 'No fragmented aesthetics. Your cinema shoot footage matches your website design, which mirrors your ad creatives, ensuring immediate brand recall and high trust wherever a customer encounters your agency.',
    icon: Sparkles,
    accent: '#38bdf8',
  },
  {
    step: '03',
    title: 'ONE CONNECTED SYSTEM',
    tagline: 'Strategy → Content → Website → Ads → Leads → Follow-up.',
    description: 'Instead of hiring five different freelancers who blame each other when results stall, Aarambh Tech Agency provides an end-to-end coordinated system where every phase directly powers the next.',
    icon: Workflow,
    accent: '#a78bfa',
  },
  {
    step: '04',
    title: 'TRANSPARENT COMMUNICATION',
    tagline: 'Clear deliverables and project communication.',
    description: 'Direct founder access, structured weekly updates, and honest project status reports. You always know what is in production, what is scheduled, and what the numbers actually mean.',
    icon: MessageSquare,
    accent: '#f43f5e',
  },
  {
    step: '05',
    title: 'DATA + CREATIVITY',
    tagline: 'Creative ideas supported by performance insights.',
    description: 'High aesthetic taste coupled with rigorous performance tracking. We monitor drop-off rates, conversion friction, and click patterns to continually refine future creative directions.',
    icon: BarChart,
    accent: '#fbbf24',
  },
  {
    step: '06',
    title: 'CUSTOM APPROACH',
    tagline: 'Different businesses require different strategies.',
    description: 'A local real estate developer has radically different acquisition economics than an e-commerce brand or clinic. We tailor custom shoot lists, funnels, and ad targets tailored specifically to your audience.',
    icon: ShieldCheck,
    accent: '#34d399',
  },
];

export const WhyWorkWithUsSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#07080a] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-blue-400 tracking-wider uppercase mb-3">
            <span>10. Agency Advantage</span>
            <span aria-hidden="true">/</span>
            <span className="text-neutral-500">हमारे साथ क्यों काम करें</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            WHY WORK WITH AARAMBH TECH AGENCY.
          </h2>

          <p className="font-body text-lg text-neutral-300">
            A disciplined, honest, and coordinated working approach engineered around real business fundamentals.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono-custom text-xs font-semibold text-neutral-400">
                      {item.step}
                    </span>
                    <div 
                      className="p-2.5 rounded-xl text-white"
                      style={{ backgroundColor: `${item.accent}15`, border: `1px solid ${item.accent}30`, color: item.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-400/90 font-mono-custom mb-3">
                    {item.tagline}
                  </p>

                  <p className="text-xs text-neutral-300 font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
