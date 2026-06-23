import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import FloatingButtons from './components/FloatingButtons';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import CategoriesSection from './sections/CategoriesSection';
import TrendingSection from './sections/TrendingSection';
import GallerySection from './sections/GallerySection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import VisitUsSection from './sections/VisitUsSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <Navbar />
          <FloatingButtons />
          
          <main ref={mainRef} className="relative">
            <HeroSection />
            <StatsSection />
            <CategoriesSection />
            <TrendingSection />
            <GallerySection />
            <WhyChooseUsSection />
            <VisitUsSection />
            <ContactSection />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default App;
