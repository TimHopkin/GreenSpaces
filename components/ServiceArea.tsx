import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceArea: React.FC = () => {
  const towns = [
    "Godalming", "Guildford", "Woking", "Farnham", 
    "Winchester", "Horsham", "Chichester"
  ];

  return (
    <section id="areas" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">Serving the South East</h3>
            <p className="text-gray-600 mb-8">
              Based in Godalming, we are perfectly positioned to serve clients across Surrey, Hampshire, and Sussex.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {towns.map((town) => (
                <div key={town} className="flex items-center text-gray-700">
                  <MapPin size={18} className="text-brand-accent mr-2" />
                  <span className="font-medium">{town}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-500 italic">
              *And surrounding villages in the tri-county area.
            </p>
          </div>

          <div className="md:w-1/2 relative h-64 md:h-auto bg-brand-dark">
            <img 
              src="https://picsum.photos/800/600?random=50" 
              alt="Map of Surrey Hampshire Sussex" 
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                     <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-2">
                         <MapPin className="text-white w-12 h-12" />
                     </div>
                     <p className="text-white font-bold text-xl tracking-widest">SURREY • HANTS • SUSSEX</p>
                 </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;