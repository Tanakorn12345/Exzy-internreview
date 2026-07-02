import React from 'react';
import { Quote } from 'lucide-react';

const Conclusion = () => {
  return (
    <section id="conclusion" className="py-20 bg-dark-500 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400 rounded-full mix-blend-screen filter blur-[100px] opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Quote className="w-16 h-16 text-primary-400 mx-auto mb-8 opacity-50" />
        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
          "[รอเนื้อหา: คำคมหรือประโยคสรุปความประทับใจสั้นๆ เช่น การฝึกงานที่นี่ให้ประสบการณ์ที่หาไม่ได้จากในห้องเรียน]"
        </h2>
        <p className="text-lg text-primary-100 leading-relaxed mb-10">
          [รอเนื้อหา: สรุปความรู้สึกทั้งหมดที่อยากบอกกับบริษัท หรือคำแนะนำสำหรับน้องๆ ที่อยากมาฝึกงานที่นี่]
        </p>
        
        <div className="flex items-center justify-center gap-4">
          {/* รูปโปรไฟล์เล็กๆ พร้อมชื่อ */}
          <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-800 text-xs font-bold overflow-hidden">
             รูป
          </div>
          <div className="text-left">
            <p className="font-semibold text-white">[ชื่อของคุณ]</p>
            <p className="text-primary-200 text-sm">IT Support Intern, Exzy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
