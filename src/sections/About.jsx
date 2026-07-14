import React from 'react';
import insideOffice from '../assets/insideoffice.jpg';

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
              Exzy (บริษัท เอ็กซ์ซี จำกัด) เป็นผู้นำอันดับ 1 ด้านการพัฒนาเทคโนโลยี Smart Office และ Smart Workplace ครบวงจรในประเทศไทย โดยโดดเด่นเรื่องการสร้างนวัตกรรม Interactive และ Futuristic Solution
            </p>
            <p className="text-base text-dark-500/80 leading-relaxed">
             โดยมีหลายโซลูชันที่ตอบโจทย์การทำงานในยุคดิจิทัล เช่น ระบบจองห้องประชุมอัจฉริยะ (Smart Meeting Room Booking System), ระบบการจองโต๊ะทำงาน (Smart Workstation Booking System)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
