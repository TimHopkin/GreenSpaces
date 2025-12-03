import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import GardenStudios from './components/GardenStudios';
import Partnerships from './components/Partnerships';
import TrustStats from './components/TrustStats';
import ServiceArea from './components/ServiceArea';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Maintenance from './components/Maintenance';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <Hero />
      <Services />
      <GardenStudios />
      <Gallery />
      <Testimonials />
      <Maintenance />
      <TrustStats />
      <Partnerships />
      <ServiceArea />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;