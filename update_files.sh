#!/bin/bash

# This script will update your project files.

echo "Updating src/lib/data.ts..."
cat > src/lib/data.ts <<'E_O_F'
export interface Course {
  name: string;
  details: string;
  url: string;
}

export interface University {
  id: string; // Unique ID for routing
  name: string;
  qsRank: number | string;
  theRank: number | string;
  website: string;
  country: string;
  courses?: Course[];
  genericCourses?: string[]; // Fallback for general search
  fees?: number; // Annual fees in USD
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  universities: University[];
}

export interface Bank {
    id: string;
    name: string;
    type: 'Government Bank' | 'Private Bank' | 'NBFC' | 'International Lender';
    maxAmount: string;
    interestRate: string;
    collateralRequired: string;
    processingTime: string;
    website: string;
    description: string;
}

export const banks: Bank[] = [
  { id: "sbi", name: "State Bank of India (SBI)", type: "Government Bank", maxAmount: "₹1.5 Crore", interestRate: "9.5% - 11.5%", collateralRequired: "Above ₹7.5 Lakhs", processingTime: "15-20 days", website: "https://sbi.co.in", description: "India's largest public sector bank with comprehensive loan solutions." },
  { id: "bob", name: "Bank of Baroda", type: "Government Bank", maxAmount: "₹1.25 Crore", interestRate: "8.55% onwards", collateralRequired: "Case-specific", processingTime: "10-15 days", website: "https://www.bankofbaroda.in", description: "Offers 'Baroda Scholar' scheme for students going abroad." },
  { id: "pnb", name: "Punjab National Bank (PNB)", type: "Government Bank", maxAmount: "Need-based", interestRate: "9.25% onwards", collateralRequired: "Above ₹7.5 Lakhs", processingTime: "2-3 weeks", website: "https://www.pnbindia.in", description: "Provides the 'PNB Udaan' education loan scheme." },
  { id: "canara", name: "Canara Bank", type: "Government Bank", maxAmount: "Need-based", interestRate: "10.25% onwards", collateralRequired: "Above ₹7.5 Lakhs", processingTime: "15-20 days", website: "https://www.canarabank.com", description: "Offers a range of education loan products with competitive rates." },
  { id: "hdfc", name: "HDFC Bank", type: "Private Bank", maxAmount: "₹1.5 Crore", interestRate: "9.55% onwards", collateralRequired: "Case-specific", processingTime: "5-7 days", website: "https://www.hdfcbank.com", description: "Quick and seamless education loan processing for premier institutes." },
  { id: "icici", name: "ICICI Bank", type: "Private Bank", maxAmount: "₹1 Crore", interestRate: "10.25% - 11.75%", collateralRequired: "Above ₹7.5 Lakhs", processingTime: "10-12 days", website: "https://icicibank.com", description: "Offers comprehensive education loan solutions with flexible repayment options." },
  { id: "axis", name: "Axis Bank", type: "Private Bank", maxAmount: "₹75 Lakhs", interestRate: "10.75% - 12%", collateralRequired: "Above ₹4 Lakhs", processingTime: "10-15 days", website: "https://axisbank.com", description: "Provides student-friendly education loans with quick processing." },
  { id: "kotak", name: "Kotak Mahindra Bank", type: "Private Bank", maxAmount: "₹1.5 Crore", interestRate: "Up to 16%", collateralRequired: "Case-specific", processingTime: "7-10 days", website: "https://www.kotak.com", description: "Customized education loans for studies in India and abroad." },
  { id: "avanse", name: "Avanse Financial Services", type: "NBFC", maxAmount: "Need-based", interestRate: "10.5% - 15%", collateralRequired: "Flexible", processingTime: "5-7 days", website: "https://avanse.com", description: "Specializes in education loans with a focus on study abroad programs." },
  { id: "hdfc-credila", name: "HDFC Credila", type: "NBFC", maxAmount: "₹75 Lakhs", interestRate: "9.75% - 13.25%", collateralRequired: "Flexible", processingTime: "7-10 days", website: "https://credila.com", description: "India's first dedicated education loan company." },
  { id: "incred", name: "InCred", type: "NBFC", maxAmount: "Up to ₹1.5 Crore", interestRate: "11% onwards", collateralRequired: "Both collateral and non-collateral options", processingTime: "3-5 days", website: "https://www.incred.com", description: "New-age financial services platform with customized loan solutions." },
  { id: "prodigy", name: "Prodigy Finance", type: "International Lender", maxAmount: "Up to 100% funding", interestRate: "11% - 15% (varies by program)", collateralRequired: "No collateral required", processingTime: "2-3 weeks", website: "https://prodigyfinance.com", description: "Collateral-free loans for students at top international universities." },
  { id: "mpower", name: "MPOWER Financing", type: "International Lender", maxAmount: "$100,000 USD", interestRate: "12% - 14%", collateralRequired: "No collateral or co-signer required", processingTime: "1-2 weeks", website: "https://www.mpowerfinancing.com", description: "Loans for international students in the US and Canada without a co-signer." }
];

