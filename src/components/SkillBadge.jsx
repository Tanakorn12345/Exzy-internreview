import React from 'react';

const SkillBadge = ({ name, type = "hard" }) => {
  // สีแยกตามประเภททักษะ (Hard skill กับ Soft skill)
  const isHardSkill = type === "hard";
  
  return (
    <div className={`
      px-5 py-3 rounded-xl border text-sm font-semibold flex items-center gap-2
      transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md
      ${isHardSkill 
        ? 'bg-white border-primary-500 text-dark-500 hover:bg-primary-500 hover:text-white' 
        : 'bg-dark-500 border-dark-500 text-white hover:bg-primary-500 hover:border-primary-500'}
    `}>
      <span className={`w-2 h-2 rounded-full ${isHardSkill ? 'bg-primary-500' : 'bg-primary-400'}`}></span>
      {name}
    </div>
  );
};

export default SkillBadge;
