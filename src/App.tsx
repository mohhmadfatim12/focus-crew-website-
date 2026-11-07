import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { DnsSimulator } from './components/DnsSimulator';
import { DopamineCalculator } from './components/DopamineCalculator';
import { ArchitectureFlow } from './components/ArchitectureFlow';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { FounderManifesto } from './components/FounderManifesto';
import { DownloadSection } from './components/DownloadSection';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

export function App() {
  const scrollToDownload = () => {
    const el = document.getElementById('download-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#06080D] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Tactical Navbar */}
      <Navbar onOpenDownload={scrollToDownload} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Live Interactive Phone Simulator */}
        <Hero onOpenDownload={scrollToDownload} />

        {/* 4 Architectural Pillars Deep-Dive */}
        <Pillars />

        {/* Interactive Live DNS Packet Inspector Lab */}
        <DnsSimulator />

        {/* Interactive Dopamine Cost & Screen-Time Calculator */}
        <DopamineCalculator />

        {/* Zero-Server Local Loopback Architecture Flow */}
        <ArchitectureFlow />

        {/* Hard Truth Comparison Matrix vs Opal / Freedom / ScreenTime */}
        <ComparisonMatrix />

        {/* Founder Manifesto by Mohammad Fatim Hasnain */}
        <FounderManifesto />

        {/* Direct APK Release & 3-Step Setup Guide */}
        <DownloadSection />

        {/* Engineering & Security FAQ */}
        <Faq />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