export const countries: Country[] = [
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    universities: [
      { id: 'mit', name: 'Massachusetts Institute of Technology (MIT)', qsRank: 1, theRank: 2, website: 'https://www.mit.edu/', country: 'USA', fees: 60000,
        courses: [
          { name: 'MS in Computer Science and Engineering', details: 'A research-focused Master\'s program.', url: 'https://www.eecs.mit.edu/academics/graduate-programs/master-of-science-program/'},
          { name: 'Master of Engineering in Cybersecurity', details: 'Focuses on technology, policy, and management of cybersecurity.', url: 'https://cybersecurity.mit.edu/master-of-engineering-in-cybersecurity/'},
        ],
        genericCourses: ['Engineering', 'Computer Science', 'Physical Sciences', 'Cyber Security'],
      },
      { id: 'stanford', name: 'Stanford University', qsRank: 5, theRank: 2, website: 'https://www.stanford.edu/', country: 'USA', fees: 58000,
        courses: [
          { name: 'MS in Computer Science', details: 'Specializations in AI, Systems, and Theory.', url: 'https://cs.stanford.edu/academics/graduate/masters'},
        ],
        genericCourses: ['Business', 'Engineering', 'Computer Science', 'Cyber Security'],
      },
      { id: 'cmu', name: 'Carnegie Mellon University', qsRank: 52, theRank: 24, website: 'https://www.cmu.edu/', country: 'USA', fees: 62000,
        courses: [
          { name: 'MS in Information Security (MSIS)', details: 'A leading program in cybersecurity from the Information Networking Institute.', url: 'https://www.ini.cmu.edu/programs/msis/'},
        ],
        genericCourses: ['Computer Science', 'Engineering', 'Fine Arts', 'Cyber Security'],
      },
      { id: 'purdue', name: 'Purdue University', qsRank: 99, theRank: '101-125', website: 'https://www.purdue.edu/', country: 'USA', fees: 32000,
        courses: [
           { name: 'MS in Cyber Criminology', details: 'Focuses on the intersection of crime and cybersecurity.', url: 'https://www.purdue.edu/gradschool/programs/interdisciplinary/cyber-criminology.html'},
        ],
        genericCourses: ['Engineering', 'Agriculture', 'Cyber Security'],
      },
      { id: 'asu', name: 'Arizona State University', qsRank: 179, theRank: '201-250', website: 'https://www.asu.edu/', country: 'USA', fees: 35000,
        genericCourses: ['Business', 'Innovation', 'Engineering', 'Cyber Security'],
      },
    ],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    universities: [
        { id: 'oxford', name: 'University of Oxford', qsRank: 3, theRank: 1, website: 'https://www.ox.ac.uk/', country: 'UK', fees: 30000,
            courses: [
              { name: 'MSc in Software and Systems Security', details: 'Covers the principles of software and systems security.', url: 'https://www.cs.ox.ac.uk/softwaresystemssecurity/'},
            ],
            genericCourses: ['Arts & Humanities', 'Law', 'Medicine', 'Computer Science', 'Cyber Security'],
        },
        { id: 'cambridge', name: 'University of Cambridge', qsRank: 5, theRank: 5, website: 'https://www.cam.ac.uk/', country: 'UK', fees: 32000,
            genericCourses: ['Natural Sciences', 'Engineering', 'Arts & Humanities', 'Computer Science'],
        },
        { id: 'southampton', name: 'University of Southampton', qsRank: 81, theRank: 97, website: 'https://www.southampton.ac.uk/', country: 'UK', fees: 25000,
            courses: [
              { name: 'MSc Cyber Security', details: 'Accredited by GCHQ, this course is a leader in the field.', url: 'https://www.southampton.ac.uk/courses/cyber-security-masters-msc'},
            ],
            genericCourses: ['Electrical Engineering', 'Computer Science', 'Cyber Security'],
        },
        { id: 'coventry', name: 'Coventry University', qsRank: 571, theRank: '601-800', website: 'https://www.coventry.ac.uk/', country: 'UK', fees: 18000,
            genericCourses: ['Automotive Engineering', 'Business', 'Cyber Security'],
        },
    ],
  },
  {
      id: 'canada',
      name: 'Canada',
      flag: '🇨🇦',
      universities: [
        { id: 'toronto', name: 'University of Toronto', qsRank: 21, theRank: 21, website: 'https://www.utoronto.ca/', country: 'Canada', fees: 45000,
          genericCourses: ['Medicine', 'Education', 'Computer Science', 'Cyber Security'],
        },
        { id: 'ubc', name: 'University of British Columbia', qsRank: 34, theRank: 41, website: 'https://www.ubc.ca/', country: 'Canada', fees: 40000,
          genericCourses: ['Geography', 'Education', 'Engineering', 'Computer Science', 'Cyber Security'],
        },
        { id: 'waterloo', name: 'University of Waterloo', qsRank: 112, theRank: '151-175', website: 'https://uwaterloo.ca/', country: 'Canada', fees: 42000,
          genericCourses: ['Computer Science', 'Engineering', 'Cyber Security'],
        },
        { id: 'concordia', name: 'Concordia University', qsRank: 387, theRank: '501-600', website: 'https://www.concordia.ca/', country: 'Canada', fees: 20000,
          genericCourses: ['Fine Arts', 'Engineering', 'Cyber Security'],
        },
      ],
  },
];
E_O_F

