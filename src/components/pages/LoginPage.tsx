import FloatingChatButton from '@/components/FloatingChatButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  HelpCircle,
  LockKeyhole,
  LogIn,
  ShieldCheck,
  Smartphone,
  UserRound,
  Wallet
} from 'lucide-react';
import { Link } from 'react-router-dom';

const loginUrl = 'https://game-insights.com/#/login';

const steps = [
  {
    icon: Smartphone,
    title: 'Open the official access page',
    text: 'Use the login button on this page or the header so you land on the active game-insights account screen.'
  },
  {
    icon: UserRound,
    title: 'Enter your mobile number',
    text: 'Type the same mobile number used during registration. Keep the country code and digits consistent.'
  },
  {
    icon: LockKeyhole,
    title: 'Confirm your password',
    text: 'Enter your password carefully. If access fails, use the reset option instead of repeated attempts.'
  },
  {
    icon: Wallet,
    title: 'Check wallet and games',
    text: 'After login, review your wallet balance, bonus status, and game history before starting a new round.'
  }
];

const checks = [
  'Use a stable mobile connection before opening the account page.',
  'Keep your registered number active for account messages.',
  'Do not share OTP, password, or wallet details with anyone.',
  'Confirm the page address before entering account information.'
];

const supportItems = [
  {
    title: 'Forgot password',
    text: 'Use the password reset option and follow the verification steps sent to your registered contact.'
  },
  {
    title: 'Topup not showing',
    text: 'Wait a few minutes, then check transaction status and keep the payment reference ready for support.'
  },
  {
    title: 'Redemption pending',
    text: 'Review bank or UPI details, account status, and any pending verification notice inside the platform.'
  }
];

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-200 font-paragraph selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Header />
      <FloatingChatButton />

      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(41,121,242,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(97,169,255,0.18),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,10,0.55),#07070a_82%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-primary mb-5">
                <ShieldCheck className="w-4 h-4" />
                Secure account access guide
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.02] tracking-tight mb-5">
                game-insights Game Login
              </h1>
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl mb-8">
                Access your game-insights account, review wallet activity, manage bonuses, and return to mobile-friendly virtual coins games with a clean login flow built for Indian players.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-2xl text-base md:text-lg py-6 px-7"
                  asChild
                >
                  <a href={loginUrl} rel="nofollow">
                    <LogIn className="w-5 h-5 mr-2" />
                    Open Login
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 bg-white/5 text-white hover:bg-primary/10 rounded-2xl text-base md:text-lg py-6 px-7"
                  asChild
                >
                  <Link to="/register">
                    Create Account
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
                {[
                  ['Fast access', 'Mobile-ready'],
                  ['Payments', 'UPI friendly'],
                  ['Support', 'Always available'],
                  ['Safety', 'Private login']
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-zinc-500">{label}</p>
                    <p className="text-sm md:text-base font-semibold text-white mt-1">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-white/10 bg-zinc-950/80 text-zinc-200 rounded-2xl overflow-hidden shadow-[0_24px_90px_rgba(0,0,0,0.45)]">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-primary to-secondary px-6 py-5 text-white">
                  <p className="text-sm uppercase tracking-[0.18em] opacity-80">Account checklist</p>
                  <h2 className="text-2xl font-heading font-bold mt-1">Before You Log In</h2>
                </div>
                <div className="p-6 space-y-4">
                  {checks.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-zinc-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                  <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-100/90">
                      If a login attempt looks unusual, pause and contact support before adding funds or changing account details.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">How to Login on game-insights</h2>
            <p className="text-zinc-400 text-lg">
              Follow these steps when returning to your account from mobile or desktop.
            </p>
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

      <section className="py-16 md:py-24 bg-[#07070a]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 mb-5">
                <HelpCircle className="w-4 h-4 text-primary" />
                Common account help
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                Quick Fixes for Login Issues
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Most access issues are caused by mistyped numbers, old passwords, unstable network, or pending account checks. Start with the simple fixes before contacting support.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-2xl" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>

            <div className="space-y-4">
              {supportItems.map((item) => (
                <Card key={item.title} className="bg-zinc-950 border-zinc-800 text-zinc-200 rounded-2xl">
                  <CardContent className="p-6 flex gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-5">
            Ready to Access Your Account?
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto mb-8">
            Use the official login path, keep your details private, and check your wallet carefully before starting a new game session.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-2xl py-6 px-8" asChild>
              <a href={loginUrl} rel="nofollow">Login Now</a>
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-200 bg-transparent rounded-2xl py-6 px-8" asChild>
              <Link to="/how-to-play">Read How to Play</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
