import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import exzyLogo from '../assets/logo exzy.jpg';

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
            <img src={exzyLogo} alt="Exzy Logo" className="w-8 h-8 object-contain border border-white rounded-lg" />
            <span className="font-semibold text-xl text-dark-500 border-l-2 border-primary-500 pl-2 ml-1">Intern Review</span>
          </div>
          
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            <a href="#about" className="text-dark-500/80 hover:text-primary-500 font-medium transition-all duration-300 hover:scale-105">About</a>
            <a href="#why-exzy" className="text-dark-500/80 hover:text-primary-500 font-medium transition-all duration-300 hover:scale-105">Why Exzy</a>
      
            <a href="#projects" className="text-dark-500/80 hover:text-primary-500 font-medium transition-all duration-300 hover:scale-105">Projects</a>
            <a href="#skills" className="text-dark-500/80 hover:text-primary-500 font-medium transition-all duration-300 hover:scale-105">Skills</a>
            <a href="#culture" className="text-dark-500/80 hover:text-primary-500 font-medium transition-all duration-300 hover:scale-105">Culture</a>
            <a href="#conclusion" className="text-dark-500/80 hover:text-primary-500 font-medium transition-all duration-300 hover:scale-105">Conclusion</a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-dark-500 hover:text-primary-500 focus:outline-none transition-transform duration-300 active:scale-95">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`lg:hidden bg-white/95 backdrop-blur-xl border-b border-primary-500/10 shadow-2xl absolute w-full transition-all duration-500 ease-in-out origin-top ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
            <a href="#about" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-base font-medium text-dark-500 hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-300">About</a>
            <a href="#why-exzy" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-base font-medium text-dark-500 hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-300">Why Exzy</a>
            <a href="#duties" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-base font-medium text-dark-500 hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-300">Duties</a>
            <a href="#projects" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-base font-medium text-dark-500 hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-300">Projects</a>
            <a href="#skills" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-base font-medium text-dark-500 hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-300">Skills</a>
            <a href="#culture" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-base font-medium text-dark-500 hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-300">Culture</a>
            <a href="#conclusion" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-base font-medium text-dark-500 hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-300">Conclusion</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
