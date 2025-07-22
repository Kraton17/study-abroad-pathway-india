import { Button } from "@/components/ui/button";
import heroBanner from "/hero-banner.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative text-white py-40 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 overflow-hidden"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      {/* Animated background grid */}
      
      {/* 

      
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute top-40 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-gentle"></div>
      <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>

      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_60%)] animate-pulse-glow"></div>
      


      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-black bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.slate.300),theme(colors.slate.400),theme(colors.slate.300),theme(colors.slate.200))] bg-[length:200%_auto] animate-background-shimmer animate-slide-up">
          Your Future Abroad Starts Here
        </h1>
        <p className="text-xl md:text-3xl font-bold text-black max-w-3xl mx-auto mb-8 animate-slide-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
          VisionAbroad is your comprehensive guide to navigating the journey of studying overseas. From securing loans to packing your bags, we've got you covered.
        </p>
        <div className="flex justify-center gap-4 animate-slide-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
          <Button size="lg" className="btn-hover-effect btn-glow" asChild>
            <Link to="/countries">Explore Destinations</Link>
          </Button>
          <Button size="lg" variant="secondary" className="btn-hover-effect" asChild>
            <Link to="/loans">Find a Loan</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
*/} 

<div className="container mx-auto px-4 text-center relative z-10">
        <h1
          className="text-5xl text-black md:text-7xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.slate.300),theme(colors.slate.400),theme(colors.slate.300),theme(colors.slate.200))] bg-[length:200%_auto] animate-background-shimmer animate-slide-up"
        >
          Your Future Abroad Starts Here
        </h1>
        <p
          className="text-xl md:text-2xl text-black text-slate-300 max-w-3xl mx-auto mb-8 animate-slide-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]"
        >
          VisionAbroad is your comprehensive guide to navigating the journey of studying overseas. From securing loans to packing your bags, we've got you covered.
        </p>
        <div className="flex justify-center gap-4 animate-slide-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
          <Button size="lg" className="btn-hover-effect btn-glow" asChild>
            <Link to="/countries">Explore Destinations</Link>
          </Button>
          <Button size="lg" variant="secondary" className="btn-hover-effect" asChild>
            <Link to="/loans">Find a Loan</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

