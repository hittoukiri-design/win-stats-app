import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FloatingChatButton from '@/components/FloatingChatButton';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { CheckCircle2 } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';

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
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const result = await BaseCrudService.getAll('blogarticles', [], { limit: 50 });
        console.log('Fetched articles:', result);
        // Sort by publish date descending
        const sorted = (result.items || []).sort((a: any, b: any) => {
          const dateA = new Date(a.publishDate || 0).getTime();
          const dateB = new Date(b.publishDate || 0).getTime();
          return dateB - dateA;
        });
        console.log('Sorted articles:', sorted);
        setArticles(sorted);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setArticles([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase();
  };

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
          <AnimatedElement className="mb-12">
            <SectionBanner>Latest Articles & Insights</SectionBanner>
          </AnimatedElement>
          
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-zinc-400">Loading articles...</p>
              </div>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-zinc-400 text-lg">No articles available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <AnimatedElement key={article._id} delay={100 + index * 50}>
                  <div className="group cursor-pointer h-full">
                    <div className="relative h-64 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                      {article.thumbnailImage ? (
                        <Image 
                          src={article.thumbnailImage}
                          alt={article.title || 'Article thumbnail'} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          width={400}
                          height={256}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <span className="text-zinc-500">No image</span>
                        </div>
                      )}
                      {article.publishDate && (
                        <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {formatDate(article.publishDate)}
                        </div>
                      )}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                        {article.title || 'Untitled Article'}
                      </h3>
                      {article.shortDescription && (
                        <p className="text-zinc-400 text-sm line-clamp-2">
                          {article.shortDescription}
                        </p>
                      )}
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-white font-bold text-sm py-2 px-4 rounded-lg shadow-[0_0_15px_rgba(41,121,242,0.3)] hover:shadow-[0_0_25px_rgba(41,121,242,0.5)] transition-all duration-300"
                        onClick={() => navigate(`/blog/${article.slug || article._id}`)}
                      >
                        READ FULL ARTICLE
                      </Button>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
