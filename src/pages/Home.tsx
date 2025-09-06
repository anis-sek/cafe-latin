import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import cafeInterior from '@/assets/cafe-interior.jpg';
import decorativeOrnament from '@/assets/decorative-ornament.png';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cafeInterior})` }}
        />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative element */}
            <div className="flex justify-center mb-6">
              <img 
                src={decorativeOrnament} 
                alt="Decorative ornament" 
                className="w-24 h-24 opacity-80"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-elegant font-bold text-bordeaux mb-4 animate-fade-in">
              {t('home.title')}
            </h1>
            
            <p className="text-xl md:text-2xl font-elegant text-gold mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('home.subtitle')}
            </p>
            
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-lg text-charcoal/80 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
                {t('home.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-elegant">
                <Link to="/menu">{t('home.cta.menu')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-primary-foreground">
                <Link to="/contact">{t('home.cta.contact')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <section className="py-16 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Hours Card */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-bordeaux/20">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Clock className="w-8 h-8 text-charcoal" />
                  </div>
                </div>
                <h3 className="text-xl font-elegant font-semibold text-bordeaux mb-4">
                  {t('home.hours.title')}
                </h3>
                <div className="space-y-2 text-charcoal/80">
                  <p className="font-body">{t('home.hours.weekdays')}</p>
                  <p className="font-body">{t('home.hours.weekends')}</p>
                  <p className="font-body text-sm mt-3 italic">{t('home.hours.kitchen')}</p>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-bordeaux/20">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-elegant font-semibold text-bordeaux mb-4">
                  Quartier Latin
                </h3>
                <div className="space-y-2 text-charcoal/80">
                  <p className="font-body">{t('common.address')}</p>
                  <p className="font-body text-sm">Proche Saint-Michel & Odéon</p>
                  <Button 
                    variant="link" 
                    className="text-bordeaux hover:text-bordeaux-light p-0 h-auto"
                    onClick={() => window.open('https://maps.google.com/?q=14+rue+Git+le+Coeur,+75006+Paris+France', '_blank')}
                  >
                    Voir sur la carte →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-bordeaux/20">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Phone className="w-8 h-8 text-charcoal" />
                  </div>
                </div>
                <h3 className="text-xl font-elegant font-semibold text-bordeaux mb-4">
                  {t('contact.title')}
                </h3>
                <div className="space-y-2 text-charcoal/80">
                  <p className="font-body">{t('common.phone')}</p>
                  <p className="font-body">{t('common.email')}</p>
                  <Button 
                    asChild
                    variant="link" 
                    className="text-bordeaux hover:text-bordeaux-light p-0 h-auto mt-2"
                  >
                    <Link to="/contact">Nous contacter →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom decorative section */}
      <section className="py-8 bg-bordeaux/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center">
            <img 
              src={decorativeOrnament} 
              alt="Decorative ornament" 
              className="w-16 h-16 opacity-60"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;