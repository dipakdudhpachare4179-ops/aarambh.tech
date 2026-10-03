import React from 'react';
import { Check, Info, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface PackagePlan {
  id: string;
  name: string;
  price: string;
  period: string;
  idealFor: string;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
}

const PACKAGES: PackagePlan[] = [
  {
    id: 'simple',
    name: 'SIMPLE',
    price: '₹10,000',
    period: '/ month',
    idealFor: 'Businesses starting their digital presence and seeking consistent baseline execution.',
    ctaLabel: 'Choose Simple',
    features: [
      'Social media content planning',
      'Basic monthly content calendar',
      'Regular social media management',
      'Basic graphic creatives for feed',
      'Reel concept & hook planning',
      'High-converting post captions',
      'Profile & bio optimization',
      'Baseline organic growth strategy',
      'Monthly performance reporting',
      'Dedicated client communication channel'
    ],
  },
  {
    id: 'moderate',
    name: 'MODERATE',
    price: '₹18,000',
    period: '/ month',
    popular: true,
    idealFor: 'Businesses that want consistent content, professional editing, and active advertising execution.',
    ctaLabel: 'Choose Moderate',
    features: [
      'Complete social media management',
      'Comprehensive content strategy',
      'Strategic monthly content calendar',
      'Professional reel planning & scripts',
      'High-impact graphic creatives',
      'High-retention reel editing with audio sync',
      'Professional content planning',
      'Basic shoot coordination guidance',
      'Meta Ads management (IG & FB)',
      'Audience targeting & campaign optimization',
      'Lead generation funnel strategy',
      'Monthly reporting & performance review',
      'Website & landing page consultation'
    ],
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: '₹25,000',
    period: '/ month',
    idealFor: 'Businesses looking for a complete end-to-end digital growth, production, and automation system.',
    ctaLabel: 'Choose Premium',
    features: [
      'Complete social media management',
      'Advanced multi-pillar content strategy',
      'Professional shoots coordination',
      'Full reel production & cinema direction',
      'Master professional video editing',
      'Bespoke graphic design & brand assets',
      'Psychological script writing & storytelling',
      'Omnichannel content & campaign planning',
      'Founder-level strategy sessions',
      'Website development / landing page support',
      'Meta Ads & Google Ads management',
      'End-to-end lead generation funnels',
      'Automation & WhatsApp inquiry planning',
      'Influencer campaign coordination (where applicable)',
      'Algorithmic performance optimization',
      'Detailed analytics reporting & strategic review'
    ],
  },
];

export const PackagesSection: React.FC<{ onSelectPackage: (pkgName: string) => void }> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="relative py-24 sm:py-32 bg-[#08090c] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-blue-400 tracking-wider uppercase mb-3">
            <span>07. Transparent Investment</span>
            <span aria-hidden="true">/</span>
            <span className="text-neutral-500">पैकेज और दरें</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            TRANSPARENT AGENCY PACKAGES.
          </h2>

          <p className="font-body text-lg text-neutral-300">
            Clear, honest deliverables designed to scale with your business phase. No hidden markups.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                pkg.popular
                  ? 'bg-gradient-to-b from-neutral-900 to-[#0e1219] border-blue-500 shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500/30'
                  : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white font-mono-custom text-[11px] font-semibold tracking-wider uppercase shadow-lg shadow-blue-600/30">
                  Most Popular Choice
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="font-display font-bold text-xl text-white tracking-wide">
                    {pkg.name}
                  </div>
                  <div className="flex items-baseline gap-1 mt-3">
                    <span className="font-display font-extrabold text-4xl sm:text-5xl text-white tabular-nums">
                      {pkg.price}
                    </span>
                    <span className="text-neutral-400 text-sm font-mono-custom">
                      {pkg.period}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 font-body leading-relaxed mt-4 min-h-[48px]">
                    {pkg.idealFor}
                  </p>
                </div>

                {/* Features list */}
                <div className="pt-6 border-t border-neutral-800/80 space-y-3 mb-8">
                  <div className="text-[11px] font-mono-custom uppercase tracking-wider text-neutral-400 mb-3">
                    What's Included:
                  </div>
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <div className="p-0.5 rounded-full bg-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 px-5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700'
                  }`}
                >
                  <span>{pkg.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Transparency & Legal Disclaimers */}
        <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3 text-xs text-neutral-400 font-body">
          <div className="flex items-start gap-2.5 text-neutral-300">
            <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-medium">Important Media & Platform Policy: </strong>
              Advertising media spend is separate and paid directly to the respective advertising platform (e.g. Meta Ads Manager, Google Ads). Aarambh Tech Agency packages cover strategy, creative production, management and optimization.
            </div>
          </div>
          <div className="flex items-start gap-2.5 text-neutral-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-medium">Scope Transparency: </strong>
              Exact deliverables, shoot requirements, ad spend and project scope can vary depending on the selected package and specific client requirements. We do not claim unlimited work or make misleading guarantees of specific leads, sales or revenue.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PackagesSection;
