import React from 'react';
import ProjectCard from '../components/ProjectCard';
import obsidianImg from '../assets/obsidian pic.png';
import onsiteImg from '../assets/onsiteservice.jpg';
import attendanceImg from '../assets/attandance.jpg';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "การจัดทำคลังข้อมูลของบริษัทที่เกี่ยวกับนวัตกรรม Smart Office และ Smart Workplace",
      description: "ช่วยรวบรวมและบันทึกข้อมูลการทำงานเกี่ยวกับระบบ Smart Office และ Smart Workplace ลงในโปรแกรม Obsidian พร้อมจัดหมวดหมู่ข้อมูลให้เป็นระเบียบ เพื่อให้ค้นหาและนำไปใช้งานได้ง่าย รวมถึงใช้เป็นข้อมูลอ้างอิงสำหรับการทำงานในอนาคต",
      tags: ["Obsidian"],
      imageSrc: obsidianImg 
    } , 
    {
      id: 2,
      title: "การติดตามหน้างานกับพี่เลี้ยง",
      description: "ติดตามพี่เลี้ยงลงพื้นที่เพื่อตรวจสอบ แก้ไขปัญหา และติดตั้งระบบให้กับลูกค้า พร้อมเรียนรู้ขั้นตอนการวิเคราะห์ปัญหาและการแก้ไขปัญหาในหน้างานจริง เช่น การตรวจสอบ hardware ที่หน้างาน , การอัพเดท license ของระบบหน้างาน",
      tags: ["Problem Solving", "Onsite Service"],    
      imageSrc: onsiteImg 
    } , 
    {
      id: 3,
      title: "การลงแอพพลิเคชันลงเวลาและการลงทะเบียนเข้า-ออกงานของพนักงานให้กับลูกค้า",
      description: "เป็นการติดตั้งและตั้งค่าแอพพลิเคชันลงเวลาและการลงทะเบียนเข้า-ออกงานของพนักงานให้กับลูกค้า เพื่อให้พร้อมใช้งานทันที",
      tags: ["Intelligent Hub", "Access Control"],    
      imageSrc: attendanceImg 
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary-500/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark-500 mb-4 inline-block border-b-4 border-primary-500 pb-2">โปรเจกต์ (Projects)</h2>
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
