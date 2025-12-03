import React from 'react';

const GardenStudios: React.FC = () => {
  return (
    <section id="studios" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/600/800?random=20" alt="Garden Office Exterior" className="rounded-2xl shadow-lg mt-8 w-full object-cover h-64 md:h-80" />
               <img src="https://picsum.photos/600/800?random=21" alt="Garden Studio Interior" className="rounded-2xl shadow-lg w-full object-cover h-64 md:h-80" />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-2">Our Heritage</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Bespoke Garden Studios</h3>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Before we expanded, we built our reputation on creating stunning, thermally efficient garden rooms in Godalming and Surrey. This remains the heart of what we do.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Fully insulated for year-round use",
                "Custom electrical and lighting layouts",
                "High-grade cedar or composite cladding",
                "Planning permission compliant designs"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contact" className="text-brand-dark font-bold border-b-2 border-brand-primary hover:text-brand-primary transition-colors pb-1">
              Design Your Garden Room
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GardenStudios;