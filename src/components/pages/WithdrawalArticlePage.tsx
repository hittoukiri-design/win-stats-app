import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FloatingChatButton from '@/components/FloatingChatButton';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const SectionBanner: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full max-w-4xl mx-auto bg-primary text-primary-foreground py-3 px-6 rounded-xl text-center font-heading font-bold text-xl md:text-2xl shadow-[0_4px_20px_rgba(41,121,242,0.4)] mb-10 border border-primary/20 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
    <span className="relative z-10">{children}</span>
  </div>
);

// --- Main Article Page Component ---

export default function RedemptionArticlePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-300 font-paragraph selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Header />
      <FloatingChatButton />
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-4 md:pb-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/40 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 py-2">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement>
              <button
                onClick={() => navigate('/blog')}
                className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-200 mb-8 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-heading font-semibold">Back to Blog</span>
              </button>
            </AnimatedElement>
            <div className="text-center flex flex-col items-center">
              <AnimatedElement delay={50}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight">How To Redeem Money From game-insights Game?</h1>
              </AnimatedElement>

              <AnimatedElement delay={100}>
                <p className="text-center text-zinc-400 text-lg mb-12">Learn the complete process to redeem your winnings from game-insights Games safely and quickly.</p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-2 space-y-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>How To Redeem Money From game-insights Game?</SectionBanner>
          </AnimatedElement>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedElement delay={100} className="flex-1 space-y-6">
              <p className="text-zinc-300 text-lg">Redeeming your winnings from game-insights Games is also quick and hassle-free:</p>
              <ul className="space-y-4">
                {[
                  "Open Redemption section — Go to Wallet > Redeem in your game-insights account.",
                  "Enter amount — Minimum redemption on game-insights is ₹110. No hidden fees.",
                  "Select method — UPI, bank transfer (IMPS/NEFT), or digital wallet. Enter your UPI ID or bank details accurately.",
                  "Confirm request — Review details and complete OTP verification for security.",
                  "Receive funds — UPI redemptions on game-insights typically complete within 1–2 hours.",
                  "Tap on 'Redeem' to submit the request."
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-zinc-400">{step}</p>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
            <AnimatedElement delay={200} className="flex-1 flex justify-center">
              <div className="relative w-64 h-[500px] bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 overflow-hidden shadow-2xl shadow-primary/10 hidden">
                <div className="absolute top-0 inset-x-0 h-6 bg-zinc-800 rounded-b-3xl mx-16 z-20" />
                <Image src="https://game-insights.app/uploads/game-insights-redeem.webp" alt="Redeem Mockup" className="w-full h-full object-cover" />
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>Troubleshooting Common Issues</SectionBanner>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-zinc-400 space-y-6 leading-relaxed">
              <p className="text-center text-zinc-300">Experiencing issues with your redemption? We've compiled solutions to the most common problems.</p>
              <div className="flex justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-[0_0_20px_rgba(41,121,242,0.4)] hover:shadow-[0_0_30px_rgba(41,121,242,0.6)] transition-all duration-300 hover:-translate-y-1"
                  onClick={() => navigate('/blog/troubleshooting-common-issues')}
                >
                  READ FULL ARTICLE
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Ready to Redeem Your Winnings?</h3>
              <p className="text-zinc-300 mb-6">Follow the steps above and get your money within minutes. If you need any assistance, our 24/7 customer support team is here to help.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-[0_0_20px_rgba(41,121,242,0.4)] hover:shadow-[0_0_30px_rgba(41,121,242,0.6)] transition-all duration-300 hover:-translate-y-1"
                  onClick={() => window.location.href = 'https://game-insights.com/#/wallet'}
                >
                  GO TO WALLET
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/50 bg-zinc-900/50 text-white hover:bg-primary/10 hover:border-primary text-lg py-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                  onClick={() => navigate('/blog')}
                >
                  BACK TO BLOG
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
