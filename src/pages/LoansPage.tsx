import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EducationLoans from "@/components/EducationLoans";

const LoansPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <EducationLoans />
      </main>
      <Footer />
    </div>
  );
};

export default LoansPage;
