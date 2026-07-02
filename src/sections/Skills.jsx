import React from 'react';
import SkillBadge from '../components/SkillBadge';

const Skills = () => {
  // ข้อมูลทักษะทั้งหมด
  const skillsData = [
    { id: 1, name: 'Windows Server', category: 'OS' },
    { id: 2, name: 'Linux (Ubuntu)', category: 'OS' },
    { id: 3, name: 'Network Troubleshooting', category: 'Network' },
    { id: 4, name: 'Active Directory', category: 'System' },
    { id: 5, name: 'Hardware Repair', category: 'Hardware' },
    { id: 6, name: 'IT Helpdesk', category: 'Soft Skill' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ทักษะที่ได้รับ (Skills & Tools)</h2>
            <p className="text-lg text-slate-600 mb-6">
              [รอเนื้อหา: สรุปภาพรวมว่าได้พัฒนาทักษะอะไรบ้าง ทั้ง Hard Skills และ Soft Skills]
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex flex-wrap gap-3">
              {skillsData.map(skill => (
                <SkillBadge 
                  key={skill.id}
                  name={skill.name}
                  category={skill.category}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
