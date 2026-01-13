
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-zinc-800/50 safe-top">
      <div className="flex items-center justify-between px-5 py-3 max-w-lg mx-auto">
        <div className="flex items-center space-x-3.5">
          <div className="relative group">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-gray-200/50 dark:shadow-none ring-1 ring-gray-100 dark:ring-zinc-800 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img 
                src="https://gpt.karnataka.gov.in/kptmangalore/public/uploads/dept_logo1755926888.jpg" 
                alt="KPT Logo"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-zinc-900 rounded-full shadow-sm"></div>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">MyKPT</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary dark:text-secondary font-black opacity-80">KPT Mangalore</p>
          </div>
        </div>

        <button 
          onClick={toggleTheme}
          className="p-2.5 rounded-2xl bg-gray-100/80 dark:bg-zinc-800/80 text-gray-600 dark:text-zinc-300 hover:scale-110 active:scale-90 transition-all border border-gray-200 dark:border-zinc-700 shadow-sm"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <Moon size={20} fill="currentColor" /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
