
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-zinc-800/50 safe-top">
      <div className="flex items-center justify-between px-5 py-3 max-w-lg mx-auto">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-white dark:ring-zinc-900">
            <span className="text-white font-black text-2xl tracking-tighter">K</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">MyKPT</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold">Mangalore</p>
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
