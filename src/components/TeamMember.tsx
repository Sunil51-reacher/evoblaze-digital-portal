
import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const TeamMember = ({ name, position, image, bio }: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .substring(0, 2);
    
  return (
    <div 
      className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-evoblaze-dark">{name}</h3>
          <p className="text-evoblaze-orange text-sm">{position}</p>
        </div>
        
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 text-white p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm text-center">{bio}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
