
import React from 'react';
import { KPTService } from '../types';
import { ICON_MAP } from '../constants';

interface ServiceCardProps {
  service: KPTService;
  onClick: (service: KPTService) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const Icon = ICON_MAP[service.icon];

  return (
    <button
      onClick={() => onClick(service)}
      className="group relative flex flex-col items-center justify-center aspect-square bg-white dark:bg-zinc-900 rounded-3xl p-4 shadow-sm border border-gray-100 dark:border-zinc-800 active:scale-95 transition-all duration-200 hover:shadow-md overflow-hidden"
    >
      <div className={`mb-3 p-3 rounded-2xl ${service.color} text-white shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
        {Icon && <Icon size={24} />}
      </div>
      <h3 className="text-xs font-bold text-gray-800 dark:text-zinc-200 text-center line-clamp-2">
        {service.name}
      </h3>
      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      </div>
    </button>
  );
};

export default ServiceCard;
