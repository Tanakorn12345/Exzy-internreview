import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import obsidianImg from '../assets/obsidian workflow.png';
import onsiteImg from '../assets/onsite.jpg';
import attendanceImg from '../assets/attandance1.jpg';
import attendanceImg1 from '../assets/attandance2.jpg';
import obsidianImg1 from '../assets/node obsidian.png';  
import onsiteImg1 from '../assets/onsite2.jpg';
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "การจัดทำคลังข้อมูล (Knowledge Base) เกี่ยวกับผลิตภัณฑ์ Smart Office และ Smart Workplace ด้วยโปรแกรม Obsidian",
      description: "รวบรวมและบันทึกข้อมูลการปฏิบัติงานที่เกี่ยวข้องกับระบบ Smart Office และ Smart Workplace ลงในโปรแกรม Obsidian โดยจัดหมวดหมู่ข้อมูลอย่างเป็นระบบและเชื่อมโยงเนื้อหาที่เกี่ยวข้องเข้าด้วยกัน เพื่อให้สามารถค้นหาและเรียกใช้งานข้อมูลได้อย่างสะดวกและรวดเร็ว",
      tags: ["Obsidian"],
      images: [obsidianImg , obsidianImg1]
    } , 
    {
      id: 2,
      title: "การ On-site Support กับพี่เลี้ยง",
      description: "ลง On-site Support กับพี่เลี้ยงเพื่อตรวจสอบ แก้ไขปัญหา และติดตั้งระบบให้ลูกค้า พร้อมเรียนรู้การวิเคราะห์ปัญหาหน้างานจริง เช่น การตรวจสอบสภาพและการทำงานของ hardware หน้างาน และการอัปเดต license ของระบบให้เป็นปัจจุบัน เพื่อให้ระบบสามารถใช้งานได้อย่างต่อเนื่องและมีประสิทธิภาพ",
      tags: ["Problem Solving", "Onsite Service"],    
      images: [onsiteImg1, onsiteImg]
    } , 
    {
      id: 3,
      title: "การลงระบบ Attendance ให้กับลูกค้า",
      description: "เป็นการติดตั้งและตั้งค่าเบื้องต้นของระบบ Attendance สำหรับการลงเวลาเข้า–ออกงาน โดยใช้ Intelligent Hub เป็นศูนย์กลางในการบริหารจัดการระบบ การตั้งค่า และการจัดการข้อมูลของแต่ละองค์กร เพื่อให้ระบบพร้อมสำหรับการใช้งานจริง",
      tags: ["Intelligent Hub", "Access Control"],    
      images: [attendanceImg, attendanceImg1]
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
              images={project.images}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </section>
  );
};

export default Projects;
