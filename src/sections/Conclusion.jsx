import React from 'react';
import { Quote } from 'lucide-react';
import meatexzy from '../assets/meatexzy1.jpg';
const Conclusion = () => {
  return (
    <section id="conclusion" className="py-24 bg-white text-dark-500 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-dark-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Quote className="w-16 h-16 text-primary-500 mx-auto mb-8 opacity-40" />
        <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-tight text-dark-500">
          &quot;ประสบการณ์ที่คุ้มค่า คือการได้ลงมือทำและแก้ปัญหาหน้างานจริง&quot;
        </h2>
        <p className="text-lg text-dark-500/80 leading-relaxed mb-12 max-w-3xl mx-auto">
         การฝึกงานในตำแหน่ง IT Support ที่ Exzy ทำให้ผมได้เรียนรู้การทำงานจริงทั้งด้านระบบ Smart Office การติดตั้งและดูแลอุปกรณ์เบื้องต้น รวมถึงการออก On-site Support กับพี่เลี้ยงเพื่อช่วยแก้ไขปัญหาให้ลูกค้า นอกจากนี้ยังได้พัฒนาทักษะการสื่อสาร การทำงานร่วมกับผู้อื่น และการปรับตัวในการทำงาน สิ่งที่ประทับใจที่สุดคือบรรยากาศการทำงานที่เป็นกันเอง และพี่ ๆ ในทีมที่คอยสอนงานและให้คำแนะนำตลอดระยะเวลาการฝึกงาน
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
