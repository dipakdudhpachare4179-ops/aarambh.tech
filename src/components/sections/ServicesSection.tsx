import React, { useState } from 'react';
import { 
  Share2, 
  Camera, 
  Globe, 
  Target, 
  Search, 
  Palette, 
  Compass, 
  PenTool, 
  Filter, 
  Cpu, 
  Sparkles, 
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  deliverables: string[];
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'social-media',
    number: '01',
    title: 'Social Media Management',
    category: 'Content',
    icon: Share2,
    tagline: 'End-to-end profile handling, distribution and community building.',
    deliverables: [
      'Content planning & scheduling',
      'Daily & regular organic posting',
      'Reels production & formatting',
      'High-converting copy & captions',
      'Strategic monthly content calendar',
      'Active audience engagement',
      'Complete profile & bio optimization'
    ]
  },
  {
    id: 'shoots',
    number: '02',
    title: 'Professional Shoots',
    category: 'Content',
    icon: Camera,
    tagline: 'High-end cinema cameras, lighting, and art direction on location.',
    deliverables: [
      'Property & architecture shoots',
      'Business & office facility shoots',
      'Product showcase photography',
      'Model-based aesthetic shoots',
      'High-retention vertical Reels',
      'Walkthrough & immersive tours',
      'Face-to-camera founder content'
    ]
  },
  {
    id: 'web-dev',
    number: '03',
    title: 'Website Development',
    category: 'Technology',
    icon: Globe,
    tagline: 'Fast, responsive, and conversion-engineered digital platforms.',
    deliverables: [
      'Custom corporate business websites',
      'High-converting landing pages',
      'Creative agency & portfolio websites',
      'Premium interactive & 3D experiences',
      '100% responsive fluid mobile design',
      'Ergonomic UI/UX architecture',
      'Conversion-focused call-to-action layout'
    ]
  },
  {
    id: 'meta-ads',
    number: '04',
    title: 'Meta Ads',
    category: 'Advertising',
    icon: Target,
    tagline: 'Precision audience targeting and high-ROAS creative testing across IG & FB.',
    deliverables: [
      'End-to-end campaign architecture',
      'Granular demographic & interest targeting',
      'Multi-variant creative testing (A/B)',
      'Algorithmic campaign optimization',
      'Custom pixel & retargeting audiences',
      'Transparent weekly & monthly reporting'
    ]
  },
  {
    id: 'google-ads',
    number: '05',
    title: 'Google Ads',
    category: 'Advertising',
    icon: Search,
    tagline: 'Capture high-intent search queries when customers actively seek your solution.',
    deliverables: [
      'High-intent search campaigns',
      'In-depth competitor & keyword research',
      'Campaign setup & negative keyword pruning',
      'Google Tag Manager conversion tracking',
      'Quality score & bid optimization',
      'Performance audit & analytics reports'
    ]
  },
  {
    id: 'graphic-design',
    number: '06',
    title: 'Graphic Design',
    category: 'Creative',
    icon: Palette,
    tagline: 'Bespoke brand collateral that commands immediate visual authority.',
    deliverables: [
      'High-engagement social media creatives',
      'Performance ad static & motion assets',
      'Event posters & promotional banners',
      'Billboards & print collateral',
      'Educational swipe carousels',
      'Unified brand guidelines & materials'
    ]
  },
  {
    id: 'content-strategy',
    number: '07',
    title: 'Content Strategy',
    category: 'Strategy',
    icon: Compass,
    tagline: 'Audience-first content positioning engineered to drive business goals.',
    deliverables: [
      'Systematic quarterly content roadmaps',
      '3–5 Core brand content pillars',
      'Viral & educational reel concepts',
      'Omnichannel launch campaign plans',
      'Organized production calendars',
      'Deep demographic & competitor analysis'
    ]
  },
  {
    id: 'script-writing',
    number: '08',
    title: 'Script Writing',
    category: 'Content',
    icon: PenTool,
    tagline: 'Hooks, narratives, and calls-to-action that retain viewership and drive intent.',
    deliverables: [
      'High-retention 15-60s Reel scripts',
      'Direct-response advertising scripts',
      'Educational & thought-leadership scripts',
      'Brand promotional video scripts',
      'Human-centric storytelling narratives'
    ]
  },
  {
    id: 'lead-generation',
    number: '09',
    title: 'Lead Generation',
    category: 'Growth',
    icon: Filter,
    tagline: 'Predictable customer acquisition funnels that capture qualified inquiries.',
    deliverables: [
      'Full-funnel client acquisition strategy',
      'High-intent lead qualification flows',
      'Seamless WhatsApp click-to-chat integration',
      'Dedicated lead capture landing pages',
      'Multi-touch follow-up systems'
    ]
  },
  {
    id: 'automation',
    number: '10',
    title: 'Automation',
    category: 'Technology',
    icon: Cpu,
    tagline: 'Automate manual communications so no hot lead falls through the cracks.',
    deliverables: [
      'Instagram DM comment & keyword triggers',
      'Automated lead qualification & classification',
      'Instant 24/7 client response flows',
      'Multi-channel follow-up workflows',
      'Google Sheets & CRM-style sync systems'
    ]
  },
  {
    id: 'branding',
    number: '11',
    title: 'Branding',
    category: 'Creative',
    icon: Sparkles,
    tagline: 'Distinctive visual identities that position your business ahead of competitors.',
    deliverables: [
      'Strategic brand positioning & USP',
      'Complete visual identity systems',
      'Creative direction & aesthetic moodboards',
      'Unified brand communication voice'
    ]
  },
  {
    id: 'influencer-marketing',
    number: '12',
    title: 'Influencer Marketing',
    category: 'Growth',
    icon: Users,
    tagline: 'Collaborative partnerships with vetted creators in your niche.',
    deliverables: [
      'Niche creator identification & vetting',
      'Campaign brief & messaging strategy',
      'Creator communication & rate negotiation',
      'Deliverable review & campaign launch',
      'Reach, engagement & attribution reporting'
    ]
  },
];

