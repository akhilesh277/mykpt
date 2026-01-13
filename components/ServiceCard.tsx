
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
      className="group relative flex flex-col items-center justify-center aspect-square bg-white dark:bg-zinc-900 rounded-[2.25rem] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-zinc-800/80 active:scale-90 transition-all duration-300 hover:border-primary/30 dark:hover:border-primary/50 overflow-hidden"
    >
      <div className={`mb-4 p-4 rounded-2xl ${service.color} text-white shadow-xl shadow-current/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
        {Icon && <Icon size={26} strokeWidth={2.5} />}
      </div>
      <h3 className="text-[13px] font-bold text-gray-800 dark:text-zinc-100 text-center leading-tight">
        {service.name}
      </h3>
      
      {/* Decorative background element */}
      <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gray-50 dark:bg-zinc-800/30 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
    </button>
  );
};

export default ServiceCard;
