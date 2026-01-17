import { Award, Truck, Shield, Users, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CompanyHighlights = () => {
  const stats = [
    { value: '500+', label: 'Events Served', labelAr: 'مناسبة ناجحة' },
    { value: '100+', label: 'Happy Clients', labelAr: 'عميل سعيد' },
    { value: '24/7', label: 'Support', labelAr: 'دعم متواصل' },
    { value: 'KSA', label: 'Nationwide', labelAr: 'جميع أنحاء المملكة' },
  ];

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      titleAr: 'جودة عالية',
      description: 'Handpicked luxury furniture for elegant events.',
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      titleAr: 'توصيل مجاني',
      description: 'Complimentary delivery across Saudi Arabia.',
    },
    {
      icon: Shield,
      title: 'Reliable Service',
      titleAr: 'خدمة موثوقة',
      description: 'Professional setup and on-time delivery.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      titleAr: 'فريق متخصص',
      description: 'Experienced professionals at your service.',
    },
  ];

  return (
    <section className="section-padding bg-gradient-navy relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-sm font-medium text-gold uppercase tracking-wider">
              Why Choose Us / لماذا نحن
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Trusted Partner for{' '}
            <span className="text-gradient-gold">Event Furniture</span>
          </h2>

          <p className="text-white/70 text-lg">
            Royal Rental KSA provides premium furniture rental and sales services 
            across all of Saudi Arabia. From weddings to corporate events, we deliver excellence.
          </p>
          <p className="text-gold rtl-support text-lg mt-2">
            رويال رينتال السعودية - شريكك الموثوق لأثاث المناسبات الفاخر
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/30 transition-colors"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-white font-medium">{stat.label}</div>
              <div className="text-gold text-sm rtl-support">{stat.labelAr}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="p-3 w-fit rounded-lg bg-gradient-gold text-white mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-gold text-sm rtl-support mb-2">{feature.titleAr}</p>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Location Highlight */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-gradient-gold text-white">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-medium">Main Office</p>
              <p className="text-white/60 text-sm">Riyadh – Shifa Sanaya District, Baddar</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/20" />
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-gradient-gold text-white">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-medium">Available</p>
              <p className="text-white/60 text-sm">All across Saudi Arabia</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/about">
            <Button variant="goldOutline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;
