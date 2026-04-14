// WI-HPI
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FloatingChatButton from '@/components/FloatingChatButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Bonuses, GameCategories, Games, BonusTiers } from '@/entities';
import { BaseCrudService } from '@/integrations';
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  Gift,
  LogIn,
  Share2,
  Shield,
  Smartphone,
  Trophy,
  UserPlus,
  Wallet,
  Zap
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20 w-full">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

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

export default function HomePage() {
  const navigate = useNavigate();
  const [games, setGames] = useState<Games[]>([]);
  const [categories, setCategories] = useState<GameCategories[]>([]);
  const [bonuses, setBonuses] = useState<Bonuses[]>([]);
  const [tiers, setTiers] = useState<BonusTiers[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [gamesResult, categoriesResult, bonusesResult, tiersResult] = await Promise.all([
          BaseCrudService.getAll<Games>('games', {}, { limit: 6 }),
          BaseCrudService.getAll<GameCategories>('gamecategories', {}, { limit: 6 }),
          BaseCrudService.getAll<Bonuses>('bonuses', {}, { limit: 3 }),
          BaseCrudService.getAll<BonusTiers>('bonustiers', {}, { limit: 9 })
        ]);
        setGames(gamesResult.items || []);
        setCategories(categoriesResult.items || []);
        setBonuses(bonusesResult.items || []);
        const sortedTiers = (tiersResult.items || []).sort((a, b) => (a.tierOrder || 0) - (b.tierOrder || 0));
        setTiers(sortedTiers);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-300 font-paragraph selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Header />
      <FloatingChatButton />
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://static.wixstatic.com/media/dc7695_bf4db60def6b412e96f2a3d089469df9~mv2.png')] bg-cover bg-center opacity-100 mix-blend-screen" />
        <div className="absolute inset-0 from-[#0a0a0c]/30 via-[#0a0a0c]/40 to-[#0a0a0c]/50 mix-blend-multiply opacity-100 bg-[#0a0a0c]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <AnimatedElement>
              <div className="mb-8 relative inline-block">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                <Image
                  src="https://static.wixstatic.com/media/dc7695_47ff02a8ec67466e9d5c819d2bf5a4b6~mv2.png#originWidth=1024&originHeight=1024"
                  className="h-32 md:h-48 object-contain relative z-10 drop-shadow-2xl rounded-tl-none rounded-tr-none rounded-bl-none rounded-br-none" />
              </div>
            </AnimatedElement>

            <AnimatedElement delay={100}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight drop-shadow-lg">Dostwin Game</h1>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto md:text-2xl">Dostwin Game Login – India Ka No.1 Gaming Platform for Color Prediction, Aviator, Lottery, Slots aur 50+ exciting games. Aaj hi register karo aur pao ₹500 Welcome Bonus. Khelo Safe, Jeeto Real!</p>
            </AnimatedElement>

            <AnimatedElement delay={300} className="w-full max-w-md mx-auto space-y-4">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6 rounded-xl shadow-[0_0_20px_rgba(41,121,242,0.4)] hover:shadow-[0_0_30px_rgba(41,121,242,0.6)] transition-all duration-300 hover:-translate-y-1"
                onClick={() => window.location.href = 'https://dostwin.com/#/register'}>

                REGISTER NOW
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary/50 bg-zinc-900/50 text-white hover:bg-primary/10 hover:border-primary text-lg py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
                onClick={() => navigate('/download')}
              >
                DOWNLOAD APP
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </section>
      {/* Intro Text */}
      <section className="py-12 bg-[#0a0a0c]">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-center md:text-left">
              <p>If you're looking for an all-in-one gaming platform that offers thrills, fun, and real cash rewards, then Dostwin Game is where your search ends.</p>
              <p>Designed for users who enjoy a mix of luck and strategy, this platform combines a diverse range of games.</p>
              <p>Whether you're a seasoned player or a beginner, Dostwin Game ensures a smooth and exciting experience with user-friendly features, secure transactions, and regular bonuses.</p>
              <p>Ready to explore a world where entertainment meets opportunity? Dostwin Lottery is your next go-to destination. Let's guide you on everything to get the most out of it.</p>
            </div>
          </AnimatedElement>
        </div>
      </section>
      {/* What Is Dostwin Game? */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>What Is Dostwin Game?</SectionBanner>
          </AnimatedElement>

          <AnimatedElement delay={100}>
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-6 md:p-10 backdrop-blur-sm">
              <p className="text-lg mb-8 text-zinc-300">
                Dostwin is an online gaming platform where users can play various games and earn real cash rewards.
              </p>

              <div className="rounded-2xl overflow-hidden mb-8 border border-zinc-800 shadow-2xl">
                <Image
                  src="https://static.wixstatic.com/media/dc7695_2044e129d17a4e7aa95f93e7af46e06b~mv2.png"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  originWidth={2744}
                  originHeight={1568} />
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-6 text-center italic">Dostwin Game – India Ka Apna Trusted Gaming Platform!</h3>

              <div className="space-y-4 text-zinc-400">
                <p>It offers a mix of lottery-style games, mini-games, casino options, slots, sports betting, and more, all accessible through a single platform.</p>
                <p>The platform is designed to deliver a seamless experience across devices, with quick deposits, easy withdrawals, and regular offers to keep users engaged.</p>
                <p>Whether you're into instant-win games like Win Go or prefer high-stakes casino action, Dostwin Game caters to every kind of player.</p>
                <p>With a simple registration process and 24/7 accessibility, it's become a popular choice among online gamers.</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
      {/* Type Of Games (Dynamic Categories) */}
      <section className="py-16 bg-zinc-950/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,121,242,0.05)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <AnimatedElement>
            <SectionBanner>Type Of Games In Dostwin Game</SectionBanner>
            <p className="text-center text-zinc-400 mb-12 max-w-3xl mx-auto text-lg">Dostwin Game offers a rich variety of games across multiple categories, ensuring players of all preferences find something exciting to engage with.</p>
          </AnimatedElement>

          <div className="min-h-[400px]">
            {isLoading ? (
              <LoadingSpinner />
            ) : categories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {categories.map((category, index) => (
                  <AnimatedElement key={category._id} delay={index * 100}>
                    <Link to={`/category/${category.slug || category._id}`} className="block group">
                      <Card className="bg-zinc-900/80 border-zinc-800 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(41,121,242,0.15)] h-full flex flex-col">
                        <div className="relative h-56 overflow-hidden">
                          {category.categoryImage ? (
                            <Image
                              src={category.categoryImage}
                              alt={category.categoryName || 'Category'}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          ) : (
                            <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                              <Zap className="w-12 h-12 text-zinc-600" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                          <h3 className="absolute bottom-4 left-6 text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors">
                            {category.categoryName}
                          </h3>
                        </div>
                        <CardContent className="p-6 flex-grow">
                          <p className="text-zinc-400 line-clamp-3">
                            {category.description || `Explore our exciting collection of ${category.categoryName} games.`}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedElement>
                ))}
              </div>
            ) : (
              /* Fallback to Markdown Content if no dynamic data */
              (<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'Lottery', img: 'https://tiranga-games.in.net/wp-content/uploads/2025/11/tiranga-lottery.webp', desc: 'Fast-paced number games like Win Go, K3, 5D, Trx Win Go, Motorace, and Video WinGo.' },
                  { title: 'Casino', img: 'https://tiranga-games.in.net/wp-content/uploads/2025/11/tiranga-casino.webp', desc: 'Live and video options such as Roulette, Dragon Tiger, Blackjack, Baccarat, and Bull Fight.' },
                  { title: 'Slot', img: 'https://tiranga-games.in.net/wp-content/uploads/2025/11/tiranga-slots.webp', desc: 'Popular slots like Fortune OX, Crypto Gold, Wildfire Wins, and exciting fishing-themed reels.' },
                  { title: 'Sports', img: 'https://tiranga-games.in.net/wp-content/uploads/2025/11/tiaranga-sports.webp', desc: 'Place bets on various events using 9 Sports and SABA Sports with real-time action.' },
                  { title: 'Fishing', img: 'https://tiranga-games.in.net/wp-content/uploads/2025/11/tiranga-fishing.webp', desc: 'Adrenaline-pumping action with games like Dragon Fortune, Oneshot Fishing, and Bombing Fishing.' },
                  { title: 'Original Games', img: 'https://tiranga-games.in.net/wp-content/uploads/2025/11/tiranga-original.webp', desc: 'Unique games like Aviator, Limbo, Plinko, Keno 80, Mines Pro, Teen Patti, and Goal Wave.' }
                ].map((item, idx) => (
                  <AnimatedElement key={idx} delay={idx * 100}>
                    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-primary/30 transition-colors">
                      <Image src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>)
            )}
          </div>
        </div>
      </section>
      {/* Featured Games (Dynamic Games) */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedElement>
            <SectionBanner>Featured Games</SectionBanner>
          </AnimatedElement>

          <div className="min-h-[300px]">
            {isLoading ? (
              <LoadingSpinner />
            ) : games.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {games.map((game, index) => (
                  <AnimatedElement key={game._id} delay={index * 50}>
                    <Link to={game.playLink || '#'} className="block group">
                      <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 relative">
                        <div className="aspect-square overflow-hidden relative">
                          {game.thumbnailImage ? (
                            <Image
                              src={game.thumbnailImage}
                              alt={game.gameTitle || 'Game'}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                              <Zap className="w-8 h-8 text-zinc-600" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-primary text-white p-2 rounded-full transform scale-50 group-hover:scale-100 transition-transform">
                              <Zap className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                        <div className="p-3 text-center">
                          <h4 className="text-sm font-bold text-zinc-200 truncate">{game.gameTitle}</h4>
                        </div>
                      </div>
                    </Link>
                  </AnimatedElement>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
      {/* Features Of Dostwin Games */}
      <section className="py-16 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedElement>
            <SectionBanner>Features Of Dostwin Games</SectionBanner>
            <p className="text-center text-zinc-400 mb-12 max-w-3xl mx-auto text-lg">
              Here are some standout features of Dostwin Games that make it a preferred platform for online gaming enthusiasts:
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Trophy, title: 'Wide Game Variety', desc: 'From fast lottery rounds to immersive slots, card games, sports, fishing, and casino.' },
              { icon: Zap, title: 'Smooth & Fast Interface', desc: 'Designed for speed and responsiveness, ensuring a smooth gaming experience without lag.' },
              { icon: UserPlus, title: 'Easy Registration', desc: 'Creating an account takes just a minute using your mobile number. Log in instantly.' },
              { icon: Shield, title: 'Secure Transactions', desc: 'All deposits and withdrawals are protected with advanced encryption and multiple options.' },
              { icon: Clock, title: '24/7 Customer Support', desc: 'A dedicated support team is available round the clock via chat to help resolve any issue.' },
              { icon: Gift, title: 'Daily Bonuses & Rewards', desc: 'Daily login bonuses, cashback offers, and referral rewards to keep users engaged.' },
              { icon: Wallet, title: 'Low Minimum Deposit', desc: 'Start playing with as little as Rs. 100, making it accessible for casual gamers as well.' },
              { icon: Smartphone, title: 'Multi-Platform', desc: 'Optimized for smooth play on both mobile and desktop browsers.' },
              { icon: Zap, title: 'Earn Real Money', desc: 'A real money gaming platform where you can earn betting on games or referring others.' }
            ].map((feature, index) => (
              <AnimatedElement key={index} delay={index * 50}>
                <div className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-800 transition-colors flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
      {/* Step-by-Step Guides Section */}
      <section className="py-16 space-y-24">

        {/* Download */}
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>How To Download & Install Dostwin Game App</SectionBanner>
          </AnimatedElement>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedElement delay={100} className="flex-1 space-y-6">
              <p className="text-zinc-300 text-lg">Here's how you can download & install the Dostwin app on your Android device:</p>
              <ul className="space-y-4">
                {[
                  "Click on the Dostwin Game download button available below.",
                  "Once you click the download button, the Dostwin Game APK file will start downloading. It's a small and secure file.",
                  "Now, before installing, go to your phone's settings, security, and enable install from unknown sources.",
                  "Now, open the downloaded APK file and tap Install. Wait a few seconds for it to complete.",
                  "Open the Dostwin Game app, register or log in, and dive into the world of exciting games."
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <p className="text-zinc-400">{step}</p>
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 font-bold mt-1">{i + 1}</div>
                    </li>
                ))}
              </ul>
              <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl mt-6" onClick={() => navigate('/download')}>
                <Download className="mr-2 w-5 h-5" /> DOWNLOAD NOW
              </Button>
            </AnimatedElement>
            <AnimatedElement delay={200} className="flex-1 flex justify-center">
              <div className="relative w-64 h-[500px] bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 overflow-hidden shadow-2xl shadow-primary/10">
                <div className="absolute top-0 inset-x-0 h-6 bg-zinc-800 rounded-b-3xl mx-16 z-20" /> {/* Notch */}
                <Image src="https://dostwin.app/uploads/dostwin-app.webp" alt="App Mockup" className="w-full h-full object-cover opacity-80" />
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Register */}
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>How To Register On Dostwin Game — Step by Step (Register & Get ₹500)</SectionBanner>
          </AnimatedElement>
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <AnimatedElement delay={100} className="flex-1 space-y-6">
              <p className="text-zinc-300 text-lg">If you're new to our platform, here are the complete Dostwin Game registration steps:</p>
              <ul className="space-y-4">
                {[
                  "Visit the Official Dostwin Website - Open your mobile browser and navigate to the official Dostwin website. Make sure you are on the authentic site to protect your account. Bookmark it for easy access",
                  "Tap the Register Button - On the Dostwin homepage, locate and tap the prominent 'Register' or 'Sign Up' button to open the registration form.",
                  "Enter Your Phone Number. Provide your active Indian mobile number for Dostwin account verification, login, and receiving important notifications about promotions.",
                  "Set a Secure Password - Create a strong password using a mix of uppercase, lowercase letters, numbers, and special characters. Avoid using easily guessable information like your birthday.",
                  "Enter Invite Code (Optional) - If referred by an existing Dostwin player, enter their invite code to receive additional bonuses on top of your ₹500 signup bonus.",
                  "Complete & Claim Bonus -Accept the terms and tap Register. Your ₹500 Dostwin signup bonus is credited automatically — start playing on any of the 50+ games immediately."
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 font-bold mt-1">{i + 1}</div>
                    <p className="text-zinc-400">{step}</p>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl mt-6" onClick={() => navigate('/register')}>
                <UserPlus className="mr-2 w-5 h-5" /> REGISTER HERE
              </Button>
            </AnimatedElement>
            <AnimatedElement delay={200} className="flex-1 flex justify-center">
              <div className="relative w-64 h-[500px] bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 overflow-hidden shadow-2xl shadow-primary/10">
                <div className="absolute top-0 inset-x-0 h-6 bg-zinc-800 rounded-b-3xl mx-16 z-20" />
                <Image src="https://dostwin.app/uploads/dostwin-register.webp" alt="Register Mockup" className="w-full h-full object-cover" />
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Login */}
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>How To Log In to Dostwin?</SectionBanner>
          </AnimatedElement>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedElement delay={100} className="flex-1 space-y-6">
              <p className="text-zinc-300 text-lg">If you've already registered and are looking to sign in, here is the Dostwin Game Login process:</p>
              <ul className="space-y-4">
                {[
                  "Open the Dostwin website or app — Launch your mobile browser and navigate to the official Dostwin website, or open the app if installed.",
                  "Tap the Login button — Find the \"Login\" or \"Sign In\" button at the top of the Dostwin homepage.",
                  "Enter your registered phone number and password, then tap Login to access your account."
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 font-bold mt-1">{i + 1}</div>
                    <p className="text-zinc-400">{step}</p>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl mt-6" onClick={() => navigate('/login')}>
                <LogIn className="mr-2 w-5 h-5" /> LOGIN NOW
              </Button>
            </AnimatedElement>
            <AnimatedElement delay={200} className="flex-1 flex justify-center">
              <div className="relative w-64 h-[500px] bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 overflow-hidden shadow-2xl shadow-primary/10">
                <div className="absolute top-0 inset-x-0 h-6 bg-zinc-800 rounded-b-3xl mx-16 z-20" />
                <Image src="https://dostwin.app/uploads/dostwin-login.webp" alt="Login Mockup" className="w-full h-full object-cover" />
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Deposit */}
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>How To Deposit Money On Dostwin Game?</SectionBanner>
          </AnimatedElement>
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <AnimatedElement delay={100} className="flex-1 space-y-6">
              <p className="text-zinc-300 text-lg">Depositing money into your Dostwin Game wallet is a simple and secure process:</p>
              <ul className="space-y-4">
                {[
                  "Log in to to your Dostwin account and go to the Wallet or Deposit section.",
                  "Select deposit amount — Choose from preset amounts or enter a custom amount. Min deposit ₹100.",
                  "Choose payment method — UPI (Google Pay, PhonePe, Paytm), bank transfer, debit card, or digital wallet",
                  "Complete payment — Follow prompts from your selected payment provider to authorize.",
                  "Funds credited instantly — Most deposits credited instantly so you can start playing on Dostwin right away",
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-zinc-400">{step}</p>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
            <AnimatedElement delay={200} className="flex-1 flex justify-center gap-4">
              <div className="relative w-48 h-[380px] bg-zinc-900 rounded-[2rem] border-4 border-zinc-800 overflow-hidden shadow-xl hidden md:block">
                <Image src="https://dostwin.app/uploads/dostwin-deposit.webp" alt="Wallet" className="w-full h-full object-cover" />
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Withdraw */}
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>How To Withdraw Money From Dostwin Game?</SectionBanner>
          </AnimatedElement>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedElement delay={100} className="flex-1 space-y-6">
              <p className="text-zinc-300 text-lg">Withdrawing your winnings from Dostwin Games is also quick and hassle-free:</p>
              <ul className="space-y-4">
                {[
                  "Open Withdrawal section — Go to Wallet &gt; Withdraw in your Dostwin account.",
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
              <div className="relative w-64 h-[500px] bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 overflow-hidden shadow-2xl shadow-primary/10">
                <div className="absolute top-0 inset-x-0 h-6 bg-zinc-800 rounded-b-3xl mx-16 z-20" />
                <Image src="https://dostwin.app/uploads/dostwin-withdraw.webp" alt="Withdraw Mockup" className="w-full h-full object-cover" />
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Referral */}
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>Dostwin Referral Program & Invitation Rewards</SectionBanner>
          </AnimatedElement>
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <AnimatedElement delay={100} className="flex-1 space-y-6">
              <p className="text-zinc-300 text-lg">Dostwin's referral program is one of the most rewarding in the industry — tiered rewards scaling from ₹38 to ₹3,00,000, a powerful incentive for organic growth and community building.</p>
              <p className="text-zinc-400">The Dostwin referral program allows existing players to earn substantial bonuses simply by inviting new users to join the platform. Here is how to get started:</p>
              <ul className="space-y-4 mt-6">
                {[
                  "Find your invite code — Log in to Dostwin and navigate to the Referral section to find your personal code and shareable link.",
                  "Share with friends — Send your Dostwin invite code via WhatsApp, Telegram, social media, or any channel.",
                  "Invitee registers and deposits — When they join Dostwin and make their first qualifying deposit, both of you earn bonuses.",
                  "Earn tiered bonuses — Your Dostwin referral earnings increase as you invite more people. The more active referrals, the higher your tier."
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <Share2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-zinc-400">{step}</p>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
            <AnimatedElement delay={200} className="flex-1 flex justify-center gap-4">
               <div className="relative w-48 h-[380px] bg-zinc-900 rounded-[2rem] border-4 border-zinc-800 overflow-hidden shadow-xl hidden md:block">
                <Image src="https://dostwin.app/uploads/dostwin-gift-code.webp" alt="Promotion" className="w-full h-full object-cover" />
              </div>
              <div className="relative w-56 h-[450px] bg-zinc-900 rounded-[2.5rem] border-8 border-zinc-800 overflow-hidden shadow-2xl z-10">
                <Image src="https://dostwin.app/uploads/dostwin-referral.webp" alt="Invite Link" className="w-full h-full object-cover" />
              </div>
            </AnimatedElement>
          </div>
        </div>

      </section>
      {/* Tiered Bonuses Section - Referral Rewards */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <AnimatedElement>
            <SectionBanner>Dostwin Invitation Reward Tiers</SectionBanner>
          </AnimatedElement>
          
          <div className="min-h-[400px]">
            {isLoading ? (
              <LoadingSpinner />
            ) : tiers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tiers.map((tier, index) => (
                  <AnimatedElement key={tier._id} delay={index * 100}>
                    <div className="group relative">
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                      
                      <Card className="relative bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 h-full backdrop-blur-sm">
                        {/* Top accent bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
                        
                        <CardContent className="p-8 flex flex-col h-full items-center text-center">
                          {/* Header with tier info */}
                          <div className="mb-6 w-full">
                            <p className="text-sm text-zinc-400 mb-3">{tier.minActiveReferrals ? `${tier.minActiveReferrals} people invited` : 'Entry tier'}</p>
                            <h3 className="text-4xl font-heading font-bold text-cyan-400 mb-2">
                              {tier.bonusPercentage ? `₹${tier.bonusPercentage}` : 'Bonus'}
                            </h3>
                            <p className="text-sm text-zinc-400">Deposit ₹{tier.minActiveReferrals ? Math.round(tier.minActiveReferrals * 100) : '100'} each</p>
                          </div>

                          {/* Description */}
                          {tier.description && (
                            <p className="text-zinc-300 text-sm mb-6 flex-grow">{tier.description}</p>
                          )}

                          {/* Additional rewards */}
                          {tier.additionalRewards && (
                            <div className="mb-6 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50 w-full">
                              <p className="text-xs text-zinc-400 mb-2 font-semibold">Additional Rewards:</p>
                              <p className="text-sm text-cyan-300">{tier.additionalRewards}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
      {/* Bonuses Section (Dynamic Data) */}
      <section className="py-16 bg-zinc-950/50 border-y border-zinc-800/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedElement>
            <SectionBanner>Dostwin Bonus, Gift Codes & Promotions</SectionBanner>
          </AnimatedElement>
              <p className="text-zinc-300 text-lg">Dostwin's referral program is one of the most rewarding in the industry — tiered rewards scaling from ₹38 to ₹3,00,000, a powerful incentive for organic growth and community building.</p>
          <div className="min-h-[300px]">
            {isLoading ? (
              <LoadingSpinner />
            ) : bonuses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bonuses.map((bonus, index) => (
                  <AnimatedElement key={bonus._id} delay={index * 100}>
                    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col group">
                      {bonus.promotionalImage && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={bonus.promotionalImage}
                            alt={bonus.bonusTitle || 'Bonus'}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                        </div>
                      )}
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Gift className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-heading font-bold text-white">{bonus.bonusTitle}</h3>
                        </div>
                        {bonus.rewardDetails && (
                          <p className="text-zinc-400 mb-4 flex-grow">{bonus.rewardDetails}</p>
                        )}
                        <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-primary hover:text-white hover:border-primary transition-colors" onClick={() => navigate('/promotions')}>
                          Claim Bonus
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                ))}
              </div>
            ) : (
               <div className="text-center py-12">
                <p className="text-zinc-500">Check back soon for exciting new bonuses!</p>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Text Content Sections */}
      <section className="py-16 space-y-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>Payments & Security</SectionBanner>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-zinc-400 space-y-4 leading-relaxed">
              <p>Dostwin Game ensures a smooth and secure payment experience for all users.</p>
              <p>Whether you're depositing or withdrawing funds, the platform supports trusted methods such as UPI, Paytm, bank cards, and USDT. Transactions are encrypted using advanced security protocols, ensuring your financial data remains protected at all times.</p>
              <p>All payments are processed quickly, and your winnings are safely transferred to your preferred account.</p>
              <p>Additionally, regular system updates and anti-fraud technology are implemented to ensure a fair and transparent gaming environment. Your money and information are always in safe hands with Dostwin Game.</p>
            </div>
          </AnimatedElement>
        </div>

        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>Responsible Gaming Guidelines</SectionBanner>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-zinc-400 space-y-4 leading-relaxed">
              <p>At Dostwin Game, we are committed to promoting a safe, secure, and responsible gaming environment. While gaming is meant to be entertaining, it's important to maintain control and balance.</p>
              <ul className="space-y-3 mt-4">
                <li><strong className="text-zinc-200">Set Limits:</strong> Always set a deposit or time limit for yourself before playing.</li>
                <li><strong className="text-zinc-200">Play for Fun:</strong> Treat gaming as a source of entertainment, not income.</li>
                <li><strong className="text-zinc-200">Don't Chase Losses:</strong> Avoid the urge to recover losses by playing more.</li>
                <li><strong className="text-zinc-200">Take Breaks:</strong> Regular breaks help you stay in control and avoid fatigue.</li>
                <li><strong className="text-zinc-200">Be Aware:</strong> Monitor your behaviour. If gaming starts affecting your daily life, take a step back.</li>
              </ul>
            </div>
          </AnimatedElement>
        </div>

        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>My Personal Experience With Dostwin Game</SectionBanner>

          </AnimatedElement>
        </div>
      </section>
      {/* FAQs */}
      <section className="py-16 bg-zinc-950/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <SectionBanner>FAQs</SectionBanner>
          </AnimatedElement>
          <div className="space-y-2">
            {[
              { q: "Is Dostwin Game safe and legal?", a: "Yes, Dostwin Game is safe to use and follows secure payment methods, though legality may depend on your region's rules." },
              { q: "Can I play the Dostwin Game on my phone?", a: "Yes, Dostwin Game is available for Android devices through its official app. Also, you can use the Dostwin official website." },
              { q: "Is registration free for the Dostwin Game?", a: "Yes, creating an account is completely free." },
              { q: "What are the payment options for deposits on Dostwin Game?", a: "You can deposit using UPI, Paytm, E-Wallet, Paytm, and USDT." },
              { q: "How long do withdrawals take?", a: "Withdrawals usually reflect within a few minutes to an hour after approval." },
              { q: "What's the minimum deposit required on Dostwin Game?", a: "The minimum deposit amount is Rs. 100." },
              { q: "Are there any referral bonuses on Dostwin Game?", a: "Yes, you can earn commissions by inviting others through your referral program." },
              { q: "Is there customer support for Dostwin Games?", a: "Yes, 24/7 customer support is available through live chat, where you can solve any of your problems." }
            ].map((faq, index) => (
              <AnimatedElement key={index} delay={index * 50}>
                <FAQItem question={faq.q} answer={faq.a} />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
      {/* Conclusion */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimatedElement>
            <SectionBanner>Conclusion</SectionBanner>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed mb-10">
              <p>Dostwin Game is a dynamic and rewarding platform for anyone looking to enjoy online lottery, slots, casino, and other real-money games in one place.</p>
              <p>Whether you're a casual player or a serious gamer, it offers endless entertainment with the chance to earn real cash.</p>
              <p>With easy registration, secure payments, and exciting referral rewards, Dostwin Game is the go-to choice for users in India.</p>
              <p className="text-white font-bold text-xl mt-8">Ready to join the fun? Register today and start your gaming journey with Dostwin Game.</p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl rounded-xl shadow-[0_0_20px_rgba(41,121,242,0.4)] hover:shadow-[0_0_30px_rgba(41,121,242,0.6)] transition-all duration-300 hover:-translate-y-1" onClick={() => navigate('/register')}>
              START PLAYING NOW
            </Button>
          </AnimatedElement>
        </div>
      </section>
      <Footer />
    </div>
  );
}
