
import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import ConfirmationModal from '../components/ConfirmationModal';
import { KPT_SERVICES } from '../constants';
import { KPTService } from '../types';
import { Megaphone } from 'lucide-react';

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
      {/* Dynamic Greeting Section */}
      <section>
        <div className="bg-gradient-to-br from-primary via-blue-700 to-indigo-800 rounded-[2.5rem] p-7 text-white shadow-2xl shadow-primary/30 relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-widest mb-3">Dashboard</span>
            <h2 className="text-3xl font-black mb-2 tracking-tight">Welcome back!</h2>
            <p className="text-blue-100/90 text-sm font-medium leading-relaxed max-w-[80%]">Explore all KPT services and stay updated with the latest alerts.</p>
          </div>
          {/* Enhanced Abstract decorations */}
          <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Announcements Ticker */}
      <section className="bg-blue-50/50 dark:bg-blue-900/10 py-3 px-5 rounded-2xl border border-blue-100/50 dark:border-blue-900/20 flex items-center space-x-3">
        <div className="text-blue-600 dark:text-blue-400">
          <Megaphone size={18} />
        </div>
        <div className="overflow-hidden whitespace-nowrap">
          <p className="text-xs font-bold text-blue-700 dark:text-blue-300 animate-[marquee_20s_linear_infinite]">
            Upcoming internal assessments scheduled for next week. Check the official portal for the latest circulars.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section>
        <div className="flex items-center justify-between mb-6 px-1">
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">KPT Portals</h3>
          <span className="text-[10px] font-black text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 px-4 py-1.5 rounded-full uppercase tracking-[0.15em]">
            {KPT_SERVICES.length} Portals
          </span>
        </div>
        
        <div className="grid grid-cols-2 xs:grid-cols-3 gap-5">
          {KPT_SERVICES.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onClick={handleServiceClick} 
            />
          ))}
        </div>
      </section>

      {/* Quick Access Tip */}
      <section className="bg-white dark:bg-zinc-900 rounded-[2rem] p-6 shadow-sm border border-gray-100 dark:border-zinc-800/80">
        <h3 className="text-[10px] font-black text-gray-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-3">Quick Tip</h3>
        <p className="text-[13px] text-gray-600 dark:text-zinc-400 leading-relaxed font-medium">
          Add <span className="text-primary dark:text-secondary font-bold">MyKPT</span> to your Home Screen for a native app experience. Tap the <span className="italic">Share</span> or <span className="italic">Menu</span> button and select "Add to Home Screen".
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
