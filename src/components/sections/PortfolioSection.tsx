import React, { useState } from 'react';
import { ExternalLink, PlusCircle, Sparkles, FolderOpen, ArrowUpRight } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Real Estate',
  'Social Media',
  'Websites',
  'Branding',
  'Advertising',
  'Influencer Campaigns',
  'Content Creation'
];

interface ProjectSlot {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  scope: string[];
  status: 'Ready for Client Work' | 'Case Study Coming Soon' | 'Project Preview';
  accent: string;
}

const INITIAL_PROJECTS: ProjectSlot[] = [
  {
    id: 'p1',
    category: 'Real Estate',
    title: 'Luxury Property & Architectural Showcase',
    subtitle: 'Cinema walkthrough shoot, 4K vertical reels and targeted Meta lead ads.',
    scope: ['Cinema Drone & Gimbal Shoot', 'Color Grading', 'Targeted Lead Ads'],
    status: 'Project Preview',
    accent: '#38bdf8',
  },
  {
    id: 'p2',
    category: 'Websites',
    title: 'High-Converting Corporate Web Application',
    subtitle: 'Modern dark aesthetic, custom 3D web experience, and instant WhatsApp booking.',
    scope: ['UI/UX Architecture', 'Three.js Experience', 'Responsive Frontend'],
    status: 'Case Study Coming Soon',
    accent: '#60a5fa',
  },
  {
    id: 'p3',
    category: 'Social Media',
    title: 'Organic Brand Presence & Reels Engine',
    subtitle: 'Consistent monthly calendar, high-retention editing, and community interaction.',
    scope: ['Reel Scripts', 'Pacing Editing', 'Content Calendar'],
    status: 'Project Preview',
    accent: '#f43f5e',
  },
  {
    id: 'p4',
    category: 'Branding',
    title: 'Modern Tech Agency Visual Identity',
    subtitle: 'Complete identity system, typographic hierarchy, and brand collateral guidelines.',
    scope: ['Logo System', 'Typography Pairing', 'Social Guidelines'],
    status: 'Project Preview',
    accent: '#a78bfa',
  },
  {
    id: 'p5',
    category: 'Advertising',
    title: 'Targeted Performance Meta Funnel',
    subtitle: 'Algorithmic creative testing, landing page capture, and automated DM qualification.',
    scope: ['Multi-Variant Creatives', 'Pixel Setup', 'A/B Testing'],
    status: 'Case Study Coming Soon',
    accent: '#fbbf24',
  },
  {
    id: 'p6',
    category: 'Influencer Campaigns',
    title: 'Niche Creator Collaboration Campaign',
    subtitle: 'Vetted creator outreach, product seeding, and trackable engagement reporting.',
    scope: ['Creator Vetting', 'Campaign Briefs', 'Deliverable Review'],
    status: 'Ready for Client Work',
    accent: '#34d399',
  },
];

export const PortfolioSection: React.FC<{ onInquireProject: () => void }> = ({ onInquireProject }) => {
  const [selectedCat, setSelectedCat] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectSlot | null>(null);

  const filtered = selectedCat === 'All'
    ? INITIAL_PROJECTS
    : INITIAL_PROJECTS.filter(p => p.category === selectedCat);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-[#07080a] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-blue-400 tracking-wider uppercase mb-3">
              <span>08. Work Showcase</span>
              <span aria-hidden="true">/</span>
              <span className="text-neutral-500">पोर्टफोलियो</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Curated work & production showcases.
            </h2>
          </div>
          
          <p className="text-sm text-neutral-400 font-body max-w-sm">
            We operate with strict client integrity. Work previews and case studies are updated regularly as client releases are authorized.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCat === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="rounded-2xl bg-neutral-900/40 border border-neutral-800 overflow-hidden group hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Card Media Preview Area */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-neutral-900 via-[#101217] to-neutral-950 p-6 flex flex-col justify-between overflow-hidden border-b border-neutral-800/80">
                <div 
                  className="absolute inset-0 opacity-15 transition-opacity duration-300 group-hover:opacity-25"
                  style={{ 
                    background: `radial-gradient(circle at 50% 50%, ${item.accent} 0%, transparent 70%)` 
                  }}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono-custom text-neutral-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span 
                    className="text-[10px] font-mono-custom px-2.5 py-1 rounded-md border text-neutral-300"
                    style={{ borderColor: `${item.accent}40`, backgroundColor: `${item.accent}10` }}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="relative z-10 my-auto py-3">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="relative z-10 flex items-center justify-between text-xs text-neutral-400 pt-2 border-t border-white/[0.06]">
                  <span>Aarambh Tech Pipeline</span>
                  <div className="flex items-center gap-1 text-white font-medium group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                </div>
              </div>

              {/* Card Description & Deliverable Tags */}
              <div className="p-6">
                <p className="text-xs text-neutral-300 font-body leading-relaxed mb-4">
                  {item.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-neutral-400 font-mono-custom">
                  {item.scope.map((tag, i) => (
                    <span key={i}>
                      {tag}{i < item.scope.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Add Client Work Slot */}
          <div 
            onClick={onInquireProject}
            className="rounded-2xl border-2 border-dashed border-neutral-800 hover:border-blue-500/60 p-8 flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300 bg-neutral-950/40 hover:bg-blue-600/5"
          >
            <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 group-hover:border-blue-500/40 flex items-center justify-center text-blue-400 mb-4 transition-colors">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div className="font-display font-bold text-base text-white group-hover:text-blue-400 transition-colors">
              Your Project Featured Here
            </div>
            <p className="text-xs text-neutral-400 font-body mt-2 max-w-xs leading-relaxed">
              Partner with Aarambh Tech Agency to produce your next website, ad campaign, or cinema reel production.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:underline">
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0e1117] border border-neutral-700 max-w-lg w-full p-6 sm:p-8 rounded-2xl shadow-2xl relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono-custom text-blue-400 uppercase tracking-wider">
                {selectedProject.category} · {selectedProject.status}
              </span>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-neutral-400 hover:text-white text-sm cursor-pointer p-1"
              >
                ✕ Close
              </button>
            </div>

            <h3 className="font-display font-bold text-2xl text-white mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-neutral-300 font-body leading-relaxed mb-6">
              {selectedProject.subtitle}
            </p>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 mb-6">
              <div className="text-xs font-mono-custom text-neutral-400 uppercase tracking-wider mb-2">
                Scope & Deliverables:
              </div>
              <ul className="space-y-1.5 text-xs text-neutral-200">
                {selectedProject.scope.map((s, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 cursor-pointer"
              >
                Dismiss
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onInquireProject();
                }}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 cursor-pointer"
              >
                Inquire for Similar Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
