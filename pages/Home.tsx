
import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import ConfirmationModal from '../components/ConfirmationModal';
import { KPT_SERVICES } from '../constants';
import { KPTService } from '../types';

const Home: React.FC = () => {
  const [selectedService, setSelectedService] = useState<KPTService | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: KPTService) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    if (selectedService) {
      window.open(selectedService.url, '_blank', 'noopener,noreferrer');
      setIsModalOpen(false);
    }
  };

  return (
    <div className="px-5 py-6 space-y-8 animate-fade-in max-w-lg mx-auto">
      <section>
        <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-6 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-1">Welcome to MyKPT</h2>
            <p className="text-blue-100 text-sm font-medium">Your centralized gateway to all Karnataka Polytechnic services.</p>
          </div>
          {/* Abstract decoration */}
          <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-32 h-32 bg-black/10 rounded-full blur-xl"></div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">KPT Portals</h3>
          <span className="text-xs font-bold text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 px-3 py-1 rounded-full uppercase tracking-wider">
            {KPT_SERVICES.length} Available
          </span>
        </div>
        
        <div className="grid grid-cols-2 xs:grid-cols-3 gap-4">
          {KPT_SERVICES.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onClick={handleServiceClick} 
            />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-zinc-900/50 rounded-3xl p-6 border border-gray-100 dark:border-zinc-800">
        <h3 className="text-sm font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-widest mb-4">Quick Tip</h3>
        <p className="text-sm text-gray-600 dark:text-zinc-300 leading-relaxed">
          Add this app to your Home Screen for faster access to all KPT services. Just tap on the browser menu and select "Install App".
        </p>
      </section>

      <ConfirmationModal
        isOpen={isModalOpen}
        service={selectedService}
        onConfirm={handleConfirm}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Home;
