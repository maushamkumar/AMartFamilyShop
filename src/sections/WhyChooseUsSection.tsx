import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Tag, Layers, Users, Crown, Sparkles, Shield, Truck, Headphones } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Tag size={28} />,
    title: 'Lowest Price Guarantee',
    description: 'Wholesale prices on retail purchases. Best deals in Barakar.',
  },
  {
    icon: <Layers size={28} />,
    title: 'Huge Variety',
    description: '5000+ designs across all categories. Something for everyone.',
  },
  {
    icon: <Users size={28} />,
    title: 'Family Shopping',
    description: 'Complete family fashion under one roof. Shop for everyone.',
  },
  {
    icon: <Crown size={28} />,
    title: 'Bridal Specialist',
    description: 'Expert bridal consultants. Custom bridal packages available.',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'New Arrivals Weekly',
    description: 'Fresh collections every week. Stay ahead of trends.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Quality Assured',
    description: 'Premium fabrics and craftsmanship. Satisfaction guaranteed.',
  },
  {
    icon: <Truck size={28} />,
    title: 'Easy Alterations',
    description: 'In-house tailoring. Perfect fit every time.',
  },
  {
    icon: <Headphones size={28} />,
    title: 'Personal Styling',
    description: 'Free styling advice from our fashion experts.',
  },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        section.querySelector('.why-header'),
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

      // Feature cards stagger
      const cards = section.querySelectorAll('.feature-card');
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.features-grid'),
            start: 'top 85%',
          },
        }
      );

      // Image reveal
      gsap.fromTo(
        section.querySelector('.why-image'),
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ backgroundColor: '#330A0A' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="why-header text-center mb-16 opacity-0">
          <span className="text-[#A67C00] text-sm tracking-[0.3em] uppercase font-medium">
            Our Promise
          </span>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Why Shop With Us?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            We go the extra mile to make your shopping experience exceptional
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="why-image relative opacity-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4]">
              <img
                src="/images/owner-photo.jpg"
                alt="Store Owner"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Decorative frame */}
              <div className="absolute inset-4 border-2 border-[#A67C00]/40 rounded-xl pointer-events-none" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#A67C00] text-white px-6 py-4 rounded-xl shadow-xl">
              <p className="font-cinzel text-3xl md:text-4xl font-bold">15+</p>
              <p className="text-sm text-white/80">Years of Trust</p>
            </div>
          </div>

          {/* Right: Features Grid */}
          <div className="features-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card opacity-0"
              >
                <div className="text-[#A67C00] mb-3">{feature.icon}</div>
                <h3 className="font-cinzel text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
