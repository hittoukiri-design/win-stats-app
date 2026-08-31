import { Link } from 'react-router-dom';
import { Headphones, Mail, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">game-insights Game</h3>
            <p className="text-accent-foreground/80 text-sm mb-4">
              India&apos;s biggest gaming platform offering lottery, casino, slots, sports betting, and more.
            </p>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Support"
              >
                <Headphones className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Message support"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Email support"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Send inquiry"
              >
                <Send className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/how-to-play" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  How to Play
                </Link>
              </li>
              <li>
                <Link to="/bonuses" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Bonuses
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Register Guide
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  App Download
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Login Guide
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Game Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/games#lottery-games" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Lottery
                </Link>
              </li>
              <li>
                <Link to="/games#casino-games" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Casino
                </Link>
              </li>
              <li>
                <Link to="/games#slot-games" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Slots
                </Link>
              </li>
              <li>
                <Link to="/games#sports-betting" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/games#fishing-games" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Fishing
                </Link>
              </li>
              <li>
                <Link to="/games#original-games" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Original Games
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  24/7 Customer Support
                </Link>
              </li>
              <li>
                <Link to="/how-to-play" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Registration Guide
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Account Login Help
                </Link>
              </li>
              <li>
                <Link to="/how-to-play" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Deposit & Withdrawal
                </Link>
              </li>
              <li>
                <Link to="/responsible-gaming" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Responsible Gaming
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-accent-foreground/10 bg-black/20 p-5">
            <h4 className="text-lg font-heading font-bold mb-3">Player Guides Network</h4>
            <p className="text-accent-foreground/70 text-sm mb-4 max-w-3xl">
              Explore related player-support guides for login, recharge, withdrawal checks, and safer mobile gaming access.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link to="/gamehubapp" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                gamehubapp guide
              </Link>
              <a href="https://gamehub-app.co" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors" rel="noopener">
                gamehub-app.co
              </a>
              <Link to="/blog/unlock-your-potential-discover-gamehubapp" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                gamehubapp review
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-accent-foreground/60 text-sm">
            © {new Date().getFullYear()} game-insights Game. All rights reserved.
          </p>
          <p className="text-accent-foreground/60 text-xs mt-2">
            Play responsibly. Must be 18+ to participate.
          </p>
        </div>
      </div>
    </footer>
  );
}
