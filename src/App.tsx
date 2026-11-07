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
import { FloatingWatermark } from './components/FloatingWatermark';
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
    <div className="min-h-screen bg-white text-[#1A1D20] flex flex-col font-sans selection:bg-[#7E3FF2] selection:text-white antialiased">
      {/* 1. Navbar (Zanderio Style with Purple Pill CTA) */}
      <Navbar onOpenDownload={scrollToDownload} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section with Connected Phone Canvas, Flowing SVG Lines, & Marquee */}
        <Hero onOpenDownload={scrollToDownload} />

        {/* 3. Dual Feature Bento (Titan Fortress vs Reel Disruptor) */}
        <DualFeatureBento />

        {/* 4. Product Walkthrough Stage (Interactive 4-Step Showcase) */}
        <DemoVideoShowcase onOpenDownload={scrollToDownload} />

        {/* 5. Stop Doomscrolling Friction Engine (Live 8s Breathing Circle) */}
        <StopDoomscrollSection />

        {/* 6. 4-Card Stats Grid (Why Willpower Fails - Zanderio U-Borders) */}
        <StatsGrid />

        {/* 7. Signature Full-Width Deep-Purple Section (On-Device Sovereign Fortress & SafeSearch) */}
        <DeepPurpleBanner />

        {/* 8. Interactive DNS Packet Inspector Lab (Light Theme) */}
        <DnsSimulator />

        {/* 9. Interactive Time Reclaim Calculator (Slider & Tangible Life Metrics) */}
        <DopamineCalculator />

        {/* 10. Solo Creator & Founder Story (Mohammad Fatim Hasnain - Meet the Owner) */}
        <FounderStory />

        {/* 11. Official Intellectual Property & Startup Protection Notice */}
        <IntellectualPropertyNotice />

        {/* 12. Split FAQ Section (Direct Human Answers) */}
        <Faq />

        {/* 13. Bottom Conversion Block (APK Download, Checksum, Founder Card) */}
        <ConversionCard />
      </main>

      {/* Floating Protected IP Watermark Badge */}
      <FloatingWatermark />

      {/* 14. Structured SaaS Footer */}
      <Footer />
    </div>
  );
}

export default App;
