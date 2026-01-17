import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', labelAr: 'الرئيسية' },
    { href: '/about', label: 'About', labelAr: 'من نحن' },
    { href: '/services', label: 'Services', labelAr: 'خدماتنا' },
    { href: '/gallery', label: 'Gallery', labelAr: 'معرض الصور' },
    { href: '/contact', label: 'Contact', labelAr: 'تواصل معنا' },
  ];

  // On non-home pages, always use scrolled (solid) style
  const useTransparentStyle = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useTransparentStyle
          ? 'bg-transparent'
          : 'bg-card/95 backdrop-blur-md shadow-soft'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Crown className="w-8 h-8 text-gold transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-xl font-bold tracking-tight ${useTransparentStyle ? 'text-white' : 'text-foreground'}`}>
                Royal Rental
              </span>
              <span className={`text-xs tracking-widest uppercase ${useTransparentStyle ? 'text-white/70' : 'text-muted-foreground'}`}>
                KSA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative font-medium transition-colors gold-underline py-2 ${
                  useTransparentStyle 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-foreground/80 hover:text-foreground'
                } ${location.pathname === link.href ? 'text-gold' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="gold" size="lg" asChild>
              <a
                href="https://api.whatsapp.com/send?phone=966550868287"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${useTransparentStyle ? 'text-white' : 'text-foreground'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-card shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container-custom py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-2 font-medium transition-colors ${
                  location.pathname === link.href 
                    ? 'text-gold' 
                    : 'text-foreground/80 hover:text-gold'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label} / {link.labelAr}
              </Link>
            ))}
            <Button variant="gold" className="w-full" asChild>
              <a
                href="https://api.whatsapp.com/send?phone=966550868287"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
