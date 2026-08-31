import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FloatingChatButton from '@/components/FloatingChatButton';
import { ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { InformationGuides } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

// --- Utility Components ---

const AnimatedElement: React.FC<{children: React.ReactNode; className?: string; delay?: number}> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay);
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-zinc-800 rounded-xl mb-4 overflow-hidden bg-zinc-900/50 hover:border-primary/30 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
      >
        <span className="font-heading font-bold text-lg text-zinc-100 pr-4">{question}</span>
        <ChevronRight className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-zinc-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// --- Main Page Component ---

export default function FAQPage() {
  const [guides, setGuides] = useState<InformationGuides[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const result = await BaseCrudService.getAll<InformationGuides>('informationguides');
        setGuides(result.items || []);
      } catch (error) {
        console.error('Failed to fetch information guides:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGuides();
  }, []);

  const faqData = [
    { q: "Is game-insights Game safe and legal?", a: "Yes, game-insights Game is safe to use and follows secure payment methods, though legality may depend on your region's rules." },
    { q: "Can I play the game-insights Game on my phone?", a: "Yes, game-insights Game is available for Android devices through its official app. Also, you can use the game-insights official website." },
    { q: "Is registration free for the game-insights Game?", a: "Yes, creating an account is completely free." },
    { q: "What are the payment options for deposits on game-insights Game?", a: "You can deposit using UPI, Paytm, E-Wallet, Paytm, and USDT." },
    { q: "How long do withdrawals take?", a: "Withdrawals usually reflect within a few minutes to an hour after approval." },
    { q: "What's the minimum deposit required on game-insights Game?", a: "The minimum deposit amount is Rs. 100." },
    { q: "Are there any referral bonuses on game-insights Game?", a: "Yes, you can earn commissions by inviting others through your referral program." },
    { q: "Is there customer support for game-insights Games?", a: "Yes, 24/7 customer support is available through live chat, where you can solve any of your problems." },
    { q: "How to Request a Withdrawal?", a: "To request a withdrawal, log in to your game-insights account, navigate to the Wallet or Account section, select 'Withdraw', choose your preferred payment method, enter the amount you wish to withdraw, and confirm the transaction. Your withdrawal will be processed within the specified timeframe after approval." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-300 font-paragraph selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Header />
      <FloatingChatButton />
      
      {/* Hero Section */}
      <section className="pt-32 pb-4 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedElement>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6 text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-zinc-400 text-center mb-12">
              Find answers to common questions about game-insights Game
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-zinc-950/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-2">
            {faqData.map((faq, index) => (
              <AnimatedElement key={index} delay={index * 50}>
                <FAQItem question={faq.q} answer={faq.a} />
              </AnimatedElement>
            ))}
            
            {/* CMS Information Guides Section */}
            {isLoading ? (
              <div className="flex justify-center py-8">
                <LoadingSpinner />
              </div>
            ) : guides.length > 0 ? (
              guides.map((guide, index) => (
                <AnimatedElement key={guide._id} delay={(faqData.length + index) * 50}>
                  <FAQItem question={guide.guideTitle || ''} answer={guide.content || ''} />
                </AnimatedElement>
              ))
            ) : null}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
