
import React, { useState, useEffect } from 'react';
// We are using a custom hash-based router because react-router-dom exports (HashRouter, Routes, etc.) are failing in this environment.
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

  // Track the current route path from the URL hash
  const [currentPath, setCurrentPath] = useState(() => {
    const hash = window.location.hash.replace('#', '') || '/';
    return hash;
  });

  useEffect(() => {
    // Listen for hash changes to update the current path state
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      setCurrentPath(hash);
    };

    // Initialize hash if not present
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

  // Conditional rendering of pages based on the current hash path
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
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main className="flex-1 overflow-y-auto pb-24 pt-16">
        {renderRoute()}
      </main>

      <BottomNav currentPath={currentPath} />
    </div>
  );
};

export default App;
