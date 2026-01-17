import Layout from '@/components/Layout';
import { MapPin, Phone, Award, Users, Clock, Truck } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import galleryImage1 from '@/assets/gallery-1.jpg';
import galleryImage2 from '@/assets/gallery-2.jpg';
import galleryImage3 from '@/assets/gallery-3.jpg';

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section with Full Image */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Royal Rental KSA Events" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-gold font-medium tracking-widest uppercase mb-4 animate-fade-up">
            About Us • من نحن
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up">
            Royal Rental <span className="text-gold">KSA</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light animate-fade-up">
            Premium Event Furniture Rental & Sales
          </p>
          <p className="text-lg text-gold/90 mt-2 rtl-support animate-fade-up">
            تأجير وبيع أثاث المناسبات الفاخر
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={galleryImage1} 
                  alt="Elegant Event Setup" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-card p-6 rounded-2xl shadow-xl border border-border">
                <p className="text-4xl font-bold text-gold">10+</p>
                <p className="text-muted-foreground text-sm">Years Experience</p>
                <p className="text-gold/70 text-xs rtl-support">سنوات من الخبرة</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-gold font-medium tracking-wider uppercase mb-3">Our Story</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Transforming Events Across Saudi Arabia
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Royal Rental KSA is a leading provider of premium event furniture rental and sales 
                services. We specialize in transforming ordinary spaces into extraordinary venues 
                for weddings, exhibitions, corporate events, and private parties.
              </p>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                With a commitment to quality and excellence, we offer an extensive collection of 
                elegant furniture including VIP chairs, cocktail tables, luxurious sofas, and 
                beautiful curtains—all designed to create unforgettable experiences.
              </p>
              
              {/* Location */}
              <div className="flex items-center gap-4 p-5 bg-cream-dark rounded-xl">
                <div className="p-3 rounded-full bg-gold/10">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Riyadh, Shifa Sanaya District, Baddar</p>
                  <p className="text-gold text-sm rtl-support">الرياض – حي الشفاء الصناعية، بدر</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Clean Cards */}
      <section className="py-20 bg-cream-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-wider uppercase mb-3">What Drives Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="group bg-card p-8 lg:p-10 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold/20">
              <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Vision</h3>
              <p className="text-gold text-sm mb-4 rtl-support">رؤيتنا</p>
              <p className="text-muted-foreground leading-relaxed">
                To be the premier furniture rental company in Saudi Arabia, recognized for 
                exceptional quality, innovative designs, and outstanding customer service.
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-card p-8 lg:p-10 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold/20">
              <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Mission</h3>
              <p className="text-gold text-sm mb-4 rtl-support">مهمتنا</p>
              <p className="text-muted-foreground leading-relaxed">
                To provide clients with the highest quality event furniture at competitive prices, 
                delivered with professionalism and care, exceeding expectations every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid with Images */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-wider uppercase mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine premium quality with exceptional service to make your events truly memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Premium Quality', titleAr: 'جودة عالية', desc: 'Handpicked luxury furniture for elegant events' },
              { icon: Users, title: 'Expert Team', titleAr: 'فريق متخصص', desc: 'Professional setup and dedicated support' },
              { icon: Clock, title: 'On-Time Delivery', titleAr: 'توصيل في الوقت', desc: 'Guaranteed timely delivery across KSA' },
              { icon: Truck, title: 'Full Service', titleAr: 'خدمة متكاملة', desc: 'Delivery, setup, and pickup included' },
            ].map((feature, index) => (
              <div 
                key={index}
                className="group text-center p-8 bg-card rounded-2xl border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-gold text-sm mb-3 rtl-support">{feature.titleAr}</p>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Strip */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wider uppercase mb-3">Our Work</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Creating Memorable Events
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto rtl-support">
              نحول كل مناسبة إلى تجربة استثنائية لا تُنسى
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[galleryImage1, galleryImage2, galleryImage3].map((img, index) => (
              <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden group">
                <img 
                  src={img} 
                  alt={`Event Setup ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-dark">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us today to discuss your furniture rental needs and get a personalized quote.
          </p>
          <a 
            href="tel:+966550868287"
            className="inline-flex items-center gap-3 bg-gradient-gold text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>+966 550 868 287</span>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
