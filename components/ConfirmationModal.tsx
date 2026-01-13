
import React from 'react';
import { ExternalLink, X } from 'lucide-react';
import { KPTService } from '../types';

interface ConfirmationModalProps {
  isOpen: boolean;
  service: KPTService | null;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, service, onConfirm, onCancel }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onCancel}
      />
      
      <div className="relative w-full max-w-xs bg-white dark:bg-zinc-900 rounded-[2rem] shadow-2xl overflow-hidden animate-slide-up">
        <div className="p-6 text-center">
          <div className={`mx-auto w-16 h-16 rounded-full ${service.color} flex items-center justify-center text-white mb-4 shadow-xl`}>
            <ExternalLink size={28} />
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Open Portal?</h3>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mb-6 px-4">
            Do you want to open <strong>{service.name}</strong>? You will be redirected to the official website.
          </p>
          
          <div className="flex flex-col space-y-3">
            <button
              onClick={onConfirm}
              className={`w-full py-4 rounded-2xl font-bold text-white ${service.color} active:scale-95 transition-all shadow-lg`}
            >
              Yes, redirect me
            </button>
            <button
              onClick={onCancel}
              className="w-full py-3 rounded-2xl font-bold text-gray-500 dark:text-zinc-400 bg-gray-100 dark:bg-zinc-800 active:scale-95 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
        
        <button 
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-400 dark:text-zinc-600"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
