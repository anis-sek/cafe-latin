import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import cafeInterior from '@/assets/cafe-interior.jpg';
import frenchCuisine from '@/assets/french-cuisine.jpg';
import decorativeOrnament from '@/assets/decorative-ornament.png';

const Gallery: React.FC = () => {
  const { t } = useLanguage();

  // Gallery images data
  const galleryImages = [
    {
      src: cafeInterior,
      alt: 'Intérieur du Café Latin',
      title: 'Ambiance Chaleureuse',
      description: 'Notre salle principale avec son décor authentique parisien'
    },
    {
      src: frenchCuisine,
      alt: 'Cuisine française',
      title: 'Cuisine Raffinée',
      description: 'Nos plats préparés avec passion et savoir-faire'
    },
    {
      src: cafeInterior,
      alt: 'Terrasse du restaurant',
      title: 'Terrasse Parisienne',
      description: 'Profitez de nos places en terrasse dans le Quartier Latin'
    },
    {
      src: frenchCuisine,
      alt: 'Plats signature',
      title: 'Spécialités Maison',
      description: 'Découvrez nos créations culinaires inspirées de la tradition'
    },
    {
      src: cafeInterior,
      alt: 'Bar du restaurant',
      title: 'Bar à Vins',
      description: 'Sélection de vins français et cocktails classiques'
    },
    {
      src: frenchCuisine,
      alt: 'Desserts maison',
      title: 'Desserts Artisanaux',
      description: 'Pâtisseries fraîches préparées chaque jour'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-elegant pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src={decorativeOrnament} 
              alt="Decorative ornament" 
              className="w-20 h-20 opacity-80"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-elegant font-bold text-bordeaux mb-4">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-gold font-elegant">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {galleryImages.map((image, index) => (
            <Card key={index} className="group shadow-card hover:shadow-elegant transition-all duration-300 border-bordeaux/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-elegant font-semibold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-sm font-body opacity-90">
                      {image.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Atmosphere Section */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="shadow-elegant border-bordeaux/20 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <img 
                  src={decorativeOrnament} 
                  alt="Decorative ornament" 
                  className="w-16 h-16 opacity-60"
                />
              </div>
              <h2 className="text-3xl font-elegant font-semibold text-bordeaux mb-6">
                Une Expérience Authentique
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed mb-6 font-body">
                Plongez dans l'atmosphère unique du Café Latin, où chaque détail a été pensé pour vous offrir 
                une expérience culinaire et culturelle authentiquement parisienne. De notre décor soigneusement 
                choisi à nos plats préparés avec passion, découvrez l'art de vivre à la française.
              </p>
              <p className="text-base text-muted-foreground font-body italic">
                "Un voyage gustatif au cœur de Paris, dans l'un des quartiers les plus emblématiques de la capitale."
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Location highlight */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-elegant font-semibold text-bordeaux mb-4">
            Au Cœur du Quartier Latin
          </h3>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto font-body">
            Idéalement situé entre Saint-Michel et Odéon, le Café Latin vous accueille dans l'un des 
            quartiers les plus vibrants de Paris, riche en histoire et en culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;