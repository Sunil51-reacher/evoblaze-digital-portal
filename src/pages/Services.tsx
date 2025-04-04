
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Award, BarChart, Globe, Layout, Search, Share2, ShieldCheck, Smartphone, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-evoblaze-blue to-evoblaze-lightblue text-white">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
            across Indian and Timor Leste markets.
          </p>
        </div>
      </section>

      {/* Service Detail Sections */}
      <section id="digital-marketing" className="bg-white section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl font-bold mb-4">Digital Marketing Strategy</h2>
            <p className="text-gray-600 mb-6">
              Our comprehensive digital marketing strategies are designed to elevate your brand's 
              online presence and drive meaningful results. We take a data-driven approach to create 
              customized campaigns that align with your business goals.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Custom marketing plans for each market</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>ROI-focused campaign development</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Multi-channel marketing integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Performance tracking and optimization</span>
              </li>
            </ul>
            <Button asChild className="bg-evoblaze-blue hover:bg-evoblaze-blue/90">
              <Link to="/contact" className="flex items-center gap-2">
                Get Started <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
              alt="Digital Marketing Strategy" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="seo" className="bg-evoblaze-gray section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pl-12">
            <h2 className="text-3xl font-bold mb-4">SEO & Content Marketing</h2>
            <p className="text-gray-600 mb-6">
              Improve your search engine rankings and drive organic traffic with our expert SEO 
              and content marketing services. We create engaging, culturally relevant content 
              that resonates with audiences in both Indian and Timor Leste markets.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Comprehensive SEO audits and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Multilingual content strategy and creation</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Local SEO for regional targeting</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Content performance analysis</span>
              </li>
            </ul>
            <Button asChild className="bg-evoblaze-blue hover:bg-evoblaze-blue/90">
              <Link to="/contact" className="flex items-center gap-2">
                Boost Your Rankings <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="SEO and Content" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="social-media" className="bg-white section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl font-bold mb-4">Social Media Marketing</h2>
            <p className="text-gray-600 mb-6">
              Engage your audience and build brand loyalty through strategic social media campaigns. 
              We understand the unique social media landscapes of both Indian and Timor Leste markets, 
              allowing us to create content that truly connects.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Platform-specific strategy development</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Content creation and curation</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Community management and engagement</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Paid social media advertising</span>
              </li>
            </ul>
            <Button asChild className="bg-evoblaze-blue hover:bg-evoblaze-blue/90">
              <Link to="/contact" className="flex items-center gap-2">
                Enhance Your Social Presence <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              alt="Social Media Marketing" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="web-development" className="bg-evoblaze-gray section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pl-12">
            <h2 className="text-3xl font-bold mb-4">Web Development & Design</h2>
            <p className="text-gray-600 mb-6">
              We create custom, responsive websites that not only look great but also drive 
              conversions. Our web solutions are optimized for performance across multiple 
              devices and markets.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Responsive website design and development</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>E-commerce platform integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>UX/UI optimization for conversion</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Website maintenance and support</span>
              </li>
            </ul>
            <Button asChild className="bg-evoblaze-blue hover:bg-evoblaze-blue/90">
              <Link to="/contact" className="flex items-center gap-2">
                Build Your Digital Presence <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Web Development" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="branding" className="bg-white section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl font-bold mb-4">Branding & Identity</h2>
            <p className="text-gray-600 mb-6">
              Establish a strong brand identity that resonates with audiences across different cultures. 
              Our branding services help you create a consistent and compelling brand narrative.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Brand strategy development</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Visual identity creation</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Brand messaging and positioning</span>
              </li>
              <li className="flex items-start">
                <span className="text-evoblaze-orange mr-2">✓</span>
                <span>Brand guidelines and asset creation</span>
              </li>
            </ul>
            <Button asChild className="bg-evoblaze-blue hover:bg-evoblaze-blue/90">
              <Link to="/contact" className="flex items-center gap-2">
                Strengthen Your Brand <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Branding" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-evoblaze-gray section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Evoblaze</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine global expertise with local insights to deliver marketing solutions 
              that drive real results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-evoblaze-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-evoblaze-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cross-Market Expertise</h3>
              <p className="text-gray-600">Specialized knowledge of both Indian and Timor Leste markets, allowing for culturally relevant strategies.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-evoblaze-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-evoblaze-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of delivering measurable results and ROI for businesses of all sizes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-evoblaze-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-evoblaze-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-gray-600">Always at the forefront of digital marketing trends with innovative approaches.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-evoblaze-blue/10 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-evoblaze-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategic Partnership</h3>
              <p className="text-gray-600">We work as an extension of your team, fully invested in your business success.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-evoblaze-blue/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-evoblaze-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven Approach</h3>
              <p className="text-gray-600">All strategies backed by solid data and analytics for maximum effectiveness.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-evoblaze-blue/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-evoblaze-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">Marketing solutions that grow with your business, from startups to enterprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-evoblaze-blue text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Marketing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how we can help your business thrive across markets.
          </p>
          <Button asChild className="bg-evoblaze-orange hover:bg-evoblaze-orange/90 text-white">
            <Link to="/contact">Get Your Free Consultation</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
