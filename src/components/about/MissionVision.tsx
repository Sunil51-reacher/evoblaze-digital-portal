
import React from 'react';
import { CheckCircle2, Globe, Users } from 'lucide-react';

const MissionVision = () => {
  return (
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
  );
};

export default MissionVision;
