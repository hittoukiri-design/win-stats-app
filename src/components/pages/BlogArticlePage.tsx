import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FloatingChatButton from '@/components/FloatingChatButton';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';

export default function BlogArticlePage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        if (!slug) {
          setError(true);
          setIsLoading(false);
          return;
        }

        // Try to fetch by ID first (direct lookup)
        try {
          const foundArticle = await BaseCrudService.getById('blogarticles', slug);
          if (foundArticle) {
            setArticle(foundArticle);
            setIsLoading(false);
            return;
          }
        } catch (err) {
          // ID lookup failed, try slug lookup
        }

        // If not found by ID, fetch all articles and search by slug
        const result = await BaseCrudService.getAll('blogarticles', [], { limit: 100 });
        const allArticles = result.items || [];
        
        const foundArticle = allArticles.find((a: any) => a.slug === slug);

        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching article:', err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const renderContentWithLinks = (content: string) => {
    const parts = content.split(/(best online betting|fast withdrawal|fast deposit & withdrawal|Lightweight site|Why Simple Platforms Best for Beginners\?|Easy UI|Mobile-friendly experience|Trusted platform use karo)/gi);
    return parts.map((part, index) => {
      if (part.toLowerCase() === 'best online betting') {
        return (
          <a
            key={index}
            href="https://www.dostwinapp.co/blog/Best-online-gambling-India"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline"
          >
            {part}
          </a>
        );
      }
      if (part.toLowerCase() === 'fast deposit & withdrawal') {
        return (
          <a
            key={index}
            href="https://www.dostwinapp.co/blog/fast-withdrawal-online-betting-india"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline"
          >
            {part}
          </a>
        );
      }
      if (part.toLowerCase() === 'fast withdrawal') {
        return (
          <a
            key={index}
            href="https://www.dostwinapp.co/blog/fast-withdrawal-online-betting-india"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline"
          >
            {part}
          </a>
        );
      }
      if (part.toLowerCase() === 'lightweight site') {
        return (
          <a
            key={index}
            href="https://www.dostwinapp.co/blog/top-mobile-friendly-betting-sites-india"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline"
          >
            {part}
          </a>
        );
      }
      if (part.toLowerCase() === 'why simple platforms best for beginners?') {
        return (
          <a
            key={index}
            href="https://www.dostwinapp.co/blog/top-mobile-friendly-betting-sites-india"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline"
          >
            {part}
          </a>
        );
      }
      if (part.toLowerCase() === 'easy ui') {
        return (
          <a
            key={index}
            href="https://www.dostwinapp.co/blog/top-mobile-friendly-betting-sites-india"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline"
          >
            {part}
          </a>
        );
      }
      if (part.toLowerCase() === 'mobile-friendly experience') {
        return (
          <a
            key={index}
            href="https://www.dostwinapp.co/blog/top-mobile-friendly-betting-sites-india"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline"
          >
            {part}
          </a>
        );
      }
      if (part.toLowerCase() === 'trusted platform use karo') {
        return (
          <a
            key={index}
            href="https://www.dostwinapp.co/blog/top-mobile-friendly-betting-sites-india"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0c] text-zinc-300 font-paragraph">
        <Header />
        <FloatingChatButton />
        <div className="flex items-center justify-center py-40">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-zinc-400">Loading article...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-[#0a0a0c] text-zinc-300 font-paragraph">
        <Header />
        <FloatingChatButton />
        <div className="flex items-center justify-center py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
            <p className="text-zinc-400 mb-8">Sorry, we couldn't find the article you're looking for.</p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white font-bold"
              onClick={() => navigate('/blog')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-300 font-paragraph selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Header />
      <FloatingChatButton />

      {/* Back Button */}
      <section className="pt-32 md:pt-40 pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            className="text-primary hover:text-primary/80 hover:bg-primary/10 mb-8"
            onClick={() => navigate('/blog')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-3">
            {article.thumbnailImage && (
              <div className="relative w-full h-96 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 rounded-2xl overflow-hidden">
                <Image
                  src={article.thumbnailImage}
                  alt={article.title || 'Article'}
                  className="w-full h-full object-cover"
                  width={800}
                  height={400}
                />
              </div>
            )}
            
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                {article.title || 'Untitled Article'}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm">
                {article.publishDate && (
                  <span>Published on {formatDate(article.publishDate)}</span>
                )}
              </div>

              {article.shortDescription && (
                <p className="text-lg text-zinc-300 leading-relaxed mb-2">
                  {article.shortDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-6 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <div className="text-zinc-300 leading-relaxed whitespace-pre-wrap text-base md:text-lg">
              {article.fullContent ? renderContentWithLinks(article.fullContent) : 'No content available for this article.'}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="py-16 border-t border-zinc-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">Want to read more?</h2>
          <p className="text-zinc-400 mb-8">Check out our other articles and stay updated with the latest insights.</p>
          <Button
            className="bg-primary hover:bg-primary/90 text-white font-bold"
            onClick={() => navigate('/blog')}
          >
            Back to All Articles
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
