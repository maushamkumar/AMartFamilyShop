import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TrendingItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const trendingItems: TrendingItem[] = [
  {
    id: '1',
    title: 'New Arrivals',
    subtitle: 'Fresh styles just landed',
    image: '/images/trending-1.jpg',
  },
  {
    id: '2',
    title: 'Wedding Specials',
    subtitle: 'Bridal & Groom collections',
    image: '/images/trending-2.jpg',
  },
  {
    id: '3',
    title: 'Festival Picks',
    subtitle: 'Celebrate in style',
    image: '/images/trending-3.jpg',
  },
  {
    id: '4',
    title: 'Summer Collection',
    subtitle: 'Light & breezy styles',
    image: '/images/saree-model.jpg',
  },
];

export default function TrendingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;
    const header = headerRef.current;
    if (!section || !slider || !header) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header,
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

      // Cards stagger animation
      const cards = slider.querySelectorAll('.trending-card-wrapper');
      gsap.fromTo(
        cards,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: slider,
            start: 'top 85%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="trending"
      ref={sectionRef}
      className="py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: '#F9F8F6' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="flex items-end justify-between mb-12 opacity-0">
          <div>
            <span className="inline-flex items-center gap-2 text-[#A67C00] text-sm tracking-[0.3em] uppercase font-medium mb-3">
              <TrendingUp size={16} />
              What&apos;s Hot
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              Trending Now
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border-2 border-[#1A1A1A]/20 flex items-center justify-center hover:border-[#A67C00] hover:text-[#A67C00] transition-all duration-300"
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border-2 border-[#1A1A1A]/20 flex items-center justify-center hover:border-[#A67C00] hover:text-[#A67C00] transition-all duration-300"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Slider */}
      <div
        ref={sliderRef}
        className="horizontal-scroll px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {trendingItems.map((item) => (
          <div
            key={item.id}
            className="trending-card-wrapper w-[280px] md:w-[320px] flex-shrink-0"
          >
            <div className="trending-card aspect-[3/4] relative group cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#330A0A]/90 via-[#330A0A]/30 to-transparent rounded-xl flex flex-col justify-end p-6">
                <h3 className="font-cinzel text-xl md:text-2xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">{item.subtitle}</p>
              </div>
              {/* Hover Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#A67C00] transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="md:hidden flex justify-center mt-6 gap-1.5">
        {trendingItems.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-[#A67C00]/30"
          />
        ))}
      </div>
    </section>
  );
}
