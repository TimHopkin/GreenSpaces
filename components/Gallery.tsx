import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: "https://picsum.photos/600/600?random=1", label: "Garden Studio" },
    { src: "https://picsum.photos/600/600?random=2", label: "Bespoke Kitchen" },
    { src: "https://picsum.photos/600/600?random=3", label: "Cedar Decking" },
    { src: "https://picsum.photos/600/600?random=4", label: "Oak Frame Garage" },
    { src: "https://picsum.photos/600/600?random=5", label: "Custom Wardrobes" },
    { src: "https://picsum.photos/600/600?random=6", label: "Timber Fencing" },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-2">Our Work</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Recent Projects</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl shadow-md aspect-square cursor-pointer">
              <img 
                src={img.src} 
                alt={img.label} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-xl tracking-wider border-2 border-white px-6 py-2">
                    {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;