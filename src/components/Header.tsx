import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '@/types/language';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=14+rue+Git+le+Coeur,+75006+Paris+France', '_blank');
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-bordeaux/20 shadow-elegant h-16">
      <div className="container mx-auto px-3 h-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-elegant font-bold text-bordeaux">
              {t('home.title')}
            </div>
             <img 
                src="/src/assets/cafe-logo.png" 
                alt="Decorative ornament" 
                className="w-14 h-14 opacity-90"
              />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-body text-sm font-medium transition-colors duration-200 hover:text-bordeaux ${
                isActive('/') ? 'text-bordeaux border-b-2 border-bordeaux pb-1' : 'text-charcoal'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/menu" 
              className={`font-body text-sm font-medium transition-colors duration-200 hover:text-bordeaux ${
                isActive('/menu') ? 'text-bordeaux border-b-2 border-bordeaux pb-1' : 'text-charcoal'
              }`}
            >
              {t('nav.menu')}
            </Link>
            <Link 
              to="/gallery" 
              className={`font-body text-sm font-medium transition-colors duration-200 hover:text-bordeaux ${
                isActive('/gallery') ? 'text-bordeaux border-b-2 border-bordeaux pb-1' : 'text-charcoal'
              }`}
            >
              {t('nav.gallery')}
            </Link>
            <Link 
              to="/contact" 
              className={`font-body text-sm font-medium transition-colors duration-200 hover:text-bordeaux ${
                isActive('/contact') ? 'text-bordeaux border-b-2 border-bordeaux pb-1' : 'text-charcoal'
              }`}
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange('fr')}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Location Button */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLocationClick}
              className="hidden sm:flex items-center space-x-2 border-bordeaux/30 text-bordeaux hover:bg-bordeaux hover:text-primary-foreground"
            >
              <MapPin className="h-4 w-4" />
              <span>{t('nav.location')}</span>
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                      {t('nav.home')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/menu" onClick={() => setIsMenuOpen(false)}>
                      {t('nav.menu')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>
                      {t('nav.gallery')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      {t('nav.contact')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLocationClick}>
                    <MapPin className="h-4 w-4 mr-2" />
                    {t('nav.location')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;