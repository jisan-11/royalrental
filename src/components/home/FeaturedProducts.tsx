import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import chairsImg from '@/assets/service-chairs.jpg';
import sofasImg from '@/assets/service-sofas.jpg';
import tablesImg from '@/assets/service-tables.jpg';

const FeaturedProducts = () => {
  const products = [
    {
      title: 'Cocktail Tables',
      titleAr: 'طاولات كوكتيل',
      description: 'Elegant high-top tables perfect for receptions, networking events, and cocktail parties.',
      image: tablesImg,
      features: ['Various heights', 'Modern designs', 'LED options available'],
    },
    {
      title: 'Single Chairs',
      titleAr: 'كراسي فردية',
      description: 'Classic banquet and chiavari chairs for weddings, conferences, and formal gatherings.',
      image: chairsImg,
      features: ['Multiple colors', 'Cushioned seats', 'Stackable design'],
    },
    {
      title: 'VIP Chairs',
      titleAr: 'كراسي VIP',
      description: 'Premium throne and executive chairs for VIP sections, stages, and distinguished guests.',
      image: chairsImg,
      features: ['Royal designs', 'Premium upholstery', 'Stage-ready'],
    },
    {
      title: 'Sofa Chairs',
      titleAr: 'كراسي أريكة',
      description: 'Luxurious lounge seating for VIP areas, waiting lounges, and relaxation zones.',
      image: sofasImg,
      features: ['Comfortable seating', 'Elegant fabrics', 'Modular options'],
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-sm font-medium text-gold uppercase tracking-wider">
              Our Products / منتجاتنا
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Furniture for{' '}
            <span className="text-gradient-gold">Every Occasion</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Discover our exclusive collection of event furniture, carefully curated 
            to elevate your celebrations and corporate events.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lifted transition-all duration-500 hover-lift"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-xl font-bold text-white">
                    {product.title}
                  </h3>
                  <p className="text-gold text-sm rtl-support">{product.titleAr}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-foreground/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="goldOutline" size="sm" className="w-full group/btn" asChild>
                  <a 
                    href="https://api.whatsapp.com/send?phone=966550868287" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 -translate-y-1/2 translate-x-1/2 bg-gradient-gold opacity-20 rounded-full group-hover:opacity-40 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="gold" size="lg">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
