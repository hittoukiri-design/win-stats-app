import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, memo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const handleDropdownToggle = useCallback(() => {
    setDropdownOpen(prev => !prev);
  }, []);

  const closeMenus = useCallback(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10" role="banner" style={{ contain: 'layout style paint', willChange: 'auto' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16" style={{ minHeight: '64px', contain: 'layout style' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Dostwin Home">
            <Image 
              src="https://static.wixstatic.com/media/dc7695_5d72d2fbca4e48949485b38fa5f48893~mv2.png"
              alt="Dostwin Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              loading="eager"
            />
            <span className="text-xl md:text-2xl font-bold text-white">Dostwin</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            <Link to="/" className="text-white font-medium text-sm">
              Home
            </Link>
            <Link to="/games" className="text-white font-medium text-sm">
              Games
            </Link>
            <Link to="/how-to-play" className="text-white font-medium text-sm">
              How to Play
            </Link>
            
            {/* Dropdown Menu */}
            <div className="relative group" style={{ contain: 'layout style' }}>
              <button className="flex items-center gap-1 text-white font-medium text-sm" aria-label="More menu" aria-expanded={false} aria-haspopup="menu">
                More
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-black border border-white/10 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50" style={{ contain: 'layout style paint' }}>
                <Link
                  to="/bonuses"
                  className="block px-4 py-3 text-white font-medium first:rounded-t-lg text-sm"
                >
                  Bonuses
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-white font-medium text-sm"
                >
                  Contact
                </Link>
                <Link
                  to="/blog"
                  className="block px-4 py-3 text-white font-medium text-sm"
                >
                  Blog
                </Link>
                <Link
                  to="/faqs"
                  className="block px-4 py-3 text-white font-medium last:rounded-b-lg text-sm"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-white/20 text-white" asChild>
              <Link to="/">Login</Link>
            </Button>
            <Button size="sm" className="bg-primary text-white" asChild>
              <Link to="/">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={handleMenuToggle}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-black" id="mobile-menu" role="navigation" aria-label="Mobile navigation" style={{ contain: 'layout style paint' }}>
            <nav className="flex flex-col gap-4" style={{ contain: 'layout style' }}>
              <Link
                to="/"
                className="text-white font-medium text-sm"
                onClick={closeMenus}
              >
                Home
              </Link>
              <Link
                to="/games"
                className="text-white font-medium text-sm"
                onClick={closeMenus}
              >
                Games
              </Link>
              <Link
                to="/how-to-play"
                className="text-white font-medium text-sm"
                onClick={closeMenus}
              >
                How to Play
              </Link>
              
              {/* Mobile Dropdown */}
              <div>
                <button
                  onClick={handleDropdownToggle}
                  className="flex items-center gap-1 text-white font-medium w-full text-sm"
                  aria-expanded={dropdownOpen}
                >
                  More
                  <ChevronDown className={`w-4 h-4 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2 border-l border-white/10">
                    <Link
                      to="/bonuses"
                      className="text-white font-medium text-sm"
                      onClick={closeMenus}
                    >
                      Bonuses
                    </Link>
                    <Link
                      to="/contact"
                      className="text-white font-medium text-sm"
                      onClick={closeMenus}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/blog"
                      className="text-white font-medium text-sm"
                      onClick={closeMenus}
                    >
                      Blog
                    </Link>
                    <Link
                      to="/faqs"
                      className="text-white font-medium text-sm"
                      onClick={closeMenus}
                    >
                      FAQs
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" size="sm" className="border-white/20 text-white" asChild>
                  <Link to="/" onClick={closeMenus}>
                    Login
                  </Link>
                </Button>
                <Button size="sm" className="bg-primary text-white" asChild>
                  <Link to="/" onClick={closeMenus}>
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
