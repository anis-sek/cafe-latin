import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import decorativeOrnament from '@/assets/logoCL1.png';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=30+rue+Saint-André+des+Arts,+75006+Paris+France', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-elegant pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <img 
              src={decorativeOrnament} 
              alt="Decorative ornament" 
              className="w-20 h-20 opacity-100"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-elegant font-bold text-bordeaux">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gold font-elegant">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Address Card */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-bordeaux/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-elegant font-semibold text-bordeaux mb-2">
                      Adresse
                    </h3>
                    <p className="text-charcoal/80 font-body mb-3">
                      {t('common.address')}
                    </p>
                    <p className="text-sm text-muted-foreground font-body mb-4">
                      Quartier Latin - Métro Saint-Michel, Odéon
                    </p>
                    <Button 
                      onClick={handleLocationClick}
                      variant="outline" 
                      size="sm"
                      className="border-bordeaux/30 text-bordeaux hover:bg-bordeaux hover:text-primary-foreground"
                    >
                      Voir sur Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-bordeaux/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                      <Phone className="w-6 h-6 text-charcoal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-elegant font-semibold text-bordeaux">
                        {t('contact.phone')}
                      </h3>
                      <p className="text-charcoal/80 font-body">
                        {t('common.phone')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                      <Mail className="w-6 h-6 text-charcoal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-elegant font-semibold text-bordeaux">
                        Email
                      </h3>
                      <p className="text-charcoal/80 font-body">
                        {t('common.email')}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-bordeaux/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-elegant font-semibold text-bordeaux mb-4">
                      {t('home.hours.title')}
                    </h3>
                    <div className="space-y-2 text-charcoal/80 font-body">
                      <p>{t('home.hours.weekdays')}</p>
                      <p>{t('home.hours.weekends')}</p>
                      <p className="text-sm italic mt-3">{t('home.hours.kitchen')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="flex justify-center mb-4">
            <img 
              src={decorativeOrnament} 
              alt="Decorative ornament" 
              className="w-20 h-20 opacity-100"
            />
          </div>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto font-body">
            Nous avons hâte de vous accueillir au Café Latin pour partager avec vous 
            notre passion pour la gastronomie française et l'art de vivre parisien.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;