import React, { useState } from 'react';
import { Send, Phone, Mail, Clock } from 'lucide-react';
import { ServiceType } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    service: ServiceType.GARDEN_ROOM,
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to backend
    alert(`Thank you ${formData.name}. We will contact you shortly about your ${formData.service} project.`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-2">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Start Your Project Today</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Whether it's a broken fence or a full kitchen remodel, we offer free, no-obligation quotes.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-light p-3 rounded-lg text-brand-primary">
                  <Phone size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">01483 123 456</p>
                  <p className="text-gray-500 text-sm">Mon-Fri, 8am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-light p-3 rounded-lg text-brand-primary">
                  <Mail size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">hello@greenspaces.solutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-light p-3 rounded-lg text-brand-primary">
                  <Clock size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Quick Response</h4>
                  <p className="text-gray-600">We aim to reply to all enquiries within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Town/Postcode</label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                    placeholder="e.g. Godalming"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select
                  name="service"
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                  value={formData.service}
                  onChange={handleChange}
                >
                  {Object.values(ServiceType).map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget (Optional)</label>
                <input
                  type="text"
                  name="budget"
                  id="budget"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                  placeholder="e.g. £5,000 - £10,000"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                  placeholder="Tell us a bit about what you need..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                Get Free Quote <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;