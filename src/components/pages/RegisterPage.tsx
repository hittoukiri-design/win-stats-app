import FloatingChatButton from '@/components/FloatingChatButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  BadgeCheck,
  CheckCircle2,
  Gift,
  LockKeyhole,
  Phone,
  ShieldCheck,
  UserPlus,
  Wallet
} from 'lucide-react';
import { Link } from 'react-router-dom';

const registerUrl = 'https://game-insights.com/#/register';

const steps = [
  {
    icon: Phone,
    title: 'Prepare your mobile number',
    text: 'Use an active number because account messages and verification prompts may be sent there.'
  },
  {
    icon: LockKeyhole,
    title: 'Create a strong password',
    text: 'Use a private password that is not shared with other accounts or saved on public devices.'
  },
  {
    icon: Gift,
    title: 'Check welcome offers',
    text: 'Review bonus details before claiming so you understand the play, wallet, and withdrawal flow.'
  },
  {
    icon: Wallet,
    title: 'Review payment setup',
    text: 'Confirm your preferred payment method and account details before adding funds.'
  }
];

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-200 font-paragraph selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Header />
      <FloatingChatButton />

      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(41,121,242,0.30),transparent_38%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#07070a]/75 to-[#07070a]" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_0.92fr] gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-primary mb-5">
                <UserPlus className="w-4 h-4" />
                New player setup
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.02] tracking-tight mb-5">
                game-insights Register
              </h1>
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl mb-8">
                Create your game-insights account, prepare your mobile number, review bonus details, and start with a safer first-session checklist.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-2xl py-6 px-7" asChild>
                  <a href={registerUrl} rel="nofollow">Open Register</a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 bg-white/5 text-white hover:bg-primary/10 rounded-2xl py-6 px-7" asChild>
                  <Link to="/login">Already Have an Account?</Link>
                </Button>
              </div>
            </div>

            <Card className="border-white/10 bg-zinc-950/80 text-zinc-200 rounded-2xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <ShieldCheck className="w-12 h-12 text-primary mb-5" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">Before You Start</h2>
                <div className="space-y-4">
                  {[
                    'Register only through the official access path.',
                    'Keep OTP and password private at all times.',
                    'Read bonus terms before adding funds.',
                    'Use correct wallet and payment details from the beginning.'
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
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Registration Checklist</h2>
            <p className="text-zinc-400 text-lg">A calm setup helps avoid account and payment problems later.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, index) => (
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
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <BadgeCheck className="w-12 h-12 text-primary mx-auto mb-5" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-5">Ready to Create Your Account?</h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto mb-8">
            Register with accurate details, keep your account private, and check the available bonus before your first game session.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-2xl py-6 px-8" asChild>
            <a href={registerUrl} rel="nofollow">Register Now</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
