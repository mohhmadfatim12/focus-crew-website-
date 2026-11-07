import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DualFeatureBento } from './components/DualFeatureBento';
import { StatsGrid } from './components/StatsGrid';
import { DeepPurpleBanner } from './components/DeepPurpleBanner';
import { DnsSimulator } from './components/DnsSimulator';
import { DopamineCalculator } from './components/DopamineCalculator';
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
      {/* Navbar (Zanderio Style) */}
      <Navbar onOpenDownload={scrollToDownload} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Zanderio-style Connected Canvas & Phone */}
        <Hero onOpenDownload={scrollToDownload} />

        {/* Dual Feature Bento (Service vs E-com layout in Zanderio) */}
        <DualFeatureBento />

        {/* 4-Card Stats Grid (What's Driving Your Customers Away layout) */}
        <StatsGrid />

        {/* Signature Full-Width Deep-Purple Feature Section */}
        <DeepPurpleBanner />

        {/* Interactive Live DNS Packet Inspector Lab */}
        <DnsSimulator />

        {/* Interactive Time Reclaim Calculator */}
        <DopamineCalculator />

        {/* Zero-Server Local Loopback Architecture Flow */}
        <ArchitectureFlow />

        {/* Hard Truth Comparison Matrix */}
        <ComparisonMatrix />

        {/* Split FAQ Section (Zanderio FAQ Layout) */}
        <Faq />

        {/* Bottom Conversion Section (Request a Demo layout) */}
        <ConversionCard />
      </main>

      {/* Structured SaaS Footer */}
      <Footer />
    </div>
  );
}

export default App;
