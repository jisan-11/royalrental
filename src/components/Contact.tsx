import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MessageCircle, Instagram, Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message with form data
    const whatsappMessage = `Hello! I'm interested in your furniture rental services.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}`;
    
    window.open(`https://wa.me/966571269056?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
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
      label: 'WhatsApp',
      value: '+966 571 269 056',
      href: 'https://wa.me/966571269056',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@royal___rentel_ksa',
      href: 'https://www.instagram.com/royal___rentel_ksa',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Saudi Arabia 🇸🇦',
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-sm font-medium text-gold uppercase tracking-wider">
              Get in Touch / تواصل معنا
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Create Your{' '}
            <span className="text-gradient-gold">Perfect Event</span>
          </h2>

          <p className="text-white/70 text-lg">
            Ready to transform your event? Reach out to us for a personalized quote 
            and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-gold/30 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-gradient-gold">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-white hover:text-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-white">{item.value}</p>
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
                  <Button variant="outline" className="bg-white text-gold hover:bg-white/90 border-0" asChild>
                    <a
                      href="https://wa.me/966571269056"
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
          <div className="bg-card p-8 rounded-2xl shadow-lifted">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
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
                    Email
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
                    Phone
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
                  Message
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
      </div>
    </section>
  );
};

export default Contact;
