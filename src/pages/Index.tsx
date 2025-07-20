import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        {/* You can add featured sections from other pages here later if you wish */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
