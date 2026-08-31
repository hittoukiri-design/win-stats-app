import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  UserPlus,
  Wallet,
  Download,
  LogIn,
  CreditCard,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';

const AnimatedElement: React.FC<{children: React.ReactNode; className?: string; delay?: number}> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.classList.add('is-visible');
        }, delay);
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`${className || ''} opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0`}>{children}</div>;
};

const loginUrl = 'https://game-insights.com/#/login';
const registerUrl = 'https://game-insights.com/#/register';

export default function HowToPlayPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                How to Play
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Get started with game-insights Game in just a few simple steps
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Download & Install Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <Download className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Download & Install
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Get the game-insights Game app on your Android device
              </p>
            </div>
          </AnimatedElement>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                { step: '1', title: 'Click the Download Button', desc: 'Tap the download button to get the game-insights Game APK file' },
                { step: '2', title: 'Enable Unknown Sources', desc: 'Go to Settings > Security and enable "Install from Unknown Sources"' },
                { step: '3', title: 'Install the APK', desc: 'Open the downloaded file and tap Install. Wait a few seconds for completion' },
                { step: '4', title: 'Open & Start Playing', desc: 'Launch the app, register or log in, and start your gaming journey' }
              ].map((item, index) => (
                <AnimatedElement key={index} delay={index * 100}>
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>

            <AnimatedElement>
              <div className="text-center mt-10">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link to="/download">Download Now</Link>
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <UserPlus className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                How to Register
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Create your account in under a minute
              </p>
            </div>
          </AnimatedElement>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: UserPlus, title: 'Tap Register', desc: 'Click the register button to begin' },
                { icon: CreditCard, title: 'Enter Details', desc: 'Provide your mobile number and create a password' },
                { icon: CheckCircle, title: 'Use Invite Code', desc: 'Enter invite code: 4416325006378' },
                { icon: ArrowRight, title: 'Start Playing', desc: 'Your account is created instantly!' }
              ].map((item, index) => (
                <AnimatedElement key={index} delay={index * 100}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>

            <AnimatedElement>
              <div className="text-center mt-10">
                <Button size="lg" className="text-lg px-8" onClick={() => window.location.href = registerUrl}>
                  Register Now
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <LogIn className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                How to Log In
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Access your account quickly and securely
              </p>
            </div>
          </AnimatedElement>

          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold mb-1">Tap Login Button</h3>
                      <p className="text-muted-foreground">Click the login button on the homepage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold mb-1">Enter Credentials</h3>
                      <p className="text-muted-foreground">Input your registered mobile number and password</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold mb-1">Access Your Account</h3>
                      <p className="text-muted-foreground">Tap login to access your account instantly</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <AnimatedElement>
              <div className="text-center mt-10">
                <Button size="lg" className="text-lg px-8" onClick={() => window.location.href = loginUrl}>
                  Login Now
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Topup & Redemption Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <Wallet className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Topup & Redemption
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Manage your funds securely and easily
              </p>
            </div>
          </AnimatedElement>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Topup */}
            <AnimatedElement>
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-6 text-center">How to Topup</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                        1
                      </div>
                      <p className="text-muted-foreground">Log in and tap the Wallet icon</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                        2
                      </div>
                      <p className="text-muted-foreground">Select the Topup option</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                        3
                      </div>
                      <p className="text-muted-foreground">Choose payment method (UPI, Paytm, USDT)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                        4
                      </div>
                      <p className="text-muted-foreground">Enter amount (minimum ₹100)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                        5
                      </div>
                      <p className="text-muted-foreground">Complete payment - funds reflect instantly</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>

            {/* Redemption */}
            <AnimatedElement delay={100}>
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-6 text-center">How to Redeem</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                        1
                      </div>
                      <p className="text-muted-foreground">Log in and tap the Wallet icon</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                        2
                      </div>
                      <p className="text-muted-foreground">Select the Redemption option</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                        3
                      </div>
                      <p className="text-muted-foreground">Enter redemption amount</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                        4
                      </div>
                      <p className="text-muted-foreground">Choose method (Bank card, USDT)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                        5
                      </div>
                      <p className="text-muted-foreground">Submit - processed within 1-24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Safe & Secure Gaming
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Your security is our top priority
              </p>
            </div>
          </AnimatedElement>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Encrypted Transactions', desc: 'Advanced security protocols protect your data' },
              { icon: Clock, title: 'Fast Processing', desc: 'Quick topups and redemptions' },
              { icon: CheckCircle, title: 'Verified Platform', desc: 'Trusted by thousands of players' }
            ].map((item, index) => (
              <AnimatedElement key={index} delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Start Playing?
              </h2>
              <p className="text-accent-foreground/80 text-lg mb-8">
                Join thousands of players and start winning today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => window.location.href = registerUrl}>
                  Register Now
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-accent-foreground/20 hover:bg-accent-foreground/10" asChild>
                  <Link to="/games">Browse Games</Link>
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
