import Layout from '@/components/Layout';
import { CheckCircle, Award, Users, Clock, MapPin, Building, Target, Eye, Gem } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      titleAr: 'جودة عالية',
      description: 'Handpicked luxury furniture for elegant events across KSA.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      titleAr: 'فريق متخصص',
      description: 'Professional setup, delivery, and pickup services.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      titleAr: 'توصيل في الوقت المحدد',
      description: 'On-time delivery and pickup guaranteed across Saudi Arabia.',
    },
    {
      icon: Building,
      title: 'Rent & Sell',
      titleAr: 'تأجير وبيع',
      description: 'Flexible options to rent or purchase premium furniture.',
    },
  ];

  const highlights = [
    { en: 'Weddings & Engagements', ar: 'حفلات الزفاف والخطوبة' },
    { en: 'Corporate Events', ar: 'المناسبات الرسمية' },
    { en: 'Exhibitions & Trade Shows', ar: 'المعارض والمؤتمرات' },
    { en: 'Private Parties', ar: 'الحفلات الخاصة' },
    { en: 'Government Functions', ar: 'المناسبات الحكومية' },
    { en: 'VIP Gatherings', ar: 'تجمعات كبار الشخصيات' },
  ];

  const products = [
    { en: 'Cocktail Tables', ar: 'طاولات كوكتيل' },
    { en: 'Single Chairs', ar: 'كراسي فردية' },
    { en: 'VIP Chairs', ar: 'كراسي VIP' },
    { en: 'Sofa Chairs', ar: 'كراسي أريكة' },
    { en: 'Curtains & Draping', ar: 'ستائر وديكور' },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-navy">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About Us / <span className="text-gradient-gold">من نحن</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Your trusted partner for premium event furniture in Saudi Arabia
          </p>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="section-padding bg-cream-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-medium text-gold uppercase tracking-wider">
                Company Profile / الملف التعريفي
              </span>
              <div className="h-px w-8 bg-gold" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Welcome to <span className="text-gradient-gold">Royal Rental KSA</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-4">
              Royal Rental KSA is a leading provider of premium event furniture rental and sales 
              services across the Kingdom of Saudi Arabia. With years of experience in the industry, 
              we have established ourselves as the go-to partner for clients seeking high-quality, 
              elegant furniture for their special occasions.
            </p>
            <p className="text-gold rtl-support text-lg">
              رويال رينتال السعودية - الشركة الرائدة في تأجير وبيع أثاث المناسبات الفاخر في جميع أنحاء المملكة العربية السعودية
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vision */}
            <div className="p-8 bg-card rounded-2xl border border-border hover:border-gold/30 transition-colors shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-gold text-white">
                  <Eye className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Our Vision</h3>
                  <p className="text-gold rtl-support">رؤيتنا</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the premier furniture rental company in Saudi Arabia, recognized for our 
                exceptional quality, innovative designs, and outstanding customer service. We aim 
                to transform every event into an unforgettable experience through our premium 
                furniture solutions.
              </p>
              <p className="text-foreground/70 rtl-support mt-4 text-sm">
                أن نكون الشركة الرائدة في تأجير الأثاث في المملكة العربية السعودية، ومعروفين بجودتنا الاستثنائية وتصاميمنا المبتكرة وخدمة العملاء المتميزة
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 bg-card rounded-2xl border border-border hover:border-gold/30 transition-colors shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-gold text-white">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Our Mission</h3>
                  <p className="text-gold rtl-support">مهمتنا</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide our clients with the highest quality event furniture at competitive prices, 
                delivered with professionalism and care. We are committed to exceeding expectations 
                through reliable service, timely delivery, and personalized attention to every detail.
              </p>
              <p className="text-foreground/70 rtl-support mt-4 text-sm">
                تزويد عملائنا بأعلى جودة من أثاث المناسبات بأسعار تنافسية، مع تقديم خدمة احترافية وموثوقة
              </p>
            </div>
          </div>

          {/* Key Offerings */}
          <div className="p-8 bg-card rounded-2xl border border-border mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-gold text-white">
                <Gem className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">Our Key Offerings</h3>
                <p className="text-gold rtl-support">منتجاتنا الرئيسية</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-cream-dark rounded-xl hover:bg-background transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium block">{product.en}</span>
                    <span className="text-gold text-sm rtl-support">{product.ar}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-gold" />
                <span className="text-sm font-medium text-gold uppercase tracking-wider">
                  Who We Are
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Premium Furniture{' '}
                <span className="text-gradient-gold">Rental & Sales</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-4 rtl-support">
                رويال رينتال السعودية - نقدم خدمات تأجير وبيع الأثاث الفاخر في جميع أنحاء المملكة العربية السعودية
              </p>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                <strong>Royal Rental KSA</strong> has been transforming ordinary spaces into extraordinary event venues 
                across Saudi Arabia. We specialize in providing premium furniture rental and sales 
                services for weddings, exhibitions, corporate events, and private parties.
              </p>

              <p className="text-foreground/80 mb-8 leading-relaxed">
                Our extensive collection includes elegant sofas, stylish VIP chairs, sophisticated cocktail tables, 
                single chairs, and luxurious curtains—all designed to create memorable experiences for your guests.
              </p>

              {/* Location Card */}
              <div className="p-6 bg-card rounded-xl border border-border mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-gold text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Main Office / المكتب الرئيسي
                    </h3>
                    <p className="text-muted-foreground">
                      Riyadh – Shifa Sanaya District, Baddar
                    </p>
                    <p className="text-gold rtl-support mt-1">
                      الرياض – حي الشفاء الصناعية، بدر
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlights Grid */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Events We Serve / المناسبات التي نخدمها
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-foreground/80 p-3 bg-cream-dark rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <div>
                      <span className="text-sm block">{item.en}</span>
                      <span className="text-xs text-gold rtl-support">{item.ar}</span>
                    </div>
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
    </Layout>
  );
};

export default AboutPage;
