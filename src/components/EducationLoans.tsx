import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, FileText, Shield, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EducationLoans = () => {
  const loanProviders = [
    {
      id: "sbi",
      name: "State Bank of India",
      type: "Government Bank",
      maxAmount: "₹1.5 Crore",
      interestRate: "9.5% - 11.5%",
      collateralRequired: "Above ₹7.5 Lakhs",
      processingTime: "15-20 days",
      features: ["No margin for loans up to ₹7.5 Lakhs", "Tax benefits under Section 80E", "Flexible repayment"],
      documents: ["Admission letter", "Income proof", "Collateral documents", "Academic records"],
      website: "https://sbi.co.in"
    },
    {
      id: "axis",
      name: "Axis Bank",
      type: "Private Bank",
      maxAmount: "₹75 Lakhs",
      interestRate: "10.75% - 12%",
      collateralRequired: "Above ₹4 Lakhs",
      processingTime: "10-15 days",
      features: ["100% financing", "Moratorium period", "Competitive rates", "Quick approval"],
      documents: ["Admission proof", "Cost of study proof", "Income documents", "Identity proof"],
      website: "https://axisbank.com"
    },
    {
      id: "icici",
      name: "ICICI Bank",
      type: "Private Bank",
      maxAmount: "₹1 Crore",
      interestRate: "10.25% - 11.75%",
      collateralRequired: "Above ₹7.5 Lakhs",
      processingTime: "10-12 days",
      features: ["Student-friendly terms", "Grace period", "Competitive interest", "Wide branch network"],
      documents: ["Offer letter", "Fee structure", "Income proof", "Collateral valuation"],
      website: "https://icicibank.com"
    },
    {
      id: "hdfc-credila",
      name: "HDFC Credila",
      type: "NBFC",
      maxAmount: "₹75 Lakhs",
      interestRate: "9.75% - 13.25%",
      collateralRequired: "Above ₹4 Lakhs",
      processingTime: "7-10 days",
      features: ["Quick processing", "Digital application", "Personalized service", "Study abroad specialist"],
      documents: ["University offer letter", "Financial statements", "Property papers", "Co-applicant KYC"],
      website: "https://credila.com"
    },
    {
      id: "avanse",
      name: "Avanse Financial Services",
      type: "NBFC",
      maxAmount: "₹1 Crore",
      interestRate: "10.5% - 15%",
      collateralRequired: "Above ₹4 Lakhs",
      processingTime: "5-7 days",
      features: ["Study abroad focus", "Fast disbursement", "Flexible EMI", "Online tracking"],
      documents: ["University letter", "Financial capacity proof", "Academic transcripts", "Loan application"],
      website: "https://avanse.com"
    },
    {
      id: "prodigy",
      name: "Prodigy Finance",
      type: "NBFC",
      maxAmount: "Up to 100% funding",
      interestRate: "8% - 15% (varies by program)",
      collateralRequired: "No collateral required",
      processingTime: "2-3 weeks",
      features: ["No collateral", "International focus", "Alumni network backing", "Future earning potential based"],
      documents: ["University admission", "Academic records", "Program details", "Identity verification"],
      website: "https://prodigyfinance.com"
    }
  ];

  const categorizedProviders = {
    "Government Banks": loanProviders.filter(p => p.type === "Government Bank"),
    "Private Banks": loanProviders.filter(p => p.type === "Private Bank"),
    "NBFCs": loanProviders.filter(p => p.type === "NBFC")
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "Government Bank": return "default";
      case "Private Bank": return "secondary";
      case "NBFC": return "outline";
      default: return "outline";
    }
  };

  return (
    <section id="loans" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education Loan Providers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare the best education loan options from banks and NBFCs. Find the perfect financing solution for your study abroad dreams.
          </p>
        </div>

        {Object.entries(categorizedProviders).map(([category, providers]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {providers.map((provider) => (
                <Card key={provider.id} className="h-full border-border shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Building2 className="h-8 w-8 text-primary" />
                      <Badge variant={getBadgeVariant(provider.type)}>
                        {provider.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{provider.name}</CardTitle>
                    <CardDescription className="text-base">
                      Maximum loan amount: {provider.maxAmount}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Interest Rate:</span>
                        <p className="text-accent font-semibold">{provider.interestRate}</p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Processing:</span>
                        <p className="text-muted-foreground">{provider.processingTime}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium text-sm">Collateral Required:</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{provider.collateralRequired}</p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {provider.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-accent mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 mt-6">
                      <Button className="flex-1" asChild>
                        <Link to={`/bank/${provider.id}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={provider.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Important Tips for Education Loans</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-accent">Before Applying:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Compare interest rates and processing fees</li>
                <li>• Check the loan-to-value ratio</li>
                <li>• Understand the moratorium period</li>
                <li>• Read the fine print carefully</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-accent">Documentation Tips:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Keep all documents ready before applying</li>
                <li>• Get property valuation done in advance</li>
                <li>• Ensure co-applicant documents are complete</li>
                <li>• Have backup financial statements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationLoans;