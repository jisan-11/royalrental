import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      
      {/* Quick Overview Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Trusted Partner for{' '}
            <span className="text-gradient-gold">Event Furniture</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Royal Rental KSA provides premium furniture rental and sales services across all of Saudi Arabia. 
            From weddings to corporate events, we deliver excellence.
          </p>
          <p className="text-gold rtl-support text-lg">
            رويال رينتال السعودية - شريكك الموثوق لأثاث المناسبات الفاخر
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
