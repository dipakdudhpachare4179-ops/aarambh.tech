import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  Compass, 
  FileText, 
  Camera, 
  Film, 
  Globe, 
  Target, 
  Users2, 
  MessageSquareReply, 
  BarChart2,
  Check
} from 'lucide-react';

interface PipelineNode {
  id: string;
  step: number;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverable: string;
}

const PIPELINE_NODES: PipelineNode[] = [
  { id: 'client', step: 1, label: 'CLIENT', description: 'Initial onboarding & discovery alignment', icon: Building2, deliverable: 'Project scope & objectives' },
  { id: 'research', step: 2, label: 'RESEARCH', description: 'Competitor audit & target audience mapping', icon: Search, deliverable: 'Market intelligence brief' },
  { id: 'strategy', step: 3, label: 'STRATEGY', description: 'Content pillars, offers & positioning angle', icon: Compass, deliverable: 'Master creative blueprint' },
  { id: 'content', step: 4, label: 'CONTENT', description: 'Scripting, hooks & calendar structuring', icon: FileText, deliverable: 'Reel scripts & schedule' },
  { id: 'design-shoot', step: 5, label: 'DESIGN / SHOOT', description: 'Cinema camera production & graphic asset creation', icon: Camera, deliverable: 'Raw 4K footage & design files' },
  { id: 'editing', step: 6, label: 'EDITING', description: 'High-pacing cuts, sound design & captions', icon: Film, deliverable: 'Master video renders' },
  { id: 'website', step: 7, label: 'WEBSITE / LANDING PAGE', description: 'Fast responsive development & conversion UI', icon: Globe, deliverable: 'Live web platform' },
  { id: 'ads', step: 8, label: 'ADS', description: 'Meta & Google paid campaign deployment', icon: Target, deliverable: 'Optimized ad sets' },
  { id: 'leads', step: 9, label: 'LEADS', description: 'Direct customer inquiries captured', icon: Users2, deliverable: 'Qualified customer pipeline' },
  { id: 'follow-up', step: 10, label: 'FOLLOW-UP', description: 'Automated WhatsApp & DM nurturing workflows', icon: MessageSquareReply, deliverable: 'Instant response triggers' },
  { id: 'reporting', step: 11, label: 'REPORTING', description: 'Transparent monthly data & strategy review', icon: BarChart2, deliverable: 'Performance analytics deck' },
];

export const ServiceWorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(4);

  return (
    <section className="relative py-24 sm:py-32 bg-[#07080a] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-blue-400 tracking-wider uppercase mb-3">
            <span>06. Operational Delivery</span>
            <span aria-hidden="true">/</span>
            <span className="text-neutral-500">प्रोजेक्ट पाइपलाइन</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            THE 11-STAGE CLIENT DELIVERY PIPELINE.
          </h2>

          <p className="font-body text-lg text-neutral-300">
            How a client project travels through Aarambh Tech Agency from initial onboarding to automated revenue reporting.
          </p>
        </div>

        {/* 3D Pipeline Progression Track */}
        <div className="relative mb-12">
          {/* Background Connecting Rail */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-neutral-800 -translate-y-1/2 z-0" />
          <div 
            className="hidden lg:block absolute top-1/2 left-4 h-0.5 bg-blue-500 -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStep / PIPELINE_NODES.length) * 100}%` }}
          />

          {/* Nodes Horizontal Scroll on Mobile, Grid on Desktop */}
          <div className="flex lg:grid lg:grid-cols-11 gap-3 overflow-x-auto pb-6 lg:pb-0 no-scrollbar relative z-10">
            {PIPELINE_NODES.map((node) => {
              const Icon = node.icon;
              const isPassed = node.step <= activeStep;
              const isCurrent = node.step === activeStep;

              return (
                <button
                  key={node.id}
                  onClick={() => setActiveStep(node.step)}
                  className={`flex flex-col items-center p-3 min-w-[120px] lg:min-w-0 rounded-xl transition-all duration-300 border cursor-pointer ${
                    isCurrent
                      ? 'bg-blue-600/20 border-blue-500 scale-105 shadow-lg shadow-blue-500/20'
                      : isPassed
                      ? 'bg-neutral-900 border-neutral-700'
                      : 'bg-neutral-950/80 border-neutral-850 opacity-60 hover:opacity-100 hover:border-neutral-700'
                  }`}
                >
                  <div 
                    className={`w-9 h-9 rounded-full flex items-center justify-center mb-2 text-xs font-bold transition-all duration-300 ${
                      isCurrent
                        ? 'bg-blue-600 text-white shadow-[0_0_12px_#3b82f6]'
                        : isPassed
                        ? 'bg-neutral-800 text-blue-400 border border-blue-500/30'
                        : 'bg-neutral-900 text-neutral-500 border border-neutral-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <span className="font-mono-custom text-[10px] text-neutral-400">
                    Step {node.step}
                  </span>

                  <span className="font-display font-bold text-[11px] text-white text-center leading-tight mt-0.5 line-clamp-1">
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Pipeline Stage Spotlight */}
        {(() => {
          const current = PIPELINE_NODES.find(n => n.step === activeStep) || PIPELINE_NODES[0];
          const CurrentIcon = current.icon;

          return (
            <div className="bg-gradient-to-r from-neutral-900 via-[#0e1117] to-neutral-900 border border-neutral-800 p-6 sm:p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400 shrink-0">
                  <CurrentIcon className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-xs font-mono-custom text-blue-400 uppercase tracking-wider mb-1">
                    Pipeline Stage {current.step} of 11
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {current.label}
                  </h3>
                  <p className="text-sm text-neutral-300 font-body max-w-xl">
                    {current.description}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 shrink-0 w-full md:w-auto">
                <span className="text-[10px] font-mono-custom uppercase tracking-wider text-neutral-400 block mb-1">
                  Stage Output & Deliverable:
                </span>
                <span className="text-xs font-semibold text-white font-display">
                  {current.deliverable}
                </span>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};

export default ServiceWorkflowSection;
