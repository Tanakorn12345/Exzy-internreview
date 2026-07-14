import React from 'react';
import eatingImg from '../assets/eating.jpg';
import minewImg from '../assets/minew.jpg';
import eating1Img from '../assets/eating1.jpg';

const Culture = () => {
  return (
    <section id="culture" className="py-20 bg-primary-500/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark-500 mb-4 inline-block border-b-4 border-primary-500 pb-2">บรรยากาศการทำงาน (Culture)</h2>
          <p className="text-base text-dark-500/80 max-w-2xl mx-auto mt-4">
            การใช้ชีวิตในออฟฟิศและสภาพแวดล้อม
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[320px]">
          <div className="col-span-1 md:col-span-2 h-full bg-white rounded-2xl shadow-md overflow-hidden relative group border border-primary-500/20">
            <div className="absolute inset-0 bg-dark-500/10 group-hover:bg-dark-500/5 transition-colors duration-300 z-10 pointer-events-none"></div>
            <img src={eatingImg} alt="Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          
          <div className="col-span-1 md:col-span-1 h-full bg-white rounded-2xl shadow-md overflow-hidden relative group border border-primary-500/20">
             <div className="absolute inset-0 bg-dark-500/10 group-hover:bg-dark-500/5 transition-colors duration-300 z-10 pointer-events-none"></div>
             <img src={minewImg} alt="Meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          <div className="col-span-1 md:col-span-1 h-full bg-white rounded-2xl shadow-md overflow-hidden relative group border border-primary-500/20 flex flex-col items-center justify-center text-primary-500/50 p-4 text-center">
             <div className="absolute inset-0 bg-dark-500/10 group-hover:bg-dark-500/5 transition-colors duration-300 z-10 pointer-events-none"></div>
             <img src={eating1Img} alt="Activity" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>

          <div className="col-span-1 md:col-span-2 h-full bg-dark-500 rounded-2xl shadow-md overflow-hidden p-8 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 rounded-full filter blur-[50px] opacity-20"></div>
            <h3 className="text-2xl font-bold text-white mb-4 z-10">สิ่งที่ประทับใจที่สุด</h3>
            <p className="text-primary-100 text-base leading-relaxed z-10 overflow-y-auto pr-2 custom-scrollbar">
              มีความประทับใจ รู้สึกพี่ๆใจดี สอนงานทำให้เข้าใจง่าย และให้คำแนะนำที่ดีในการทำงาน ทำให้รู้สึกสนุกที่ได้เรียนรู้ ได้เรียนรู้ปัญหาหน้างาน ได้สอนงานจริงที่สามารถเอาไปใช้ในอนาคตได้ เข้าใจปัญหาในหน้างานและการรับมือและเลี้ยงอาหารบ่อยมากครับ 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
