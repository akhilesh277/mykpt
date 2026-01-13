
import React from 'react';
import { Bell } from 'lucide-react';

const Notifications: React.FC = () => {
  return (
    <div className="px-5 py-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Alerts</h2>
      
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 flex space-x-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <Bell size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">New Circular Posted</h4>
              <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1 line-clamp-2">
                A new circular regarding the upcoming internal assessment has been posted on the official website.
              </p>
              <span className="text-[10px] text-gray-400 mt-2 block font-medium uppercase tracking-wider">2 hours ago</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center text-gray-400 dark:text-zinc-600 text-sm">
        No more notifications for today.
      </div>
    </div>
  );
};

export default Notifications;
