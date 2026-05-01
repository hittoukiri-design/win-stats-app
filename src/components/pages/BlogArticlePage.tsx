import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FloatingChatButton from '@/components/FloatingChatButton';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { enhanceBlogArticleForSeoSupport } from '@/lib/blogSeoSupport';

const YAARWINAPP_URL = 'https://yaarwinapp.co';
const YAARWINAPP_SLUG = 'unlock-your-potential-discover-yaarwinapp';

const yaarWinAppArticle = {
  _id: YAARWINAPP_SLUG,
  slug: YAARWINAPP_SLUG,
  title: 'YaarWinApp Review: Fast Login, Recharge, Withdraw and Player Support Guide',
  shortDescription: 'A complete YaarWinApp guide for players who need fast login access, recharge help, withdrawal guidance, and support information.',
  publishDate: '2026-05-02',
  thumbnailImage: 'https://static.wixstatic.com/media/dc7695_6e2dbf2a47af4afcb0b68f25be84363a~mv2.png?originWidth=1152&originHeight=576',
  fullContent: ''
};

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

        if (slug === YAARWINAPP_SLUG) {
          setArticle(yaarWinAppArticle);
          setIsLoading(false);
          return;
        }

        // Try to fetch by ID first (direct lookup)
        try {
          const foundArticle = await BaseCrudService.getById('blogarticles', slug);
          if (foundArticle) {
            setArticle(enhanceBlogArticleForSeoSupport(foundArticle));
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
          setArticle(enhanceBlogArticleForSeoSupport(foundArticle));
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

  const renderYaarWinAppGuide = () => (
    <div className="space-y-8 text-zinc-300 leading-relaxed text-base md:text-lg">
      <p>
        YaarWinApp is a dedicated player guide for users who want quick access to YaarWin login, recharge, withdrawal information, and support guidance from one mobile-friendly page. For users comparing gaming support resources, <a href={YAARWINAPP_URL} className="text-primary hover:text-primary/80 underline" rel="noopener">YaarWinApp</a> works as a focused destination for account access and help flows.
      </p>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 md:p-6">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">Why YaarWinApp matters for players</h2>
        <p>
          Players often need simple answers before taking action: where to log in, how to recharge, how to check withdrawals, and how to reach support when something does not look right. The YaarWinApp guide keeps those topics together so users do not have to search through scattered pages.
        </p>
      </div>

      <section id="fast-login" className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">Fast login and account access</h2>
        <p>
          A strong login guide should explain the exact account steps, common password issues, and safe access reminders. If you are already familiar with the Dostwin login flow, the same idea applies: keep your mobile number, password, and account details private, then use the official access page only.
        </p>
        <p>
          For YaarWin users, the dedicated <a href={YAARWINAPP_URL} className="text-primary hover:text-primary/80 underline" rel="noopener">YaarWin login guide</a> is the main place to check account access information and support direction.
        </p>
      </section>

      <section id="recharge" className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">Recharge support and payment checks</h2>
        <p>
          Recharge delays can happen because of payment confirmation, bank-side checks, UPI traffic, or incomplete transaction details. A good support guide should ask users to keep screenshots, transaction IDs, recharge amounts, dates, and account UID ready before contacting support.
        </p>
        <p>
          Dostwin users can also review our <a href="/how-to-play" className="text-primary hover:text-primary/80 underline">deposit and gameplay guide</a> to understand the usual payment flow before comparing it with YaarWinApp instructions.
        </p>
      </section>

      <section id="withdraw" className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">Withdrawal guidance and order number checks</h2>
        <p>
          Withdrawal status should always be checked with the correct order number from the withdrawal history page. Users should copy the order number directly from their account history instead of typing it from memory, because one wrong character can make support checks slower.
        </p>
        <p>
          If withdrawal speed is your main concern, read our Dostwin article on <a href="https://www.dostwinapp.co/blog/fast-withdrawal-online-betting-india" className="text-primary hover:text-primary/80 underline">fast withdrawal betting in India</a>, then compare the same checklist with YaarWinApp support steps.
        </p>
      </section>

      <section id="support" className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">Player support and safe use</h2>
        <p>
          Good support pages should make it easy to move from self-help to a human agent when the issue needs manual checking. That is why the strongest user flow combines clear guides, screenshots, order numbers, and direct support access.
        </p>
        <p>
          Visit <a href={YAARWINAPP_URL} className="text-primary hover:text-primary/80 underline" rel="noopener">the official YaarWinApp guide</a> for focused YaarWin support information, or explore the internal <a href="/yaarwinapp" className="text-primary hover:text-primary/80 underline">Dostwin YaarWinApp bridge guide</a> for a quick summary before you leave this site.
        </p>
      </section>

      <section id="faq" className="rounded-2xl border border-zinc-800 bg-black/40 p-5 md:p-6 space-y-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">YaarWinApp FAQ</h2>
        <div>
          <h3 className="font-bold text-white">Is YaarWinApp useful for login help?</h3>
          <p>Yes. It is built as a focused guide for account access, recharge, withdrawal, and player support topics.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">What should I prepare before asking for withdrawal support?</h3>
          <p>Keep your UID, withdrawal screenshot, order number, amount, and transaction time ready so support can check faster.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">Should I share my password with support?</h3>
          <p>No. Never share your password, OTP, or sensitive payment details with anyone.</p>
        </div>
      </section>
    </div>
  );

  const renderSeoSupportGuide = (currentArticle: any) => {
    const focus = currentArticle.seoFocus || 'online gaming support';
    const lead = currentArticle.seoLead || `This guide is written for Indian players who want clearer information about ${focus}, mobile access, payment preparation, and safer account habits.`;
    const firstHeading = currentArticle.seoFirstHeading || 'Start with account and mobile basics';
    const firstBody = currentArticle.seoFirstBody || 'Before choosing any real-money gaming platform, users should understand how login access works, how to keep account details private, and how to use only trusted pages.';

    return (
      <div className="space-y-8 text-zinc-300 leading-relaxed text-base md:text-lg">
        <p>
          {lead} It connects useful DostwinApp resources with the dedicated <a href="https://yaarwinapp.co" className="text-primary hover:text-primary/80 underline" rel="noopener">YaarWinApp guide</a> so readers can move between related support topics without confusion.
        </p>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 md:p-6 space-y-3">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">{firstHeading}</h2>
          <p>{firstBody}</p>
          <p>
            For Dostwin users, the <Link to="/login" className="text-primary hover:text-primary/80 underline">Dostwin login guide</Link> explains account access, while the <Link to="/download" className="text-primary hover:text-primary/80 underline">app download guide</Link> covers mobile setup.
          </p>
          <p>
            Players who also use YaarWin can compare these steps with the dedicated <a href="https://yaarwinapp.co" className="text-primary hover:text-primary/80 underline" rel="noopener">YaarWinApp login and support guide</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">Payment, recharge and withdrawal readiness</h2>
          <p>
            Most support delays happen when users do not keep the right details ready. For recharge checks, keep the payment screenshot, UPI reference, amount, date, and account UID. For withdrawal checks, copy the order number directly from withdrawal history and keep the payout screenshot visible.
          </p>
          <p>
            Related reading: <a href="https://www.dostwinapp.co/blog/fast-withdrawal-online-betting-india" className="text-primary hover:text-primary/80 underline">fast withdrawal online betting in India</a> and the <Link to="/yaarwinapp" className="text-primary hover:text-primary/80 underline">YaarWinApp bridge guide</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">Choose simple, mobile-friendly platforms</h2>
          <p>
            A good mobile gaming experience should load quickly, make navigation obvious, and keep important actions like login, recharge, withdrawal, and support easy to find. If the interface feels confusing, players are more likely to make mistakes with order numbers or payment references.
          </p>
          <p>
            Our guide to <a href="https://www.dostwinapp.co/blog/top-mobile-friendly-betting-sites-india" className="text-primary hover:text-primary/80 underline">mobile-friendly betting sites in India</a> explains why smooth mobile access matters for beginners and regular users.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">Responsible play and support safety</h2>
          <p>
            Treat gaming as entertainment, set a budget before playing, and avoid chasing losses. Never share passwords, OTP codes, or sensitive banking information with anyone. Human support may ask for screenshots or order numbers, but they should not need your private login credentials.
          </p>
          <p>
            For more safety context, read <Link to="/responsible-gaming" className="text-primary hover:text-primary/80 underline">Dostwin responsible gaming</Link> before continuing to any external guide.
          </p>
        </section>

        <section className="rounded-2xl border border-primary/20 bg-primary/10 p-5 md:p-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">Useful next steps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link to="/blog/Best-online-gambling-India" className="rounded-xl border border-zinc-800 bg-black/30 p-4 text-zinc-300 hover:text-primary">Beginner online betting guide</Link>
            <Link to="/blog/fast-withdrawal-online-betting-india" className="rounded-xl border border-zinc-800 bg-black/30 p-4 text-zinc-300 hover:text-primary">Fast withdrawal guide</Link>
            <Link to="/blog/top-mobile-friendly-betting-sites-india" className="rounded-xl border border-zinc-800 bg-black/30 p-4 text-zinc-300 hover:text-primary">Mobile-friendly betting guide</Link>
            <a href="https://yaarwinapp.co" className="rounded-xl border border-zinc-800 bg-black/30 p-4 text-zinc-300 hover:text-primary" rel="noopener">YaarWinApp.co support guide</a>
          </div>
        </section>
      </div>
    );
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
              {article.slug === YAARWINAPP_SLUG
                ? renderYaarWinAppGuide()
                : article.isSeoSupportRewrite
                  ? renderSeoSupportGuide(article)
                  : article.fullContent ? renderContentWithLinks(article.fullContent) : 'No content available for this article.'}
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
