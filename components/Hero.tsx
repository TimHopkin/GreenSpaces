import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?random=10"
          alt="Bespoke Garden Studio and Decking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/50 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-sm font-semibold text-brand-accent">Now Serving Surrey, Hants & Sussex</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 shadow-sm">
            Expert Carpentry, <br/>
            <span className="text-brand-light">Garden Studios</span> & <br/>
            Home Improvements
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed font-light">
            From bespoke garden rooms to fitted kitchens and fencing. 
            The same trusted quality, now for your whole home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-brand-primary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-brand-primary/50"
            >
              Get a Free Quote
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              View Our Services
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-300">
             <div className="flex items-center gap-1">
               <CheckCircle2 size={16} className="text-brand-primary" /> 25+ Years Experience
             </div>
             <div className="flex items-center gap-1">
               <CheckCircle2 size={16} className="text-brand-primary" /> Fully Insured
             </div>
             <div className="flex items-center gap-1">
               <CheckCircle2 size={16} className="text-brand-primary" /> Local to Godalming
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;