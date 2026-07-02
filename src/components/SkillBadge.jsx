import React from 'react';

const SkillBadge = ({ name, category }) => {
  return (
    <div className="px-5 py-3 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col min-w-[120px]">
      <span className="text-xs text-primary-500 font-medium mb-1">{category}</span>
      <span className="text-slate-800 font-semibold">{name}</span>
    </div>
  );
};

export default SkillBadge;
