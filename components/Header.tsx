
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border-b border-gray-100 dark:border-zinc-800 safe-top">
      <div className="flex items-center justify-between px-4 py-3 max-w-lg mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            {/* Placeholder for KPT Logo */}
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white leading-none">MyKPT</h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-zinc-400 font-medium">KPT Mangalore</p>
          </div>
        </div>

        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:scale-110 active:scale-95 transition-all"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
