import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FloatingChatButton from '@/components/FloatingChatButton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const gamehubapp_URL = 'https://gamehub-app.co';

export default function gamehubappPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-300 font-paragraph selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Header />
      <FloatingChatButton />

      <main>
        <section className="pt-32 md:pt-40 pb-16 bg-[#050505] border-b border-zinc-800">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-primary font-bold mb-4">Player Guides Network</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              gamehubapp Guide for Login, Recharge and Redemption Support
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl">
              A focused bridge guide for players who need quick gamehubapp access, recharge help, redemption status direction, and safer support reminders.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl" asChild>
                <a href={gamehubapp_URL} rel="noopener">Open gamehubapp</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-white hover:bg-primary/10 rounded-xl" asChild>
                <Link to="/blog/unlock-your-potential-discover-gamehubapp">Read the full review</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Fast Login Help',
                body: 'Review account access steps, login reminders, and safe sign-in tips before opening the GameHub guide.'
              },
              {
                title: 'Recharge Support',
                body: 'Prepare recharge screenshots, payment references, amounts, and timing details before asking support to check.'
              },
              {
                title: 'Redemption Checks',
                body: 'Copy your redemption order number directly from account history so status checks can be handled faster.'
              }
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                <h2 className="text-xl font-heading font-bold text-white mb-3">{item.title}</h2>
                <p className="text-zinc-400 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 bg-zinc-950/70 border-y border-zinc-800">
          <div className="container mx-auto px-4 max-w-4xl space-y-5 text-zinc-400 leading-relaxed text-lg">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Why this guide links to gamehubapp</h2>
            <p>
              win-stats-app.co publishes gaming, payment, redemption, and player-support guides for Indian users. gamehubapp is a related guide destination for players who specifically need GameHub login, recharge, redemption, and support information.
            </p>
            <p>
              For deeper context, read our <Link to="/blog/unlock-your-potential-discover-gamehubapp" className="text-primary hover:underline">gamehubapp review and support guide</Link>, then continue to <a href={gamehubapp_URL} className="text-primary hover:underline" rel="noopener">gamehub-app.co</a> when you need the dedicated GameHub page.
            </p>
            <p className="text-sm text-zinc-500">
              Always play responsibly, keep account information private, and do not share passwords or OTP details with anyone.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
