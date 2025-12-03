import React from 'react';

// Data simulating project breakdown
const data = [
  { name: 'Studios', projects: 120, height: '60%' },
  { name: 'Kitchens', projects: 85, height: '42%' },
  { name: 'Fencing', projects: 200, height: '100%' },
  { name: 'Renos', projects: 65, height: '32%' },
];

const TrustStats: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-4">Proven Track Record</h3>
            <p className="text-gray-600 mb-6">
              With over 25 years of combined experience, we have successfully delivered hundreds of projects across the South East.
              We are "Safe Hands" for your property.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-100">
                <span className="block text-3xl font-bold text-brand-primary">25+</span>
                <span className="text-sm text-gray-600">Years Combined Exp.</span>
              </div>
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-100">
                <span className="block text-3xl font-bold text-brand-primary">100%</span>
                <span className="text-sm text-gray-600">Insured & Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Custom CSS Bar Chart - Robust and Crash-Free */}
          <div className="md:w-1/2 w-full h-80 bg-stone-50 rounded-xl p-8 border border-stone-100 flex flex-col">
             <h4 className="text-sm font-bold text-gray-500 uppercase mb-6 text-center">Projects Delivered by Category</h4>
             
             <div className="flex items-end justify-between flex-1 gap-4 h-full pb-2">
                {data.map((item, index) => (
                  <div key={index} className="flex flex-col items-center justify-end w-full h-full group cursor-default">
                    {/* Tooltip on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -mt-8 bg-gray-800 text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap z-10">
                      {item.projects} Projects
                    </div>
                    {/* The Bar */}
                    <div 
                      className={`w-full rounded-t-md transition-all duration-700 ease-out ${index === 0 ? 'bg-brand-primary' : 'bg-brand-accent'}`}
                      style={{ height: item.height }}
                    ></div>
                    {/* The Label */}
                    <span className="text-xs font-semibold text-gray-500 mt-3">{item.name}</span>
                  </div>
                ))}
             </div>
             
             {/* X-Axis Line */}
             <div className="w-full h-px bg-gray-300"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustStats;