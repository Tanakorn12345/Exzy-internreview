import React from 'react';
import exzyLogo from '../assets/logo exzy.jpg';

const Footer = () => {
  return (
    <footer className="bg-dark-500 text-white py-12 mt-auto border-t-4 border-primary-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src={exzyLogo} alt="Exzy Logo" className="w-8 h-8 object-contain border border-white rounded-lg" />
          <span className="font-bold text-xl text-white">Intern Review</span>
        </div>
        <p className="text-primary-100/60 mt-4">© 2026 IT Support Internship by tanakorn</p>
      </div>
    </footer>
  );
};

export default Footer;
