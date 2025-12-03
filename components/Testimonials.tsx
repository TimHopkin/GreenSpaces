import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "Sarah Mitchell",
            location: "Godalming, Surrey",
            service: "Garden Studio",
            rating: 5,
            text: "Our garden office has completely transformed how we work from home. The craftsmanship is exceptional - every detail was carefully considered. It's insulated perfectly for year-round use and the cedar cladding looks stunning. Worth every penny.",
            date: "November 2024"
        },
        {
            name: "James Thornton",
            location: "Haslemere, Hampshire",
            service: "Kitchen Installation",
            rating: 5,
            text: "We had our Howdens kitchen fitted and couldn't be happier. The team's attention to detail was impressive - perfectly aligned units, flawless worktop installation, and all the electrics done to a high standard. Highly professional throughout.",
            date: "October 2024"
        },
        {
            name: "Emma Richardson",
            location: "Farnham, Surrey",
            service: "Decking & Fencing",
            rating: 5,
            text: "Transformed our garden with beautiful cedar decking and new fencing. The quality of materials and workmanship is outstanding. They completed the project on time and left everything spotless. Our garden is now our favourite space!",
            date: "September 2024"
        },
        {
            name: "David Chen",
            location: "Guildford, Surrey",
            service: "Custom Carpentry",
            rating: 5,
            text: "Had bespoke wardrobes and shelving installed throughout our home. The joinery work is absolutely first-class. Everything fits perfectly and the finish is immaculate. They really know their craft.",
            date: "August 2024"
        },
        {
            name: "Rachel & Tom Williams",
            location: "Petersfield, Hampshire",
            service: "Garden Room & Landscaping",
            rating: 5,
            text: "Our garden studio is incredible - it's become my art studio and my husband's music room. The build quality exceeds our expectations. Large bi-fold doors, proper insulation, and beautiful finishing. Can't recommend them enough!",
            date: "July 2024"
        },
        {
            name: "Michael Roberts",
            location: "Cranleigh, Surrey",
            service: "Home Maintenance",
            rating: 5,
            text: "Used them for various jobs - new fascia boards, gutter repairs, and door replacements. Always reliable, fair pricing, and excellent work. They've become our go-to for any home improvements. Trustworthy and skilled.",
            date: "October 2024"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-br from-brand-light to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-2">Client Reviews</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">What Our Customers Say</h3>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        25+ years of delivering exceptional craftsmanship across Surrey, Hampshire & Sussex
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-3xl font-bold text-brand-primary mb-1">500+</div>
                        <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-3xl font-bold text-brand-primary mb-1">25+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="flex items-center justify-center gap-1 mb-1">
                            <span className="text-3xl font-bold text-brand-primary">4.9</span>
                            <Star size={24} className="text-amber-400 fill-amber-400" />
                        </div>
                        <div className="text-sm text-gray-600">Average Rating</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-3xl font-bold text-brand-primary mb-1">100%</div>
                        <div className="text-sm text-gray-600">Fully Insured</div>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10">
                                <Quote size={48} className="text-brand-primary" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                                ))}
                            </div>

                            {/* Service Badge */}
                            <div className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                                {testimonial.service}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                                "{testimonial.text}"
                            </p>

                            {/* Author Info */}
                            <div className="border-t border-gray-100 pt-4">
                                <div className="font-bold text-gray-900">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.location}</div>
                                <div className="text-xs text-gray-400 mt-1">{testimonial.date}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-white rounded-xl px-8 py-6 shadow-sm">
                        <div className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="font-semibold">Fully Insured</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="font-semibold">Local to Surrey</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="font-semibold">25+ Years Experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="font-semibold">Free Quotes</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
