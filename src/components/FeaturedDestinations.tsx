import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, GraduationCap, Star } from "lucide-react";
import { useState } from "react";

const destinations = [
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    image: "photo-1469474968028-56623f02e42b",
    topUniversities: ["MIT", "Stanford", "Carnegie Mellon"],
    description: "Home to world's top universities and innovation hubs",
    students: "1M+",
    gradient: "from-blue-600 to-red-500"
  },
  {
    id: "uk",
    name: "United Kingdom", 
    flag: "🇬🇧",
    image: "photo-1493397212122-2b85dda8106b",
    topUniversities: ["Oxford", "Cambridge", "Southampton"],
    description: "Rich academic heritage and cutting-edge research",
    students: "500K+",
    gradient: "from-red-600 to-blue-500"
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦", 
    image: "photo-1500375592092-40eb2168fd21",
    topUniversities: ["Toronto", "UBC", "Waterloo"],
    description: "Quality education with friendly immigration policies",
    students: "350K+",
    gradient: "from-red-500 to-white"
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    image: "photo-1485833077593-4278b8350c16", 
    topUniversities: ["Melbourne", "Sydney", "ANU"],
    description: "World-class education in a vibrant multicultural environment",
    students: "300K+",
    gradient: "from-yellow-500 to-green-600"
  }
];

const FeaturedDestinations = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Popular Study Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover your perfect study abroad destination with our comprehensive guides
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id}
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-slide-up border-0 bg-gradient-to-br ${destination.gradient} p-1`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(destination.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-80 bg-background rounded-lg overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/${destination.image}?w=400&h=300&fit=crop)`
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Flag */}
                <div className="absolute top-4 right-4 text-4xl animate-bounce-gentle">
                  {destination.flag}
                </div>

                <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5" />
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                  </div>
                  
                  <p className="text-sm opacity-90 mb-4">{destination.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <GraduationCap className="w-4 h-4" />
                      <span className="text-sm">{destination.students} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">Top Ranked</span>
                    </div>
                  </div>

                  {/* Universities List - appears on hover */}
                  <div className={`transition-all duration-300 ${hoveredCard === destination.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-wide mb-2">Top Universities:</p>
                      <div className="flex flex-wrap gap-1">
                        {destination.topUniversities.map((uni) => (
                          <span key={uni} className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                            {uni}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button 
                    size="sm" 
                    className="w-full group/btn bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300"
                    asChild
                  >
                    <Link to="/countries" className="flex items-center justify-center gap-2">
                      Explore {destination.name}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" variant="outline" className="btn-hover-effect" asChild>
            <Link to="/countries">
              View All Destinations
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;