import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, TrendingUp, ThumbsUp, ThumbsDown, Package } from "lucide-react";

const countryData = {
  usa: {
    name: "United States",
    flag: "🇺🇸",
    colleges: [
      { name: "MIT", rank: 1, website: "https://web.mit.edu/" },
      { name: "Stanford University", rank: 3, website: "https://www.stanford.edu/" },
      { name: "Harvard University", rank: 4, website: "https://www.harvard.edu/" },
      { name: "Caltech", rank: 6, website: "https://www.caltech.edu/" },
      { name: "University of Chicago", rank: 10, website: "https://www.uchicago.edu/" },
      { name: "University of Pennsylvania", rank: 12, website: "https://www.upenn.edu/" },
      { name: "Yale University", rank: 16, website: "https://www.yale.edu/" },
      { name: "Columbia University", rank: 19, website: "https://www.columbia.edu/" }
    ],
    trendingCourses: [
      "Computer Science & AI",
      "Data Science",
      "Business Administration (MBA)",
      "Engineering",
      "Medicine",
      "Finance & Economics"
    ],
    pros: [
      "World's best universities and research facilities",
      "Excellent job opportunities post-graduation",
      "Optional Practical Training (OPT) for work experience",
      "Diverse campus culture and networking",
      "Innovation and entrepreneurship ecosystem"
    ],
    cons: [
      "Very expensive tuition and living costs",
      "Competitive admission process",
      "Complex visa process",
      "Healthcare costs can be high",
      "Cultural adjustment challenges"
    ],
    packingList: [
      "Heavy winter clothing (jackets, boots, gloves)",
      "Formal clothes for interviews and presentations",
      "Electronics with US adapters",
      "Prescription medications with prescriptions",
      "Important documents (transcripts, certificates)",
      "Comfortable walking shoes",
      "Laptop and tech accessories",
      "Indian spices and comfort food items"
    ]
  },
  uk: {
    name: "United Kingdom",
    flag: "🇬🇧",
    colleges: [
      { name: "Cambridge University", rank: 2, website: "https://www.cam.ac.uk/" },
      { name: "Oxford University", rank: 5, website: "https://www.ox.ac.uk/" },
      { name: "Imperial College London", rank: 7, website: "https://www.imperial.ac.uk/" },
      { name: "UCL", rank: 8, website: "https://www.ucl.ac.uk/" },
      { name: "King's College London", rank: 31, website: "https://www.kcl.ac.uk/" },
      { name: "London School of Economics", rank: 32, website: "https://www.lse.ac.uk/" },
      { name: "University of Edinburgh", rank: 27, website: "https://www.ed.ac.uk/" },
      { name: "University of Manchester", rank: 28, website: "https://www.manchester.ac.uk/" }
    ],
    trendingCourses: [
      "Finance & Banking",
      "Law",
      "Engineering",
      "Medicine",
      "International Business",
      "Creative Arts & Design"
    ],
    pros: [
      "Shorter degree duration (3 years undergraduate)",
      "Rich cultural heritage and history",
      "Gateway to Europe",
      "Post-study work visa opportunities",
      "High-quality education system"
    ],
    cons: [
      "Expensive living costs, especially in London",
      "Unpredictable weather",
      "Limited scholarship opportunities",
      "Competitive job market",
      "Brexit impact on EU opportunities"
    ],
    packingList: [
      "Waterproof jacket and umbrella",
      "Warm clothing for cold, damp weather",
      "UK electrical adapters (Type G)",
      "Formal business attire",
      "Comfortable rain boots",
      "Layers for variable weather",
      "Indian tea and spices",
      "Academic documents and certificates"
    ]
  },
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    colleges: [
      { name: "University of Toronto", rank: 21, website: "https://www.utoronto.ca/" },
      { name: "McGill University", rank: 30, website: "https://www.mcgill.ca/" },
      { name: "University of British Columbia", rank: 34, website: "https://www.ubc.ca/" },
      { name: "University of Alberta", rank: 111, website: "https://www.ualberta.ca/" },
      { name: "McMaster University", rank: 152, website: "https://www.mcmaster.ca/" },
      { name: "University of Waterloo", rank: 112, website: "https://uwaterloo.ca/" },
      { name: "Western University", rank: 114, website: "https://www.uwo.ca/" },
      { name: "University of Calgary", rank: 182, website: "https://www.ucalgary.ca/" }
    ],
    trendingCourses: [
      "Computer Science",
      "Engineering",
      "Healthcare & Nursing",
      "Business Administration",
      "Environmental Sciences",
      "Artificial Intelligence"
    ],
    pros: [
      "Welcoming immigration policies",
      "Post-graduation work permits",
      "Multicultural society",
      "High quality of life",
      "Pathway to permanent residency"
    ],
    cons: [
      "Extremely cold winters",
      "Higher cost of living in major cities",
      "Limited job opportunities in smaller cities",
      "Competitive admission for top programs",
      "Distance from India"
    ],
    packingList: [
      "Extreme winter clothing (-20°C gear)",
      "Thermal underwear and layers",
      "Snow boots and warm socks",
      "Heavy winter coat and accessories",
      "Electronics with Canadian adapters",
      "Warm bedding and blankets",
      "Indian groceries and spices",
      "Vitamin D supplements for winter"
    ]
  },
  australia: {
    name: "Australia",
    flag: "🇦🇺",
    colleges: [
      { name: "University of Melbourne", rank: 13, website: "https://www.unimelb.edu.au/" },
      { name: "University of Sydney", rank: 18, website: "https://www.sydney.edu.au/" },
      { name: "Australian National University", rank: 30, website: "https://www.anu.edu.au/" },
      { name: "UNSW Sydney", rank: 43, website: "https://www.unsw.edu.au/" },
      { name: "University of Queensland", rank: 40, website: "https://www.uq.edu.au/" },
      { name: "Monash University", rank: 42, website: "https://www.monash.edu/" },
      { name: "University of Western Australia", rank: 72, website: "https://www.uwa.edu.au/" },
      { name: "University of Adelaide", rank: 89, website: "https://www.adelaide.edu.au/" }
    ],
    trendingCourses: [
      "Mining Engineering",
      "Healthcare & Medicine",
      "Information Technology",
      "Business & Commerce",
      "Environmental Science",
      "Tourism & Hospitality"
    ],
    pros: [
      "Excellent work-life balance",
      "Beautiful climate and outdoor lifestyle",
      "Strong job market",
      "Post-study work opportunities",
      "Multicultural environment"
    ],
    cons: [
      "High cost of living",
      "Distance from family in India",
      "Expensive domestic travel",
      "Limited scholarship options",
      "Strict visa requirements"
    ],
    packingList: [
      "Light summer clothing",
      "Strong sunscreen and sunglasses",
      "Swimming gear",
      "Light jacket for winter",
      "Australian electrical adapters (Type I)",
      "Casual outdoor clothing",
      "Hat for sun protection",
      "Indian spices and snacks"
    ]
  },
  germany: {
    name: "Germany",
    flag: "🇩🇪",
    colleges: [
      { name: "Technical University of Munich", rank: 37, website: "https://www.tum.de/en/" },
      { name: "Ludwig-Maximilians University", rank: 54, website: "https://www.lmu.de/en/" },
      { name: "Heidelberg University", rank: 87, website: "https://www.uni-heidelberg.de/en" },
      { name: "KIT", rank: 119, website: "https://www.kit.edu/english/" },
      { name: "Humboldt University", rank: 120, website: "https://www.hu-berlin.de/en" },
      { name: "University of Freiburg", rank: 192, website: "https://uni-freiburg.de/en/" },
      { name: "RWTH Aachen", rank: 106, website: "https://www.rwth-aachen.de/go/id/a/?lidx=1" },
      { name: "University of Göttingen", rank: 232, website: "https://www.uni-goettingen.de/en/1.html" }
    ],
    trendingCourses: [
      "Engineering & Technology",
      "Automotive Engineering",
      "Computer Science",
      "Business & Economics",
      "Renewable Energy",
      "Medicine"
    ],
    pros: [
      "Low or no tuition fees at public universities",
      "Strong engineering and research programs",
      "Central location in Europe",
      "Post-study work opportunities",
      "High-quality education system"
    ],
    cons: [
      "Language barrier (German required for many jobs)",
      "Bureaucratic processes",
      "Cold winters",
      "Cultural adjustment challenges",
      "Competitive job market for non-German speakers"
    ],
    packingList: [
      "Warm winter clothing",
      "Formal business attire",
      "European electrical adapters (Type C/F)",
      "German language learning materials",
      "Layers for variable weather",
      "Good quality shoes",
      "Indian spices and comfort foods",
      "Academic transcripts with translations"
    ]
  }
};

