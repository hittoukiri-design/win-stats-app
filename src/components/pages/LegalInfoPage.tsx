import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FloatingChatButton from '@/components/FloatingChatButton';
import { Link, useLocation } from 'react-router-dom';

const pages: Record<string, {
  title: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
}> = {
  '/about-us': {
    title: 'About game-insights Game',
    intro: 'game-insights Game is built for Indian players who want a fast, mobile-first gaming guide with clear access to games, bonuses, payments, and support information.',
    sections: [
      { heading: 'What We Cover', body: 'The site explains registration, login, app download, game categories, bonuses, payment flow, redemption guidance, and safer play practices in one place.' },
      { heading: 'Player-First Structure', body: 'Every core section links users toward the next helpful step, from learning the games to checking bonuses, reading guides, and contacting support.' },
    ],
  },
  '/privacy-policy': {
    title: 'Privacy Policy',
    intro: 'This policy explains how game-insights Game handles user information across website guides, contact forms, and support flows.',
    sections: [
      { heading: 'Information You Provide', body: 'If you contact support, submit an inquiry, or use account-related flows, the information you provide may be used to answer your request and improve service quality.' },
      { heading: 'Security', body: 'We use reasonable technical and organizational safeguards to protect information from unauthorized access, misuse, or disclosure.' },
      { heading: 'Third-Party Links', body: 'Some pages may link to external platforms for registration, login, app access, payments, or support. Review those platforms before submitting personal or payment information.' },
    ],
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions',
    intro: 'By using game-insights Game pages, guides, and links, you agree to use the website responsibly and follow applicable local laws.',
    sections: [
      { heading: 'Eligibility', body: 'This site is intended for users who are 18 or older. Do not use gaming or payment services if online gaming is restricted in your location.' },
      { heading: 'Information Accuracy', body: 'We work to keep guides and payment information current, but platform terms, bonuses, and redemption rules can change. Always confirm details on the official platform before acting.' },
      { heading: 'Responsible Use', body: 'Gaming involves financial risk. Set limits, avoid chasing losses, and treat gaming as entertainment rather than guaranteed income.' },
    ],
  },
  '/responsible-gaming': {
    title: 'Responsible Gaming',
    intro: 'game-insights Game encourages safe, balanced play. Real money gaming should stay controlled, affordable, and recreational.',
    sections: [
      { heading: 'Set Clear Limits', body: 'Decide your daily budget and time limit before playing. Stop when you reach either limit.' },
      { heading: 'Avoid Chasing Losses', body: 'Never increase stakes only to recover losses. Take breaks and return only when you can make calm decisions.' },
      { heading: '18+ Only', body: 'Do not use virtual coins gaming services if you are under 18 or if local rules do not permit participation.' },
      { heading: 'Get Help Early', body: 'If gaming affects your work, relationships, sleep, or finances, step away and seek professional support.' },
    ],
  },
  '/disclaimer': {
    title: 'Disclaimer',
    intro: 'game-insights Game provides informational content, guides, and navigation support for users exploring online gaming topics.',
    sections: [
      { heading: 'No Guaranteed Winnings', body: 'Game outcomes can involve risk and uncertainty. No guide, strategy, or bonus information guarantees profit.' },
      { heading: 'External Platforms', body: 'Registration, login, payments, app downloads, and game operation may happen on external platforms. Their rules and terms apply.' },
      { heading: 'Local Compliance', body: 'Users are responsible for checking whether virtual coins gaming is allowed in their city, state, or country.' },
    ],
  },
};

export default function LegalInfoPage() {
  const { pathname } = useLocation();
  const page = pages[pathname] || pages['/about-us'];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-300 font-paragraph selection:bg-primary/30 selection:text-white">
      <Header />
      <FloatingChatButton />
      <main className="pt-28 md:pt-36 pb-16">
        <section className="container mx-auto px-4 max-w-4xl">
          <p className="text-primary text-sm font-semibold mb-3">game-insights Game</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight">{page.title}</h1>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">{page.intro}</p>
          <div className="mt-10 grid gap-5">
            {page.sections.map((section) => (
              <article key={section.heading} className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
                <h2 className="text-xl font-heading font-bold text-white">{section.heading}</h2>
                <p className="mt-3 text-zinc-400 leading-relaxed">{section.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/how-to-play" className="rounded-xl bg-primary px-5 py-3 text-white font-semibold">How to Play</Link>
            <Link to="/contact" className="rounded-xl border border-primary/50 px-5 py-3 text-white font-semibold">Contact Support</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
