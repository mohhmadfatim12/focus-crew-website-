import React, { useState, useEffect } from 'react';
import { Shield, Smartphone, Bell, Sliders, Download, Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Titan Fortress', href: '#titan-fortress', icon: Shield },
    { name: 'Reel Counter', href: '#reel-counter', icon: Smartphone },
    { name: 'TaskAlarm', href: '#task-alarm', icon: Bell },
    { name: 'DNS Engine', href: '#dns-engine', icon: Cpu },
    { name: 'Cost Calculator', href: '#cost-calculator', icon: Sliders },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#07090E]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl shadow-black/50 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            onClick={() => soundFx.playChime()}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 p-0.5 bg-slate-900 shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400 group-hover:shadow-cyan-500/25 transition-all">
                <img 
                  src="/app-icon-round.png" 
                  alt="FocusCrew Logo" 
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    // Fallback to stylized SVG shield if png fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  FocusCrew
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border border-cyan-500/30 text-cyan-400 bg-cyan-950/40">
                  v1.0.0
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono tracking-wide -mt-0.5">
                Android Native Fortress
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#interactive-demo"
              onClick={() => soundFx.playChime()}
              className="text-xs font-semibold px-4 py-2 rounded-xl text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-600 bg-slate-900/40 hover:bg-slate-800/50 transition-all"
            >
              Live Simulator
            </a>
            
            <button
              onClick={() => {
                soundFx.playShieldTone();
                onOpenDownload();
              }}
              className="relative group overflow-hidden flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-sans shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>Get FocusCrew APK</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => {
                soundFx.playShieldTone();
                onOpenDownload();
              }}
              className="sm:hidden flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950"
            >
              <Download className="w-3.5 h-3.5" />
              <span>APK</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-xl transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full flex items-center justify-center gap-2 text-sm font-bold py-2.5 rounded-xl bg-cyan-500 text-slate-950"
              >
                <Download className="w-4 h-4" />
                Download APK v1.0.0
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
