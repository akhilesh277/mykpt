
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Bell, User } from 'lucide-react';

const BottomNav: React.FC = () => {
  const navItems = [
    { label: 'Home', icon: Home, path: '/' },
    { label: 'Search', icon: Search, path: '/search' },
    { label: 'Alerts', icon: Bell, path: '/notifications' },
    { label: 'Profile', icon: User, path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-t border-gray-200 dark:border-zinc-800 safe-bottom">
      <div className="flex items-center justify-around px-2 py-3 max-w-lg mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex flex-col items-center space-y-1 transition-all duration-300
              ${isActive ? 'text-primary dark:text-secondary scale-110' : 'text-gray-400 dark:text-zinc-500'}
            `}
          >
            {/* NavLink children can be a function that receives isActive state */}
            {({ isActive }) => (
              <>
                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-semibold">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;