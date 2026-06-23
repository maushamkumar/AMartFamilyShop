import { Instagram, MessageCircle, Phone, MapPin, Mail, ExternalLink } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Collections', href: '#categories' },
  { label: 'Trending', href: '#trending' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About Us', href: '#why-choose-us' },
  { label: 'Visit Store', href: '#visit-us' },
  { label: 'Contact', href: '#contact' },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#330A0A' }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/hero-logo.jpg"
                alt="A MART FAMILY SHOP"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#A67C00]"
              />
              <div>
                <h3 className="font-cinzel text-lg font-bold text-[#A67C00]">
                  A MART
                </h3>
                <p className="text-white/50 text-xs tracking-wider">FAMILY SHOP</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Barakar&apos;s trusted family fashion destination since 2010. 
              Offering premium bridal wear, sarees, kids fashion, and men&apos;s 
              clothing at wholesale prices.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/919832114500"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://www.instagram.com/amart_familyshop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 flex items-center justify-center text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="tel:+919832114500"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A67C00] flex items-center justify-center text-white transition-all duration-300"
                aria-label="Call"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-base font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-[#A67C00] text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <ExternalLink size={12} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-cinzel text-base font-bold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.app.goo.gl/YBuNMdpN7F7ByibF7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#A67C00] text-sm transition-colors duration-300 flex items-start gap-3"
                >
                  <MapPin size={18} className="text-[#A67C00] flex-shrink-0 mt-0.5" />
                  <span>
                    A MART FAMILY SHOP<br />
                    Barakar, West Bengal
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919832114500"
                  className="text-white/60 hover:text-[#A67C00] text-sm transition-colors duration-300 flex items-center gap-3"
                >
                  <Phone size={18} className="text-[#A67C00] flex-shrink-0" />
                  +91 98321 14500
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919832114500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#A67C00] text-sm transition-colors duration-300 flex items-center gap-3"
                >
                  <MessageCircle size={18} className="text-[#A67C00] flex-shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <span className="text-white/60 text-sm flex items-center gap-3">
                  <Mail size={18} className="text-[#A67C00] flex-shrink-0" />
                  DM on Instagram
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-cinzel text-base font-bold text-white mb-6">
              Business Hours
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-white/60">
                <span>Monday</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between text-white/60">
                <span>Tuesday</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between text-white/60">
                <span>Wednesday</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between text-white/60">
                <span>Thursday</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between text-white/60">
                <span>Friday</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between text-white/60">
                <span>Saturday</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between text-white/60">
                <span>Sunday</span>
                <span>11:00 AM - 8:00 PM</span>
              </li>
            </ul>

            {/* CTA Button */}
            <a
              href="https://wa.me/919832114500?text=Hi,%20I%20want%20to%20visit%20your%20store.%20Please%20share%20directions."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3 bg-[#A67C00] hover:bg-[#8a6800] text-white font-medium rounded-xl transition-all duration-300 btn-lift flex items-center justify-center gap-2 text-sm"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} A MART FAMILY SHOP. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/amart_familyshop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#A67C00] text-sm transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/919832114500"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#A67C00] text-sm transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://maps.app.goo.gl/YBuNMdpN7F7ByibF7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#A67C00] text-sm transition-colors"
              >
                Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
