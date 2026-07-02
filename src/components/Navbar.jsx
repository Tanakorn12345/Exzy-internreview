import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-primary-500/10 shadow-sm py-0' 
        : 'bg-transparent border-b-0 shadow-none py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/src/assets/logo exzy.jpg" alt="Exzy Logo" className="w-8 h-8 object-contain border border-white rounded-lg" />
            <span className="font-semibold text-xl text-dark-500 border-l-2 border-primary-500 pl-2 ml-1">Intern Review</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-dark-500/80 hover:text-primary-500 font-medium transition-colors">About</a>
            <a href="#why-exzy" className="text-dark-500/80 hover:text-primary-500 font-medium transition-colors">Why Exzy</a>
            <a href="#duties" className="text-dark-500/80 hover:text-primary-500 font-medium transition-colors">Duties</a>
            <a href="#projects" className="text-dark-500/80 hover:text-primary-500 font-medium transition-colors">Projects</a>
            <a href="#skills" className="text-dark-500/80 hover:text-primary-500 font-medium transition-colors">Skills</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-dark-500 hover:text-primary-500 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-primary-500/10 shadow-xl absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-dark-500 hover:text-primary-500 hover:bg-primary-500/5">About</a>
            <a href="#why-exzy" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-dark-500 hover:text-primary-500 hover:bg-primary-500/5">Why Exzy</a>
            <a href="#duties" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-dark-500 hover:text-primary-500 hover:bg-primary-500/5">Duties</a>
            <a href="#projects" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-dark-500 hover:text-primary-500 hover:bg-primary-500/5">Projects</a>
            <a href="#skills" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-dark-500 hover:text-primary-500 hover:bg-primary-500/5">Skills</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
