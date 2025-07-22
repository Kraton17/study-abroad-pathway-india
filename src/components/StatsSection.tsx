import { useState, useEffect, useRef } from "react";
import { Users, GraduationCap, Building, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 50000,
    suffix: "+",
    label: "Students Helped",
    color: "text-blue-500"
  },
  {
    icon: GraduationCap,
    number: 2000,
    suffix: "+", 
    label: "Partner Universities",
    color: "text-green-500"
  },
  {
    icon: Building,
    number: 25,
    suffix: "+",
    label: "Countries Covered",
    color: "text-purple-500"
  },
  {
    icon: Award,
    number: 98,
    suffix: "%",
    label: "Success Rate",
    color: "text-orange-500"
  }
];

const CountingNumber = ({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their study abroad dreams with VisionAbroad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300 ${stat.color}`}>
                  <stat.icon className="w-10 h-10" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 scale-0 group-hover:scale-110 transition-transform duration-300 -z-10" />
              </div>
              
              <div className={`mb-2 ${stat.color}`}>
                <CountingNumber target={stat.number} suffix={stat.suffix} />
              </div>
              
              <p className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;