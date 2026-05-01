import { useEffect, useState, useRef } from 'react';
import { BaseCrudService } from '@/integrations';
import { Games, GameCategories } from '@/entities';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Filter, Search } from 'lucide-react';

const AnimatedElement: React.FC<{children: React.ReactNode; className?: string}> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('is-visible'); observer.unobserve(el); }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`${className || ''} opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0`}>{children}</div>;
};

export default function GamesPage() {
  const [games, setGames] = useState<Games[]>([]);
  const [categories, setCategories] = useState<GameCategories[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hasNext, setHasNext] = useState(false);
  const [skip, setSkip] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    setIsLoading(true);
    try {
      const [gamesResult, categoriesResult] = await Promise.all([
        BaseCrudService.getAll<Games>('games', {}, { limit: 12, skip: 0 }),
        BaseCrudService.getAll<GameCategories>('gamecategories', {}, { limit: 50 })
      ]);
      setGames(gamesResult.items);
      setCategories(categoriesResult.items);
      setHasNext(gamesResult.hasNext);
      setSkip(gamesResult.nextSkip || 0);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreGames = async () => {
    if (!hasNext || isLoadingMore) return;
    setIsLoadingMore(true);
    try {
      const result = await BaseCrudService.getAll<Games>('games', {}, { limit: 12, skip });
      setGames(prev => [...prev, ...result.items]);
      setHasNext(result.hasNext);
      setSkip(result.nextSkip || 0);
    } catch (error) {
      console.error('Error loading more games:', error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === 'all' || game.gameCategory === selectedCategory;
    const matchesSearch = !searchQuery || 
      game.gameTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                Explore Our Games
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Discover hundreds of exciting games across multiple categories
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/30 sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white text-foreground hover:bg-muted'
                }`}
              >
                All Games
              </button>
              {categories.map(category => (
                <button
                  key={category._id}
                  onClick={() => setSelectedCategory(category.categoryName || '')}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.categoryName
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-white text-foreground hover:bg-muted'
                  }`}
                >
                  {category.categoryName}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 bg-gradient-to-r from-purple-400/15 via-blue-300/15 to-purple-400/15 rounded-lg py-8">
          <div className="min-h-[600px]">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <LoadingSpinner />
              </div>
            ) : filteredGames.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredGames.map((game) => (
                    <AnimatedElement key={game._id}>
                      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group h-full">
                        <div className="relative h-48 overflow-hidden">
                          {game.thumbnailImage && (
                            <Image
                              src={game.thumbnailImage}
                              alt={game.gameTitle || 'Game'}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              width={400}
                            />
                          )}
                          {game.gameCategory && (
                            <div className="absolute top-3 right-3">
                              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                                {game.gameCategory}
                              </span>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-heading font-bold mb-2 line-clamp-1">
                            {game.gameTitle}
                          </h3>
                          {game.description && (
                            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                              {game.description}
                            </p>
                          )}
                          {game.playLink && (
                            <Button size="sm" className="w-full" asChild>
                              <a href={game.playLink} target="_blank" rel="noopener noreferrer">
                                Play Now
                              </a>
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </AnimatedElement>
                  ))}
                </div>

                {/* Load More */}
                {hasNext && selectedCategory === 'all' && !searchQuery && (
                  <div className="text-center mt-12">
                    <Button
                      size="lg"
                      onClick={loadMoreGames}
                      disabled={isLoadingMore}
                    >
                      {isLoadingMore ? 'Loading...' : 'Load More Games'}
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  {searchQuery || selectedCategory !== 'all' 
                    ? 'No games found matching your criteria' 
                    : 'No games available'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
