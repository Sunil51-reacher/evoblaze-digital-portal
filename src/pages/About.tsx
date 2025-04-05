import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Globe, Users } from 'lucide-react';

const About = () => {
  const teamMembers = [{
    name: 'PRADEEP DAKSH',
    position: 'Director',
    image: '/lovable-uploads/949b3fa4-18b8-469b-9bc3-5bb5a84a5cad.png',
    bio: 'With over 15 years of experience in digital marketing, Pradeep founded Evoblaze with a vision to bridge marketing gaps between South Asia and Southeast Asia.'
  }, {
    name: 'KAVENDRA BHANDARI',
    position: 'Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Kavendra brings strategic vision and business acumen to drive Evoblaze\'s growth and expansion into new markets.'
  }, {
    name: 'MANAV SHARMA',
    position: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Manav leads our creative team with innovative design thinking and cutting-edge visual strategies for digital platforms.'
  }, {
    name: 'SWATI',
    position: 'HR',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
    bio: 'Swati ensures our workplace culture thrives by managing recruitment, employee development, and maintaining a positive work environment.'
  }, {
    name: 'SAKSHI',
    position: 'HR',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Sakshi specializes in talent acquisition and employee relations, helping Evoblaze build a diverse and skilled team across locations.'
  }, {
    name: 'RINKU DAKSH',
    position: 'Sr. Graphic Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Rinku creates stunning visual content that elevates our clients\' brands through innovative design solutions across all platforms.'
  }];
  
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-evoblaze-blue to-evoblaze-lightblue text-white">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">About Evoblaze</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bridging digital marketing gaps between South Asia and Southeast Asia 
            with innovative, culturally-informed strategies.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">Evoblaze was founded in 2018 with a unique vision: to create a digital marketing agency that truly understands the nuances of both Indian and Timor Leste markets. Our founder, Pradeep Daksh, saw an opportunity to bridge the marketing gap between these regions after working on several cross-border business initiatives.</p>
            <p className="text-gray-600 mb-4">
              What started as a small team working with local businesses has grown into a 
              full-service digital marketing agency with offices in Mumbai and Dili. Our 
              multicultural team brings together diverse perspectives, allowing us to create 
              marketing strategies that resonate with different audiences while achieving tangible 
              business results.
            </p>
            <p className="text-gray-600">
              Today, we're proud to have helped hundreds of businesses expand their digital 
              footprint across borders, leveraging our unique cross-market expertise to 
              drive growth and success.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80" alt="Team Collaboration" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-evoblaze-gray section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by our core values, we're committed to delivering exceptional 
              digital marketing solutions that transcend borders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-evoblaze-blue/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-evoblaze-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative digital marketing solutions that bridge 
                cultural gaps and drive measurable growth across South Asian and Southeast 
                Asian markets. We aim to be the catalyst that enables businesses to successfully 
                navigate and thrive in diverse digital landscapes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-evoblaze-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-evoblaze-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading digital marketing agency connecting businesses across 
                South Asia and Southeast Asia, recognized for our cross-cultural expertise, 
                innovative strategies, and consistent delivery of exceptional results. We envision 
                a world where geographical boundaries don't limit digital marketing success.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-evoblaze-blue/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-evoblaze-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-evoblaze-blue mb-1">Cultural Intelligence</h4>
                <p className="text-gray-600 text-sm">We respect and leverage cultural nuances to create marketing that resonates authentically.</p>
              </div>
              <div>
                <h4 className="font-semibold text-evoblaze-blue mb-1">Innovation</h4>
                <p className="text-gray-600 text-sm">We constantly explore new technologies and strategies to keep our clients ahead of the curve.</p>
              </div>
              <div>
                <h4 className="font-semibold text-evoblaze-blue mb-1">Transparency</h4>
                <p className="text-gray-600 text-sm">We believe in honest communication and clear reporting of results and challenges.</p>
              </div>
              <div>
                <h4 className="font-semibold text-evoblaze-blue mb-1">Collaboration</h4>
                <p className="text-gray-600 text-sm">We work as partners with our clients, ensuring alignment with their business goals.</p>
              </div>
              <div>
                <h4 className="font-semibold text-evoblaze-blue mb-1">Excellence</h4>
                <p className="text-gray-600 text-sm">We hold ourselves to the highest standards in everything we do, constantly striving to exceed expectations.</p>
              </div>
              <div>
                <h4 className="font-semibold text-evoblaze-blue mb-1">Adaptability</h4>
                <p className="text-gray-600 text-sm">We embrace change and quickly adapt to evolving market dynamics and client needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together global expertise and local insights 
              to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => <TeamMember key={index} name={member.name} position={member.position} image={member.image} bio={member.bio} />)}
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="bg-evoblaze-gray section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategically positioned to serve businesses across South Asia and Southeast Asia 
              with offices in two vibrant cities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="India Office" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">India</h3>
                <p className="text-gray-600 mb-4">
                  Our headquarters is located in the heart of India's business district, 
                  serving clients across India and coordinating our South Asian operations.
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> 56/21, Ground Floor, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301<br />
                  <strong>Phone:</strong> +919058346379<br />
                  <strong>Email:</strong> creative@evoblazebyhands.com
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1518988936704-8b816bbb185e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1337&q=80" alt="Dili Office" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dili, Timor Leste</h3>
                <p className="text-gray-600 mb-4">
                  Our Dili office serves as our Southeast Asian hub, specializing in 
                  marketing solutions tailored for emerging markets in the region.
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> Green Damond Villa, Dili, Timor Leste<br />
                  <strong>Phone:</strong> +67077870992<br />
                  <strong>Email:</strong> admin@evoblaze.net
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-evoblaze-blue text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's collaborate to create digital marketing strategies that drive 
            your business forward across borders.
          </p>
          <Button asChild className="bg-evoblaze-orange hover:bg-evoblaze-orange/90 text-white">
            <Link to="/contact" className="flex items-center gap-2">
              Contact Our Team <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default About;
