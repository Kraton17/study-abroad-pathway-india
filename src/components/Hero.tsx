{/*
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative text-white py-40 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      
      
      <div

      className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-float"> 
     

     

      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>

<div className="absolute top-40 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-gentle"></div>

<div className="absolute bottom-20 left-1/3 w-24 h-24 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>



<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_60%)] animate-pulse-glow"></div> 


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
*/}

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative text-white py-40 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 overflow-hidden"
    >
      {/* Background Layer 1: Large, Softly Shifting Abstract Waves */}
      {/* These large, blurred shapes create a sense of deep, undulating motion. */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[120%] h-[120%] bg-blue-700 opacity-10 rounded-full blur-3xl animate-wave-drift-1"></div>
        <div className="absolute bottom-0 right-0 w-[110%] h-[110%] bg-purple-700 opacity-10 rounded-full blur-3xl animate-wave-drift-2"></div>
        <div className="absolute top-1/4 left-1/4 w-[100%] h-[100%] bg-indigo-700 opacity-10 rounded-full blur-3xl animate-wave-drift-3"></div>
      </div>

      {/* Background Layer 2: Subtle Radial Glows for Depth */}
      {/* Adds a gentle, pulsating light effect from various points. */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(150,200,255,0.08)_0%,transparent_50%)] animate-pulse-light-1"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(200,150,255,0.08)_0%,transparent_50%)] animate-pulse-light-2"></div>

      {/* Pulsing glow effect - overall ambient light */}
      {/* A very subtle, central glow to unify the background elements. */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_0%,_rgba(255,255,255,0)_60%)] animate-pulse-glow"></div>

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