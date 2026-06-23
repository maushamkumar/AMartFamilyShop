import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span: string;
}

const galleryImages: GalleryImage[] = [
  { id: '1', src: '/images/store-interior.jpg', alt: 'Store Interior', span: 'col-span-2 row-span-2' },
  { id: '2', src: '/images/bridal-model.jpg', alt: 'Bridal Collection', span: 'col-span-1 row-span-2' },
  { id: '3', src: '/images/gallery-1.jpg', alt: 'Saree Collection', span: 'col-span-1 row-span-1' },
  { id: '4', src: '/images/gallery-2.jpg', alt: 'Embroidery Detail', span: 'col-span-1 row-span-1' },
  { id: '5', src: '/images/family-shopping.jpg', alt: 'Family Shopping', span: 'col-span-2 row-span-1' },
  { id: '6', src: '/images/gallery-3.jpg', alt: 'Mens Collection', span: 'col-span-1 row-span-1' },
  { id: '7', src: '/images/kids-fashion.jpg', alt: 'Kids Fashion', span: 'col-span-1 row-span-1' },
  { id: '8', src: '/images/saree-model.jpg', alt: 'Saree Display', span: 'col-span-1 row-span-2' },
  { id: '9', src: '/images/accessories.jpg', alt: 'Accessories', span: 'col-span-1 row-span-1' },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>('');

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation with text scramble effect
      const header = section.querySelector('.gallery-header');
      if (header) {
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
      }

      // Gallery items stagger
      const items = section.querySelectorAll('.gallery-item');
      gsap.fromTo(
        items,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.gallery-grid'),
            start: 'top 85%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage(src);
    setLightboxAlt(alt);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxAlt('');
    document.body.style.overflow = '';
  };

  return (
    <>
      <section
        id="gallery"
        ref={sectionRef}
        className="py-20 md:py-28"
        style={{ backgroundColor: '#F9F8F6' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="gallery-header text-center mb-14 opacity-0">
            <span className="text-[#A67C00] text-sm tracking-[0.3em] uppercase font-medium">
              Visual Tour
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-3 mb-4">
              Our Store & Collections
            </h2>
            <p className="text-[#1A1A1A]/60 max-w-xl mx-auto">
              Take a glimpse into our world of fashion
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className={`gallery-item ${image.span} relative group cursor-pointer overflow-hidden rounded-xl opacity-0`}
                onClick={() => openLightbox(image.src, image.alt)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#330A0A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <ZoomIn className="text-white mx-auto mb-2" size={28} />
                    <p className="text-white font-cinzel text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div
        className={`lightbox ${lightboxImage ? 'active' : ''}`}
        onClick={closeLightbox}
      >
        <button
          className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
          onClick={closeLightbox}
        >
          <X size={32} />
        </button>
        {lightboxImage && (
          <img
            src={lightboxImage}
            alt={lightboxAlt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        )}
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-cinzel text-lg">
          {lightboxAlt}
        </p>
      </div>
    </>
  );
}
