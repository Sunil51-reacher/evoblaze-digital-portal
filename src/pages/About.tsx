
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/about/HeroSection';
import OurStory from '@/components/about/OurStory';
import MissionVision from '@/components/about/MissionVision';
import TeamSection from '@/components/about/TeamSection';
import LocationsSection from '@/components/about/LocationsSection';
import CallToAction from '@/components/about/CallToAction';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <OurStory />
      <MissionVision />
      <TeamSection />
      <LocationsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;
