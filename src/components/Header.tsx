import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
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

  @keyframes textGlowWrap {
    0% {
      text-shadow: 0 0 10px rgba(236, 72, 153, 0.8), 0 0 20px rgba(236, 72, 153, 0.4);
    }
    50% {
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.4);
    }
    100% {
      text-shadow: 0 0 10px rgba(236, 72, 153, 0.8), 0 0 20px rgba(236, 72, 153, 0.4);
    }
  }
  
  .glowing-button:hover {
    animation: glowGradient 2s ease-in-out infinite;
    border-color: rgba(236, 72, 153, 0.8);
  }

  .contact-glow:hover {
    animation: textGlowWrap 2s ease-in-out infinite;
    color: white;
  }
`;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <style>{glowingButtonStyle}</style>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Image
              src="https://static.wixstatic.com/media/dc7695_7918aca1c0b346eb848923cd873c2ac1~mv2.png"
              width={160}
              height={60}
              className="h-12 w-auto border-0 border-solid border-gray-200"
              originWidth={160}
              originHeight={60} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-zinc-300 hover:text-white transition-colors font-medium contact-glow">
              Home
            </Link>
            <Link to="/games" className="text-zinc-300 hover:text-white transition-colors font-medium contact-glow">
              Games
            </Link>
            <Link to="/how-to-play" className="text-zinc-300 hover:text-white transition-colors font-medium contact-glow">
              How to Play
            </Link>
            
            {/* Dropdown Menu */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-zinc-300 hover:text-white transition-colors font-medium contact-glow">
                More
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  to="/bonuses"
                  className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-medium first:rounded-t-lg"
                >
                  Bonuses
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/blog"
                  className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-medium last:rounded-b-lg"
                >
                  Blog
                </Link>
              </div>
            </div>
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
              
              {/* Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-zinc-300 hover:text-primary transition-colors font-medium w-full"
                >
                  More
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2 border-l border-zinc-700">
                    <Link
                      to="/bonuses"
                      className="text-zinc-300 hover:text-primary transition-colors font-medium"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      Bonuses
                    </Link>
                    <Link
                      to="/contact"
                      className="text-zinc-300 hover:text-primary transition-colors font-medium"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/blog"
                      className="text-zinc-300 hover:text-primary transition-colors font-medium"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      Blog
                    </Link>
                  </div>
                )}
              </div>
              
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
