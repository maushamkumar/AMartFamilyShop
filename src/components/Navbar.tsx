import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Collections', href: '#categories' },
  { label: 'Trending', href: '#trending' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#why-choose-us' },
  { label: 'Visit Us', href: '#visit-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#330A0A]/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-3"
            >
              <img
                src="/images/amart-logo.jpeg"
                alt="A MART"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-[#A67C00]"
              />
              <span className="font-cinzel text-lg md:text-xl font-bold text-[#A67C00] tracking-wider hidden sm:block">
                A MART
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="nav-link text-white/90 hover:text-[#A67C00] text-sm font-medium tracking-wide transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://www.instagram.com/amart_familyshop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#A67C00] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/919832114500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#A67C00] hover:bg-[#8a6800] text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 btn-lift"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#330A0A]/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-white text-2xl font-cinzel font-medium tracking-wider hover:text-[#A67C00] transition-colors"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-6 mt-8">
            <a
              href="tel:+919832114500"
              className="flex items-center gap-2 text-white hover:text-[#A67C00] transition-colors"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <a
              href="https://www.instagram.com/amart_familyshop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#A67C00] transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>

          <a
            href="https://wa.me/919832114500"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 bg-[#A67C00] hover:bg-[#8a6800] text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
