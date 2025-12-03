import React from 'react';
import { Hammer } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-primary p-1.5 rounded text-white">
                <Hammer size={20} />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">Green Spaces & Home Solutions</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Your trusted local partner for garden studios, carpentry, and complete home improvements. 
              Quality craftsmanship from Godalming to the coast.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-brand-accent">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#studios" className="hover:text-white transition-colors">Garden Studios</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Kitchens & Bathrooms</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Carpentry & Joinery</a></li>
              <li><a href="#maintenance" className="hover:text-white transition-colors">Fencing & Decking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-brand-accent">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Service Area</a></li>
              <li><a href="#partnerships" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Green Spaces Construction. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span>Privacy Policy</span>
             <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;