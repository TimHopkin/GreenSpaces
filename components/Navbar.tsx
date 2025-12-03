import React, { useState } from 'react';
import { Menu, X, Hammer, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Garden Studios', href: '#studios' },
    { name: 'Home Improvements', href: '#services' },
    { name: 'Maintenance', href: '#maintenance' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Partnerships', href: '#partnerships' },
    { name: 'Areas', href: '#areas' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-brand-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-brand-primary p-2 rounded-lg text-white">
              <Hammer size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-brand-dark tracking-tight leading-none">
                Green Spaces
              </span>
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
                & Home Solutions
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-brand-primary font-medium transition-colors duration-200 text-sm lg:text-base"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-brand-primary hover:bg-brand-dark text-white px-4 py-2 rounded-md font-bold transition-colors duration-200 flex items-center gap-2"
              >
                <Phone size={16} />
                Get Quote
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-brand-dark hover:bg-gray-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-brand-primary text-white block px-3 py-2 rounded-md text-base font-bold mt-4"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;