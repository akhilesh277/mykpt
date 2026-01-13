
import React from 'react';
import { Shield, Info, Smartphone, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="px-5 py-6 space-y-8 max-w-lg mx-auto">
      <div className="text-center">
        <div className="w-24 h-24 bg-primary mx-auto rounded-[2.5rem] flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-primary/30 mb-4">
          KPT
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">KPT Mangalore</h2>
        <p className="text-gray-500 dark:text-zinc-400 text-sm mt-1 font-medium">Quality Education for a Sustainable Future</p>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-gray-100 dark:border-zinc-800 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-zinc-800">
          <h3 className="font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <Info size={18} className="text-primary" />
            <span>Contact Information</span>
          </h3>
        </div>
        <div className="p-6 space-y-5">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-500">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Phone</p>
              <p className="text-gray-700 dark:text-zinc-300 font-medium">+91 0824 2211636</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-500">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Email</p>
              <p className="text-gray-700 dark:text-zinc-300 font-medium">principal_kpt@yahoo.co.in</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-500">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Address</p>
              <p className="text-gray-700 dark:text-zinc-300 font-medium leading-tight">Kadri Hills, Mangaluru, Karnataka 575004</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full flex items-center justify-between p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 active:scale-[0.98] transition-all">
          <div className="flex items-center space-x-3 text-gray-700 dark:text-zinc-300">
            <Shield size={20} className="text-primary" />
            <span className="font-bold">Privacy Policy</span>
          </div>
          <ExternalLink size={16} className="text-gray-400" />
        </button>
        <button className="w-full flex items-center justify-between p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 active:scale-[0.98] transition-all">
          <div className="flex items-center space-x-3 text-gray-700 dark:text-zinc-300">
            <Smartphone size={20} className="text-primary" />
            <span className="font-bold">App Version</span>
          </div>
          <span className="text-xs font-bold text-gray-400 bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full">v1.0.4 PRO</span>
        </button>
      </div>

      <div className="text-center pt-4">
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Powered by MyKPT App Studio</p>
        <p className="text-[10px] text-gray-300 dark:text-zinc-700 mt-2">© 2024 Karnataka Polytechnic. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Profile;
