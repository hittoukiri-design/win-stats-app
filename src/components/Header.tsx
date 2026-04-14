import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0c] border-b border-zinc-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Image
              src="https://static.wixstatic.com/media/dc7695_180b4efdf43544efa1e81027b9200ad8~mv2.png"
              width={32}
              height={32}
              className="w-8 h-8"
              originWidth={1024}
              originHeight={1024} />
            <span className="text-2xl font-heading font-bold text-white" style={{ textShadow: '0 0 10px rgba(41, 121, 242, 0.6)' }}>
              Dostwin
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-zinc-300 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/games" className="text-zinc-300 hover:text-primary transition-colors font-medium">
              Games
            </Link>
            <Link to="/how-to-play" className="text-zinc-300 hover:text-primary transition-colors font-medium">
              How to Play
            </Link>
            <Link to="/bonuses" className="text-zinc-300 hover:text-primary transition-colors font-medium">
              Bonuses
            </Link>
            <Link to="/contact" className="text-zinc-300 hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-zinc-600 text-zinc-300 hover:bg-primary/10 hover:border-primary hover:text-primary" asChild>
              <Link to="/">Login</Link>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white" asChild>
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
  );
}
