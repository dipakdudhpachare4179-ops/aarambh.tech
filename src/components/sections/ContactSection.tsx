import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Phone, Mail, MessageSquare, Sparkles, Building2, User, ExternalLink, ArrowRight } from 'lucide-react';
import { ALL_SERVICES } from './ServicesSection';

interface ContactSectionProps {
  initialService?: string;
  initialPackage?: string;
}

const PARAS_PHONE = '+91 9022216695';
const PARAS_PHONE_RAW = '919022216695';

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, initialPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    serviceRequired: initialService || 'Social Media Management',
    budgetRange: initialPackage === 'SIMPLE' ? '₹10K – ₹25K' : initialPackage === 'MODERATE' ? '₹10K – ₹25K' : initialPackage === 'PREMIUM' ? '₹25K – ₹50K' : '₹10K – ₹25K',
    projectDetails: initialPackage ? `Interested in the ${initialPackage} package.` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedWaUrl, setSubmittedWaUrl] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialPackage) {
      setFormData(prev => ({
        ...prev,
        projectDetails: `Inquiring about ${initialPackage} package.`,
        budgetRange: initialPackage === 'PREMIUM' ? '₹25K – ₹50K' : '₹10K – ₹25K'
      }));
    }
  }, [initialPackage]);

  const constructWhatsAppMessage = () => {
    return `*New Project Inquiry — Aarambh Tech Agency*
━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${formData.name.trim()}
🏢 *Business / Brand:* ${formData.businessName.trim()}
📧 *Email:* ${formData.email.trim()}
📞 *Phone:* ${formData.phone.trim()}
🎯 *Service Required:* ${formData.serviceRequired}
💰 *Planned Budget:* ${formData.budgetRange}
📝 *Project Details:* ${formData.projectDetails.trim() || 'Interested in discussing a project with Aarambh Tech Agency.'}
━━━━━━━━━━━━━━━━━━
_Sent via Aarambh Tech Agency Portal_`;
  };

  const getDirectWhatsAppUrl = () => {
    const text = encodeURIComponent(constructWhatsAppMessage());
    return `https://api.whatsapp.com/send?phone=${PARAS_PHONE_RAW}&text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waUrl = getDirectWhatsAppUrl();
    setSubmittedWaUrl(waUrl);

    // Automatically trigger WhatsApp opening with all prefilled details
    try {
      window.open(waUrl, '_blank');
    } catch {
      // Fallback handled in UI
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 400);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#080a0e] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-blue-400 tracking-wider uppercase mb-3">
            <span>11. Start the Conversation</span>
            <span aria-hidden="true">/</span>
            <span className="text-neutral-500">संपर्क करें</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            INITIATE YOUR PROJECT.
          </h2>

          <p className="font-body text-lg text-neutral-300">
            Fill the brief below. Your inquiry is directly routed to founder Paras Dudhapachare on WhatsApp ({PARAS_PHONE}) for instantaneous response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Agency Information & Direct WhatsApp channel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-6">
              
              <div>
                <div className="text-xs font-mono-custom text-neutral-400 uppercase tracking-wider mb-1">
                  Primary Agency Partner
                </div>
                <div className="font-display font-bold text-2xl text-white">
                  Aarambh Tech Agency
                </div>
                <div className="text-sm text-blue-400 font-mono-custom mt-1">
                  Founder — Paras Dudhapachare
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-body leading-relaxed">
                Whether you need a bespoke cinema shoot, high-converting website, Meta & Google ad campaigns, or complete growth automation, we are ready to build.
              </p>

              <div className="pt-6 border-t border-neutral-800 space-y-4 text-xs sm:text-sm text-neutral-200 font-body">
                {/* Direct WhatsApp channel */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-400 text-xs block">Direct WhatsApp (Fastest)</span>
                    <a 
                      href={`https://api.whatsapp.com/send?phone=${PARAS_PHONE_RAW}&text=${encodeURIComponent('Hello Paras, I am reaching out from Aarambh Tech Agency website.')}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>{PARAS_PHONE}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Direct Phone Call */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-400 text-xs block">Direct Phone Call</span>
                    <a 
                      href={`tel:${PARAS_PHONE.replace(/\s+/g, '')}`} 
                      className="text-white hover:text-blue-400 font-medium transition-colors"
                    >
                      {PARAS_PHONE}
                    </a>
                  </div>
                </div>

                {/* Founder Leadership */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-800 flex items-center justify-center text-blue-400 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-400 text-xs block">Founder & Creative Strategist</span>
                    <span className="text-white font-medium">Paras Dudhapachare</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={`https://api.whatsapp.com/send?phone=${PARAS_PHONE_RAW}&text=${encodeURIComponent('Hello Paras, I would like to discuss a project with Aarambh Tech Agency.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp: {PARAS_PHONE}</span>
                </a>
              </div>

            </div>

            {/* Response Commitment Box */}
            <div className="p-5 rounded-xl bg-neutral-950/70 border border-neutral-800 text-xs text-neutral-400">
              <span className="text-white font-medium block mb-1">Instant Direct Routing:</span>
              When you submit this brief, all your requirements are automatically transmitted directly to Paras Dudhapachare's WhatsApp ({PARAS_PHONE}) for immediate review and consultation.
            </div>
          </div>

          {/* Right Column: Interactive Professional Contact Form */}
          <div className="lg:col-span-7 bg-neutral-900/40 border border-neutral-800 p-8 sm:p-10 rounded-2xl">
            
            {isSuccess ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    Inquiry Transmitted to WhatsApp!
                  </h3>
                  <p className="text-sm text-neutral-300 font-body max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your project brief has been formatted and sent directly to Paras Dudhapachare on <strong className="text-emerald-400">{PARAS_PHONE}</strong>.
                  </p>
                </div>

                {/* Primary WhatsApp Direct Open Fallback Button */}
                <div className="pt-2 flex flex-col items-center gap-3">
                  <a
                    href={submittedWaUrl || getDirectWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-600/30"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Chat Now ({PARAS_PHONE})</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <p className="text-xs text-neutral-500 font-body">
                    If WhatsApp didn't open automatically, click the button above.
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-800">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        businessName: '',
                        email: '',
                        phone: '',
                        serviceRequired: 'Social Media Management',
                        budgetRange: '₹10K – ₹25K',
                        projectDetails: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 cursor-pointer transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono-custom text-neutral-300 uppercase tracking-wider mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700/80 text-white placeholder:text-neutral-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-mono-custom text-neutral-300 uppercase tracking-wider mb-2">
                      Business / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Realty"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700/80 text-white placeholder:text-neutral-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono-custom text-neutral-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700/80 text-white placeholder:text-neutral-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono-custom text-neutral-300 uppercase tracking-wider mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700/80 text-white placeholder:text-neutral-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-mono-custom text-neutral-300 uppercase tracking-wider mb-2">
                      Primary Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700/80 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      {ALL_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Complete Growth System (All Services)">
                        Complete Growth System (All Services)
                      </option>
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-xs font-mono-custom text-neutral-300 uppercase tracking-wider mb-2">
                      Planned Monthly Budget Range *
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700/80 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="₹10K – ₹25K">₹10K – ₹25K (Simple / Moderate Baseline)</option>
                      <option value="₹25K – ₹50K">₹25K – ₹50K (Premium Growth System)</option>
                      <option value="₹50K+">₹50K+ (Multi-Location / Enterprise)</option>
                      <option value="Custom Project">Custom Project / Shoot Only</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-mono-custom text-neutral-300 uppercase tracking-wider mb-2">
                    Project Details & Target Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you are looking to build or scale, key challenges, or preferred timeline..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700/80 text-white placeholder:text-neutral-600 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Directing to WhatsApp (+91 9022216695)...' : `Send Project Inquiry to WhatsApp (${PARAS_PHONE})`}</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 font-mono-custom text-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Submits directly to Paras Dudhapachare's WhatsApp (+91 9022216695)</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
