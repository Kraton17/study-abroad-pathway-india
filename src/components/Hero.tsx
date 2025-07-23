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
      className="relative text-white py-40 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 overflow-hidden"
    >
      {/* Animated geometric pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-background-float"></div>
      
      {/* Floating orbs with enhanced colors */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full mix-blend-screen filter blur-2xl opacity-15 animate-bounce-gentle"></div>
      <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full mix-blend-screen filter blur-2xl opacity-25 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-wave-drift-1"></div>
      
      {/* Dynamic gradient waves */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 rounded-full blur-3xl animate-wave-drift-1"></div>
        <div className="absolute bottom-0 right-0 w-[140%] h-[140%] bg-gradient-to-tl from-indigo-600/10 via-transparent to-cyan-600/10 rounded-full blur-3xl animate-wave-drift-2"></div>
        <div className="absolute top-1/3 left-1/2 w-[120%] h-[120%] bg-gradient-to-r from-purple-600/8 via-transparent to-pink-600/8 rounded-full blur-3xl animate-wave-drift-3"></div>
      </div>

      {/* Enhanced radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15)_0%,transparent_50%)] animate-pulse-light-1"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.12)_0%,transparent_50%)] animate-pulse-light-2"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.08)_0%,transparent_60%)] animate-background-pulse-glow"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-200 animate-background-shimmer animate-slide-up"
        >
          Your Future Abroad Starts Here
        </h1>
        <p
          className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8 animate-slide-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]"
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