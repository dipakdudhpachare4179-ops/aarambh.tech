import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, PlusCircle, Sparkles, Building2, User } from 'lucide-react';

export interface TestimonialItem {
  id: string;
  clientName: string;
  business: string;
  projectType: string;
  testimonial: string;
  isPlaceholder?: boolean;
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    clientName: 'Client Review Pending',
    business: 'Partner Business',
    projectType: 'Web Development & Ads',
    testimonial: 'Client testimonial will be added here upon completion of active campaign review. Aarambh Tech Agency publishes only fully verified client feedback.',
    isPlaceholder: true,
  },
  {
    id: 't2',
    clientName: 'Client Review Pending',
    business: 'Retail / E-Commerce Brand',
    projectType: 'Professional Shoot & Reels',
    testimonial: 'Client testimonial will be added here. Authentic reviews and performance remarks are documented directly following quarterly strategy reviews.',
    isPlaceholder: true,
  },
  {
    id: 't3',
    clientName: 'Client Review Pending',
    business: 'Real Estate Developer',
    projectType: 'Meta Ads & Lead Generation',
    testimonial: 'Client testimonial will be added here. Verified partner ratings and project milestones will be showcased as client consents are received.',
    isPlaceholder: true,
  }
];

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    const saved = localStorage.getItem('aarambh_testimonials');
    return saved ? JSON.parse(saved) : DEFAULT_TESTIMONIALS;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  
  // Form State for Adding New Testimonial
  const [formData, setFormData] = useState({
    clientName: '',
    business: '',
    projectType: 'Social Media Management',
    testimonial: ''
  });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName || !formData.testimonial) return;

    const newEntry: TestimonialItem = {
      id: `t_${Date.now()}`,
      clientName: formData.clientName,
      business: formData.business || 'Business Partner',
      projectType: formData.projectType,
      testimonial: formData.testimonial,
      isPlaceholder: false
    };

    const updated = [newEntry, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem('aarambh_testimonials', JSON.stringify(updated));
    setCurrentIndex(0);
    setShowAddModal(false);
    setFormData({ clientName: '', business: '', projectType: 'Social Media Management', testimonial: '' });
  };

  const active = testimonials[currentIndex] || DEFAULT_TESTIMONIALS[0];

  return (
    <section className="relative py-24 sm:py-32 bg-[#08090c] border-t border-neutral-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-blue-400 tracking-wider uppercase mb-3">
              <span>09. Client Feedback & Trust</span>
              <span aria-hidden="true">/</span>
              <span className="text-neutral-500">प्रशंसापत्र</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Honest client experiences & endorsements.
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-blue-400" />
              <span>Add Real Testimonial</span>
            </button>
          </div>
        </div>

        {/* 3D Carousel Card */}
        <div className="max-w-4xl mx-auto relative perspective-1000">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <Quote className="w-16 h-16 text-blue-500/10 absolute top-8 right-8 pointer-events-none" />

            <div className="relative z-10">
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-mono-custom text-blue-400 uppercase tracking-wider">
                  Project: {active.projectType}
                </span>

                {active.isPlaceholder ? (
                  <span className="text-[11px] font-mono-custom text-amber-400/90 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                    Placeholder Framework
                  </span>
                ) : (
                  <span className="text-[11px] font-mono-custom text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20">
                    Verified Feedback
                  </span>
                )}
              </div>

              {/* Quote Content */}
              <p className="font-display text-xl sm:text-2xl text-neutral-100 font-medium leading-relaxed mb-8 italic">
                "{active.testimonial}"
              </p>

              {/* Client Attributions */}
              <div className="flex items-center justify-between pt-6 border-t border-neutral-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-blue-400 font-bold">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-base text-white">
                      {active.clientName}
                    </div>
                    <div className="text-xs text-neutral-400 font-body">
                      {active.business}
                    </div>
                  </div>
                </div>

                {/* Carousel Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Index Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === i ? 'w-8 bg-blue-500' : 'w-2 bg-neutral-800'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Add Real Testimonial Modal for Founder */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0e1117] border border-neutral-700 max-w-md w-full p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold text-lg text-white">
                Add Client Testimonial
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-neutral-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddTestimonial} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Client Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Business / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Apex Living Real Estate"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:border-blue-500"
                >
                  <option>Social Media Management</option>
                  <option>Website Development</option>
                  <option>Meta & Google Ads</option>
                  <option>Professional Shoots</option>
                  <option>Full Growth System</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Testimonial Quote
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Client's exact quote on project outcome and working relationship..."
                  value={formData.testimonial}
                  onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg text-neutral-300 hover:text-white bg-neutral-800 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-500 cursor-pointer"
                >
                  Save Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
