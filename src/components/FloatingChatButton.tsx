import { Send } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { memo } from 'react';

function FloatingChatButton() {
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
        className="flex items-center justify-center w-14 h-14 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-full shadow-lg"
        title="Chat on Telegram"
        aria-label="Chat on Telegram"
      >
        <Send size={20} aria-hidden="true" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <Image
          src="https://static.wixstatic.com/media/dc7695_06c6e768b904415986b6a3f1936c671d~mv2.jpg"
          alt="WhatsApp"
          width={56}
          height={56}
          className="rounded-full"
        />
      </button>
    </div>
  );
}

export default memo(FloatingChatButton);
