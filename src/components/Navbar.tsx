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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'System Features', href: '#features' },
    { name: 'Walkthrough', href: '#walkthrough' },
    { name: 'Friction Science', href: '#friction-science' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Audit Calculator', href: '#cost-calculator' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-[#E5E2DA]' 
          : 'bg-white border-b border-[#ECE8E0]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Identity */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#9E6F28]"
            aria-label="FocusCrew home"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#D8D4C8] bg-[#141715] p-0.5 flex items-center justify-center shrink-0">
              <img 
                src="/app-icon-round.png" 
                alt="FocusCrew Logo" 
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-[#1A1D1A]">
                FocusCrew
              </span>
              <span className="hidden sm:inline-flex text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[#F7F5F0] text-[#525853] border border-[#E5E2DA]">
                v1.0.4 Android
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-[#525853] hover:text-[#1A1D1A] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#interactive-demo"
              className="text-xs font-semibold px-3 py-2 text-[#525853] hover:text-[#1A1D1A] transition-colors"
            >
              Interactive Test
            </a>
            
            <button
              onClick={onOpenDownload}
              className="btn-primary text-xs !py-2 !px-4"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download APK</span>
              <ArrowUpRight className="w-3 h-3 text-white/60" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDownload}
              className="sm:hidden btn-primary text-xs !py-1.5 !px-3"
            >
              Download
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-[#525853] hover:text-[#1A1D1A] hover:bg-[#F7F5F0]"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#E5E2DA] space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-[#1A1D1A] hover:bg-[#F7F5F0] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full btn-primary text-xs py-2.5"
              >
                <Download className="w-4 h-4" />
                <span>Download FocusCrew APK (11 MB)</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
export default Navbar;
