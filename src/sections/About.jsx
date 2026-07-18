import React from 'react';
import insideOffice from '../assets/smart technology exzy.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary-500/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-dark-500 rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="aspect-video bg-white rounded-2xl shadow-xl flex items-center justify-center border-2 border-primary-500 relative z-10 overflow-hidden">
              <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src={insideOffice} alt="Exzy Office" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-dark-500 mb-4 inline-block border-b-4 border-primary-500 pb-2">เกี่ยวกับบริษัท Exzy</h2>

            <p className="text-base text-dark-500/80 mb-4 leading-relaxed">
            Exzy (บริษัท เอ็กซ์ซี จำกัด) เป็นบริษัทผู้พัฒนาโซลูชันด้าน Smart Office และ Smart Workplace ที่มุ่งเน้นการนำเทคโนโลยีมาช่วยยกระดับประสิทธิภาพการทำงานภายในองค์กร รองรับรูปแบบการทำงานยุคใหม่ (Hybrid Working) ผ่านการพัฒนาระบบที่เชื่อมโยงการบริหารจัดการพื้นที่ทำงาน บุคลากร และอุปกรณ์ต่าง ๆ เข้าไว้ด้วยกันอย่างมีประสิทธิภาพ
            </p>
            <p className="text-base text-dark-500/80 leading-relaxed">
           บริษัทมีผลิตภัณฑ์และโซลูชันที่ครอบคลุมการใช้งานในสำนักงาน เช่น Meet in Touch (ระบบจองห้องประชุมอัจฉริยะ), Co Desk (ระบบจองโต๊ะทำงาน), Locker Space (ระบบตู้ล็อกเกอร์อัจฉริยะ), Visitar (ระบบบริหารจัดการผู้มาติดต่อ) และ Hybrid Time Attendance (ระบบบันทึกเวลาเข้า–ออกงาน) ซึ่งช่วยให้องค์กรสามารถบริหารจัดการพื้นที่ทำงานและการทำงานร่วมกันได้อย่างมีประสิทธิภาพมากยิ่งขึ้น
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
