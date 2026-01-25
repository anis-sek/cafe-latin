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
      alt: t('gallery.images.1.alt'),
      title: t('gallery.images.1.title'),
      description: t('gallery.images.1.description'),
    },
    {
      src: cafeInterior1,
      alt: t('gallery.images.2.alt'),
      title: t('gallery.images.2.title'),
      description: t('gallery.images.2.description'),
    },
    {
      src: moulesside,
      alt: t('gallery.images.3.alt'),
      title: t('gallery.images.3.title'),
      description: t('gallery.images.3.description'),
    },
    {
      src: entrer1,
      alt: t('gallery.images.4.alt'),
      title: t('gallery.images.4.title'),
      description: t('gallery.images.4.description'),
    },
    {
      src: plat1,
      alt: t('gallery.images.5.alt'),
      title: t('gallery.images.5.title'),
      description: t('gallery.images.5.description'),
    },
    {
      src: plat2,
      alt: t('gallery.images.6.alt'),
      title: t('gallery.images.6.title'),
      description: t('gallery.images.6.description'),
    },
    {
      src: plat3,
      alt: t('gallery.images.7.alt'),
      title: t('gallery.images.7.title'),
      description: t('gallery.images.7.description'),
    },
    {
      src: plat4,
      alt: t('gallery.images.8.alt'),
      title: t('gallery.images.8.title'),
      description: t('gallery.images.8.description'),
    },
    {
      src: plat5,
      alt: t('gallery.images.9.alt'),
      title: t('gallery.images.9.title'),
      description: t('gallery.images.9.description'),
    },
    {
      src: plat6,
      alt: t('gallery.images.10.alt'),
      title: t('gallery.images.10.title'),
      description: t('gallery.images.10.description'),
    },
    {
      src: plat8,
      alt: t('gallery.images.11.alt'),
      title: t('gallery.images.11.title'),
      description: t('gallery.images.11.description'),
    },
    {
      src: plat9,
      alt: t('gallery.images.12.alt'),
      title: t('gallery.images.12.title'),
      description: t('gallery.images.12.description'),
    },
    {
      src: disser1,
      alt: t('gallery.images.13.alt'),
      title: t('gallery.images.13.title'),
      description: t('gallery.images.13.description'),
    },
    {
      src: disser2,
      alt: t('gallery.images.14.alt'),
      title: t('gallery.images.14.title'),
      description: t('gallery.images.14.description'),
    },
    {
      src: disser3,
      alt: t('gallery.images.15.alt'),
      title: t('gallery.images.15.title'),
      description: t('gallery.images.15.description'),
    },
    {
      src: disser4,
      alt: t('gallery.images.16.alt'),
      title: t('gallery.images.16.title'),
      description: t('gallery.images.16.description'),
    },
    {
      src: disser5,
      alt: t('gallery.images.17.alt'),
      title: t('gallery.images.17.title'),
      description: t('gallery.images.17.description'),
    },
    {
      src: bareside,
      alt: t('gallery.images.18.alt'),
      title: t('gallery.images.18.title'),
      description: t('gallery.images.18.description'),
    },
    {
      src: vinsside,
      alt: t('gallery.images.19.alt'),
      title: t('gallery.images.19.title'),
      description: t('gallery.images.19.description'),
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
              alt={t('common.decorativeOrnamentAlt')}
              className="w-20 h-20 opacity-80"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-elegant font-bold text-bordeaux mb-2">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-gold font-elegant">{t('gallery.subtitle')}</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group shadow-card hover:shadow-elegant transition-all duration-300 border-bordeaux/20 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-elegant font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm font-body opacity-90">{image.description}</p>
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
                  alt={t('common.decorativeOrnamentAlt')}
                  className="w-20 h-20 opacity-80"
                />
              </div>
              <h2 className="text-3xl font-elegant font-semibold text-bordeaux mb-6">
                {t('gallery.experience.title')}
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed mb-6 font-body">
                {t('gallery.experience.description')}
              </p>
              <p className="text-base text-muted-foreground font-body italic">
                {t('gallery.experience.quote')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Location highlight */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-elegant font-semibold text-bordeaux mb-4">
            {t('gallery.location.title')}
          </h3>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto font-body">
            {t('gallery.location.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
