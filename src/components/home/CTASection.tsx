import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-2xl bg-gradient-navy border border-white/10">
          {/* Content */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Elevate Your{' '}
            <span className="text-gradient-gold">Next Event?</span>
          </h2>

          <p className="text-white/70 text-lg mb-2 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We're here to help make 
            your event extraordinary.
          </p>
          <p className="text-gold rtl-support text-lg mb-8">
            تواصل معنا اليوم للحصول على استشارة مجانية وعرض أسعار
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <a 
                href="https://api.whatsapp.com/send?phone=966550868287" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
            <Button 
              variant="goldOutline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <a href="tel:+966550868287" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call: +966 550 868 287
              </a>
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm">
              ✓ Free Consultation &nbsp;&nbsp; ✓ Quick Response &nbsp;&nbsp; ✓ Competitive Pricing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
