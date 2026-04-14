import { useEffect, useState, useRef } from 'react';
import { BaseCrudService } from '@/integrations';
import { Bonuses } from '@/entities';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Gift, Users, TrendingUp, Award, Star, Sparkles } from 'lucide-react';

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

export default function BonusesPage() {
  const [bonuses, setBonuses] = useState<Bonuses[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadBonuses();
  }, []);

  const loadBonuses = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<Bonuses>('bonuses', {}, { limit: 50 });
      setBonuses(result.items);
    } catch (error) {
      console.error('Error loading bonuses:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement>
            <div className="max-w-3xl mx-auto text-center">
              <Gift className="w-16 h-16 mx-auto mb-6 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Bonuses & Rewards
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Get rewarded for playing with exciting bonuses, daily rewards, and referral programs
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
      {/* Bonus Types Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ways to Earn Rewards
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Multiple opportunities to boost your gaming experience
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Star, title: 'Sign-Up Bonus', desc: 'Get instant rewards when you register', color: 'text-primary' },
              { icon: Gift, title: 'Daily Login', desc: 'Earn bonuses just for logging in', color: 'text-secondary' },
              { icon: Users, title: 'Referral Program', desc: 'Invite friends and earn commissions', color: 'text-accent' },
              { icon: TrendingUp, title: 'Cashback Offers', desc: 'Get cashback on your gameplay', color: 'text-primary' }
            ].map((item, index) => (
              <AnimatedElement key={index} delay={index * 100}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className={`w-7 h-7 ${item.color}`} />
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
      {/* Available Bonuses */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Available Bonuses
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Check out our current bonus offers and promotions
              </p>
            </div>
          </AnimatedElement>

          <div className="min-h-[500px]">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <LoadingSpinner />
              </div>
            ) : bonuses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {bonuses.map((bonus, index) => (
                  <AnimatedElement key={bonus._id} delay={index * 50}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full group">
                      {bonus.promotionalImage && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={bonus.promotionalImage}
                            alt={bonus.bonusTitle || 'Bonus'}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            width={400}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute top-3 right-3">
                            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              Active
                            </div>
                          </div>
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-start gap-2 mb-3">
                          <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <h3 className="text-xl font-heading font-bold">{bonus.bonusTitle}</h3>
                        </div>
                        
                        {bonus.rewardDetails && (
                          <div className="mb-4">
                            <p className="text-foreground font-medium">{bonus.rewardDetails}</p>
                          </div>
                        )}

                        {bonus.eligibilityCriteria && (
                          <div className="mb-3 p-3 bg-muted/50 rounded-lg">
                            <p className="text-sm text-muted-foreground">
                              <span className="font-semibold text-foreground">Eligibility:</span> {bonus.eligibilityCriteria}
                            </p>
                          </div>
                        )}

                        {bonus.termsAndConditions && (
                          <div className="pt-3 border-t border-border">
                            <p className="text-xs text-muted-foreground line-clamp-3">
                              <span className="font-semibold">Terms:</span> {bonus.termsAndConditions}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Gift className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground text-lg">No bonuses available at the moment</p>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Referral Program Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <Users className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Referral Program
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Earn extra income by inviting friends to join Dostwi Game</p>
            </div>
          </AnimatedElement>

          <div className="max-w-4xl mx-auto">Earn extra income by inviting friends to join Dostwin Game</div>
        </div>
      </section>
      {/* Terms & Responsible Gaming */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold mb-6 text-center">
                    Important Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-heading font-bold mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Bonus Terms
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm ml-7">
                        <li>• All bonuses are subject to terms and conditions</li>
                        <li>• Wagering requirements may apply to bonus amounts</li>
                        <li>• Bonuses cannot be withdrawn directly and must be used for gameplay</li>
                        <li>• Dostwin Game reserves the right to modify or cancel bonuses at any time</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-heading font-bold mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Referral Guidelines
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm ml-7">
                        <li>• Referral rewards are credited after successful registration and first deposit</li>
                        <li>• Self-referrals and fake accounts are strictly prohibited</li>
                        <li>• Commission rates may vary based on referral activity</li>
                        <li>• Referral earnings can be withdrawn as per standard withdrawal policies</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 mt-6">
                      <p className="text-sm text-muted-foreground text-center">
                        <span className="font-semibold text-foreground">Play Responsibly:</span> Set limits for yourself and treat gaming as entertainment, not income. Must be 18+ to participate.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Claim Your Bonuses?
              </h2>
              <p className="text-accent-foreground/80 text-lg mb-8">
                Register now and start earning rewards from day one!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Register & Claim Bonus
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-accent-foreground/20 hover:bg-accent-foreground/10">
                  View All Games
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
