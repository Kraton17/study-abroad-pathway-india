import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal } from "lucide-react";
import { countries } from '@/lib/data';

// INR conversion rate (1 USD = 83 INR approx)
const USD_TO_INR_RATE = 83;
const MAX_BUDGET_INR = 6000000; // 60 Lakhs INR

const CountryGuides = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
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

    // Filter by search term (course or name) if a search term exists
    if (searchTerm.trim() !== '') {
      universities = universities.filter(uni => 
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (uni.genericCourses && uni.genericCourses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }

    // Apply filters only if the filter section is open
    if (showFilters) {
      // Filter by country
      if (selectedCountry !== 'all') {
        universities = universities.filter(uni => uni.country === selectedCountry);
      }

      // Filter by budget in INR only if the user has interacted with the slider
      if (budgetEnabled) {
        const budgetInUSD = budget[0] / USD_TO_INR_RATE;
        universities = universities.filter(uni => uni.fees ? uni.fees <= budgetInUSD : false);
      }
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
            Search for a course or university, or use filters to explore your options.
          </p>
        </div>

        <Card className="mb-12 p-6 shadow-soft sticky top-20 z-40 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <Input 
                  placeholder="Search by course (e.g., Cyber Security) or university..."
                  className="text-base h-11"
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
                        Budget (Max Annual Fees): 
                        <span className={`font-bold ml-2 ${budgetEnabled ? 'text-primary' : 'text-muted-foreground'}`}>
                          {budgetEnabled ? `₹ ${(budget[0] / 100000).toFixed(1)} Lakhs` : 'Any'}
                        </span>
                    </label>
                    <Button variant="ghost" size="sm" onClick={resetBudget}>Reset</Button>
                  </div>
                  <Slider
                    defaultValue={[MAX_BUDGET_INR]}
                    value={budget}
                    max={MAX_BUDGET_INR}
                    step={100000} // 1 Lakh
                    onValueChange={(value) => {
                        setBudget(value);
                        setBudgetEnabled(true);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </Card>

        <div>
            <h3 className="text-2xl font-bold mb-2">Top Ranked Universities</h3>
            <p className="text-muted-foreground mb-6">Showing {topRanked.length} results</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRanked.map((uni) => (
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
            ))}
            </div>

            <h3 className="text-2xl font-bold mb-2 mt-12">Other Good Universities</h3>
            <p className="text-muted-foreground mb-6">Showing {otherUniversities.length} results</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherUniversities.map((uni) => (
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
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default CountryGuides;