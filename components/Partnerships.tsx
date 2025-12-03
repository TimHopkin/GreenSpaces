import React from 'react';
import { Zap, Droplet, Waves, HardHat } from 'lucide-react';

const Partnerships: React.FC = () => {
  return (
    <section id="partnerships" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent font-bold tracking-wide uppercase text-sm mb-2">Stress-Free Build</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Complete Project Management</h3>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Don't juggle five different trades. We lead the project and bring in our trusted network of certified experts.
            <br className="hidden md:block" />
            <span className="text-white font-semibold mt-2 block">One quote, one point of contact, one perfect result.</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Zap, title: "Certified Electricians", desc: "NICEIC approved partners" },
            { icon: Droplet, title: "Expert Plumbers", desc: "Gas Safe registered" },
            { icon: Waves, title: "Pools & Spas", desc: "Specialist installers" },
            { icon: HardHat, title: "Site Management", desc: "Full HSE compliance" }
          ].map((item, i) => (
            <div key={i} className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white mb-4 shadow-lg shadow-brand-primary/40">
                <item.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;