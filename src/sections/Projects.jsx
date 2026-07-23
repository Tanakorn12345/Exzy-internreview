import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import onsiteImg from '../assets/onsite2.jpg';
import codesk from '../assets/codesk.jpg'
import attendanceImg from '../assets/attandance1.jpg';
import attendanceImg1 from '../assets/attandance2.jpg';
import obsidianImg1 from '../assets/node obsidian.png';  
import onsiteImg1 from '../assets/locker.jpg';
import obsidianflow from '../assets/obsidian_kb_creation_flow.jpg';
import onsiteflow from '../assets/onsite_support_flow.jpg';
import attendanceflow from '../assets/attendance_app_install_flow.jpg';
import minew from '../assets/minew.JPG'
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "การจัดทำคลังข้อมูล (Knowledge Base) เกี่ยวกับผลิตภัณฑ์ Smart Office และ Smart Workplace ด้วยโปรแกรม Obsidian",
      description: "เราจะรวบรวมและจัดทำคลังข้อมูลที่เกี่ยวข้องกับระบบ Smart Office และ Smart Workplace โดยผ่านโปรแกรม Obsidian ที่เป็นโปรแกรมสำหรับการจัดการข้อมูลที่มีจำนวนมากให้อยู่ในรูปแบบใช้งานง่าย โดยจัดหมวดหมู่ข้อมูลและเชื่อมโยงเนื้อหาที่เกี่ยวข้องอย่างเป็นระบบ เพื่อให้สามารถค้นหาและเข้าถึงข้อมูลได้อย่างสะดวกและรวดเร็ว รวมถึงใช้ Graph View ในการแสดงความเชื่อมโยงของข้อมูลแต่ละหัวข้อ ช่วยให้เข้าใจโครงสร้างและความสัมพันธ์ของข้อมูลได้อย่างชัดเจนสำหรับการนำไปใช้กับ AI ต่อได้เลย",
      tags: ["Obsidian"],
      images: [obsidianImg1 , obsidianflow]
    } , 
    {
      id: 2,
      title: "การออกหน้างาน (On-site Support) กับพี่เลี้ยง",
      description: "อันนี้จะเป็นงานหลักของเราเลยครับ เราจะได้ออกหน้างานจริงกับพี่เลี้ยงจริงๆ เพื่อดูปัญหาจากลูกค้าที่แจ้งเข้ามาและแก้ไขปัญหาให้ลูกค้า ซึ่งในภาพจะเป็นระบบ Locker space และ Co-desk เราจะได้รู้จักปัญหาที่เกิดขึ้นจากตัว Hardwaire Software และระบบ Network แล้วก็วิธีแก้ไขปัญหาโดยมีพี่คอยให้คำแนะนำอยู่เสมอ และเรายังได้ทักษะการสื่อสารกับลูกค้าด้วยครับ ซึ่งเป็นทักษะที่จำเป็นในการทำงานในอนาคตด้วย",
      tags: ["Problem Solving", "Onsite Service"],    
      images: [onsiteImg,codesk, onsiteImg1, onsiteflow]
    } , 
    {
      id: 3,
      title: "การลงระบบ Attendance บนอุปกรณ์ Android",
      description: "อันนี้จะเป็นงานส่วนแรกที่ผมได้เข้ามาครับ คือการติดตั้งและตั้งค่าเบื้องต้นของระบบ Attendance สำหรับการลงเวลาเข้า–ออกงาน โดยดำเนินการผ่าน Intelligent Hub ซึ่งใช้สำหรับตั้งค่าระบบและเชื่อมต่ออุปกรณ์ที่เกี่ยวข้อง เพื่อให้ทีมสามารถนำอุปกรณ์ไปติดตั้งและใช้งานต่อไปได้",
      tags: ["Intelligent Hub", "Access Control"],    
      images: [attendanceImg, attendanceImg1, attendanceflow]
    } , 
    {
      id: 4,
      title: "การตรวจสอบสถานะอุปกรณ์ Minew",
      description: "อันนี้เป็นส่วนหนึ่งที่พี่เลี้ยงให้ศึกษาครับ เกี่ยวกับการทำงานของระบบ Minew และ Gateway ที่ตัว gateway จะเป็นตัวเชื่อมระหว่างตัวจอ minew ที่เป็นหน้าจอสำหรับการจองที่ติดตามโต๊ะ เข้ากับตัวระบบ ซึ่งก็คือระบบ Co-Desk นั้นเองครับ โดยช่วยตรวจสอบสถานะอุปกรณ์ และจัดทำเอกสารการจัดการหลังบ้านของ Minew ลงใน Obsidian เพื่อใช้เป็นข้อมูลอ้างอิงภายในองค์กร",
      tags: ["Intelligent Hub", "Access Control"],    
      images: [minew, attendanceImg1, attendanceflow]

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
