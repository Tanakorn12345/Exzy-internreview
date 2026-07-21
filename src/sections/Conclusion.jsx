import React from 'react';
import { Quote } from 'lucide-react';
import meatexzy from '../assets/meatexzy1.jpg';
import groupPlaceholder from '../assets/arjarncome.jpg'; // TODO: เปลี่ยนเป็นชื่อไฟล์รูปหมู่ที่เซฟมาใหม่

const Conclusion = () => {
  return (
    <section id="conclusion" className="py-24 bg-white text-dark-500 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-dark-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Group Photo Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="w-full aspect-video bg-dark-400 rounded-3xl border-8 border-primary-500/20 shadow-2xl relative overflow-hidden group mb-8">
            <img 
              src={groupPlaceholder} 
              alt="Internship Team" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu will-change-transform contrast-125 saturate-105"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </div>
          
        </div>

        <Quote className="w-16 h-16 text-primary-500 mx-auto mb-8 opacity-40" />
        <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-tight text-dark-500">
          &quot;ประสบการณ์ที่คุ้มค่า คือการได้ลงมือทำจริง&quot;
        </h2>
        <p className="text-lg text-dark-500/80 leading-relaxed mb-12 max-w-3xl mx-auto">
        การมาฝึกงานตำแหน่ง IT Support ที่นี่ ทำให้เราได้เปิดโลกการทำงานจริงแบบเต็ม ๆ ทั้งจัดการเรียนรู้ระบบ Smart Office ติดตั้งอุปกรณ์ และการ On-site Support กับพี่เลี้ยง นอกจากจะได้สกิลทางเทคนิคแล้ว ยังได้ฝึกเรื่องการปรับตัวด้วย แต่สิ่งที่ทำให้ประทับใจที่สุดคือความเป็นกันเองและเอาใจใส่ของพี่ ๆ ในทีมครับ อยากขอบคุณพี่ ๆ ทุกคนที่พร้อมสอนและให้คำแนะนำมาตลอด ทำให้การฝึกงานครั้งนี้เป็นความทรงจำที่คุ้มค่ามากครับ
        </p>
        <div className="flex items-center justify-center gap-5 bg-primary-500/5 py-4 px-8 rounded-full border border-primary-500/20 inline-flex shadow-sm">
          {/* รูปโปรไฟล์เล็กๆ พร้อมชื่อ */}
          <div className="w-14 h-14 bg-white border-2 border-primary-500 rounded-full flex items-center justify-center text-primary-500 text-sm font-bold overflow-hidden shadow-md">
            <img
              src={meatexzy}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="font-bold text-dark-500 text-lg">ธนกร (Tanakorn)</p>
            <p className="text-primary-600 font-medium">IT Support Intern, Exzy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