const CATEGORIES = ['All', 'Content', 'Technology', 'Advertising', 'Growth', 'Creative', 'Strategy'];

export const ServicesSection: React.FC<{ onSelectService: (serviceName: string) => void }> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeServiceId, setActiveServiceId] = useState<string>(ALL_SERVICES[0].id);

  const filteredServices = selectedCategory === 'All'
    ? ALL_SERVICES
    : ALL_SERVICES.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#08090c] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-blue-400 tracking-wider uppercase mb-3">
              <span>03. Capabilities Ecosystem</span>
              <span aria-hidden="true">/</span>
              <span className="text-neutral-500">सेवाएं</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              A comprehensive service ecosystem for digital growth.
            </h2>
          </div>
          
          <p className="text-sm text-neutral-400 font-body max-w-sm">
            Explore our 12 specialized disciplines designed to work either as modular services or as one synchronized agency engine.
          </p>
        </div>

        {/* Category Filters (Interactive Filter Controls allowed per skill 1A) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const isExpanded = activeServiceId === service.id;

            return (
              <div
                key={service.id}
                className={`rounded-2xl p-7 transition-all duration-300 border flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-gradient-to-b from-neutral-900 to-[#0e1015] border-blue-500/50 shadow-2xl shadow-blue-500/5 ring-1 ring-blue-500/20'
                    : 'bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/80 hover:border-neutral-700'
                }`}
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono-custom text-xs font-semibold text-neutral-400">
                      {service.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-neutral-800/80 text-blue-400 border border-neutral-700/50">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-bold text-xl text-white tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-body leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-neutral-800/60">
                    <div className="text-[10px] font-mono-custom uppercase tracking-wider text-neutral-400 mb-2">
                      Key Deliverables:
                    </div>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-neutral-800/90 hover:bg-blue-600 active:bg-blue-700 transition-colors border border-neutral-700/60 hover:border-blue-500 cursor-pointer"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
