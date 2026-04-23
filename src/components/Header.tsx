import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <Image
              src="https://static.wixstatic.com/media/dc7695_4d8a7129759548368fa9af3b3a75b9d6~mv2.png"
              width={160}
              height={60}
              className="h-10 md:h-12 w-auto"
              originWidth={160}
              originHeight={60}
              loading="eager"
              decoding="async"
              alt="Dostwin Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-primary transition-colors font-medium text-sm">
              Home
            </Link>
            <Link to="/games" className="text-white hover:text-primary transition-colors font-medium text-sm">
              Games
            </Link>
            <Link to="/how-to-play" className="text-white hover:text-primary transition-colors font-medium text-sm">
              How to Play
            </Link>
            
            {/* Dropdown Menu */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-white hover:text-primary transition-colors font-medium text-sm" aria-label="More menu" aria-expanded="false">
                More
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" aria-hidden="true" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-black/95 border border-white/10 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  to="/bonuses"
                  className="block px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors font-medium first:rounded-t-lg text-sm"
                >
                  Bonuses
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors font-medium text-sm"
                >
                  Contact
                </Link>
                <Link
                  to="/blog"
                  className="block px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors font-medium text-sm"
                >
                  Blog
                </Link>
                <Link
                  to="/faqs"
                  className="block px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors font-medium last:rounded-b-lg text-sm"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-white/20 text-white hover:text-primary hover:border-primary transition-colors" asChild>
              <Link to="/">Login</Link>
            </Button>
            <Button size="sm" className="bg-primary text-white hover:bg-primary/90 transition-colors" asChild>
              <Link to="/">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-black/50">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-white hover:text-primary transition-colors font-medium text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/games"
                className="text-white hover:text-primary transition-colors font-medium text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Games
              </Link>
              <Link
                to="/how-to-play"
                className="text-white hover:text-primary transition-colors font-medium text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                How to Play
              </Link>
              
              {/* Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-white hover:text-primary transition-colors font-medium w-full text-sm"
                  aria-expanded={dropdownOpen}
                >
                  More
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2 border-l border-white/10">
                    <Link
                      to="/bonuses"
                      className="text-white hover:text-primary transition-colors font-medium text-sm"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      Bonuses
                    </Link>
                    <Link
                      to="/contact"
                      className="text-white hover:text-primary transition-colors font-medium text-sm"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/blog"
                      className="text-white hover:text-primary transition-colors font-medium text-sm"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      Blog
                    </Link>
                    <Link
                      to="/faqs"
                      className="text-white hover:text-primary transition-colors font-medium text-sm"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      FAQs
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:text-primary hover:border-primary transition-colors" asChild>
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white transition-colors" asChild>
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

export default memo(Header);
