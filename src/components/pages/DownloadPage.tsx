import FloatingChatButton from '@/components/FloatingChatButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  BadgeCheck,
  CheckCircle2,
  Download,
  FileDown,
  Settings,
  ShieldCheck,
  Smartphone,
  Wifi,
  Wrench
} from 'lucide-react';
import { Link } from 'react-router-dom';

const downloadUrl = 'https://game-insights.com/#/register';

const installSteps = [
  {
    icon: FileDown,
    title: 'Start from the access page',
    text: 'Open the game-insights access path and follow the app or mobile setup prompt shown there.'
  },
  {
    icon: Settings,
    title: 'Allow installation if prompted',
    text: 'Android may ask you to allow installs from the browser. Enable it only for the trusted source you are using.'
  },
  {
    icon: Smartphone,
    title: 'Open the installed app',
    text: 'After setup, open game-insights and choose login or register depending on your account status.'
  },
  {
    icon: BadgeCheck,
    title: 'Confirm account access',
    text: 'Check wallet, bonus, and game sections before making your first topup or playing a round.'
  }
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-200 font-paragraph selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Header />
      <FloatingChatButton />

      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(97,169,255,0.26),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(41,121,242,0.20),transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070a]/20 via-[#07070a]/80 to-[#07070a]" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-primary mb-5">
                <Download className="w-4 h-4" />
                Mobile app setup guide
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.02] tracking-tight mb-5">
                game-insights App Download
              </h1>
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl mb-8">
                Set up game-insights on mobile, review install steps, and prepare your account before joining virtual coins games, bonuses, and quick payment flows.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-2xl py-6 px-7" asChild>
                  <a href={downloadUrl} rel="nofollow">Open App Access</a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 bg-white/5 text-white hover:bg-primary/10 rounded-2xl py-6 px-7" asChild>
                  <Link to="/how-to-play">Read Setup Guide</Link>
                </Button>
              </div>
            </div>

            <Card className="border-white/10 bg-zinc-950/80 text-zinc-200 rounded-2xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <ShieldCheck className="w-12 h-12 text-primary mb-5" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">Safe Download Notes</h2>
                <div className="space-y-4">
                  {[
                    'Use a stable connection before downloading or opening the app.',
                    'Avoid files shared from unknown chats or unrelated websites.',
                    'Confirm storage space and device permissions before setup.',
                    'Keep login details private after installation.'
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Android Setup Steps</h2>
            <p className="text-zinc-400 text-lg">A quick checklist for smoother mobile access.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {installSteps.map((step, index) => (
              <Card key={step.title} className="bg-[#111116] border-zinc-800 text-zinc-200 rounded-2xl h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-5">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-primary font-bold text-sm mb-2">Step {index + 1}</p>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{step.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#07070a]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="bg-zinc-950 border-zinc-800 text-zinc-200 rounded-2xl">
              <CardContent className="p-6 flex gap-4">
                <Wifi className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">Connection Tips</h3>
                  <p className="text-zinc-400 leading-relaxed">Use a reliable mobile data or Wi-Fi connection during setup so files and account screens load cleanly.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-950 border-zinc-800 text-zinc-200 rounded-2xl">
              <CardContent className="p-6 flex gap-4">
                <Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">If Setup Fails</h3>
                  <p className="text-zinc-400 leading-relaxed">Clear browser cache, check permissions, restart your phone, then try again from the active access page.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
