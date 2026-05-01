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
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Image
              src="https://static.wixstatic.com/media/dc7695_7918aca1c0b346eb848923cd873c2ac1~mv2.png"
              width={160}
              height={60}
              className="h-12 w-auto border-0 border-solid border-gray-200"
              originWidth={160}
              originHeight={60}
              loading="eager"
              decoding="async" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-zinc-300 hover:text-white transition-colors font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-zinc-300 hover:text-white transition-colors font-medium" aria-label="How to guides">
                How To
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" aria-hidden="true" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-zinc-900/95 border border-zinc-700 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link to="/login" className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-medium first:rounded-t-lg">Login Guide</Link>
                <Link to="/download" className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-medium">Download App</Link>
                <Link to="/register" className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-medium">Register</Link>
                <Link to="/how-to-play" className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-medium">How to Play</Link>
                <Link to="/bonuses" className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-medium">Bonus & Gift Codes</Link>
                <Link to="/games" className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-medium last:rounded-b-lg">Game Categories</Link>
              </div>
            </div>
            <Link to="/blog" className="text-zinc-300 hover:text-white transition-colors font-medium">
              Blog
            </Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-zinc-300 hover:text-white transition-colors font-medium" aria-label="More menu">
                More
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" aria-hidden="true" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-zinc-900/95 border border-zinc-700 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  to="/about-us"
                  className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-medium first:rounded-t-lg"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/responsible-gaming"
                  className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-medium"
                >
                  Responsible Gaming
                </Link>
                <Link
                  to="/privacy-policy"
                  className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-medium last:rounded-b-lg"
                >
                  Terms
                </Link>
              </div>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-zinc-600 text-zinc-300 hover:text-white transition-colors" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button size="sm" className="bg-primary text-white border border-primary transition-colors hover:bg-primary/90" asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-zinc-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

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
                to="/download"
                className="text-zinc-300 hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download App
              </Link>
              <Link
                to="/how-to-play"
                className="text-zinc-300 hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                How to Play
              </Link>
              
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
                      to="/blog"
                      className="text-zinc-300 hover:text-primary transition-colors font-medium"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      Blog
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
                      to="/about-us"
                      className="text-zinc-300 hover:text-primary transition-colors font-medium"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/responsible-gaming"
                      className="text-zinc-300 hover:text-primary transition-colors font-medium"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      Responsible Gaming
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" size="sm" className="border-zinc-600 text-zinc-300 hover:bg-primary/10 hover:border-primary hover:text-primary" asChild>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
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
