import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VisitUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        section.querySelector('.visit-header'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );

      // Map animation
      gsap.fromTo(
        section.querySelector('.map-container'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.map-container'),
            start: 'top 85%',
          },
        }
      );

      // Info cards stagger
      const cards = section.querySelectorAll('.info-card');
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.info-grid'),
            start: 'top 90%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="visit-us"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ backgroundColor: '#F9F8F6' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="visit-header text-center mb-14 opacity-0">
          <span className="text-[#A67C00] text-sm tracking-[0.3em] uppercase font-medium">
            Find Us
          </span>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-3 mb-4">
            Visit Our Store
          </h2>
          <p className="text-[#1A1A1A]/60 max-w-xl mx-auto">
            Come experience our collections in person
          </p>
        </div>

        {/* Map Container */}
        <div className="map-container relative rounded-2xl overflow-hidden shadow-xl mb-10 opacity-0">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.!2d86.85!3d23.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ2JzQ4LjAiTiA4NsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="A MART FAMILY SHOP Location"
            />
          </div>
          
          {/* Store Badge on Map */}
          <div className="absolute top-4 left-4 bg-white rounded-xl px-5 py-3 shadow-lg">
            <p className="font-cinzel font-bold text-[#1A1A1A]">A MART FAMILY SHOP</p>
            <p className="text-sm text-[#1A1A1A]/60">Barakar, West Bengal</p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="info-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="info-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0">
            <div className="w-12 h-12 rounded-full bg-[#330A0A] flex items-center justify-center mb-4">
              <MapPin className="text-[#A67C00]" size={22} />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-[#1A1A1A] mb-2">
              Our Address
            </h3>
            <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
              A MART FAMILY SHOP<br />
              Barakar, West Bengal<br />
              India
            </p>
            <a
              href="https://maps.app.goo.gl/YBuNMdpN7F7ByibF7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-[#A67C00] hover:text-[#8a6800] text-sm font-medium transition-colors"
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </div>

          {/* Hours */}
          <div className="info-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0">
            <div className="w-12 h-12 rounded-full bg-[#330A0A] flex items-center justify-center mb-4">
              <Clock className="text-[#A67C00]" size={22} />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-[#1A1A1A] mb-2">
              Opening Hours
            </h3>
            <div className="text-[#1A1A1A]/70 text-sm leading-relaxed space-y-1">
              <p className="flex justify-between">
                <span>Monday - Saturday</span>
                <span className="font-medium">10:00 AM - 9:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">11:00 AM - 8:00 PM</span>
              </p>
            </div>
            <p className="mt-4 text-green-600 text-sm font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open Now
            </p>
          </div>

          {/* Contact */}
          <div className="info-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0">
            <div className="w-12 h-12 rounded-full bg-[#330A0A] flex items-center justify-center mb-4">
              <Phone className="text-[#A67C00]" size={22} />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-[#1A1A1A] mb-2">
              Contact Us
            </h3>
            <div className="text-[#1A1A1A]/70 text-sm leading-relaxed space-y-2">
              <a
                href="tel:+919832114500"
                className="flex items-center gap-2 hover:text-[#A67C00] transition-colors"
              >
                <Phone size={14} />
                +91 98321 14500
              </a>
              <a
                href="https://wa.me/919832114500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#A67C00] transition-colors"
              >
                <span className="text-green-600 font-medium">WhatsApp:</span>
                +91 98321 14500
              </a>
            </div>
            <a
              href="https://www.instagram.com/amart_familyshop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-[#A67C00] hover:text-[#8a6800] text-sm font-medium transition-colors"
            >
              Follow us on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
