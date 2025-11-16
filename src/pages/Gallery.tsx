import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import cafeInterior from '@/assets/café-inside-tables.png';
import cafeInterior1 from '@/assets/café-inside.png';
import moulesside from '@/assets/moules-side.png';
import bareside from '@/assets/bare-side.png';
import vinsside from '@/assets/vins-side.png';
import entrer1 from '@/assets/entrer1.png';
import plat1 from '@/assets/plat1.png';
import plat2 from '@/assets/plat2.png';
import plat3 from '@/assets/plat3.png'; 
import plat4 from '@/assets/plat4.png';
import plat5 from '@/assets/plat5.png';
import plat6 from '@/assets/plat6.png';
import plat8 from '@/assets/plat8.png';
import plat9 from '@/assets/plat9.png';
import disser1 from '@/assets/dissert1.png';
import disser2 from '@/assets/dissert2.png';
import disser3 from '@/assets/dissert3.png';
import disser4 from '@/assets/dissert4.png';
import disser5 from '@/assets/dissert5.png';
import decorativeOrnament from '@/assets/logoCL1.png';

const Gallery: React.FC = () => {
  const { t } = useLanguage();

  // Gallery images data
  const galleryImages = [
    {
      src: cafeInterior,
      alt: 'Intérieur du Café Latin',
      title: 'Ambiance Chaleureuse',
      description: 'Notre salle principale avec son décor typique parisien'
    },
    {
      src: cafeInterior1,
      alt: 'Terrasse du restaurant',
      title: 'Terrasse Parisienne',
      description: 'Profitez de nos places en terrasse dans le Quartier Latin'
    },
    {
      src: moulesside,
      alt: 'Moules&frites',
      title: 'Moules&Frites',
      description: 'Profitez de nos moules avec frites maison plaintées au beurre d\'ail'
    },
    {
      src: entrer1,
      alt: 'Cuisine française',
      title: 'Soupe à l’oignon gratinée',
      description: 'Un grand classique parisien, relevé par un gratin doré et fondant'
    },
    {
      src: plat1,
      alt: 'Cuisine française',
      title: 'Bœuf tartare, frites maison',
      description: 'Bœuf tartare, classique et savoureux, préparé à la demande'
    },
    {
      src: plat2,
      alt: 'Plats signature',
      title: 'Pêche du jour',
      description: 'La pêche du jour, servie avec une garniture de saison'
    },
    {
      src: plat3,
      alt: 'Plats signature',
      title: 'Spécialités Maison',
      description: 'Découvrez nos créations culinaires inspirées de la tradition'
    },
    {
      src: plat4,
      alt: 'Plats signature',
      title: 'Cheeseburger du Café',
      description: 'Cheeseburger du Café, généreux et gourmand, servi avec sa sauce maison et frites dorées'
    },
    {
      src: plat5,
      alt: 'Plats signature',
      title: 'Entrecôte (300 g) grillée',
      description: 'Entrecôte (300 g) grillée, nappée de bleu des Causses, servie avec de savoureuses frites maison'
    },
    {
      src: plat6,
      alt: 'Plats signature',
      title: 'Assiette mixte',
      description: 'Assiette mixte de charcuterie basque : spécialités maison Oteiza et saucisson sec du Pays Basque'
    },
    {
      src: plat8,
      alt: 'Plats signature',
      title: 'Rognon de veau',
      description: 'Rognon de veau tendre, nappé de sauce à la moutarde violette, accompagné d’une purée de pommes de terre maison'
    },
    {
      src: plat9,
      alt: 'Plats signature',
      title: 'Moules&Frites',
      description: 'Savourez nos moules fraîches accompagnées de frites croustillantes !'
    },
    {
      src: disser1,
      alt: 'Plats signature',
      title: 'Fondant au chocolat',
      description: 'Fondant au chocolat, cœur coulant '
    },
    {
      src: disser2,
      alt: 'Plats signature',
      title: 'Mousse au chocolat',
      description: 'Délicieuse mousse au chocolat intense (70% cacao), sans sucre ajouté'
    },
    {
      src: disser3,
      alt: 'Plats signature',
      title: 'Île flottante',
      description: 'Île flottante, douceur aérienne sur crème anglaise'
    },
    {
      src: disser4,
      alt: 'Plats signature',
      title: 'Crème brûlée',
      description: 'Crème brûlée à la vanille de Madagascar, délicatement caramélisée'
    },
    {
      src: disser5,
      alt: 'Plats signature',
      title: 'Café gourmand',
      description: 'un café accompagné de petites douceurs irrésistibles'
    },
    {
      src: bareside,
      alt: 'Bar du restaurant',
      title: 'Bar à Vins',
      description: 'Sélection de vins français et cocktails classiques'
    },
    {
      src: vinsside,
      alt: 'Bar du restaurant',
      title: 'Bar à Vins',
      description: 'partagez des moments de plaisir autour de nos meilleurs crus français'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-elegant pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="flex justify-center">
            <img 
              src={decorativeOrnament} 
              alt="Decorative ornament" 
              className="w-20 h-20 opacity-80"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-elegant font-bold text-bordeaux mb-2">
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
              <div className="flex justify-center mb-2">
                <img 
                  src={decorativeOrnament} 
                  alt="Decorative ornament" 
                  className="w-20 h-20 opacity-80"
                />
              </div>
              <h2 className="text-3xl font-elegant font-semibold text-bordeaux mb-6">
                Une Expérience typiquement Parisienne
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