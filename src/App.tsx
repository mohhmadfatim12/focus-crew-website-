import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DualFeatureBento } from './components/DualFeatureBento';
import { DemoVideoShowcase } from './components/DemoVideoShowcase';
import { StopDoomscrollSection } from './components/StopDoomscrollSection';
import { StatsGrid } from './components/StatsGrid';
import { DeepPurpleBanner } from './components/DeepPurpleBanner';
import { DnsSimulator } from './components/DnsSimulator';
import { DopamineCalculator } from './components/DopamineCalculator';
import { SuccessStories } from './components/SuccessStories';
import { ArchitectureFlow } from './components/ArchitectureFlow';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { Faq } from './components/Faq';
import { ConversionCard } from './components/ConversionCard';
import { Footer } from './components/Footer';

export function App() {
  const scrollToDownload = () => {
    const el = document.getElementById('download-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#212529] flex flex-col font-sans selection:bg-[#7E3FF2] selection:text-white antialiased">
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

        {/* 6. 4-Card Stats Grid (Why Willpower Fails) */}
        <StatsGrid />

        {/* 7. Signature Full-Width Deep-Purple Section (Military TaskAlarm & Buzzer) */}
        <DeepPurpleBanner />

        {/* 8. Interactive DNS Packet Inspector Lab (Light Theme) */}
        <DnsSimulator />

        {/* 9. Interactive Time Reclaim Calculator (Slider & Tangible Life Metrics) */}
        <DopamineCalculator />

        {/* 10. Real Tabbed Success Stories (Engineers, Students, Founders) */}
        <SuccessStories />

        {/* 11. Zero-Server Local Loopback Architecture Flow */}
        <ArchitectureFlow />

        {/* 12. Honest Comparison Matrix (FocusCrew vs Opal vs Freedom) */}
        <ComparisonMatrix />

        {/* 13. Split FAQ Section (Direct Human Answers) */}
        <Faq />

        {/* 14. Bottom Conversion Block (APK Download, Checksum, Founder Card) */}
        <ConversionCard />
      </main>

      {/* 15. Structured SaaS Footer */}
      <Footer />
    </div>
  );
}

export default App;
