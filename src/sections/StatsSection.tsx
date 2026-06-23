import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatItem({ end, suffix, label, delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const itemRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 85%',
        onEnter: () => {
          if (hasAnimated.current) return;
          hasAnimated.current = true;

          gsap.to(item, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay,
            ease: 'power3.out',
          });

          // Counter animation
          const counter = { value: 0 };
          gsap.to(counter, {
            value: end,
            duration: 2.5,
            delay: delay + 0.3,
            ease: 'power2.out',
            onUpdate: () => {
              setCount(Math.floor(counter.value));
            },
          });
        },
      });
    }, item);

    return () => ctx.revert();
  }, [end, delay]);

  return (
    <div
      ref={itemRef}
      className="stat-item opacity-0 translate-y-8"
    >
      <div className="stat-number">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

const stats = [
  { end: 10000, suffix: '+', label: 'Happy Customers' },
  { end: 500, suffix: '+', label: 'Bridal Collections' },
  { end: 1000, suffix: '+', label: 'Family Styles' },
  { end: 2010, suffix: '', label: 'Serving Since' },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.stats-heading'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28"
      style={{ backgroundColor: '#330A0A' }}
    >
      {/* Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-[#A67C00]/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 stats-heading opacity-0">
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by <span className="text-[#A67C00]">Thousands</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Barakar&apos;s most loved family fashion destination
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#A67C00]/30 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#A67C00]/30 to-transparent" />
    </section>
  );
}
