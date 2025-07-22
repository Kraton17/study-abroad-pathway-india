import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Heart, 
  Zap,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Platform",
    description: "Verified information from 2000+ universities and 50+ banks",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Compare loans, universities, and requirements in one place",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Connect with verified consultants and successful alumni",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Success Stories",
    description: "98% of our students successfully secure admissions",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Heart,
    title: "Personalized Support",
    description: "Tailored advice based on your profile and aspirations",
    color: "from-rose-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Quick Processing",
    description: "Fast-track your applications with our streamlined process",
    color: "from-yellow-500 to-orange-500"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why Choose VisionAbroad?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just a platform, we're your partners in turning your study abroad dreams into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-all duration-500 border-0 shadow-lg hover:shadow-2xl bg-gradient-to-br from-background to-secondary/50 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                {/* Background glow effect */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary to-accent p-12 rounded-2xl animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have successfully navigated their study abroad journey with VisionAbroad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="btn-hover-effect" asChild>
              <Link to="/countries">
                Explore Universities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="btn-hover-effect border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/loans">
                Compare Loans
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;