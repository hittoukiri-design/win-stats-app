import { MessageCircle, Send } from 'lucide-react';

export default function FloatingChatButton() {
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Telegram Button */}
      <button
        onClick={handleTelegram}
        className="flex items-center justify-center w-14 h-14 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
        title="Chat on Telegram"
        aria-label="Chat on Telegram"
      >
        <Send size={20} aria-hidden="true" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20bd5a] text-white shadow-lg transition-all duration-200 transform hover:scale-110"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </button>
    </div>
  );
}
