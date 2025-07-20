import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountryGuides from "@/components/CountryGuides";

const CountriesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <CountryGuides />
      </main>
      <Footer />
    </div>
  );
};

export default CountriesPage;
