
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
      className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" 
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-evoblaze-dark/80 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
            <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
            <p className="text-evoblaze-orange font-medium">{position}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 border-2 border-evoblaze-orange">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-evoblaze-blue text-white">{initials}</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-evoblaze-orange text-sm">{position}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
