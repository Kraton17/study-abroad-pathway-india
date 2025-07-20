import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackingGuide from "@/components/PackingGuide";

const PackingGuidePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <PackingGuide />
      </main>
      <Footer />
    </div>
  );
};

export default PackingGuidePage;
