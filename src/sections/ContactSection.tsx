import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, User, Phone, MessageSquare, ShoppingBag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  'Bridal Collection',
  'Saree Collection',
  'Kids Wear',
  'Mens Collection',
  'Festive Wear',
  'Western Wear',
  'Accessories',
  'General Inquiry',
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        section.querySelector('.contact-header'),
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

      // Form animation
      gsap.fromTo(
        section.querySelector('.contact-form'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.contact-form'),
            start: 'top 85%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a brief loading
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Build WhatsApp message
      const whatsappMessage = `Hi A MART FAMILY SHOP,

My Name: ${formData.name}
Phone: ${formData.phone}
Category: ${formData.category}
Message: ${formData.message}

I'm interested in your collection. Please share more details.`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/919832114500?text=${encodedMessage}`, '_blank');

      // Reset form after delay
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', category: '', message: '' });
      }, 3000);
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ backgroundColor: '#F9F8F6' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="contact-header text-center mb-14 opacity-0">
          <span className="text-[#A67C00] text-sm tracking-[0.3em] uppercase font-medium">
            Get In Touch
          </span>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-3 mb-4">
            Send an Inquiry
          </h2>
          <p className="text-[#1A1A1A]/60 max-w-xl mx-auto">
            Have questions? Send us a message and we&apos;ll get back to you on WhatsApp
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form bg-white rounded-2xl shadow-xl p-8 md:p-12 opacity-0">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Send className="text-green-600" size={28} />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-[#1A1A1A] mb-2">
                Message Sent!
              </h3>
              <p className="text-[#1A1A1A]/60">
                Redirecting you to WhatsApp...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name & Phone Row */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A]/70 mb-2">
                    <User size={16} className="text-[#A67C00]" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="form-input"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A]/70 mb-2">
                    <Phone size={16} className="text-[#A67C00]" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    pattern="[0-9+\s-]*"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A]/70 mb-2">
                  <ShoppingBag size={16} className="text-[#A67C00]" />
                  Interested Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="form-input bg-transparent cursor-pointer"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A]/70 mb-2">
                  <MessageSquare size={16} className="text-[#A67C00]" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us what you're looking for..."
                  className="form-input resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#A67C00] hover:bg-[#8a6800] disabled:bg-[#A67C00]/60 text-white font-cinzel font-bold text-lg rounded-xl transition-all duration-300 btn-lift flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send on WhatsApp
                  </>
                )}
              </button>

              <p className="text-center text-sm text-[#1A1A1A]/50">
                By submitting, you will be redirected to WhatsApp to complete your inquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
