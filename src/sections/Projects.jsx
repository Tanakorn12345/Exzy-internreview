import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import onsiteImg from '../assets/onsite.jpg';
import attendanceImg from '../assets/attandance1.jpg';
import attendanceImg1 from '../assets/attandance2.jpg';
import obsidianImg1 from '../assets/node obsidian.png';  
import onsiteImg1 from '../assets/onsite2.jpg';
import obsidianflow from '../assets/obsidian_kb_creation_flow.jpg';
import onsiteflow from '../assets/onsite_support_flow.jpg';
import attendanceflow from '../assets/attendance_app_install_flow.jpg';
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "การจัดทำคลังข้อมูล (Knowledge Base) เกี่ยวกับผลิตภัณฑ์ Smart Office และ Smart Workplace ด้วยโปรแกรม Obsidian",
      description: "รวบรวมและจัดทำคลังข้อมูลที่เกี่ยวข้องกับระบบ Smart Office และ Smart Workplace ผ่านโปรแกรม Obsidian โดยจัดหมวดหมู่ข้อมูลและเชื่อมโยงเนื้อหาที่เกี่ยวข้องอย่างเป็นระบบ เพื่อให้สามารถค้นหาและเข้าถึงข้อมูลได้อย่างสะดวกและรวดเร็ว รวมถึงใช้ Graph View ในการแสดงความเชื่อมโยงของข้อมูลแต่ละหัวข้อ ช่วยให้เข้าใจโครงสร้างและความสัมพันธ์ของข้อมูลได้อย่างชัดเจน",
      tags: ["Obsidian"],
      images: [obsidianImg1 , obsidianflow]
    } , 
    {
      id: 2,
      title: "การ On-site Support กับพี่เลี้ยง",
      description: "ลง On-site Support กับพี่เลี้ยงเพื่อตรวจสอบ แก้ไขปัญหา และติดตั้งระบบให้ลูกค้า พร้อมเรียนรู้การวิเคราะห์ปัญหาหน้างานจริง เช่น การตรวจสอบสภาพและการทำงานของ hardware หน้างาน และการอัปเดต license ของระบบให้เป็นปัจจุบัน เพื่อให้ระบบสามารถใช้งานได้อย่างต่อเนื่องและมีประสิทธิภาพ",
      tags: ["Problem Solving", "Onsite Service"],    
      images: [onsiteImg1, onsiteImg, onsiteflow]
    } , 
    {
      id: 3,
      title: "การลงระบบ Attendance ให้กับลูกค้า",
      description: "เป็นการติดตั้งและตั้งค่าเบื้องต้นของระบบ Attendance สำหรับการลงเวลาเข้า–ออกงาน โดยใช้ Intelligent Hub เป็นศูนย์กลางในการบริหารจัดการระบบ การตั้งค่า และการจัดการข้อมูลของแต่ละองค์กร เพื่อให้ระบบพร้อมสำหรับการใช้งานจริง",
      tags: ["Intelligent Hub", "Access Control"],    
      images: [attendanceImg, attendanceImg1, attendanceflow]
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
