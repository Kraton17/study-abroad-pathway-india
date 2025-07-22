import React, { useState, useMemo, useEffect } from "react";
import { fetchAllCountries, searchUniversities, type CountryData, type UniversityRanking } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Filter, Search, ExternalLink, MapPin, DollarSign, Trophy, ChevronDown, X, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const USD_TO_INR_RATE = 83;
const MAX_BUDGET_INR = 6000000;

const CountryGuides = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [budget, setBudget] = useState([MAX_BUDGET_INR]);
  const [showFilters, setShowFilters] = useState(false);
  const [budgetChanged, setBudgetChanged] = useState(false);
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [universities, setUniversities] = useState<UniversityRanking[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const countriesData = await fetchAllCountries();
        setCountries(countriesData);
        
        const allUnis: UniversityRanking[] = [];
        countriesData.forEach(country => {
          allUnis.push(...country.universities);
        });
        setUniversities(allUnis);
      } catch (error) {
        console.error('Failed to load countries data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSearch = async () => {
    setSearchLoading(true);
    try {
      const results = await searchUniversities(inputValue, selectedCountry === 'all' ? undefined : selectedCountry);
      setUniversities(results);
      setSearchTerm(inputValue);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setSearchLoading(false);
    }
  };

  const resetBudget = () => {
    setBudget([MAX_BUDGET_INR]);
    setBudgetChanged(false);
  };

  // Filter universities based on country and budget
  const filteredUniversities = useMemo(() => {
    let filtered = universities;

    if (selectedCountry !== "all") {
      filtered = filtered.filter(uni => uni.country.toLowerCase() === selectedCountry.toLowerCase());
    }

    if (budgetChanged) {
      const budgetInUSD = budget[0] / USD_TO_INR_RATE;
      filtered = filtered.filter(uni => uni.fees ? uni.fees <= budgetInUSD : true);
    }

    return {
      topRanked: filtered.filter(uni => typeof uni.qsRank === 'number' && uni.qsRank <= 200),
      otherUniversities: filtered.filter(uni => typeof uni.qsRank !== 'number' || uni.qsRank > 200)
    };
  }, [universities, selectedCountry, budget, budgetChanged]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Loading universities data...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 animate-slide-up">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Find Your Perfect University
        </h1>
        <p className="text-lg text-muted-foreground">
          Search through thousands of universities worldwide with real-time QS rankings.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 animate-slide-up">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="text"
            placeholder="Search by university name or course..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="pl-10 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
          />
        </div>
        <Button 
          onClick={handleSearch} 
          className="btn-hover-effect"
          disabled={searchLoading}
        >
          {searchLoading ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Search className="w-4 h-4 mr-2" />
          )}
          Search
        </Button>
        <Button 
          variant="outline" 
          onClick={() => setShowFilters(!showFilters)}
          className="btn-hover-effect"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
          <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      {/* Filters */}
      {showFilters && (
        <Card className="mb-8 p-6 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="hover:border-primary/50 transition-colors">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent className="bg-background/95 backdrop-blur-sm">
                  <SelectItem value="all">All Countries</SelectItem>
                  {countries.map(country => (
                    <SelectItem key={country.id} value={country.name} className="hover:bg-accent/50">
                      {country.flag} {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="md:col-span-2">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium">
                  Budget (Max Annual Fees): ₹{(budget[0] / 100000).toFixed(1)} Lakhs
                </label>
                <Button variant="ghost" size="sm" onClick={resetBudget}>
                  <X className="w-4 h-4 mr-1" />
                  Reset
                </Button>
              </div>
              <Slider
                value={budget}
                max={MAX_BUDGET_INR}
                step={100000}
                onValueChange={(value) => {
                  setBudget(value);
                  setBudgetChanged(true);
                }}
                className="w-full"
              />
            </div>
          </div>
        </Card>
      )}

      {/* Results */}
      <div className="space-y-12">
        {/* Top Ranked Universities */}
        {filteredUniversities.topRanked.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="w-8 h-8 text-yellow-500" />
              Top Ranked Universities ({filteredUniversities.topRanked.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUniversities.topRanked.map((university, index) => (
                <Card 
                  key={university.id} 
                  className="group hover:scale-[1.02] transition-all duration-500 hover:shadow-xl border-0 bg-gradient-to-br from-background to-secondary/30 animate-slide-up overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredCard(university.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                          <Link 
                            to={`/university/${university.id}`}
                            state={{ searchTerm }}
                            className="hover:underline"
                          >
                            {university.name}
                          </Link>
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{university.country}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20">
                        QS #{university.qsRank}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Link 
                        to={`/university/${university.id}`}
                        state={{ searchTerm }}
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        View Details →
                      </Link>
                      <a 
                        href={university.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Official Site
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryGuides;