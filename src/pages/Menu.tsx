import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import menuImage from '@/assets/Menu café latin_page-0001.jpg';
import decorativeOrnament from '@/assets/cafe-logo.png';
import cartevin from '@/assets/vincarte.pdf';

const Menu: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-elegant pt-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-2">
          <div className="flex justify-center">
            <img 
              src={decorativeOrnament} 
              alt="Decorative ornament" 
              className="w-20 h-20 opacity-80"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-elegant font-bold text-bordeaux -mt-4">
            {t('menu.title')}
          </h1>
          <p className="text-xl text-gold font-elegant">
            {t('menu.subtitle')}
          </p>
        </div>

        {/* Image centrée du menu */}
        <div className="flex justify-center">
          <Card className="shadow-elegant border-bordeaux/20 overflow-hidden max-w-4xl w-full">
            <CardContent className="p-0">
              <Zoom>
                <img
                  src={menuImage}
                  alt="Menu du Café Latin"
                  className="w-full h-auto object-contain cursor-zoom-in transition-transform hover:scale-105 duration-300"
                />
              </Zoom>
            </CardContent>
          </Card>
        </div>

        {/* Section décorative + phrase + carte des vins */}
        <div className="text-center">
          <div className="flex justify-center">
            <img 
              src={decorativeOrnament} 
              alt="Decorative ornament" 
              className="w-16 h-16 opacity-60"
            />
          </div>

          {/* Nouvelle phrase améliorée */}
          <p className=" text-muted-foreground font-body italic max-w-3xl mx-auto">
            Tous nos plats sont préparés avec des ingrédients frais et de saison.
            <br />
            Découvrez également notre exceptionnelle sélection de vins — plus de <strong className='font-bold'>55 références</strong> 
            issues des plus belles régions de France, soigneusement choisies pour ravir les amateurs des grands crus comme des découvertes authentiques.
          </p>

          {/* Carte des vins */}
          <div className="mt-2 flex justify-center">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-bordeaux/20 bg-card/80 backdrop-blur-sm max-w-md w-full">
              <CardContent className="p-6 text-center">
                <h2 className="text-2xl font-elegant font-semibold text-bordeaux mb-3">
                  Carte des Vins
                </h2>
                <p className="text-charcoal/80 mb-2">
                  Découvrez nos références soigneusement sélectionnées.
                </p>
                <a
                  href={cartevin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-bordeaux text-white font-semibold px-6 py-3 rounded-lg hover:bg-bordeaux/90 transition"
                >
                  Voir la carte des vins (PDF)
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;