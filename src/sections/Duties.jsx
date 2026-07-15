import React from 'react';
import { MonitorSmartphone, ShieldCheck , PencilSparkles , Database} from 'lucide-react';
import DutyCard from '../components/DutyCard';

const Duties = () => {
  const tasks = [
    {
      id: 1,
      icon: <MonitorSmartphone className="w-6 h-6" />,
      title: "ศึกษาอุปกรณ์ภายในและระบบจัดการ",
      desc: "ศึกษาอุปกรณ์ภายในบริษัท เช่น เครื่อง MIT , เครื่อง Attandance , เครื่อง E-ink"
    },
   
    {
      id: 2,
      icon: <Database className="w-6 h-6" />,
      title: "จัดทำการเก็บคลังข้อมูลของผลิตภัณฑ์ด้วยโปรแกรม Obsidian",
      desc: "เป็นการจัดเก็บคลังข้อมูลของผลิตภัณฑ์เพื่อนำไปใช้ในการค้นหาและอ้างอิงได้"
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "การปฏิบัติงานในพื้นที่ (On-site Support)",
      desc: "การลงพื้นที่หน้างานจริงกับพี่เลี้ยงเพื่อรับทราบและหาแนวทางการแก้ไขปัญหา"
    }
  ];

  return (
    <section id="duties" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark-500 mb-4 inline-block border-b-4 border-primary-500 pb-2">หน้าที่ความรับผิดชอบ (Duties)</h2>
          <p className="text-base text-dark-500/80 max-w-2xl mx-auto mt-4">
            งานหลักๆ ที่ได้รับมอบหมายในฐานะ IT Support Intern
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {tasks.map(task => (
            <div key={task.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex">
              <DutyCard 
                icon={task.icon}
                title={task.title}
                description={task.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Duties;
