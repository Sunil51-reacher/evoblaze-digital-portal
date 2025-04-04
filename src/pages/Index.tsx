
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { ArrowRight, BarChart, Globe, Layout, Search, Share2, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Index = () => {
  const services = [{
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to expand your online presence and reach your target audience.',
    icon: TrendingUp
  }, {
    title: 'SEO Optimization',
    description: 'Boost your search engine rankings and drive organic traffic with our expert SEO services.',
    icon: Search
  }, {
    title: 'Social Media Management',
    description: 'Engage your audience and build brand loyalty through strategic social media campaigns.',
    icon: Share2
  }, {
    title: 'Web Development',
    description: 'Custom, responsive website design and development tailored to your business needs.',
    icon: Layout
  }, {
    title: 'Data Analytics',
    description: 'Turn data into actionable insights with our comprehensive analytics services.',
    icon: BarChart
  }, {
    title: 'International Marketing',
    description: 'Specialized marketing solutions for businesses operating in India and Timor Leste.',
    icon: Globe
  }];

  const testimonials = [{
    quote: "Evoblaze transformed our online presence completely. Their expertise in both Indian and Southeast Asian markets helped us expand our business successfully.",
    author: "Priya Sharma",
    position: "CEO",
    company: "TechInnovate Solutions"
  }, {
    quote: "Working with Evoblaze has been a game-changer for our Timor Leste operations. Their cultural understanding and marketing expertise are unmatched.",
    author: "José Guterres",
    position: "Marketing Director",
    company: "East Timorese Exports"
  }, {
    quote: "Their team delivered exceptional results for our cross-border marketing campaign, helping us establish a strong digital presence in both regions.",
    author: "Rajesh Kumar",
    position: "Founder",
    company: "Global Connect"
  }];

  // Animation references
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const animateOnIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    };

    const observer = new IntersectionObserver(animateOnIntersection, observerOptions);
    
    // Observe elements
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      observer.disconnect();
    };
  }, []);

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with enhanced animations */}
      <section className="bg-gradient-to-r from-evoblaze-blue to-evoblaze-lightblue text-white">
        <div className="max-w-7xl mx-auto section-padding flex flex-col md:flex-row items-center" ref={heroRef}>
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white animate-fade-in">
              Ignite Your Digital Success with Evoblaze
            </h1>
            <p className="text-xl mb-8 text-gray-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Strategic digital marketing solutions spanning India and Timor Leste. 
              We combine local insight with global expertise.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-evoblaze-orange hover:bg-evoblaze-orange/90 text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-evoblaze-blue transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Digital Marketing Team" 
              className="rounded-lg shadow-lg max-w-full h-auto animate-fade-in transition-all duration-500 hover:shadow-xl" 
              style={{ animationDelay: '0.6s' }}
            />
          </div>
        </div>
      </section>

      {/* Services Section with staggered animations */}
      <section className="bg-evoblaze-gray section-padding opacity-0" ref={servicesRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to help your business 
              thrive in both Indian and Timor Leste markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="opacity-0" 
                style={{ 
                  animation: 'fade-in 0.5s ease-out forwards', 
                  animationDelay: `${index * 0.15}s` 
                }}
              >
                <ServiceCard title={service.title} description={service.description} icon={service.icon} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 opacity-0" style={{ animation: 'fade-in 0.5s ease-out forwards', animationDelay: '1s' }}>
            <Button 
              asChild 
              className="bg-evoblaze-blue hover:bg-evoblaze-blue/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Link to="/services" className="flex items-center gap-2">
                View All Services <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section with reveal animation */}
      <section className="bg-white section-padding opacity-0" ref={aboutRef}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Our Team" 
              className="rounded-lg shadow-lg w-full h-auto transition-all duration-700 hover:scale-105" 
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About Evoblaze</h2>
            <p className="text-gray-600 mb-6">
              Founded with a vision to bridge digital marketing gaps, Evoblaze brings together expertise from its Noida office in India and is now expanding its operations to Dili, Timor Leste, offering unique cross-market insights across South Asia and Southeast Asia.
            </p>
            <p className="text-gray-600 mb-6">
              Our multicultural team understands the nuances of both markets, allowing us to create 
              marketing strategies that resonate with diverse audiences while achieving tangible business results.
            </p>
            <Button 
              asChild 
              className="bg-evoblaze-blue hover:bg-evoblaze-blue/90 group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Link to="/about" className="flex items-center gap-2">
                Learn More About Us <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped succeed across borders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="opacity-0" 
                style={{ 
                  animation: 'fade-in 0.5s ease-out forwards', 
                  animationDelay: `${index * 0.3}s` 
                }}
              >
                <TestimonialCard 
                  quote={testimonial.quote} 
                  author={testimonial.author} 
                  position={testimonial.position} 
                  company={testimonial.company} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with pulse animation */}
      <section className="bg-evoblaze-blue text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ignite Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's collaborate to create a tailored digital marketing strategy that spans 
            borders and drives real results for your business.
          </p>
          <Button 
            asChild 
            className={cn(
              "bg-evoblaze-orange hover:bg-evoblaze-orange/90 text-white",
              "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
              "animate-[pulse_3s_infinite]"
            )}
          >
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;

