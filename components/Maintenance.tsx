import React from 'react';
import { ShieldCheck, CloudRain, Wind, Home } from 'lucide-react';

const Maintenance: React.FC = () => {
  const tasks = [
    { icon: CloudRain, title: "Guttering & Fascias", desc: "Cleaning, repairs, and full replacements to protect your home from water damage." },
    { icon: Wind, title: "Storm Damage", desc: "Emergency fencing repairs and roof tile replacements after bad weather." },
    { icon: Home, title: "General Repairs", desc: "Door hanging, skirting board replacement, and timber decay treatment." },
    { icon: ShieldCheck, title: "Preventative Care", desc: "Annual inspections and maintenance packages for landlords and homeowners." }
  ];

  return (
    <section id="maintenance" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-2">Keep Your Home Healthy</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Property Maintenance & Repairs</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Small problems become big costs if ignored. Our maintenance team handles the jobs that keep your home safe, dry, and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tasks.map((task, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:border-brand-primary/30 transition-colors">
              <div className="bg-brand-light w-12 h-12 rounded-lg flex items-center justify-center text-brand-primary mb-4">
                <task.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{task.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{task.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 border border-brand-primary/20 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
                <h4 className="text-xl font-bold text-brand-dark mb-2">Need a quick repair?</h4>
                <p className="text-gray-600">We offer a rapid response service for urgent repairs in the Godalming area.</p>
            </div>
            <a href="#contact" className="bg-brand-accent hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap">
                Book a Repair
            </a>
        </div>
      </div>
    </section>
  );
};
export default Maintenance;