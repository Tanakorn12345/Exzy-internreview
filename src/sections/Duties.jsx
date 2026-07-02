import React from 'react';
import { Server, MonitorSmartphone, Wifi, ShieldCheck } from 'lucide-react';
import DutyCard from '../components/DutyCard';

const Duties = () => {
  // ข้อมูลหน้าที่ความรับผิดชอบทั้งหมด
  const tasks = [
    {
      id: 1,
      icon: <Server className="w-6 h-6 text-primary-600" />,
      title: "ดูแลระบบเซิร์ฟเวอร์",
      desc: "[รอเนื้อหาจากคุณ: อธิบายงานดูแลเซิร์ฟเวอร์ เช่น ตั้งค่า, ตรวจสอบสถานะ]"
    },
    {
      id: 2,
      icon: <MonitorSmartphone className="w-6 h-6 text-primary-600" />,
      title: "แก้ไขปัญหาอุปกรณ์ IT",
      desc: "[รอเนื้อหาจากคุณ: การซ่อมแซม จัดเตรียมคอมพิวเตอร์ให้พนักงาน]"
    },
    {
      id: 3,
      icon: <Wifi className="w-6 h-6 text-primary-600" />,
      title: "ดูแลระบบ Network",
      desc: "[รอเนื้อหาจากคุณ: การจัดการอินเทอร์เน็ต, Router, Access Point]"
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-6 h-6 text-primary-600" />,
      title: "Security & Software",
      desc: "[รอเนื้อหาจากคุณ: การติดตั้งโปรแกรม, แอนตี้ไวรัส, การตั้งค่าสิทธิ์ผู้ใช้]"
    }
  ];

  return (
    <section id="duties" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">หน้าที่ความรับผิดชอบ (Duties)</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
