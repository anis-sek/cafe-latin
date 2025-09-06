import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import decorativeOrnament from '@/assets/decorative-ornament.png';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={decorativeOrnament} 
                alt="Decorative ornament" 
                className="w-12 h-12 opacity-80"
              />
              <h3 className="text-2xl font-elegant font-bold text-gold">
                {t('home.title')}
              </h3>
            </div>
            <p className="text-cream/80 font-body text-sm leading-relaxed">
              Restaurant parisien authentique au cœur du Quartier Latin. 
              Découvrez l'art culinaire français dans une ambiance chaleureuse et raffinée.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-elegant font-semibold text-gold mb-4">
              Informations
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-body text-cream/80">{t('common.address')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-body text-cream/80">{t('common.phone')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-body text-cream/80">{t('common.email')}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-elegant font-semibold text-gold mb-4">
              {t('home.hours.title')}
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div className="font-body text-cream/80">
                  <p>Lun - Dim: 11h30 - 00h00</p>
                  <p>Vendredi - Samedi: jusqu'à 2h00</p>
                  <p className="text-xs mt-2 italic">Service continu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-cream/60 font-body">
              © 2024 Café Latin Paris. Tous droits réservés.
            </div>
            <div className="text-sm text-cream/60 font-body">
              Quartier Latin • Saint-Michel • Odéon
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;