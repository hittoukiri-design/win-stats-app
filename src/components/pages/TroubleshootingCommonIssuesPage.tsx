import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FloatingChatButton from '@/components/FloatingChatButton';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
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

export default function TroubleshootingCommonIssuesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-300 font-paragraph selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Header />
      <FloatingChatButton />
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
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
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-2 tracking-tight">Troubleshooting Common Issues</h1>
              </AnimatedElement>

              <AnimatedElement delay={100}>
                <p className="text-center text-zinc-400 text-lg mb-0">Find solutions to common problems and get your issues resolved quickly.</p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 space-y-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>Troubleshooting Common Issues</SectionBanner>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-zinc-400 space-y-6 leading-relaxed">
              <div>
                <h4 className="text-lg font-heading font-bold text-white mb-2">Withdrawal Pending for Too Long?</h4>
                <p>If your withdrawal hasn't been processed within 4 hours, contact Dostwin customer support immediately. Provide your withdrawal request ID and transaction details.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-heading font-bold text-white mb-2">Withdrawal Failed or Rejected?</h4>
                <p>This usually happens due to incorrect bank details or UPI ID. Verify your account information and try again. If the issue persists, reach out to support.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-heading font-bold text-white mb-2">Funds Received but Amount is Different?</h4>
                <p>Check if any bank charges were applied. Dostwin doesn't deduct fees, but some banks may charge for IMPS/NEFT transfers. Contact your bank for clarification.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-heading font-bold text-white mb-2">Can't Withdraw - Insufficient Balance?</h4>
                <p>Ensure you have enough balance in your Dostwin wallet. Some games may have pending winnings that take time to be credited. Check your transaction history.</p>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Need More Help?</h3>
              <p className="text-zinc-300 mb-6">If you couldn't find the answer to your question, our 24/7 customer support team is here to help you.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-[0_0_20px_rgba(41,121,242,0.4)] hover:shadow-[0_0_30px_rgba(41,121,242,0.6)] transition-all duration-300 hover:-translate-y-1"
                  onClick={() => navigate('/contact')}
                >
                  CONTACT SUPPORT
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
