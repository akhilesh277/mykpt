import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import SearchPage from './pages/Search';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('kpt-theme');
    return (saved as Theme) || 'light';
  });

  const [currentPath, setCurrentPath] = useState(() => {
    const hash = window.location.hash.replace('#', '') || '/';
    return hash;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      setCurrentPath(hash);
    };

    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('kpt-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const renderRoute = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/search':
        return <SearchPage />;
      case '/notifications':
        return <Notifications />;
      case '/profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-zinc-950 transition-colors duration-500 overflow-x-hidden">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main className="flex-1 overflow-y-auto pb-24 pt-20">
        <div className="max-w-lg mx-auto w-full h-full">
          {renderRoute()}
        </div>
      </main>

      <BottomNav currentPath={currentPath} />
    </div>
  );
};

export default App;