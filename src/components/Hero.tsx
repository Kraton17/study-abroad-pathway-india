import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative text-white py-40 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900"
    >
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_60%)] animate-pulse"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.slate.300),theme(colors.slate.400),theme(colors.slate.300),theme(colors.slate.200))] bg-[length:200%_auto] animate-background-shimmer">
          Your Future Abroad Starts Here
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
          VisionAbroad is your comprehensive guide to navigating the journey of studying overseas. From securing loans to packing your bags, we've got you covered.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/countries">Explore Destinations</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/loans">Find a Loan</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
