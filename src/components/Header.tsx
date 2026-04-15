import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

const glowingButtonStyle = `
  @keyframes glowGradient {
    0% {
      box-shadow: 0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3);
    }
    100% {
      box-shadow: 0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.3);
    }
  }
  
  .glowing-button:hover {
    animation: glowGradient 2s ease-in-out infinite;
    border-color: rgba(236, 72, 153, 0.8);
  }
`;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <style>{glowingButtonStyle}</style>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Image
              src="https://static.wixstatic.com/media/dc7695_1071874147824f31a52aecdd5bf9bccd~mv2.png"
              width={160}
              height={60}
              className="w-auto"
              originWidth={1024}
              originHeight={384}
              alt="Dostwin Logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-zinc-300 hover:text-white transition-colors font-medium hover:[filter:drop-shadow(0_0_12px_rgba(168,85,247,0.7))]">
              Home
            </Link>
            <Link to="/games" className="text-zinc-300 hover:text-white transition-colors font-medium hover:[filter:drop-shadow(0_0_12px_rgba(168,85,247,0.7))]">
              Games
            </Link>
            <Link to="/how-to-play" className="text-zinc-300 hover:text-white transition-colors font-medium hover:[filter:drop-shadow(0_0_12px_rgba(168,85,247,0.7))]">
              How to Play
            </Link>
            <Link to="/bonuses" className="text-zinc-300 hover:text-white transition-colors font-medium hover:[filter:drop-shadow(0_0_12px_rgba(168,85,247,0.7))]">
              Bonuses
            </Link>
            <Link to="/contact" className="text-zinc-300 hover:text-white transition-colors font-medium hover:[filter:drop-shadow(0_0_12px_rgba(168,85,247,0.7))]">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="glowing-button border-zinc-600 text-zinc-300 hover:text-white transition-colors" asChild>
              <Link to="/">Login</Link>
            </Button>
            <Button size="sm" className="glowing-button bg-primary text-white border border-primary transition-colors" asChild>
              <Link to="/">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800 bg-zinc-900/50">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-zinc-300 hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/games"
                className="text-zinc-300 hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Games
              </Link>
              <Link
                to="/how-to-play"
                className="text-zinc-300 hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                How to Play
              </Link>
              <Link
                to="/bonuses"
                className="text-zinc-300 hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bonuses
              </Link>
              <Link
                to="/contact"
                className="text-zinc-300 hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" size="sm" className="border-zinc-600 text-zinc-300 hover:bg-primary/10 hover:border-primary hover:text-primary" asChild>
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    Register
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
