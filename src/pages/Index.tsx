import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedDestinations />
        <StatsSection />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
