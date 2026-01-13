
import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

const SearchPage: React.FC = () => {
  return (
    <div className="px-5 py-6 flex flex-col items-center justify-center min-h-[60vh] text-center max-w-lg mx-auto">
      <div className="w-20 h-20 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-gray-400 dark:text-zinc-500 mb-6">
        <SearchIcon size={40} />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Search Portals</h2>
      <div className="w-full relative">
        <input 
          type="text" 
          placeholder="What are you looking for?"
          className="w-full bg-gray-100 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 text-lg focus:ring-2 focus:ring-primary dark:text-white placeholder:text-gray-400"
        />
      </div>
      <p className="mt-8 text-gray-500 dark:text-zinc-400 text-sm">
        Start typing to search across all KPT departments and student portals.
      </p>
    </div>
  );
};

export default SearchPage;
