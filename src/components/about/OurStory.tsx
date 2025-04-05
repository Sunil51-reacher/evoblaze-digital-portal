
import React from 'react';

const OurStory = () => {
  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">Evoblaze was founded in 2018 with a unique vision: to create a digital marketing agency that truly understands the nuances of both Indian and Timor Leste markets. Our founder, Pradeep Daksh, saw an opportunity to bridge the marketing gap between these regions after working on several cross-border business initiatives.</p>
          <p className="text-gray-600 mb-4">What started as a small team working with local businesses has grown into a full-service digital marketing agency with offices in India and Dili. Our multicultural team brings together diverse perspectives, allowing us to create marketing strategies that resonate with different audiences while achieving tangible business results.</p>
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
  );
};

export default OurStory;
