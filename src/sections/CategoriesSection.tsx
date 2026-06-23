import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Category {
  id: string;
  name: string;
  startingPrice: string;
  image: string;
  whatsappMessage: string;
}

const categories: Category[] = [
  {
    id: 'bridal',
    name: 'Bridal Collection',
    startingPrice: '\u20B94,999',
    image: '/images/bridal-model.jpg',
    whatsappMessage: "Hi, I'm interested in your Bridal Collection.",
  },
  {
    id: 'saree',
    name: 'Saree Collection',
    startingPrice: '\u20B9999',
    image: '/images/saree-model.jpg',
    whatsappMessage: "Hi, I'm interested in your Saree Collection.",
  },
  {
    id: 'kids',
    name: 'Kids Wear',
    startingPrice: '\u20B9499',
    image: '/images/kids-fashion.jpg',
    whatsappMessage: "Hi, I'm interested in your Kids Wear collection.",
  },
  {
    id: 'mens',
    name: "Men's Collection",
    startingPrice: '\u20B9799',
    image: '/images/mens-fashion.jpg',
    whatsappMessage: "Hi, I'm interested in your Men's Collection.",
  },
  {
    id: 'festive',
    name: 'Festive Wear',
    startingPrice: '\u20B91,299',
    image: '/images/festive-wear.jpg',
    whatsappMessage: "Hi, I'm interested in your Festive Wear collection.",
  },
  {
    id: 'western',
    name: 'Western Wear',
    startingPrice: '\u20B91,499',
    image: '/images/western-wear.jpg',
    whatsappMessage: "Hi, I'm interested in your Western Wear collection.",
  },
  {
    id: 'accessories',
    name: 'Accessories',
    startingPrice: '\u20B9299',
    image: '/images/accessories.jpg',
    whatsappMessage: "Hi, I'm interested in your Accessories collection.",
  },
  {
    id: 'traditional',
    name: 'Traditional',
    startingPrice: '\u20B91,999',
    image: '/images/trending-3.jpg',
    whatsappMessage: "Hi, I'm interested in your Traditional collection.",
  },
];

function CategoryCard({ category, index }: { category: Category; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        }
      );
    }, card);

    return () => ctx.revert();
  }, [index]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(category.whatsappMessage);
    window.open(`https://wa.me/919832114500?text=${encodedMessage}`, '_blank');
  };

  return (
    <div
      ref={cardRef}
      className="category-card rounded-xl overflow-hidden cursor-pointer group opacity-0"
      onClick={handleWhatsAppClick}
    >
      <div className="aspect-[3/4] relative">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="overlay">
          <h3 className="font-cinzel text-xl md:text-2xl font-bold text-white mb-1">
            {category.name}
          </h3>
          <p className="text-[#A67C00] text-sm font-medium mb-4">
            Starting from {category.startingPrice}
          </p>
          <button className="inline-flex items-center gap-2 bg-[#A67C00] hover:bg-[#8a6800] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300">
            <MessageCircle size={16} />
            Enquire on WhatsApp
          </button>
        </div>
      </div>
      
      {/* Mobile Visible Info */}
      <div className="md:hidden p-4 bg-white">
        <h3 className="font-cinzel text-lg font-bold text-[#1A1A1A]">
          {category.name}
        </h3>
        <p className="text-[#A67C00] text-sm font-medium">
          Starting from {category.startingPrice}
        </p>
      </div>
    </div>
  );
}

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.section-header'),
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
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ backgroundColor: '#F9F8F6' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header text-center mb-14 opacity-0">
          <span className="text-[#A67C00] text-sm tracking-[0.3em] uppercase font-medium">
            Browse Our Range
          </span>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-3 mb-4">
            Shop by Category
          </h2>
          <p className="text-[#1A1A1A]/60 max-w-xl mx-auto">
            Explore our curated collections for every member of your family
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
