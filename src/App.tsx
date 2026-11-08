import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DualFeatureBento } from './components/DualFeatureBento';
import { DemoVideoShowcase } from './components/DemoVideoShowcase';
import { StopDoomscrollSection } from './components/StopDoomscrollSection';
import { StatsGrid } from './components/StatsGrid';
import { DeepPurpleBanner } from './components/DeepPurpleBanner';
import { DnsSimulator } from './components/DnsSimulator';
import { DopamineCalculator } from './components/DopamineCalculator';
import { IntellectualPropertyNotice } from './components/IntellectualPropertyNotice';
import { FounderStory } from './components/FounderStory';
import { Faq } from './components/Faq';
import { ConversionCard } from './components/ConversionCard';
import { Footer } from './components/Footer';
import { initSmoothScroll } from './utils/motion';

export function App() {
  // Initialize Lenis + GSAP smooth scroll
  useEffect(() => {
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

  const scrollToDownload = () => {
    const el = document.getElementById('download-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1D1A] flex flex-col font-sans selection:bg-[#F5EAD8] selection:text-[#1A1D1A] antialiased">
      {/* 1. Header & Navigation */}
      <Navbar onOpenDownload={scrollToDownload} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section: Direct Value Proposition, Clean Technical Spec & Device Preview */}
        <Hero onOpenDownload={scrollToDownload} />

        {/* 3. Core Habit Architecture: Dual Threat Defense & System Pillars */}
        <DualFeatureBento />

        {/* 4. Product Walkthrough: Interactive Tabbed Simulator */}
        <DemoVideoShowcase onOpenDownload={scrollToDownload} />

        {/* 5. Behavioral Science: 8-Second Mindful Pause & Dopamine Friction */}
        <StopDoomscrollSection />

        {/* 6. Quantitative Research & Problem Space: Why Willpower Fails */}
        <StatsGrid />

        {/* 7. System Architecture: On-Device Sovereign DNS & Filter Pipeline */}
        <DeepPurpleBanner />

        {/* 8. Interactive Telemetry: Real-time DNS Bloom Filter Inspector */}
        <DnsSimulator />

        {/* 9. Cognitive Audit: Life & Hours Reclaimed Calculator */}
        <DopamineCalculator />

        {/* 10. Origin & Engineering: Note from Mohammad Fatim Hasnain */}
        <FounderStory />

        {/* 11. Architecture & IP Protection Notice */}
        <IntellectualPropertyNotice />

        {/* 12. Technical FAQ: Direct, Human Answers */}
        <Faq />

        {/* 13. Verified Binary Distribution: Direct APK & SHA-256 Checksum */}
        <ConversionCard />
      </main>

      {/* 14. Structured Footer */}
      <Footer />
    </div>
  );
}

export default App;