echo "Creating src/pages/UniversityDetail.tsx..."
cat > src/pages/UniversityDetail.tsx <<'E_O_F'
import { useState } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { countries } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const UniversityDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { searchTerm } = location.state || { searchTerm: '' };

  const university = countries.flatMap(c => c.universities).find(u => u.id === id);

  if (!university) {
    return <div>University not found</div>;
  }

  // Filter courses based on the search term from the previous page
  const relevantCourses = university.courses?.filter(course => 
    searchTerm && course.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl">{university.name}</CardTitle>
                  <CardDescription className="text-lg">{university.country}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge>QS: {university.qsRank}</Badge>
                  <Badge variant="secondary">THE: {university.theRank}</Badge>
                </div>
              </div>
            </CardHeader>
             <CardContent>
                <Button asChild>
                    <a href={university.website} target="_blank" rel="noopener noreferrer">
                        Visit University Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </Button>
             </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Relevant Courses for "{searchTerm}"</CardTitle>
              <CardDescription>Click on a course to see more details and a direct link to the program page.</CardDescription>
            </CardHeader>
            <CardContent>
              {relevantCourses.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {relevantCourses.map((course, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="text-lg">{course.name}</AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <p>{course.details}</p>
                        <Button variant="outline" asChild>
                            <a href={course.url} target="_blank" rel="noopener noreferrer">
                                Go to Course Page
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <p className="text-muted-foreground">No specific course data available for "{searchTerm}" at this university. Check the university website for more information.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UniversityDetail;
E_O_F

echo "Updating src/App.tsx..."
cat > src/App.tsx <<'E_O_F'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BankDetail from "./pages/BankDetail";
import NotFound from "./pages/NotFound";
import CountriesPage from "./pages/CountriesPage";
import LoansPage from "./pages/LoansPage";
import ConsultanciesPage from "./pages/ConsultanciesPage";
import PackingGuidePage from "./pages/PackingGuidePage";
import UniversityDetail from "./pages/UniversityDetail"; // Import the new component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/consultancies" element={<ConsultanciesPage />} />
          <Route path="/packing-guide" element={<PackingGuidePage />} />
          <Route path="/bank/:bankId" element={<BankDetail />} />
          <Route path="/university/:id" element={<UniversityDetail />} /> {/* Add the new route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
E_O_F

echo "Updating src/components/CountryGuides.tsx..."
cat > src/components/CountryGuides.tsx <<'E_O_F'
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ExternalLink, Search, SlidersHorizontal, Info } from "lucide-react";
import { countries, University } from '@/lib/data';

// INR conversion rate (1 USD = 83 INR approx)
const USD_TO_INR_RATE = 83;
const MAX_BUDGET_INR = 6000000; // 60 Lakhs INR

const CountryGuides = () => {
  const [inputValue, setInputValue] = useState('Cyber Security');
  const [searchTerm, setSearchTerm] = useState('Cyber Security');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [budget, setBudget] = useState([MAX_BUDGET_INR]);
  const [showFilters, setShowFilters] = useState(false);
  const [budgetEnabled, setBudgetEnabled] = useState(false);

  const allUniversities = useMemo(() => countries.flatMap(c => c.universities), []);

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };
  
  const resetBudget = () => {
    setBudget([MAX_BUDGET_INR]);
    setBudgetEnabled(false);
  };

  const { topRanked, otherUniversities } = useMemo(() => {
    let universities = [...allUniversities];

    // Filter by search term
    if (searchTerm.trim() !== '') {
      universities = universities.filter(uni => 
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (uni.genericCourses && uni.genericCourses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }

    // Filter by country
    if (showFilters && selectedCountry !== 'all') {
      universities = universities.filter(uni => uni.country === selectedCountry);
    }

    // Filter by budget in INR
    if (showFilters && budgetEnabled) {
      const budgetInUSD = budget[0] / USD_TO_INR_RATE;
      universities = universities.filter(uni => uni.fees ? uni.fees <= budgetInUSD : true);
    }

    const top = universities.filter(uni => typeof uni.qsRank === 'number' && uni.qsRank <= 200)
                           .sort((a,b) => (a.qsRank as number) - (b.qsRank as number));
    const other = universities.filter(uni => typeof uni.qsRank !== 'number' || uni.qsRank > 200);

    return { topRanked: top, otherUniversities: other };
  }, [searchTerm, selectedCountry, budget, allUniversities, showFilters, budgetEnabled]);

  return (
    <section id="countries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Find Your University
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Search for a course to see the best universities worldwide, then apply filters to narrow your results.
          </p>
        </div>

        <Card className="mb-12 p-6 shadow-soft sticky top-20 z-40 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="e.g., Cyber Security, MIT..."
                  className="pl-10 text-base h-11"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button onClick={handleSearch} className="h-11">Search</Button>
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="h-11">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t">
                <div>
                  <label className="text-sm font-medium mb-2 block">Filter by Country</label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger><SelectValue/></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Countries</SelectItem>
                      {countries.map(country => (
                        <SelectItem key={country.id} value={country.name}>
                          {country.flag} {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <div className="flex justify-between items-center mb-2">
                     <label className="text-sm font-medium">
                        Filter by Budget (Max Annual Fees): 
                        <span className={`font-bold ml-2 ${budgetEnabled ? 'text-primary' : 'text-muted-foreground'}`}>
                          ₹ {(budget[0] / 100000).toFixed(1)} Lakhs
                        </span>
                    </label>
                    <Button variant="ghost" size="sm" onClick={resetBudget} disabled={!budgetEnabled}>Reset</Button>
                  </div>
                  <Slider
                    defaultValue={[MAX_BUDGET_INR]}
                    max={MAX_BUDGET_INR}
                    step={100000} // 1 Lakh
                    onValueChange={(value) => {
                        setBudget(value);
                        setBudgetEnabled(true);
                    }}
                    disabled={!budgetEnabled && budget[0] === MAX_BUDGET_INR}
                  />
                </div>
              </div>
            )}
          </div>
        </Card>

        <div>
            <h3 className="text-2xl font-bold mb-2">Top Ranked Universities</h3>
            <p className="text-muted-foreground mb-6">Showing {topRanked.length} top-ranked universities for <span className="text-primary font-medium">"{searchTerm}"</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRanked.length > 0 ? topRanked.map((uni) => (
                <Card key={uni.id} className="border-border hover:shadow-medium transition-shadow flex flex-col">
                    <Link to={`/university/${uni.id}`} state={{ searchTerm }} className="flex flex-col flex-grow">
                        <CardHeader>
                            <CardTitle className="text-lg">{uni.name}</CardTitle>
                            <CardDescription>{uni.country}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3 flex-grow flex flex-col justify-end">
                            <div className="flex justify-between text-sm"><span className="text-muted-foreground">QS Ranking:</span><Badge variant="secondary">{uni.qsRank}</Badge></div>
                            <div className="flex justify-between text-sm"><span className="text-muted-foreground">THE Ranking:</span><Badge variant="secondary">{uni.theRank}</Badge></div>
                        </CardContent>
                    </Link>
                </Card>
            )) : (
                <div className="col-span-full text-center py-4 text-muted-foreground">No top-ranked universities found.</div>
            )}
            </div>

            <h3 className="text-2xl font-bold mb-2 mt-12">Other Good Universities</h3>
            <p className="text-muted-foreground mb-6">Showing {otherUniversities.length} other universities for <span className="text-primary font-medium">"{searchTerm}"</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherUniversities.length > 0 ? otherUniversities.map((uni) => (
                <Card key={uni.id} className="border-border hover:shadow-medium transition-shadow flex flex-col">
                    <Link to={`/university/${uni.id}`} state={{ searchTerm }} className="flex flex-col flex-grow">
                        <CardHeader>
                            <CardTitle className="text-lg">{uni.name}</CardTitle>
                            <CardDescription>{uni.country}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3 flex-grow flex flex-col justify-end">
                            <div className="flex justify-between text-sm"><span className="text-muted-foreground">QS Ranking:</span><Badge variant="outline">{uni.qsRank}</Badge></div>
                            <div className="flex justify-between text-sm"><span className="text-muted-foreground">THE Ranking:</span><Badge variant="outline">{uni.theRank}</Badge></div>
                        </CardContent>
                    </Link>
                </Card>
            )) : (
                <div className="col-span-full text-center py-4 text-muted-foreground">No other universities found.</div>
            )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default CountryGuides;
E_O_F

echo "✅ All files updated with the new, advanced search and university detail pages!"
