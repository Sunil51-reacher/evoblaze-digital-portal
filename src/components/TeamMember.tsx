
import React from 'react';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const TeamMember = ({ name, position, image, bio }: TeamMemberProps) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-evoblaze-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-evoblaze-orange mb-3">{position}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  );
};

export default TeamMember;
