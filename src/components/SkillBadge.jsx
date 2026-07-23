import React from 'react';

const SkillBadge = ({ name, type = "hard" }) => {
  // สีแยกตามประเภททักษะ (Hard skill กับ Soft skill)
  const isHardSkill = type === "hard";
  
  return (
    <div className={`
      group px-5 py-3 rounded-xl border text-sm font-semibold flex items-center gap-2 leading-none
      transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md
      ${isHardSkill 
        ? 'bg-white border-primary-500 text-dark-500 hover:bg-primary-500 hover:text-white' 
        : 'bg-dark-500 border-dark-500 text-white hover:bg-primary-500 hover:border-primary-500'}
    `}>
      <span className="block w-2 h-2 rounded-full bg-primary-500 group-hover:bg-white transition-colors duration-300 flex-shrink-0"></span>
      <span className="translate-y-[1px]">{name}</span>
    </div>
  );
};

export default SkillBadge;
