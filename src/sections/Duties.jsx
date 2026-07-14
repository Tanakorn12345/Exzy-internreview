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
      icon: <PencilSparkles className="w-6 h-6" />,
      title: "แก้ไขปัญหาอุปกรณ์เบื้องต้น",
      desc: "การแก้ไขปละดูแลอุปกรณ์เบื้องต้นเพื่อส่งมอบต่อไป"
    },
    {
      id: 3,
      icon: <Database className="w-6 h-6" />,
      title: "จัดทำการเก็บคลังข้อมูลของบริษัท",
      desc: "เป็นการจัดเก็บคลังข้อมูลของบริษัทเพื่อนำไปใช้ในการทำงานต่อไป"
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "การปฏิบัติงานจริงในพื้นที่ (On-site Support)",
      desc: "ติดตามพี่เลี้ยงลงพื้นที่หน้างานจริงเพื่อรับทราบและร่วมหาแนวทางการแก้ไขปัญหา ทำให้เข้าใจกระบวนการทำงานและปัญหาในอุตสาหกรรมได้ลึกซึ้งยิ่งขึ้น"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tasks.map(task => (
            <DutyCard 
              key={task.id}
              icon={task.icon}
              title={task.title}
              description={task.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Duties;
