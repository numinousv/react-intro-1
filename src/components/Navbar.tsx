import { useState, useEffect } from 'react';

function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', isDark.toString());
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="bg-white border-b shadow-sm dark-mode:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Left side - Logo & Navigation */}
          <div className="flex items-center gap-6">
            <div className="text-xl font-bold text-gray-800 dark-mode:text-white">
              SimpleForum
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="#" 
                className="text-gray-600 dark-mode:text-gray-300 hover:text-blue-600 dark-mode:hover:text-blue-400 px-3 py-1 rounded hover:bg-gray-100 dark-mode:hover:bg-gray-700"
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark-mode:text-gray-300 hover:text-blue-600 dark-mode:hover:text-blue-400 px-3 py-1 rounded hover:bg-gray-100 dark-mode:hover:bg-gray-700"
              >
                Categories
              </a>
              <a 
                href="#" className="text-gray-600 dark-mode:text-gray-300 hover:text-blue-600 dark-mode:hover:text-blue-400 px-3 py-1 rounded hover:bg-gray-100 dark-mode:hover:bg-gray-700"
              >
                About
              </a>
            </div>
          </div>
          
          {/* Right side - Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <input 
              type="text" 
              placeholder="Search posts..."
              className="border border-gray-300 dark-mode:border-gray-600 px-3 py-1.5 rounded text-sm bg-transparent dark-mode:bg-gray-700 dark-mode:text-white"
            />
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-gray-100 dark-mode:bg-gray-700 hover:bg-gray-200 dark-mode:hover:bg-gray-600 rounded"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            
            {/* User Menu */}
            <div className="relative">
              <button className="flex items-center gap-2 text-gray-700 dark-mode:text-gray-300 hover:text-blue-600 dark-mode:hover:text-blue-400">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  U
                </div>
                <span className="hidden md:inline">Profile</span>
              </button>
            </div>
            
            {/* Create Post Button */}
            <button className="bg-blue-500 hover:bg-blue-600 dark-mode:bg-blue-600 dark-mode:hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm">
              + New Post
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation (hidden on desktop) */}
        <div className="md:hidden mt-3 flex gap-2 overflow-x-auto pb-2">
          <a href="#" className="text-gray-600 dark-mode:text-gray-300 hover:text-blue-600 px-3 py-1 rounded bg-gray-100 dark-mode:bg-gray-700 text-sm whitespace-nowrap">
            Home
          </a>
          <a href="#" className="text-gray-600 dark-mode:text-gray-300 hover:text-blue-600 px-3 py-1 rounded bg-gray-100 dark-mode:bg-gray-700 text-sm whitespace-nowrap">
            Categories
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;