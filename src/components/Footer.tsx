import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Dostwin Game</h3>
            <p className="text-accent-foreground/80 text-sm mb-4">
              India&apos;s biggest gaming platform offering lottery, casino, slots, sports betting, and more.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
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
                <Link to="/contact" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Game Categories */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Game Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/games" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Lottery
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Casino
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Slots
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Fishing
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Original Games
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
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
                <Link to="/how-to-play" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Deposit & Withdrawal
                </Link>
              </li>
              <li>
                <a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Responsible Gaming
                </a>
              </li>
              <li>
                <a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-accent-foreground/60 text-sm">
            © 2025 dostwin game. All rights reserved.
          </p>
          <p className="text-accent-foreground/60 text-xs mt-2">
            Play responsibly. Must be 18+ to participate.
          </p>
          
          {/* Disclaimer */}
          <p className="text-accent-foreground/50 text-xs mt-6 leading-relaxed max-w-4xl mx-auto">
            This website is for informational purposes only. Online gaming involves financial risk — never play with money you cannot afford to lose. All games on the Dostwin platform are based on chance and outcomes cannot be guaranteed. You must be 18 years or older to register and play on Dostwin. Please practice responsible gaming. Gaming regulations vary by jurisdiction — please ensure online gaming is legal in your area before participating.
          </p>
        </div>
      </div>
    </footer>
  );
}
