import { useState } from 'react';
import { MessageCircle, X, MessageSquare, Send } from 'lucide-react';

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  // EDIT THESE LINKS - Add your WhatsApp and Telegram URLs here
  const WHATSAPP_LINK = 'https://wa.me/'; // Add your WhatsApp number (e.g., https://wa.me/1234567890)
  const TELEGRAM_LINK = 'https://t.me/'; // Add your Telegram username (e.g., https://t.me/yourusername)

  const handleWhatsApp = () => {
    if (WHATSAPP_LINK && WHATSAPP_LINK !== 'https://wa.me/') {
      window.open(WHATSAPP_LINK, '_blank');
    }
  };

  const handleTelegram = () => {
    if (TELEGRAM_LINK && TELEGRAM_LINK !== 'https://t.me/') {
      window.open(TELEGRAM_LINK, '_blank');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu Items */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2">
          {/* Telegram Button */}
          <button
            onClick={handleTelegram}
            className="flex items-center gap-2 bg-[#0088cc] hover:bg-[#0077b5] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
            title="Chat on Telegram"
          >
            <Send size={20} />
            <span className="text-sm font-medium">Telegram</span>
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
            title="Chat on WhatsApp"
          >
            <MessageSquare size={20} />
            <span className="text-sm font-medium">WhatsApp</span>
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
        title="Chat with us"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
