import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, FileText, Shield, ExternalLink, ArrowLeft, Clock, Percent, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BankDetail = () => {
  const { bankId } = useParams();

  const loanProviders = [
    {
      id: "sbi",
      name: "State Bank of India",
      type: "Government Bank",
      maxAmount: "₹1.5 Crore",
      interestRate: "9.5% - 11.5%",
      collateralRequired: "Above ₹7.5 Lakhs",
      processingTime: "15-20 days",
      features: ["No margin for loans up to ₹7.5 Lakhs", "Tax benefits under Section 80E", "Flexible repayment", "Competitive interest rates", "Wide branch network"],
      documents: ["Admission letter", "Income proof", "Collateral documents", "Academic records", "Bank statements", "Identity proof"],
      website: "https://sbi.co.in",
      description: "State Bank of India is India's largest public sector bank offering comprehensive education loan solutions for students pursuing higher education abroad.",
      eligibility: ["Indian citizen", "Confirmed admission to recognized university", "Co-applicant required", "Good academic record"],
      processingFee: "₹10,000 + GST",
      marginMoney: "5% for loans above ₹4 lakhs"
    },
    {
      id: "axis",
      name: "Axis Bank",
      type: "Private Bank",
      maxAmount: "₹75 Lakhs",
      interestRate: "10.75% - 12%",
      collateralRequired: "Above ₹4 Lakhs",
      processingTime: "10-15 days",
      features: ["100% financing", "Moratorium period", "Competitive rates", "Quick approval", "Digital application process"],
      documents: ["Admission proof", "Cost of study proof", "Income documents", "Identity proof", "Academic transcripts", "Property papers"],
      website: "https://axisbank.com",
      description: "Axis Bank provides student-friendly education loans with quick processing and competitive interest rates for overseas education.",
      eligibility: ["Age between 18-35 years", "Indian resident", "Admission to approved university", "Financial capacity of co-applicant"],
      processingFee: "₹15,000 + GST",
      marginMoney: "10% for loans above ₹4 lakhs"
    },
    {
      id: "icici",
      name: "ICICI Bank",
      type: "Private Bank",
      maxAmount: "₹1 Crore",
      interestRate: "10.25% - 11.75%",
      collateralRequired: "Above ₹7.5 Lakhs",
      processingTime: "10-12 days",
      features: ["Student-friendly terms", "Grace period", "Competitive interest", "Wide branch network", "Flexible EMI options"],
      documents: ["Offer letter", "Fee structure", "Income proof", "Collateral valuation", "Academic records", "Bank statements"],
      website: "https://icicibank.com",
      description: "ICICI Bank offers comprehensive education loan solutions with flexible repayment options and student-friendly terms.",
      eligibility: ["Indian citizen", "Confirmed admission", "Age limit 18-35 years", "Co-applicant with stable income"],
      processingFee: "₹12,000 + GST",
      marginMoney: "5% for loans above ₹7.5 lakhs"
    },
    {
      id: "hdfc-credila",
      name: "HDFC Credila",
      type: "NBFC",
      maxAmount: "₹75 Lakhs",
      interestRate: "9.75% - 13.25%",
      collateralRequired: "Above ₹4 Lakhs",
      processingTime: "7-10 days",
      features: ["Quick processing", "Digital application", "Personalized service", "Study abroad specialist", "24/7 customer support"],
      documents: ["University offer letter", "Financial statements", "Property papers", "Co-applicant KYC", "Academic transcripts", "Income proof"],
      website: "https://credila.com",
      description: "HDFC Credila is a specialized education loan provider focusing exclusively on study abroad financing with personalized service.",
      eligibility: ["Indian citizen", "Admission to recognized institution", "Co-applicant required", "Minimum academic scores"],
      processingFee: "₹8,000 + GST",
      marginMoney: "15% for loans above ₹4 lakhs"
    },
    {
      id: "avanse",
      name: "Avanse Financial Services",
      type: "NBFC",
      maxAmount: "₹1 Crore",
      interestRate: "10.5% - 15%",
      collateralRequired: "Above ₹4 Lakhs",
      processingTime: "5-7 days",
      features: ["Study abroad focus", "Fast disbursement", "Flexible EMI", "Online tracking", "Multiple disbursement options"],
      documents: ["University letter", "Financial capacity proof", "Academic transcripts", "Loan application", "Property documents", "Identity proof"],
      website: "https://avanse.com",
      description: "Avanse Financial Services specializes in education loans with a focus on study abroad programs and quick processing.",
      eligibility: ["Indian citizen", "Confirmed admission", "Co-applicant with adequate income", "Good academic record"],
      processingFee: "₹10,000 + GST",
      marginMoney: "10% for loans above ₹4 lakhs"
    },
    {
      id: "prodigy",
      name: "Prodigy Finance",
      type: "NBFC",
      maxAmount: "Up to 100% funding",
      interestRate: "8% - 15% (varies by program)",
      collateralRequired: "No collateral required",
      processingTime: "2-3 weeks",
      features: ["No collateral", "International focus", "Alumni network backing", "Future earning potential based", "Multi-currency loans"],
      documents: ["University admission", "Academic records", "Program details", "Identity verification", "Program cost details", "Career prospects"],
      website: "https://prodigyfinance.com",
      description: "Prodigy Finance offers collateral-free education loans based on future earning potential, backed by an alumni network.",
      eligibility: ["Admission to partner universities", "Strong academic background", "Program with good career prospects", "No co-signer required"],
      processingFee: "No processing fee",
      marginMoney: "Not applicable"
    }
  ];

  const provider = loanProviders.find(p => p.id === bankId);

  if (!provider) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Bank not found</h1>
            <Button asChild>
              <Link to="/">Go back home</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "Government Bank": return "default";
      case "Private Bank": return "secondary";
      case "NBFC": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button variant="outline" asChild className="mb-4">
              <Link to="/#loans">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Loans
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Details */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-border shadow-soft">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Building2 className="h-12 w-12 text-primary" />
                    <div>
                      <CardTitle className="text-3xl">{provider.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant={getBadgeVariant(provider.type)}>{provider.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {provider.description}
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Key Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Loan Amount</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-accent">{provider.maxAmount}</p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Percent className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Interest Rate</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-accent">{provider.interestRate}</p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Processing Time</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-accent">{provider.processingTime}</p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Collateral</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium text-muted-foreground">{provider.collateralRequired}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Features */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {provider.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Documents Required */}
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <CardTitle>Required Documents</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {provider.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Details */}
              <Card className="border-border sticky top-6">
                <CardHeader>
                  <CardTitle>Loan Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-medium text-sm text-muted-foreground">Processing Fee:</span>
                    <p className="font-semibold">{provider.processingFee}</p>
                  </div>
                  <div>
                    <span className="font-medium text-sm text-muted-foreground">Margin Money:</span>
                    <p className="font-semibold">{provider.marginMoney}</p>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Eligibility:</h4>
                    <ul className="space-y-1">
                      {provider.eligibility.map((criteria, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {criteria}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-6" asChild>
                    <a href={provider.website} target="_blank" rel="noopener noreferrer">
                      Visit Official Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BankDetail;