
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-evoblaze-blue to-evoblaze-lightblue text-white relative">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80')` 
        }}
      ></div>
      <div className="max-w-7xl mx-auto section-padding text-center relative z-10">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">About Evoblaze</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Bridging digital marketing gaps between South Asia and Southeast Asia 
          with innovative, culturally-informed strategies.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
