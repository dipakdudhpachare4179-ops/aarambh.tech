import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FounderSection from './components/sections/FounderSection';
import ServicesSection from './components/sections/ServicesSection';
import TeamSection from './components/sections/TeamSection';
import HowWeWorkSection from './components/sections/HowWeWorkSection';
import ServiceWorkflowSection from './components/sections/ServiceWorkflowSection';
import PackagesSection from './components/sections/PackagesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import WhyWorkWithUsSection from './components/sections/WhyWorkWithUsSection';
import FinalCTASection from './components/sections/FinalCTASection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/common/Footer';
import { MessageSquare, X } from 'lucide-react';

export function App() {
  const [inquiryService, setInquiryService] = useState<string | undefined>(undefined);
  const [inquiryPackage, setInquiryPackage] = useState<string | undefined>(undefined);
  const [showQuickModal, setShowQuickModal] = useState(false);

  const scrollToContact = (service?: string, pkg?: string) => {
    if (service) setInquiryService(service);
    if (pkg) setInquiryPackage(pkg);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-[#f1f3f7] font-body selection:bg-blue-600/30 selection:text-white relative">
      {/* Top Bar Navigation */}
      <Navbar onOpenProjectModal={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main>
        {/* 00. Hero Section with 3D Ecosystem */}
        <HeroSection
          onStartProject={() => scrollToContact()}
          onExploreServices={scrollToServices}
        />

        {/* 01. About Aarambh Tech Agency */}
        <AboutSection />

        {/* 02. Founder & Creative Strategist: Paras Dudhapachare */}
        <FounderSection onContactFounder={() => scrollToContact('Full Growth System (All Services)')} />

        {/* 03. Services Ecosystem */}
        <ServicesSection
          onSelectService={(serviceName) => scrollToContact(serviceName)}
        />

        {/* 04. Our Team: One Agency, Multiple Specialists */}
        <TeamSection />

        {/* 05. How We Work: 8-Stage Progression */}
        <HowWeWorkSection />

        {/* 06. Service Workflow: 11-Stage Client Pipeline */}
        <ServiceWorkflowSection />

        {/* 07. Packages: Simple, Moderate, Premium */}
        <PackagesSection
          onSelectPackage={(pkgName) => scrollToContact(undefined, pkgName)}
        />

        {/* 08. Curated Showcase & Portfolio */}
        <PortfolioSection onInquireProject={() => scrollToContact()} />

        {/* 09. Honest Client Testimonials & Endorsements */}
        <TestimonialsSection />

        {/* 10. Why Work With Aarambh Tech Agency */}
        <WhyWorkWithUsSection />

        {/* 11. Final High-Impact CTA */}
        <FinalCTASection
          onStartProject={() => scrollToContact()}
          onTalkToAgency={() => {
            const waUrl = 'https://api.whatsapp.com/send?phone=919022216695&text=' + encodeURIComponent('Hello Paras, I would like to talk to Aarambh Tech Agency about scaling my business.');
            window.open(waUrl, '_blank');
          }}
        />

        {/* 12. Full Functional Contact & Inquiry Section */}
        <ContactSection
          initialService={inquiryService}
          initialPackage={inquiryPackage}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Direct WhatsApp Access Pill */}
      <a
        href={'https://api.whatsapp.com/send?phone=919022216695&text=' + encodeURIComponent('Hello Paras, I am reaching out from Aarambh Tech Agency website.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp message to Paras Dudhapachare at +91 9022216695"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-600/60 transition-all duration-300 hover:scale-105 group border border-emerald-400/30"
      >
        <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
        <span className="hidden sm:inline font-mono-custom tracking-wide">
          WhatsApp: +91 9022216695
        </span>
      </a>
    </div>
  );
}

export default App;
