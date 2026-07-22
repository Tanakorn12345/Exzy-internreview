import React from 'react';
import SkillBadge from '../components/SkillBadge';

const Skills = () => {
  const hardSkills = [
    "Obsidian", "Intelligent Hub", "Access Control"
  ];
  
  const softSkills = [
    "Problem Solving", "Communication", "Adaptability", "Onsite Service"
  ];

  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold text-dark-500 mb-4 inline-block border-b-4 border-primary-500 pb-2">ทักษะที่ได้รับ (Skills)</h2>

            <p className="text-base text-dark-500/80 mb-6 leading-relaxed">
             การฝึกงานที่ Exzy ครั้งนี้ ถือว่าเปิดโลกการทำงานจริงให้เรามาก ทั้งการได้ทำโปรเจกต์และลงพื้นที่หน้างาน ช่วยอัปเกรดตัวเราแบบรอบด้าน และยังทำให้ได้สกิลใหม่ ๆ ติดตัวกลับมาเยอะเลยครับ
            </p>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="bg-primary-500/5 p-8 rounded-2xl border border-primary-500/20">
              <div className="mb-10">
                <h3 className="text-xl font-bold text-dark-500 mb-6 border-b border-primary-500/20 pb-2">Tools & Technology</h3>
                <div className="flex flex-wrap gap-3">
                  {hardSkills.map((skill, index) => (
                    <SkillBadge key={index} name={skill} type="hard" />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark-500 mb-6 border-b border-primary-500/20 pb-2">Soft Skills & Process</h3>
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
