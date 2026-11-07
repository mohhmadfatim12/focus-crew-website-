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
      setIsScrolled(window.scrollY > 15);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3' 
        : 'bg-white/60 backdrop-blur-sm py-4'
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
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-200 bg-white p-0.5 shadow-sm group-hover:border-slate-400 transition-all">
                <img 
                  src="/app-icon-round.png" 
                  alt="FocusCrew Logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  FocusCrew
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border border-slate-200 text-slate-600 bg-slate-100">
                  v1.0.0
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                Android Productivity Fortress
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 border border-slate-200/80 rounded-full px-4 py-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-500" />
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
              className="text-xs font-semibold px-4 py-2 rounded-xl text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 shadow-sm transition-all"
            >
              Live Simulator
            </a>
            
            <button
              onClick={() => {
                soundFx.playShieldTone();
                onOpenDownload();
              }}
              className="group flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Get APK v1.0.0</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white transition-all" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => {
                soundFx.playShieldTone();
                onOpenDownload();
              }}
              className="sm:hidden flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-900 text-white"
            >
              <Download className="w-3.5 h-3.5" />
              <span>APK</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  <Icon className="w-4 h-4 text-slate-900" />
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full flex items-center justify-center gap-2 text-sm font-bold py-2.5 rounded-xl bg-slate-900 text-white"
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
