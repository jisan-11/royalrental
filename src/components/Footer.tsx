import { Link } from 'react-router-dom';
import { Crown, MessageCircle, Instagram, Phone, Heart, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', labelAr: 'الرئيسية', href: '/' },
    { label: 'About', labelAr: 'من نحن', href: '/about' },
    { label: 'Services', labelAr: 'خدماتنا', href: '/services' },
    { label: 'Gallery', labelAr: 'معرض الصور', href: '/gallery' },
    { label: 'Contact', labelAr: 'تواصل معنا', href: '/contact' },
  ];

  const services = [
    { label: 'Cocktail Tables', labelAr: 'طاولات كوكتيل' },
    { label: 'Single Chairs', labelAr: 'كراسي فردية' },
    { label: 'VIP Chairs', labelAr: 'كراسي VIP' },
    { label: 'Sofa Chairs', labelAr: 'أرائك وكنب' },
    { label: 'Curtains', labelAr: 'ستائر' },
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Crown className="w-8 h-8 text-gold" />
              <div>
                <span className="font-display text-xl font-bold">Royal Rental</span>
                <span className="block text-xs text-white/60 tracking-widest uppercase">
                  KSA
                </span>
              </div>
            </Link>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              Premium furniture rental and sales for events across Saudi Arabia. 
              Transform your weddings, exhibitions, and parties with our elegant collection.
            </p>
            <p className="text-gold rtl-support text-sm">
              تأجير وبيع الأثاث الفاخر للمناسبات في جميع أنحاء المملكة العربية السعودية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-gold transition-colors text-sm flex items-center gap-2"
                  >
                    <span>{link.label}</span>
                    <span className="text-gold/60">/</span>
                    <span className="text-gold/80 rtl-support">{link.labelAr}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Services / خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-sm">
                  <span className="text-white/70">{service.label}</span>
                  <span className="text-gold/60 mx-2">/</span>
                  <span className="text-gold/80 rtl-support">{service.labelAr}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us / تواصل معنا</h4>
            <div className="space-y-4">
              <a
                href="https://api.whatsapp.com/send?phone=966550868287"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                +966 055 086 8287
              </a>
              <a
                href="https://www.instagram.com/royal___rentel_ksa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
              >
                <Instagram className="w-5 h-5" />
                @royal___rentel_ksa
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Riyadh, Shifa Sanaya District, Baddar</p>
                  <p className="text-gold/80 rtl-support">الرياض - حي الشفاء الصناعية، بدر</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://api.whatsapp.com/send?phone=966550868287"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-gold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/royal___rentel_ksa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Royal Rental KSA. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Saudi Arabia 🇸🇦
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
