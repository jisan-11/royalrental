import { Heart, Building2, Presentation, PartyPopper, Crown, Users } from 'lucide-react';

const EventTypes = () => {
  const events = [
    {
      icon: Heart,
      title: 'Weddings',
      titleAr: 'حفلات الزفاف',
      description: 'Create magical moments with our elegant wedding furniture.',
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      titleAr: 'المناسبات الرسمية',
      description: 'Professional furniture for conferences and business gatherings.',
    },
    {
      icon: Presentation,
      title: 'Exhibitions',
      titleAr: 'المعارض',
      description: 'Trade show displays and exhibition booth furniture.',
    },
    {
      icon: PartyPopper,
      title: 'Private Parties',
      titleAr: 'الحفلات الخاصة',
      description: 'Make your celebration unforgettable with premium seating.',
    },
    {
      icon: Crown,
      title: 'VIP Events',
      titleAr: 'مناسبات كبار الشخصيات',
      description: 'Exclusive furniture for distinguished gatherings.',
    },
    {
      icon: Users,
      title: 'Government Functions',
      titleAr: 'المناسبات الحكومية',
      description: 'Official event furniture meeting highest standards.',
    },
  ];

  return (
    <section className="section-padding bg-cream-dark relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-sm font-medium text-gold uppercase tracking-wider">
              Events We Serve / المناسبات التي نخدمها
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perfect Furniture for{' '}
            <span className="text-gradient-gold">Every Event</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Whether it's an intimate celebration or a grand corporate gathering, 
            we have the perfect furniture solution for you.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-gold/30 hover:shadow-gold transition-all duration-300 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-gold text-white group-hover:scale-110 transition-transform duration-300">
                  <event.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gold rtl-support mb-2">{event.titleAr}</p>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
