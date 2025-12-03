import React from 'react';
import { Ruler, ChefHat, AppWindow, Construction, Wrench, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Ruler,
      title: 'Carpentry & Joinery',
      desc: 'Custom shelving, doors, skirting, and timber framing tailored to your home.',
      color: 'bg-amber-100 text-amber-700',
    },
    {
      icon: ChefHat,
      title: 'Kitchens & Bathrooms',
      desc: 'Professional installation of high-end units (Howdens, Bespoke, Ikea).',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: AppWindow,
      title: 'Windows & Doors',
      desc: 'Expert timber and uPVC installation and repair for energy efficiency.',
      color: 'bg-sky-100 text-sky-700',
    },
    {
      icon: Construction, // Represents Fencing/Structures
      title: 'Garden Structures',
      desc: 'Fencing, decking, pergolas, custom sheds, and gates built to last.',
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: Wrench,
      title: 'Home Maintenance',
      desc: 'Guttering repairs, fascia boards, roof repairs, and general handyman tasks.',
      color: 'bg-stone-100 text-stone-700',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-2">Total Home & Garden Specialist</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Complete Home Solutions</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            We don't just build garden rooms; we transform your entire home. Use the same trusted team for all your property needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Garden Studios Feature Card (Occupies first slot) */}
          <div className="relative group overflow-hidden rounded-2xl shadow-xl row-span-1 lg:row-span-2 min-h-[400px]">
            <img
              src="/images/studio-exterior.png"
              alt="Garden Studio"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent"></div>
            <div className="absolute bottom-0 p-8">
              <span className="bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">Core Service</span>
              <h4 className="text-2xl font-bold text-white mb-2">Bespoke Garden Studios</h4>
              <p className="text-gray-200 mb-6 line-clamp-3">
                Our signature high-end garden rooms. Perfect for home offices, gyms, or creative studios. Built for year-round use.
              </p>
              <a href="#studios" className="inline-flex items-center text-white font-semibold hover:text-brand-primary transition-colors">
                Learn More <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Other Services Cards */}
          {services.map((s, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start group">
              <div className={`p-4 rounded-lg mb-6 ${s.color} group-hover:scale-110 transition-transform`}>
                <s.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-4">{s.desc}</p>
              <a href="#contact" className="mt-auto text-brand-primary font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                Request Quote <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;