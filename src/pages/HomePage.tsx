import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CompanyHighlights from '@/components/home/CompanyHighlights';
import EventTypes from '@/components/home/EventTypes';
import CTASection from '@/components/home/CTASection';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <CompanyHighlights />
      <EventTypes />
      <CTASection />
    </Layout>
  );
};

export default HomePage;
