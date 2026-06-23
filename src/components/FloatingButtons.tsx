import { Phone, Instagram, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919832114500?text=Hi,%20I'm%20interested%20in%20your%20collection."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 btn-lift pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/amart_familyshop"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 btn-lift"
        aria-label="Follow on Instagram"
      >
        <Instagram size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919832114500"
        className="w-14 h-14 rounded-full bg-[#A67C00] hover:bg-[#8a6800] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 btn-lift"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
