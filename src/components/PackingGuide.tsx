import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, ExternalLink, Package, Plane, Home, Shirt } from "lucide-react";

const PackingGuide = () => {
  const categories = [
    {
      id: "documents",
      title: "Important Documents",
      icon: Package,
      items: [
        { name: "Passport & Visa", essential: true, description: "Original + 3 photocopies" },
        { name: "University Admission Letter", essential: true, description: "Original + 2 copies" },
        { name: "Academic Transcripts", essential: true, description: "Sealed envelope from university" },
        { name: "IELTS/TOEFL Scorecard", essential: true, description: "Original test results" },
        { name: "Medical Records", essential: false, description: "Vaccination certificates, prescriptions" },
        { name: "Financial Documents", essential: true, description: "Bank statements, loan documents" },
        { name: "Insurance Papers", essential: true, description: "Health & travel insurance" },
        { name: "Driving License", essential: false, description: "International driving permit" }
      ]
    },
    {
      id: "clothing",
      title: "Clothing & Personal Items",
      icon: Shirt,
      items: [
        { name: "Formal Wear", essential: true, description: "2-3 business attire sets" },
        { name: "Winter Clothing", essential: true, description: "Heavy jackets, thermal wear" },
        { name: "Casual Wear", essential: true, description: "Jeans, t-shirts, comfortable clothes" },
        { name: "Traditional Wear", essential: false, description: "1-2 ethnic outfits for cultural events" },
        { name: "Undergarments", essential: true, description: "2-3 weeks supply" },
        { name: "Footwear", essential: true, description: "Formal shoes, sneakers, flip-flops" },
        { name: "Personal Care", essential: true, description: "Toiletries, medicines, glasses" },
        { name: "Bedding", essential: false, description: "Pillow covers, bed sheets (if preferred)" }
      ]
    },
    {
      id: "electronics",
      title: "Electronics & Gadgets",
      icon: Package,
      items: [
        { name: "Laptop", essential: true, description: "With charger and protective case" },
        { name: "Phone & Charger", essential: true, description: "Unlocked international phone" },
        { name: "Power Adapters", essential: true, description: "Universal adapters for your destination" },
        { name: "External Hard Drive", essential: true, description: "For backup and storage" },
        { name: "Headphones", essential: false, description: "Good quality for studies" },
        { name: "Camera", essential: false, description: "To capture memories" },
        { name: "Power Bank", essential: false, description: "Portable charging solution" },
        { name: "Extension Cord", essential: false, description: "Multi-plug extension" }
      ]
    },
    {
      id: "academic",
      title: "Academic & Study Materials",
      icon: Package,
      items: [
        { name: "Notebooks & Stationery", essential: true, description: "Basic writing materials" },
        { name: "Calculator", essential: true, description: "Scientific calculator if needed" },
        { name: "Reference Books", essential: false, description: "Important textbooks for your field" },
        { name: "USB Drives", essential: true, description: "Multiple backup storage devices" },
        { name: "Study Planner", essential: false, description: "Physical or digital planning tools" },
        { name: "Highlighters & Pens", essential: true, description: "Study essentials" }
      ]
    }
  ];

  const vendors = [
    {
      name: "Amazon India",
      category: "General Shopping",
      description: "Wide range of products from electronics to clothing",
      specialties: ["Electronics", "Books", "Clothing", "Travel Accessories"],
      website: "https://amazon.in",
      benefits: ["Fast delivery", "Easy returns", "Student discounts"]
    },
    {
      name: "Flipkart",
      category: "Electronics & Fashion",
      description: "Indian e-commerce platform with great deals",
      specialties: ["Laptops", "Phones", "Fashion", "Home Appliances"],
      website: "https://flipkart.com",
      benefits: ["Competitive prices", "EMI options", "Big billion days sale"]
    },
    {
      name: "Myntra",
      category: "Fashion & Lifestyle",
      description: "Leading fashion e-commerce platform",
      specialties: ["Clothing", "Footwear", "Accessories", "Personal Care"],
      website: "https://myntra.com",
      benefits: ["Latest fashion", "Brand variety", "Easy returns"]
    },
    {
      name: "Decathlon",
      category: "Sports & Travel",
      description: "Sports and travel gear specialist",
      specialties: ["Luggage", "Travel Accessories", "Winter Wear", "Sports Equipment"],
      website: "https://decathlon.in",
      benefits: ["Quality products", "Affordable prices", "Sports expertise"]
    },
    {
      name: "Reliance Digital",
      category: "Electronics",
      description: "Electronics and gadgets retailer",
      specialties: ["Laptops", "Mobile Phones", "Accessories", "Gaming"],
      website: "https://reliancedigital.in",
      benefits: ["Physical stores", "Extended warranty", "Technical support"]
    },
    {
      name: "Nykaa",
      category: "Personal Care",
      description: "Beauty and personal care products",
      specialties: ["Skincare", "Cosmetics", "Personal Care", "Wellness"],
      website: "https://nykaa.com",
      benefits: ["Authentic products", "Beauty advice", "Wide brand range"]
    }
  ];

  return (
    <section id="packing" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Packing Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essential items checklist and trusted vendors to help you pack smart for your study abroad journey.
          </p>
        </div>

        <Tabs defaultValue="checklist" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="checklist">Packing Checklist</TabsTrigger>
            <TabsTrigger value="vendors">Shopping Vendors</TabsTrigger>
          </TabsList>

          <TabsContent value="checklist" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card key={category.id} className="border-border shadow-soft">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="flex items-start justify-between gap-3 p-3 bg-muted/50 rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-sm">{item.name}</span>
                                {item.essential && (
                                  <Badge variant="destructive" className="text-xs">Essential</Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Packing Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Plane className="h-5 w-5 text-accent" />
                    <h4 className="font-semibold text-accent">Flight Preparation</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Check airline baggage limits</li>
                    <li>• Keep essentials in carry-on</li>
                    <li>• Label all luggage clearly</li>
                    <li>• Pack liquids as per regulations</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Package className="h-5 w-5 text-accent" />
                    <h4 className="font-semibold text-accent">Packing Strategy</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Roll clothes to save space</li>
                    <li>• Use packing cubes</li>
                    <li>• Distribute weight evenly</li>
                    <li>• Leave space for shopping</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Home className="h-5 w-5 text-accent" />
                    <h4 className="font-semibold text-accent">Destination Tips</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Research local weather</li>
                    <li>• Check what's available locally</li>
                    <li>• Consider shipping some items</li>
                    <li>• Plan for local purchases</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="vendors" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vendors.map((vendor, index) => (
                <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <ShoppingCart className="h-6 w-6 text-primary" />
                      <Badge variant="outline">{vendor.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{vendor.name}</CardTitle>
                    <CardDescription>{vendor.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 text-sm">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {vendor.specialties.map((specialty, idx) => (
                          <span key={idx} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 text-sm">Benefits:</h4>
                      <ul className="space-y-1">
                        {vendor.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-accent mr-2">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full" asChild>
                      <a href={vendor.website} target="_blank" rel="noopener noreferrer">
                        Shop Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Smart Shopping Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Before You Buy:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Compare prices across platforms</li>
                    <li>• Read reviews and ratings</li>
                    <li>• Check return and exchange policies</li>
                    <li>• Look for student discounts</li>
                    <li>• Time your purchases with sales</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Money-Saving Tips:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Use cashback and reward apps</li>
                    <li>• Sign up for loyalty programs</li>
                    <li>• Buy generic brands for basics</li>
                    <li>• Consider buying in bulk for some items</li>
                    <li>• Check for bank card offers</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PackingGuide;