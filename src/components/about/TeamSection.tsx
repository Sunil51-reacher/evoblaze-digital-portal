
import React from 'react';
import TeamMember from '@/components/TeamMember';

interface TeamMemberData {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const TeamSection = () => {
  const teamMembers: TeamMemberData[] = [{
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

  return (
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
          {teamMembers.map((member, index) => (
            <TeamMember key={index} name={member.name} position={member.position} image={member.image} bio={member.bio} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
