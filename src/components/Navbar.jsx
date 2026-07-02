import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            {/* โลโก้ Exzy: นำไฟล์รูปภาพโลโก้ไปใส่ไว้ที่ public/assets/logo.png หรือ src/assets/logo.png */}
            <img src="/src/assets/logo exzy.jpg" alt="Exzy Logo" className="w-8 h-8 object-contain" />
            <span className="font-semibold text-xl text-slate-800 border-l-2 border-slate-300 pl-2 ml-1">Intern Review</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-600 hover:text-primary-600 transition-colors">About</a>
            <a href="#why-exzy" className="text-slate-600 hover:text-primary-600 transition-colors">Why Exzy</a>
            <a href="#duties" className="text-slate-600 hover:text-primary-600 transition-colors">Duties</a>
            <a href="#projects" className="text-slate-600 hover:text-primary-600 transition-colors">Projects</a>
            <a href="#skills" className="text-slate-600 hover:text-primary-600 transition-colors">Skills</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-sm absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">About</a>
            <a href="#why-exzy" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">Why Exzy</a>
            <a href="#duties" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">Duties</a>
            <a href="#projects" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">Projects</a>
            <a href="#skills" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">Skills</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
