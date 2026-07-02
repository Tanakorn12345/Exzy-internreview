import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary-500/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-dark-500 rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="aspect-video bg-white rounded-2xl shadow-xl flex items-center justify-center border-2 border-primary-500 relative z-10 overflow-hidden">
              <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-dark-500/50 font-medium z-10">รูปบรรยากาศบริษัท / ออฟฟิศ</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-dark-500 mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary-500 block rounded-full"></span>
              เกี่ยวกับบริษัท Exzy
            </h2>
            <p className="text-lg text-dark-500/80 mb-4 leading-relaxed">
              Exzy (บริษัท เอ็กซ์ซี จำกัด) เป็นผู้นำอันดับ 1 ด้านการพัฒนาเทคโนโลยี Smart Office และ Smart Workplace ครบวงจรในประเทศไทย โดยโดดเด่นเรื่องการสร้างนวัตกรรม Interactive และ Futuristic Solution
            </p>
            <p className="text-lg text-dark-500/80 leading-relaxed">
             โดยมีหลายโซลูชันที่ตอบโจทย์การทำงานในยุคดิจิทัล เช่น ระบบจองห้องประชุมอัจฉริยะ (Smart Meeting Room Booking System), ระบบการจองโต๊ะทำงาน (Smart Workstation Booking System)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
