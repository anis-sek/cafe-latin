import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import menuImage from '@/assets/Menu café latin_page-0001.jpg';
import LACAVE from '@/assets/LACAVE.png'
import decorativeOrnament from '@/assets/logoCL1.png';
import cartevin from '@/assets/vincarte.pdf';

const Menu: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-elegant pt-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <img 
              src={decorativeOrnament} 
              alt="Decorative ornament" 
              className="w-20 h-20 opacity-80 mt-3"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-elegant font-bold text-bordeaux -mt-4">
            {t('menu.title')}
          </h1>
          <p className="text-xl text-gold font-elegant">
            {t('menu.subtitle')}
          </p>
        </div>

        <p className="font-body italic max-w-3xl mx-auto text-center">
         Tous nos plats sont élaborés à partir d’ingrédients frais et de saison,<br />
          sélectionnés avec soin pour préserver la richesse et la sincérité des saveurs.
       </p>


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

        {/* Nouvelle phrase améliorée */}
          <p className="font-body italic max-w-3xl mx-auto text-center">
            Découvrez également notre remarquable sélection de vins <strong className='font-bold text-bordeaux'>plus de 55 références </strong> 
            issues des plus belles régions de France, choisies avec exigence pour combler aussi bien les amateurs de grands crus que les passionnés de découvertes authentiques.
          </p>

        {/* Image des vines 55 */}
        <div className="flex justify-center">
          <Card className="shadow-elegant border-bordeaux/20 overflow-hidden max-w-4xl w-full">
            <CardContent className="p-0">
              <Zoom>
                <img
                  src={LACAVE}
                  alt="LA CAVE A VINE"
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
              className="w-20 h-20 opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;