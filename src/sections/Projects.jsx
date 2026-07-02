import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "[รอเนื้อหา: ชื่อโปรเจกต์ เช่น การอัปเกรดระบบเน็ตเวิร์กออฟฟิศ]",
      description: "[รอเนื้อหา: อธิบายรายละเอียดของโปรเจกต์ ปัญหาที่พบ และวิธีแก้ไข หรือบทบาทของคุณในโปรเจกต์นี้]",
      tags: ["Tool 1", "Tool 2"],
      imageSrc: "" 
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary-500/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark-500 mb-4 inline-block border-b-4 border-primary-500 pb-2">โปรเจกต์เด่น / ผลงาน (Projects)</h2>
          <p className="text-lg text-dark-500/80 max-w-2xl mx-auto mt-4">
            ผลงานหรือโปรเจกต์ที่ได้มีส่วนร่วมระหว่างการฝึกงาน
          </p>
        </div>

        <div className="space-y-12">
          {projectsData.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
