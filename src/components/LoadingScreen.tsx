import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(logoRef.current, {
      scale: 1.1,
      duration: 1,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 1,
    });

    tl.to(
      progressBarRef.current,
      {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut',
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (!isLoading && containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.visibility = 'hidden';
          }
        },
      });
    }
  }, [isLoading]);

  return (
    <div
      ref={containerRef}
      className="loading-screen"
      style={{ visibility: isLoading ? 'visible' : 'hidden' }}
    >
      <img
        ref={logoRef}
        src="/images/amart-logo.jpeg"
        alt="A MART FAMILY SHOP"
        className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mb-8"
      />
      <h2
        className="font-cinzel text-2xl md:text-3xl font-bold tracking-widest mb-8"
        style={{ color: '#A67C00' }}
      >
        A MART FAMILY SHOP
      </h2>
      <div
        ref={progressRef}
        className="w-48 md:w-64 h-1 rounded-full overflow-hidden"
        style={{ backgroundColor: 'rgba(166, 124, 0, 0.2)' }}
      >
        <div
          ref={progressBarRef}
          className="h-full rounded-full"
          style={{
            backgroundColor: '#A67C00',
            width: '0%',
          }}
        />
      </div>
    </div>
  );
}
