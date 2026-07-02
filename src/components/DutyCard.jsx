import React from 'react';

const DutyCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary-500/20 hover:border-primary-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
        <div className="text-primary-500 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-dark-500 mb-3">{title}</h3>
      <p className="text-dark-500/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default DutyCard;
