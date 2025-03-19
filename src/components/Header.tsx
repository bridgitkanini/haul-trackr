import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Truck, Moon, Sun } from 'lucide-react';
const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-teal-700 dark:bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Truck className="h-6 w-6" />
            <span className="text-xl font-bold">TruckRoute Pro</span>
          </Link>
          <div className="flex items-center">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-teal-600 dark:hover:bg-slate-700 focus:outline-none" aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <div className="hidden md:flex items-center space-x-4 ml-6">
              <Link to="/" className={`hover:text-teal-200 ${location.pathname === '/' ? 'font-medium' : ''}`}>
                Home
              </Link>
              <Link to="/route-details" className={`hover:text-teal-200 ${location.pathname === '/route-details' ? 'font-medium' : ''}`}>
                Route Map
              </Link>
              <Link to="/eld-logs" className={`hover:text-teal-200 ${location.pathname === '/eld-logs' ? 'font-medium' : ''}`}>
                ELD Logs
              </Link>
            </div>
            <button onClick={toggleMenu} className="p-2 ml-4 rounded-md hover:bg-teal-600 dark:hover:bg-slate-700 md:hidden focus:outline-none">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {isMenuOpen && <div className="mt-3 pt-3 border-t border-teal-600 dark:border-slate-700 md:hidden">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className={`hover:text-teal-200 ${location.pathname === '/' ? 'font-medium' : ''}`} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/route-details" className={`hover:text-teal-200 ${location.pathname === '/route-details' ? 'font-medium' : ''}`} onClick={() => setIsMenuOpen(false)}>
                Route Map
              </Link>
              <Link to="/eld-logs" className={`hover:text-teal-200 ${location.pathname === '/eld-logs' ? 'font-medium' : ''}`} onClick={() => setIsMenuOpen(false)}>
                ELD Logs
              </Link>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;