const CountryGuides = () => {
  return (
    <section id="countries" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Country-wise Study Guides
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guides for top study destinations with college rankings, trending courses, 
            pros & cons, and country-specific packing lists
          </p>
        </div>

        <Tabs defaultValue="usa" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {Object.entries(countryData).map(([key, country]) => (
              <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                <span className="text-lg">{country.flag}</span>
                <span className="hidden sm:inline">{country.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(countryData).map(([key, country]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-primary flex items-center justify-center gap-3">
                  <span className="text-4xl">{country.flag}</span>
                  Study in {country.name}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Top Colleges */}
                <Card className="h-fit">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Top Universities (QS Rankings 2024)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {country.colleges.map((college, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                          <div>
                            <a 
                              href={college.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="font-medium text-primary hover:underline flex items-center gap-2"
                            >
                              {college.name}
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </div>
                          <Badge variant="outline" className="font-semibold">
                            #{college.rank}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Trending Courses */}
                <Card className="h-fit">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Trending Courses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {country.trendingCourses.map((course, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Pros */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-600">
                      <ThumbsUp className="h-5 w-5" />
                      Advantages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {country.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Cons */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <ThumbsDown className="h-5 w-5" />
                      Challenges
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {country.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Country-specific Packing List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Country-Specific Packing Essentials
                  </CardTitle>
                  <CardDescription>
                    Essential items specifically needed for {country.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {country.packingList.map((item, index) => (
                      <div key={index} className="p-3 rounded-lg bg-secondary/30 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CountryGuides;