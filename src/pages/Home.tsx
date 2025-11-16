import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Phone, Users } from 'lucide-react';
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
      className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mb-6"
      style={{ animationDelay: '0.6s' }}
    >
      <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-elegant">
        <Link to="/menu">{t('home.cta.menu')}</Link>
      </Button>
      <Button asChild variant="outline" size="lg" className="border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-primary-foreground">
        <a
          href="https://www.google.com/maps/reserve/v/dine/c/J1s-mCfwDRk?source=pa&opi=79508299&hl=fr-FR&gei=498ZabW8BPqekdUPpJao8Qg&sourceurl=https://www.google.com/maps/preview/place?authuser%3D0%26hl%3Dfr%26gl%3Dfr%26pb%3D!1m20!1s0x47e671de4e8c974d:0x86ec4d1a01610843!3m12!1m3!1d12534.024756124312!2d2.42909675!3d48.92500585!2m3!1f0!2f0!3f0!3m2!1i807!2i918!4f13.1!4m2!3d48.8533669!4d2.3422756!5e0!9e0!11s/g/1tfdcs7p!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m6!1s2t8ZaZDSNaymkdUPgezfsQs:84!2s1i:0,t:6986,p:2t8ZaZDSNaymkdUPgezfsQs:84!7e81!12e15!17s2t8ZaZDSNaymkdUPgezfsQs:89!18e3!15m110!1m31!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m20!3b1!4b1!5b1!6b1!9b1!13b1!14b1!17b1!20b1!21b1!22b1!27m1!1b0!28b0!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!14m1!3b0!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!21m28!1m6!1m2!1i0!2i0!2m2!1i530!2i918!1m6!1m2!1i757!2i0!2m2!1i807!2i918!1m6!1m2!1i0!2i0!2m2!1i807!2i20!1m6!1m2!1i0!2i898!2m2!1i807!2i918!22m1!1e81!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i758!39sCaf%25C3%25A9%2BLatin,%2BRue%2BSaint-Andr%25C3%25A9%2Bdes%2BArts,%2BParis%26q%3DCaf%25C3%25A9%2BLatin,%2BRue%2BSaint-Andr%25C3%25A9%2Bdes%2BArts,%2BParis"
          target="_blank"
          rel="noopener noreferrer"
        > {t('home.cta.contact')}
      </a>
      </Button>
    </div>
  </div>
</section>
{/* Phrase "La soif du bon, l’appétit du vrai" */}
{/* Phrase + logo alignés sur une même ligne */}
<section className="bg-background py-10">
  <div className="container mx-auto flex items-center justify-center gap-4 text-center animate-fade-in">
    <p className="font-elegant text-bordeaux italic">
      {t('home.motto')}
    </p>

    <img
      src={logoCL}
      alt="Logo Café Latin"
      className="w-16 h-16 md:w-20 md:h-20 object-contain"
    />

    <p className="font-elegant text-bordeaux italic">
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
                    onClick={() => window.open('https://maps.google.com/?q=30+rue+Saint-André+des+Arts,+75006+Paris+France', '_blank')}
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

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-bordeaux/20">
  <CardContent className="p-8 text-center">
    <div className="flex justify-center mb-4">
      <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
        <Users className="w-8 h-8 text-charcoal" />
      </div>
    </div>

    <h3 className="text-xl font-elegant font-semibold text-bordeaux mb-4">
      Privatisation & Événements
    </h3>

    <div className="space-y-2 text-charcoal/80 font-body">
      <p>
        Profitez de notre salle du <span className="font-semibold">1er étage</span>, 
        entièrement isolée et équipée d’un système audio dédié.
      </p>
      <p>
        Parfaite pour vos <span className="italic">anniversaires, fêtes entre amis </span> 
        ou vos <span className="italic">réunions familiales</span> dans un cadre intime et chaleureux.
      </p>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-primary-foreground mt-4"
      >
        <a
          href="https://www.google.com/maps/reserve/v/dine/c/J1s-mCfwDRk?source=pa&opi=79508299&hl=fr-FR&gei=498ZabW8BPqekdUPpJao8Qg&sourceurl=https://www.google.com/maps/preview/place?authuser%3D0%26hl%3Dfr%26gl%3Dfr%26pb%3D!1m20!1s0x47e671de4e8c974d:0x86ec4d1a01610843..."
          target="_blank"
          rel="noopener noreferrer"
        >
          Réserver une salle →
        </a>
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
              className="w-40 h-20 opacity-80 rounded-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;