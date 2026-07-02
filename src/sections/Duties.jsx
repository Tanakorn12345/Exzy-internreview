import React from 'react';
import { Server, MonitorSmartphone, Wifi, ShieldCheck } from 'lucide-react';
import DutyCard from '../components/DutyCard';

const Duties = () => {
  const tasks = [
    {
      id: 1,
      icon: <Server className="w-6 h-6" />,
      title: "ดูแลระบบเซิร์ฟเวอร์",
      desc: "[รอเนื้อหาจากคุณ: อธิบายงานดูแลเซิร์ฟเวอร์ เช่น ตั้งค่า, ตรวจสอบสถานะ]"
    },
    {
      id: 2,
      icon: <MonitorSmartphone className="w-6 h-6" />,
      title: "แก้ไขปัญหาอุปกรณ์ IT",
      desc: "[รอเนื้อหาจากคุณ: การซ่อมแซม จัดเตรียมคอมพิวเตอร์ให้พนักงาน]"
    },
    {
      id: 3,
      icon: <Wifi className="w-6 h-6" />,
      title: "ดูแลระบบ Network",
      desc: "[รอเนื้อหาจากคุณ: การจัดการอินเทอร์เน็ต, Router, Access Point]"
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Security & Software",
      desc: "[รอเนื้อหาจากคุณ: การติดตั้งโปรแกรม, แอนตี้ไวรัส, การตั้งค่าสิทธิ์ผู้ใช้]"
    }
  ];

  return (
    <section id="duties" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark-500 mb-4 inline-block border-b-4 border-primary-500 pb-2">หน้าที่ความรับผิดชอบ (Duties)</h2>
          <p className="text-lg text-dark-500/80 max-w-2xl mx-auto mt-4">
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
