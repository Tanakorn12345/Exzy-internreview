import React from 'react';
import SkillBadge from '../components/SkillBadge';

const Skills = () => {
  const hardSkills = [
    "Windows Server", "Active Directory", "Network Troubleshooting", 
    "Hardware Repair", "VMware", "Linux Basic"
  ];
  
  const softSkills = [
    "Problem Solving", "Communication", "Teamwork", 
    "Time Management", "Customer Service"
  ];

  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold text-dark-500 mb-4 flex items-center gap-3">
               <span className="w-8 h-1 bg-primary-500 block rounded-full"></span>
               ทักษะที่ได้รับ (Skills)
            </h2>
            <p className="text-lg text-dark-500/80 mb-6">
              [รอเนื้อหา: สรุปภาพรวมว่าได้พัฒนาทักษะอะไรบ้าง ทั้ง Hard Skills และ Soft Skills]
            </p>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="bg-primary-500/5 p-8 rounded-2xl border border-primary-500/20">
              <div className="mb-10">
                <h3 className="text-xl font-bold text-dark-500 mb-6 border-b border-primary-500/20 pb-2">Hard Skills & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {hardSkills.map((skill, index) => (
                    <SkillBadge key={index} name={skill} type="hard" />
                  ))}
                  {/* ปุ่มสำหรับเพิ่ม Skill เอง (ตัวอย่าง) */}
                  <SkillBadge name="[เพิ่มทักษะอื่นๆ]" type="hard" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark-500 mb-6 border-b border-primary-500/20 pb-2">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, index) => (
                    <SkillBadge key={index} name={skill} type="soft" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
