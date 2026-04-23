import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10" role="contentinfo" style={{ contain: 'layout style paint' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Dostwin Game</h3>
            <p className="text-white/70 text-sm mb-4">
              India's biggest gaming platform offering lottery, casino, slots, sports betting, and more.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/dostwin"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Follow us on Facebook"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/dostwin"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Follow us on Twitter"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/dostwin"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/dostwin"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Subscribe to our YouTube channel"
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-white/70 hover:text-white transition-colors text-sm">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/how-to-play" className="text-white/70 hover:text-white transition-colors text-sm">
                  How to Play
                </Link>
              </li>
              <li>
                <Link to="/bonuses" className="text-white/70 hover:text-white transition-colors text-sm">
                  Bonuses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Game Categories */}
          <div>
            <h4 className="text-base font-heading font-bold mb-4">Game Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/games" className="text-white/70 hover:text-white transition-colors text-sm">
                  Lottery
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-white/70 hover:text-white transition-colors text-sm">
                  Casino
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-white/70 hover:text-white transition-colors text-sm">
                  Slots
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-white/70 hover:text-white transition-colors text-sm">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-white/70 hover:text-white transition-colors text-sm">
                  Fishing
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-white/70 hover:text-white transition-colors text-sm">
                  Original Games
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-base font-heading font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  24/7 Customer Support
                </Link>
              </li>
              <li>
                <Link to="/how-to-play" className="text-white/70 hover:text-white transition-colors text-sm">
                  Registration Guide
                </Link>
              </li>
              <li>
                <Link to="/how-to-play" className="text-white/70 hover:text-white transition-colors text-sm">
                  Deposit & Withdrawal
                </Link>
              </li>
              <li>
                <a href="#responsible-gaming" className="text-white/70 hover:text-white transition-colors text-sm">
                  Responsible Gaming
                </a>
              </li>
              <li>
                <a href="#terms" className="text-white/70 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2025 dostwin game. All rights reserved.
          </p>
          <p className="text-white/50 text-xs mt-2">
            Play responsibly. Must be 18+ to participate.
          </p>
        </div>
      </div>
    </footer>
  );
}
