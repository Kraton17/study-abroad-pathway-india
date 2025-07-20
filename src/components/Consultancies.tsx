import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Users, ExternalLink, Phone, Mail } from "lucide-react";

const Consultancies = () => {
  const consultancies = [
    {
      name: "IDP Education",
      location: "Multiple Cities",
      rating: 4.8,
      specialization: ["Australia", "UK", "Canada", "USA"],
      services: ["University Selection", "Application Support", "Visa Guidance", "Test Prep"],
      experience: "50+ Years",
      studentsPlaced: "300,000+",
      description: "Global leader in international education services with extensive university partnerships.",
      phone: "+91-11-4084-4084",
      email: "info@idp.com",
      website: "https://idp.com"
    },
    {
      name: "The Chopras",
      location: "Delhi, Mumbai, Pune",
      rating: 4.7,
      specialization: ["USA", "UK", "Canada"],
      services: ["Admission Consulting", "Scholarship Guidance", "Profile Building", "Interview Prep"],
      experience: "25+ Years",
      studentsPlaced: "100,000+",
      description: "Premier education consultancy known for personalized guidance and high success rates.",
      phone: "+91-11-4132-5555",
      email: "info@thechopras.com",
      website: "https://thechopras.com"
    },
    {
      name: "Edwise International",
      location: "Mumbai, Delhi, Pune, Ahmedabad",
      rating: 4.6,
      specialization: ["Australia", "Canada", "New Zealand", "UK"],
      services: ["Course Selection", "University Applications", "Visa Processing", "Pre-departure"],
      experience: "30+ Years",
      studentsPlaced: "200,000+",
      description: "Established consultancy with strong ties to universities in Australia and Canada.",
      phone: "+91-22-4018-4018",
      email: "info@edwise.in",
      website: "https://edwise.in"
    },
    {
      name: "Leverage Edu",
      location: "Delhi, Mumbai, Bangalore",
      rating: 4.5,
      specialization: ["USA", "UK", "Canada", "Germany"],
      services: ["AI-powered Matching", "Application Support", "Loan Assistance", "Mentorship"],
      experience: "5+ Years",
      studentsPlaced: "50,000+",
      description: "Tech-enabled consultancy offering data-driven university selection and application support.",
      phone: "+91-11-4703-3000",
      email: "hello@leverageedu.com",
      website: "https://leverageedu.com"
    },
    {
      name: "Meridean Overseas",
      location: "Delhi, Mumbai, Chandigarh",
      rating: 4.4,
      specialization: ["Canada", "Australia", "UK", "USA"],
      services: ["University Selection", "Visa Guidance", "IELTS Coaching", "Post-arrival Support"],
      experience: "15+ Years",
      studentsPlaced: "75,000+",
      description: "Comprehensive services from test preparation to post-arrival support in destination countries.",
      phone: "+91-11-4606-4606",
      email: "info@merideanoverseas.com",
      website: "https://merideanoverseas.com"
    },
    {
      name: "Canam Consultants",
      location: "Delhi, Mumbai, Chandigarh, Ahmedabad",
      rating: 4.6,
      specialization: ["Canada", "Australia", "UK"],
      services: ["Immigration Services", "Study Permits", "University Applications", "Settlement Support"],
      experience: "20+ Years",
      studentsPlaced: "150,000+",
      description: "Specializes in Canadian immigration and study permits with high visa success rates.",
      phone: "+91-11-4681-4681",
      email: "info@canamgroup.com",
      website: "https://canamgroup.com"
    }
  ];

  return (
    <section id="consultancies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted Education Consultancies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with experienced education consultants who have helped thousands of Indian students achieve their study abroad goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {consultancies.map((consultancy, index) => (
            <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-xl mb-1">{consultancy.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {consultancy.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-success-green/10 px-2 py-1 rounded">
                    <Star className="h-4 w-4 text-success-green fill-current" />
                    <span className="text-sm font-medium text-success-green">{consultancy.rating}</span>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {consultancy.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {consultancy.specialization.map((country, idx) => (
                    <Badge key={idx} variant="secondary">
                      {country}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-foreground">Experience:</span>
                    <p className="text-accent font-semibold">{consultancy.experience}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Students Placed:</span>
                    <p className="text-accent font-semibold">{consultancy.studentsPlaced}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-sm">Services Offered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {consultancy.services.map((service, idx) => (
                      <span key={idx} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${consultancy.phone}`} className="text-primary hover:underline">
                      {consultancy.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${consultancy.email}`} className="text-primary hover:underline">
                      {consultancy.email}
                    </a>
                  </div>
                </div>

                <Button className="w-full mt-4" asChild>
                  <a href={consultancy.website} target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6 border-accent/20">
            <Users className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-muted-foreground">
              Work with experienced counselors who understand the nuances of international education
            </p>
          </Card>
          
          <Card className="text-center p-6 border-accent/20">
            <Star className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
            <p className="text-muted-foreground">
              These consultancies have successfully placed thousands of students in top universities
            </p>
          </Card>
          
          <Card className="text-center p-6 border-accent/20">
            <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Multiple Locations</h3>
            <p className="text-muted-foreground">
              Find consultancies in major Indian cities for convenient in-person consultations
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Consultancies;