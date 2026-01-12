import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Instagram, Phone, MapPin, Send, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello Royal Rental KSA! I'm interested in your furniture rental services.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}`;
    
    window.open(`https://api.whatsapp.com/send?phone=966550868287&text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call & WhatsApp',
      labelAr: 'اتصل أو واتساب',
      value: '+966 055 086 8287',
      href: 'https://api.whatsapp.com/send?phone=966550868287',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      labelAr: 'انستقرام',
      value: '@royal___rentel_ksa',
      href: 'https://www.instagram.com/royal___rentel_ksa',
    },
    {
      icon: MapPin,
      label: 'Office Address',
      labelAr: 'عنوان المكتب',
      value: 'Riyadh, Shifa Sanaya District, Baddar',
      valueAr: 'الرياض - حي الشفاء الصناعية، بدر',
      href: null,
    },
    {
      icon: Clock,
      label: 'Working Hours',
      labelAr: 'ساعات العمل',
      value: 'Saturday - Thursday: 9AM - 9PM',
      valueAr: 'السبت - الخميس: ٩ صباحاً - ٩ مساءً',
      href: null,
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-navy">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact Us / <span className="text-gradient-gold">تواصل معنا</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to transform your event? Get in touch with us today!
          </p>
          <p className="text-gold rtl-support mt-2">
            جاهز لتحويل مناسبتك؟ تواصل معنا اليوم!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Get in Touch / <span className="text-gold">ابقى على تواصل</span>
              </h2>
              
              <p className="text-muted-foreground mb-8">
                Royal Rental KSA provides rent and sell services across all Saudi Arabia. 
                Contact us for a personalized quote for your next event.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-gradient-gold flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <span className="text-gold/60">/</span>
                        <p className="text-sm text-gold rtl-support">{item.labelAr}</p>
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-medium text-foreground hover:text-gold transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div>
                          <p className="font-medium text-foreground">{item.value}</p>
                          {item.valueAr && (
                            <p className="text-sm text-gold rtl-support">{item.valueAr}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="p-6 bg-gradient-gold rounded-2xl">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-10 h-10 text-white flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      Quick Response Guaranteed
                    </h3>
                    <p className="text-white/80 mb-4 text-sm">
                      Message us on WhatsApp for the fastest response. Our team is ready 
                      to assist you with all your furniture rental needs.
                    </p>
                    <p className="text-white/80 mb-4 text-sm rtl-support">
                      راسلنا على الواتساب للحصول على رد سريع
                    </p>
                    <Button variant="outline" className="bg-white text-gold hover:bg-white/90 border-0" asChild>
                      <a
                        href="https://api.whatsapp.com/send?phone=966550868287"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat Now on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Send us a Message
              </h3>
              <p className="text-sm text-muted-foreground mb-6 rtl-support">
                أرسل لنا رسالة
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name / الاسم
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email / البريد
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone / الهاتف
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+966 XXX XXX XXX"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message / الرسالة
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event and requirements..."
                    rows={4}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Message via WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your message will be sent directly to our WhatsApp for quick response.
                </p>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Our Location / <span className="text-gold">موقعنا</span>
            </h3>
            <div className="rounded-2xl overflow-hidden border border-border h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.4797835044395!2d46.738!3d24.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM2JzAwLjAiTiA0NsKwNDQnMTYuOCJF!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Rental KSA Location"
              />
            </div>
            <p className="text-center mt-4 text-muted-foreground">
              Riyadh – Shifa Sanaya District, Baddar | الرياض – حي الشفاء الصناعية، بدر
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
