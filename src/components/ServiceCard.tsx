
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover-lift">
      <div className="w-12 h-12 bg-evoblaze-blue/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-evoblaze-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
