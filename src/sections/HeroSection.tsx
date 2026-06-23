import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, ChevronDown } from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorNumberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const cta = ctaRef.current;
    const decorNumber = decorNumberRef.current;

    if (!section || !content || !heading || !subheading || !cta || !decorNumber) return;

    const ctx = gsap.context(() => {
      // Initial entrance animation
      const tl = gsap.timeline({ delay: 2.2 });

      tl.fromTo(
        heading,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      )
        .fromTo(
          subheading,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          cta,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          decorNumber,
          { opacity: 0, x: -50 },
          { opacity: 0.15, x: 0, duration: 1, ease: 'power2.out' },
          '-=0.8'
        );

      // Scroll exit animation
      gsap.to(content, {
        y: '-30vh',
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=50%',
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToCategories = () => {
    const element = document.querySelector('#categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/shop-building.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(30, 5, 5, 0.65)' }} />

      {/* Decorative Number */}
      <span
        ref={decorNumberRef}
        className="absolute left-4 md:left-10 top-1/4 font-vibes text-[12rem] md:text-[20rem] leading-none pointer-events-none select-none"
        style={{ color: '#A67C00', opacity: 0 }}
      >
        A
      </span>

      {/* Main Content */}
      <div ref={contentRef} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Small Tag */}
        <p className="text-[#A67C00] text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium">
          Since 2010 &bull; Barakar, West Bengal
        </p>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight mb-4 opacity-0"
        >
          <span className="block text-[#A67C00]">FAMILY</span>
          <span className="block text-white mt-2">SHOP</span>
        </h1>

        {/* Subheading */}
        <p
          ref={subheadingRef}
          className="text-white/80 text-base md:text-lg lg:text-xl tracking-widest uppercase mb-10 opacity-0"
        >
          Bridal Wear &bull; Sarees &bull; Kids Collection &bull; Men&apos;s Fashion
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <button
            onClick={scrollToCategories}
            className="px-8 py-4 bg-[#A67C00] hover:bg-[#8a6800] text-white font-medium rounded-full transition-all duration-300 btn-lift flex items-center gap-2 tracking-wide"
          >
            Explore Collection
          </button>
          <a
            href="https://wa.me/919832114500?text=Hi,%20I'm%20interested%20in%20your%20collection."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-[#A67C00] text-[#A67C00] hover:bg-[#A67C00] hover:text-white font-medium rounded-full transition-all duration-300 btn-lift flex items-center gap-2 tracking-wide"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="text-[#A67C00]" size={24} />
      </div>

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent, #330A0A)',
        }}
      />
    </section>
  );
}
