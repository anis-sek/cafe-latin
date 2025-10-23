import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import menuImage from '@/assets/Menu café latin_page-0001.jpg';
import decorativeOrnament from '@/assets/Café-logo.png';
import { useState } from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const Menu: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Sample menu data - in a real app, this would come from an API or CMS
  const menuSections = [
    {
      title: 'Entrées / Appetizers',
      items: [
        { name: 'Escargots de Bourgogne', price: '12€', description: 'Six escargots avec beurre à l\'ail et persil' },
        { name: 'Foie gras de canard au Porto', price: '16€', description: 'Servi avec chutney de saison' },
        { name: 'Soupe à l\'oignon gratinée', price: '10€', description: 'Gratinée au Gruyère' },
      ]
    },
    {
      title: 'Plats Principaux / Main Course',
      items: [
        { name: 'Coq au Vin', price: '24€', description: 'Coq mijoté au vin rouge de Bourgogne' },
        { name: 'Bouillabaisse Marseillaise', price: '28€', description: 'Soupe de poissons traditionnelle avec rouille' },
        { name: 'Confit de Canard', price: '22€', description: 'Cuisse confite, pommes de terre sarladaises' },
      ]
    },
    {
      title: 'Fromages / Cheese',
      items: [
        { name: 'Plateau de Fromages', price: '14€', description: 'Sélection de fromages français AOC' },
        { name: 'Camembert rôti', price: '12€', description: 'Au miel et aux noix' },
      ]
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Tarte Tatin', price: '9€', description: 'Aux pommes caramélisées' },
        { name: 'Crème brûlée', price: '8€', description: 'À la vanille de Madagascar' },
        { name: 'Mousse au Chocolat', price: '8€', description: '70% cacao, sans sucre ajouté' },
      ]
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
            {t('menu.title')}
          </h1>
          <p className="text-xl text-gold font-elegant">
            {t('menu.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Menu Sections */}
          <div className="space-y-8">
            {menuSections.map((section, sectionIndex) => (
              <Card key={sectionIndex} className="shadow-card border-bordeaux/20 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-elegant font-semibold text-bordeaux mb-6 border-b border-gold/30 pb-2">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start group">
                        <div className="flex-1">
                          <div className="flex justify-between items-baseline">
                            <h3 className="font-body font-medium text-charcoal group-hover:text-bordeaux transition-colors">
                              {item.name}
                            </h3>
                            <div className="flex-1 border-b border-dotted border-muted mx-3 mt-2"></div>
                            <span className="text-lg font-semibold text-gold">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1 italic">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Menu Image */}
          <div className="lg:sticky lg:top-32">
    <>
      {/* --- La Card cliquable --- */}
      <Card 
        className="shadow-elegant border-bordeaux/20 overflow-hidden cursor-pointer transition-transform hover:scale-105"
        onClick={() => setIsOpen(true)}
      >
        <CardContent className="p-0">
          <img 
            src={menuImage}
            alt="Menu du Café Latin"
            className="w-full h-auto object-cover"
          />
        </CardContent>
      </Card>

      {/* --- Modal plein écran --- */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 mt-20 "
          onClick={() => setIsOpen(false)} 
        >
          <Zoom>
          <img 
            src={menuImage} 
            alt="Menu plein écran"
            className="w-full h-auto object-cover"
          />
          </Zoom>
        </div>
      )}
    </>


            
            {/* Wine Selection */}
            <Card className="mt-8 shadow-card border-bordeaux/20 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-elegant font-semibold text-bordeaux mb-4 border-b border-gold/30 pb-2">
                  Vins / Wines
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline group">
                    <span className="font-body group-hover:text-bordeaux transition-colors">Bordeaux Rouge AOC</span>
                    <div className="flex-1 border-b border-dotted border-muted mx-3 mt-2"></div>
                    <span className="text-gold font-semibold">35€</span>
                  </div>
                  <div className="flex justify-between items-baseline group">
                    <span className="font-body group-hover:text-bordeaux transition-colors">Chablis Blanc</span>
                    <div className="flex-1 border-b border-dotted border-muted mx-3 mt-2"></div>
                    <span className="text-gold font-semibold">40€</span>
                  </div>
                  <div className="flex justify-between items-baseline group">
                    <span className="font-body group-hover:text-bordeaux transition-colors">Champagne Brut</span>
                    <div className="flex-1 border-b border-dotted border-muted mx-3 mt-2"></div>
                    <span className="text-gold font-semibold">65€</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom decorative section */}
        <div className="text-center mt-16">
          <div className="flex justify-center">
            <img 
              src={decorativeOrnament} 
              alt="Decorative ornament" 
              className="w-16 h-16 opacity-60"
            />
          </div>
          <p className="mt-4 text-muted-foreground font-body italic">
            Tous nos plats sont préparés avec des ingrédients frais et de saison
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;