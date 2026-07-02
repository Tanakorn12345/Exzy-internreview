import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  // ข้อมูลโปรเจกต์ทั้งหมด (คุณสามารถเพิ่มหรือแก้ไขได้ง่ายๆ ตรงนี้)
  const projectsData = [
    {
      id: 1,
      title: "[รอเนื้อหา: ชื่อโปรเจกต์ เช่น การอัปเกรดระบบเน็ตเวิร์กออฟฟิศ]",
      description: "[รอเนื้อหา: อธิบายรายละเอียดของโปรเจกต์ ปัญหาที่พบ และวิธีแก้ไข หรือบทบาทของคุณในโปรเจกต์นี้]",
      tags: ["Tool 1", "Tool 2"],
      imageSrc: "" // เช่น "/assets/project1.jpg"
    },
    // สำเนา Object ด้านบนนี้เพื่อเพิ่มโปรเจกต์ใหม่
    // {
    //   id: 2,
    //   title: "โปรเจกต์ที่ 2",
    //   description: "รายละเอียด...",
    //   tags: ["React", "Tailwind"],
    //   imageSrc: ""
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">โปรเจกต์เด่น / ผลงาน (Projects)</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
