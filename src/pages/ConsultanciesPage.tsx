import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Consultancies from "@/components/Consultancies";

const ConsultanciesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Consultancies />
      </main>
      <Footer />
    </div>
  );
};

export default ConsultanciesPage;
