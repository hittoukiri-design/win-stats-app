import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FloatingChatButton from '@/components/FloatingChatButton';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { CheckCircle2 } from 'lucide-react';
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

// --- Main Blog Page Component ---

export default function BlogPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-300 font-paragraph selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Header />
      <FloatingChatButton />
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">

        <div className="md:hidden absolute inset-0 bg-[url('https://static.wixstatic.com/media/dc7695_09e7afa2ea244f64a938acee4c79aa90~mv2.jpg')] bg-cover bg-center opacity-100" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/40 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 py-8">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <AnimatedElement>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight">Dostwin Game Blog</h1>
            </AnimatedElement>

            <AnimatedElement delay={100}>
              <p className="text-center text-zinc-400 text-lg mb-12">Discover winning strategies, latest updates, and insider tips for Dost Game. Stay ahead with our expert insights and game analysis.</p>
            </AnimatedElement>
          </div>
        </div>
      </section>
      {/* Blog Articles Grid */}
      <section className="py-20 bg-zinc-950/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedElement className="mb-4">

          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1: How To Withdraw Money */}
            <AnimatedElement delay={100}>
              <div className="group cursor-pointer h-full">
                <div className="relative h-64 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                  <Image 
                    src="https://static.wixstatic.com/media/dc7695_3b99b19550fe4f358e9182bf9ce683a1~mv2.png?originWidth=384&originHeight=256" 
                    alt="How To Withdraw Money From Dostwin Game?" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={256}
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                    FEBRUARY 10, 2026
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">How To Withdraw Money From Dostwin Game?</h3>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white font-bold text-sm py-2 px-4 rounded-lg shadow-[0_0_15px_rgba(41,121,242,0.3)] hover:shadow-[0_0_25px_rgba(41,121,242,0.5)] transition-all duration-300"
                    onClick={() => document.getElementById('withdrawal-article')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    READ FULL ARTICLE
                  </Button>
                </div>
              </div>
            </AnimatedElement>

            {/* Article 2: Important Withdrawal Information */}
            <AnimatedElement delay={150}>
              <div className="group cursor-pointer h-full">
                <div className="relative h-64 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                  <Image 
                    src="https://static.wixstatic.com/media/dc7695_eabaef06f2a643d28cbb82544795208e~mv2.png?originWidth=384&originHeight=256" 
                    alt="Important Withdrawal Information" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={256}
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                    JANUARY 16, 2026
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">Important Withdrawal Information</h3>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white font-bold text-sm py-2 px-4 rounded-lg shadow-[0_0_15px_rgba(41,121,242,0.3)] hover:shadow-[0_0_25px_rgba(41,121,242,0.5)] transition-all duration-300"
                    onClick={() => document.getElementById('withdrawal-info')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    READ FULL ARTICLE
                  </Button>
                </div>
              </div>
            </AnimatedElement>

            {/* Article 3: Troubleshooting Common Issues */}
            <AnimatedElement delay={200}>
              <div className="group cursor-pointer h-full">
                <div className="relative h-64 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                  <Image 
                    src="https://static.wixstatic.com/media/dc7695_21886516e26b4b5699ee2ec0946c906a~mv2.png?originWidth=384&originHeight=256" 
                    alt="Troubleshooting Common Issues" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={256}
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                    JANUARY 16, 2026
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">Troubleshooting Common Issues</h3>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white font-bold text-sm py-2 px-4 rounded-lg shadow-[0_0_15px_rgba(41,121,242,0.3)] hover:shadow-[0_0_25px_rgba(41,121,242,0.5)] transition-all duration-300"
                    onClick={() => document.getElementById('troubleshooting')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    READ FULL ARTICLE
                  </Button>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16 space-y-16" id="withdrawal-article">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>How To Withdraw Money From Dostwin Game?</SectionBanner>
          </AnimatedElement>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedElement delay={100} className="flex-1 space-y-6">
              <p className="text-zinc-300 text-lg">Withdrawing your winnings from Dostwin Games is also quick and hassle-free:</p>
              <ul className="space-y-4">
                {[
                  "Open Withdrawal section — Go to Wallet > Withdraw in your Dostwin account.",
                  "Enter amount — Minimum withdrawal on Dostwin is ₹110. No hidden fees.",
                  "Select method — UPI, bank transfer (IMPS/NEFT), or digital wallet. Enter your UPI ID or bank details accurately.",
                  "Confirm request — Review details and complete OTP verification for security.",
                  "Receive funds — UPI withdrawals on Dostwin typically complete within 1–2 hours.",
                  "Tap on 'Withdraw' to submit the request."
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
                <Image src="https://dostwin.app/uploads/dostwin-withdraw.webp" alt="Withdraw Mockup" className="w-full h-full object-cover" />
              </div>
            </AnimatedElement>
          </div>
        </div>

       {/* Additional Information */}
        <div className="container mx-auto px-4 max-w-4xl" id="withdrawal-info">
          <AnimatedElement>
            <SectionBanner>Important Withdrawal Information</SectionBanner>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-zinc-400 space-y-4 leading-relaxed">
              <h3 className="text-xl font-heading font-bold text-white mb-4">Withdrawal Methods Available</h3>
              <p><strong className="text-zinc-200">UPI (Recommended):</strong> Fastest method, typically 1-2 hours. Supports Google Pay, PhonePe, Paytm, and other UPI apps.</p>
              <p><strong className="text-zinc-200">Bank Transfer (IMPS/NEFT):</strong> Direct transfer to your bank account. May take 2-4 hours depending on your bank.</p>
              <p><strong className="text-zinc-200">Digital Wallets:</strong> Withdraw to Paytm, Amazon Pay, or other supported digital wallets for instant credit.</p>
              
              <h3 className="text-xl font-heading font-bold text-white mb-4 mt-8">Withdrawal Limits & Fees</h3>
              <p><strong className="text-zinc-200">Minimum Withdrawal:</strong> ₹110</p>
              <p><strong className="text-zinc-200">Maximum Withdrawal:</strong> No upper limit on daily withdrawals</p>
              <p><strong className="text-zinc-200">Processing Fee:</strong> No hidden fees - what you withdraw is what you get</p>
              
              <h3 className="text-xl font-heading font-bold text-white mb-4 mt-8">Security Tips</h3>
              <ul className="space-y-3 mt-4">
                <li><strong className="text-zinc-200">Verify Your Details:</strong> Always double-check your UPI ID or bank account details before confirming withdrawal.</li>
                <li><strong className="text-zinc-200">OTP Verification:</strong> Never share your OTP with anyone. Dostwin will never ask for it via email or chat.</li>
                <li><strong className="text-zinc-200">Account Security:</strong> Keep your Dostwin account password strong and change it regularly.</li>
                <li><strong className="text-zinc-200">Withdrawal History:</strong> Monitor your withdrawal history in the Wallet section to track all transactions.</li>
              </ul>
            </div>
          </AnimatedElement>
        </div>

        {/* Troubleshooting */}
        <div className="container mx-auto px-4 max-w-4xl" id="troubleshooting">
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
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Ready to Withdraw Your Winnings?</h3>
              <p className="text-zinc-300 mb-6">Follow the steps above and get your money within minutes. If you need any assistance, our 24/7 customer support team is here to help.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-[0_0_20px_rgba(41,121,242,0.4)] hover:shadow-[0_0_30px_rgba(41,121,242,0.6)] transition-all duration-300 hover:-translate-y-1"
                  onClick={() => window.location.href = 'https://dostwin.com/#/wallet'}
                >
                  GO TO WALLET
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/50 bg-zinc-900/50 text-white hover:bg-primary/10 hover:border-primary text-lg py-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                  onClick={() => navigate('/')}
                >
                  BACK TO HOME
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
