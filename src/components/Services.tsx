import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

import sofasImg from '@/assets/service-sofas.jpg';
import chairsImg from '@/assets/service-chairs.jpg';
import tablesImg from '@/assets/service-tables.jpg';
import curtainsImg from '@/assets/service-curtains.jpg';

const Services = () => {
  const services = [
    {
      title: 'Luxury Sofas',
      titleAr: 'أرائك فاخرة',
      description: 'Elegant sofas and seating arrangements for VIP lounges, wedding stages, and reception areas.',
      image: sofasImg,
    },
    {
      title: 'Event Chairs',
      titleAr: 'كراسي المناسبات',
      description: 'Classic chiavari chairs, banquet chairs, and specialty seating for any event size.',
      image: chairsImg,
    },
    {
      title: 'Tables & Displays',
      titleAr: 'طاولات وعروض',
      description: 'Round tables, rectangular tables, cocktail tables, and exhibition displays.',
      image: tablesImg,
    },
    {
      title: 'Curtains & Draping',
      titleAr: 'ستائر وديكور',
      description: 'Luxurious curtains, backdrops, and fabric draping to transform any venue.',
      image: curtainsImg,
    },
  ];

  return (
    <section id="services" className="section-padding bg-cream-dark relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-sm font-medium text-gold uppercase tracking-wider">
              Our Services / خدماتنا
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Furniture{' '}
            <span className="text-gradient-gold">Collections</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            From intimate gatherings to grand celebrations, we provide the perfect furniture 
            to match your vision and elevate your event.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lifted transition-all duration-500 hover-lift"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
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
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="goldOutline" size="sm" className="group/btn" asChild>
                  <a href="https://wa.me/966571269056" target="_blank" rel="noopener noreferrer">
                    Request Quote
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 -translate-y-1/2 translate-x-1/2 bg-gradient-gold opacity-20 rounded-full group-hover:opacity-40 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Looking for something specific? We have an extensive collection available.
          </p>
          <Button variant="gold" size="lg" asChild>
            <a href="https://wa.me/966571269056" target="_blank" rel="noopener noreferrer">
              View Full Catalog on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
