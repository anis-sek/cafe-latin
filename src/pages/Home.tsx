import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import cafeInterior from '@/assets/café-inside.png';
import decorativeOrnament from '@/assets/newlogo.png';
import logoCL from '@/assets/logoCL1.png';



const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${cafeInterior})` }}
  />
  <div className="absolute inset-0 bg-black/40" />

  {/* Contenu Hero */}
  <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white pb-12">
    <div
      className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
      style={{ animationDelay: '0.6s' }}
    >
      <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-elegant">
        <Link to="/menu">{t('home.cta.menu')}</Link>
      </Button>
      <Button asChild variant="outline" size="lg" className="border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-primary-foreground">
        <Link to="/contact">{t('home.cta.contact')}</Link>
      </Button>
    </div>
  </div>
</section>
{/* Phrase "La soif du bon, l’appétit du vrai" */}
{/* Phrase + logo alignés sur une même ligne */}
<section className="bg-background py-10">
  <div className="container mx-auto flex items-center justify-center gap-4 text-center animate-fade-in">
    <p className="text-2xl md:text-3xl font-elegant text-bordeaux italic">
      {t('home.motto')}
    </p>

    <img
      src={logoCL}
      alt="Logo Café Latin"
      className="w-16 h-16 md:w-20 md:h-20 object-contain"
    />

    <p className="text-2xl md:text-3xl font-elegant text-bordeaux italic">
      {t('home.motto1')}
    </p>
  </div>
</section>





      {/* Information Cards */}
      <section className="py-4 bg-background/50">
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
      <section className="bg-bordeaux/5">
        <div className="container mx-auto text-center">
          <div className="flex justify-center">
            <img 
              src={decorativeOrnament} 
              alt="Decorative ornament" 
              className="w-40 h-40 rounded-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;