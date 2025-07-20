import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { banks } from "@/lib/data"; // Import data from the central file

const EducationLoans = () => {
  const categorizedProviders = {
    "Government Banks": banks.filter(p => p.type === "Government Bank"),
    "Private Banks": banks.filter(p => p.type === "Private Bank"),
    "NBFCs": banks.filter(p => p.type === "NBFC"),
    "International Lenders": banks.filter(p => p.type === "International Lender")
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "Government Bank": return "default";
      case "Private Bank": return "secondary";
      case "NBFC": return "outline";
      case "International Lender": return "destructive";
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
            Compare the best education loan options. Find the perfect financing solution for your study abroad dreams.
          </p>
        </div>

        {Object.entries(categorizedProviders).map(([category, providers]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {providers.map((provider) => (
                <Card key={provider.id} className="h-full border-border shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={getBadgeVariant(provider.type)}>
                        {provider.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{provider.name}</CardTitle>
                    <CardDescription className="text-base">
                      {provider.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
                    <div>
                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                            <span className="font-medium text-foreground">Interest Rate:</span>
                            <p className="text-accent font-semibold">{provider.interestRate}</p>
                        </div>
                        <div>
                            <span className="font-medium text-foreground">Max Amount:</span>
                            <p className="text-muted-foreground">{provider.maxAmount}</p>
                        </div>
                        </div>

                        <div>
                        <span className="font-medium text-sm">Collateral:</span>
                        <p className="text-sm text-muted-foreground">{provider.collateralRequired}</p>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-6">
                      <Button className="flex-1" asChild>
                        <a href={provider.website} target="_blank" rel="noopener noreferrer">
                          Visit Site
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationLoans;
