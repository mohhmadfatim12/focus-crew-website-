import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';

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
    { name: 'Features', href: '#features' },
    { name: 'Titan Fortress', href: '#titan-fortress' },
    { name: 'DNS Engine', href: '#dns-engine' },
    { name: 'Time Audit', href: '#cost-calculator' },
    { name: 'Meet Creator', href: '#creator' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-[#E5DFD3] shadow-xs py-3' 
        : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-[#D8D1C3] bg-[#121413] p-1 flex items-center justify-center shadow-xs group-hover:border-[#A37A3E] transition-colors">
              <img 
                src="/app-icon-round.png" 
                alt="FocusCrew Logo" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <div className="flex items-center gap-1.5 text-left">
              <span className="font-extrabold text-xl tracking-tight text-[#202621] group-hover:text-[#A37A3E] transition-colors">
                FocusCrew
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EAF1EC] text-[#284B39] border border-[#C5DAC9] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#284B39] animate-pulse"></span>
                v1.0.4
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#5E665F] hover:text-[#A37A3E] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#interactive-demo"
              className="text-sm font-semibold px-4 py-2 rounded-full text-[#202621] hover:text-[#A37A3E] hover:bg-[#F5EAD8]/50 transition-all font-mono"
            >
              Test Live Simulator
            </a>
            
            <button
              onClick={() => {
                onOpenDownload();
              }}
              className="group flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full bg-[#A37A3E] hover:bg-[#8A642E] text-white shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Get APK Free</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => {
                onOpenDownload();
              }}
              className="sm:hidden flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-[#A37A3E] text-white"
            >
              <Download className="w-3.5 h-3.5" />
              <span>APK</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#5E665F] hover:text-[#202621] hover:bg-[#F2EEE5] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-white border border-[#E5DFD3] shadow-xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-[#202621] hover:bg-[#F5EAD8]/50 hover:text-[#A37A3E] rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#E5DFD3]">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full flex items-center justify-center gap-2 text-sm font-bold py-2.5 rounded-full bg-[#A37A3E] text-white"
              >
                <Download className="w-4 h-4" />
                Download APK v1.0.4
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
