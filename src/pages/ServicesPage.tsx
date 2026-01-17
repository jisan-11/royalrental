import Layout from '@/components/Layout';
import { ArrowRight, Wine, Armchair, Crown, Sofa, Blinds } from 'lucide-react';
import { Button } from '@/components/ui/button';

import sofasImg from '@/assets/service-sofas.jpg';
import chairsImg from '@/assets/service-chairs.jpg';
import tablesImg from '@/assets/service-tables.jpg';
import curtainsImg from '@/assets/service-curtains.jpg';

const ServicesPage = () => {
  const services = [
    {
      title: 'Cocktail Tables',
      titleAr: 'طاولات كوكتيل',
      description: 'Elegant cocktail tables and high-top tables perfect for networking events, receptions, and standing gatherings.',
      descriptionAr: 'طاولات كوكتيل أنيقة مثالية للمناسبات والاستقبالات',
      image: tablesImg,
      icon: Wine,
    },
    {
      title: 'Single Chairs',
      titleAr: 'كراسي فردية',
      description: 'Classic individual chairs including banquet chairs, chiavari chairs, and folding chairs for any event size.',
      descriptionAr: 'كراسي فردية كلاسيكية تناسب جميع أحجام المناسبات',
      image: chairsImg,
      icon: Armchair,
    },
    {
      title: 'VIP Chairs',
      titleAr: 'كراسي VIP',
      description: 'Premium VIP seating for distinguished guests, wedding stages, and executive events.',
      descriptionAr: 'مقاعد VIP فاخرة لكبار الضيوف والمناسبات الرسمية',
      image: chairsImg,
      icon: Crown,
    },
    {
      title: 'Sofa Chairs',
      titleAr: 'أرائك وكنب',
      description: 'Luxurious sofas and lounge seating for VIP areas, wedding stages, and reception lounges.',
      descriptionAr: 'أرائك فاخرة لمناطق كبار الشخصيات وصالات الاستقبال',
      image: sofasImg,
      icon: Sofa,
    },
    {
      title: 'Curtains',
      titleAr: 'ستائر',
      description: 'Beautiful curtains, draping, and backdrop decorations to transform any venue into a stunning space.',
      descriptionAr: 'ستائر وخلفيات جميلة لتحويل أي مكان إلى مساحة رائعة',
      image: curtainsImg,
      icon: Blinds,
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-navy">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Services / <span className="text-gradient-gold">خدماتنا</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Premium furniture collections for rent and sale across Saudi Arabia
          </p>
          <p className="text-gold rtl-support mt-2">
            مجموعات أثاث فاخرة للتأجير والبيع في جميع أنحاء المملكة
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-cream-dark relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        </div>

        <div className="container-custom relative">
          {/* Services List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lifted transition-all duration-500 hover-lift"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 p-3 rounded-full bg-gradient-gold">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gold text-sm rtl-support">{service.titleAr}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-2">{service.description}</p>
                  <p className="text-sm text-gold/80 rtl-support mb-4">{service.descriptionAr}</p>
                  <Button variant="goldOutline" size="sm" className="group/btn" asChild>
                    <a 
                      href="https://api.whatsapp.com/send?phone=966550868287" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Request Quote / طلب عرض سعر
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 p-8 bg-card rounded-2xl border border-border">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Looking for something specific?
            </h3>
            <p className="text-muted-foreground mb-2">
              We have an extensive collection available for rent and sale.
            </p>
            <p className="text-gold rtl-support mb-6">
              لدينا مجموعة واسعة متاحة للتأجير والبيع
            </p>
            <Button variant="gold" size="lg" asChild>
              <a 
                href="https://api.whatsapp.com/send?phone=966550868287" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Full Catalog on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
