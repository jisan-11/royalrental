import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { MessageCircle, ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-float" />
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-gold/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-gold/20 rotate-45" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gold/20 backdrop-blur-sm rounded-full border border-gold/30">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gold-light">
              Premium Furniture Rental & Sales
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Royal Furniture{' '}
            <span className="text-gradient-gold">Rentals & Sales</span>
            <br />
            Across Saudi Arabia
          </h1>

          {/* Arabic Subtext */}
          <p className="text-xl md:text-2xl text-white/90 mb-2 font-display rtl-support">
            تأجير وبيع الأثاث الفاخر للمناسبات في جميع أنحاء المملكة
          </p>

          {/* English Description */}
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Transform your events with our premium collection of sofas, VIP chairs, cocktail tables, and curtains. 
            Serving weddings, exhibitions, corporate events, and parties across all of KSA.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://api.whatsapp.com/send?phone=966550868287"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Get a Quote on WhatsApp
              </a>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold font-display">500+</div>
              <div className="text-sm text-white/60">Events Served</div>
            </div>
            <div className="text-center border-x border-white/20 px-4">
              <div className="text-3xl md:text-4xl font-bold text-gold font-display">All KSA</div>
              <div className="text-sm text-white/60">Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold font-display">100%</div>
              <div className="text-sm text-white/60">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <Link
          to="/about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-gold transition-colors"
        >
          <span className="text-sm">Learn More</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
