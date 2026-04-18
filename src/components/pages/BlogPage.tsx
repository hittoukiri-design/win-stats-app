import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FloatingChatButton from '@/components/FloatingChatButton';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import React, { useEffect, useRef, useState } from 'react';

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

// Blog articles data
const blogArticles = [
  {
    id: 1,
    date: 'FEBRUARY 12, 2026',
    title: 'The Mobile Revolution: How Online Gaming is Changing Entertainment in the Philippines',
    description: 'Discover how mobile gaming is transforming the entertainment landscape in the Philippines with innovative platforms and engaging experiences.',
    image: 'https://static.wixstatic.com/media/dc7695_7aae02b0075044d0bbe49427fb7cf922~mv2.png?originWidth=384&originHeight=192',
  },
  {
    id: 2,
    date: 'JANUARY 18, 2026',
    title: 'Tiranga Login – Chicken Road 2 & Aviator Demo',
    description: 'Explore the latest gaming features and demo versions of popular games. Learn how to access Tiranga Login and start your gaming journey today.',
    image: 'https://static.wixstatic.com/media/dc7695_1213292d7c4847fda44cce0076c468c7~mv2.png?originWidth=384&originHeight=192',
  },
  {
    id: 3,
    date: 'JANUARY 16, 2026',
    title: 'Enter the Action: A Smooth Gaming Experience Starts with Enjoy365',
    description: 'Get ready for an immersive gaming adventure with Enjoy365. Discover seamless gameplay, exciting rewards, and endless entertainment options.',
    image: 'https://static.wixstatic.com/media/dc7695_af213fe8a62748579ad31a9436569a66~mv2.png?originWidth=384&originHeight=192',
  },
];

// --- Main Blog Page Component ---

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-300 font-paragraph selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Header />
      <FloatingChatButton />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 from-[#0a0a0c]/5 via-[#0a0a0c]/10 to-[#0a0a0c]/15 mix-blend-multiply bg-[#0a0a0c] opacity-[0.5]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/30 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <p className="text-base md:text-lg text-zinc-400 mb-4 tracking-wide">DISCOVER WINNING STRATEGIES</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Discover winning strategies, latest updates, and insider tips for Tiranga Game. Stay ahead with our expert insights and game analysis.
              </h1>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, index) => (
              <AnimatedElement key={article.id} delay={index * 100}>
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col group">
                  {/* Image Container */}
                  <div className="relative h-56 md:h-48 overflow-hidden bg-zinc-800">
                    <Image 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={250}
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Date Label */}
                    <p className="text-xs font-heading font-bold text-primary mb-3 tracking-widest">
                      {article.date}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-3 line-clamp-3 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-zinc-400 mb-6 flex-grow line-clamp-3">
                      {article.description}
                    </p>

                    {/* Read Full Article Button */}
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white font-heading font-bold py-2 px-4 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(41,121,242,0.4)]"
                    >
                      READ FULL ARTICLE
                    </Button>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
