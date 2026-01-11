import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      titleAr: 'جودة عالية',
      description: 'Handpicked luxury furniture for elegant events',
    },
    {
      icon: Users,
      title: 'Expert Team',
      titleAr: 'فريق متخصص',
      description: 'Professional setup and delivery services',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      titleAr: 'توصيل في الوقت المحدد',
      description: 'On-time delivery and pickup guaranteed',
    },
  ];

  const highlights = [
    'Weddings & Engagements',
    'Corporate Events',
    'Exhibitions & Trade Shows',
    'Private Parties',
    'Government Functions',
    'VIP Gatherings',
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-medium text-gold uppercase tracking-wider">
                About Us / من نحن
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Trusted Partner for{' '}
              <span className="text-gradient-gold">Event Furniture</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 rtl-support">
              شريكك الموثوق لأثاث المناسبات الفاخر في المملكة العربية السعودية
            </p>

            <p className="text-foreground/80 mb-8 leading-relaxed">
              Royal Rental KSA has been transforming ordinary spaces into extraordinary event venues 
              across Saudi Arabia. We specialize in providing premium furniture rental and sales 
              services for weddings, exhibitions, corporate events, and private parties. Our 
              extensive collection includes elegant sofas, stylish chairs, sophisticated tables, 
              and luxurious curtains—all designed to create memorable experiences.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover:border-gold/30 hover:shadow-gold transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-gold text-white group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gold rtl-support">{feature.titleAr}</p>
                    <p className="text-muted-foreground mt-2">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
