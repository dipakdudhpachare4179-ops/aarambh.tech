import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Founder', href: '#founder' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Packages', href: '#packages' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050608] border-t border-neutral-800/80 pt-16 pb-12 text-neutral-400 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/60">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" showText={true} showDevanagari={true} />
            
            <p className="text-sm text-neutral-300 font-normal leading-relaxed max-w-sm">
              Digital Strategy • Content • Websites • Advertising • Automation
            </p>

            <div className="text-xs font-mono-custom text-neutral-400">
              Founder & Creative Strategist: <span className="text-white font-medium">Paras Dudhapachare</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4">
            <div className="text-xs font-mono-custom uppercase tracking-wider text-neutral-400 mb-4">
              Quick Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-neutral-400 hover:text-white transition-colors duration-150 py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Inquiry & Working Hours */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono-custom uppercase tracking-wider text-neutral-400 mb-4">
              Agency Inquiry
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed font-body">
              For direct business consultations, shoot bookings, and digital growth roadmaps.
            </p>
            <div className="space-y-1.5 pt-1 text-xs">
              <div>
                <span className="text-neutral-500">Phone / WhatsApp: </span>
                <a 
                  href="https://api.whatsapp.com/send?phone=919022216695&text=Hello%20Paras%2C%20I%20am%20reaching%20out%20from%20Aarambh%20Tech%20Agency%20website." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 font-semibold"
                >
                  +91 9022216695
                </a>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                <span>Initiate Project Brief</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-mono-custom">
          <div>
            © {new Date().getFullYear()} Aarambh Tech Agency. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>आरंभ टेक एजेंसी</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
