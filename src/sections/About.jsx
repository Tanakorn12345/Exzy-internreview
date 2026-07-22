import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import insideOffice from '../assets/smart technology exzy.png';
import logoExzy from '../assets/codesk.jpg';
import whyExzy from '../assets/locker.jpg';
import meetintouch from '../assets/Meet in touch.png'
import acces from '../assets/access.png'
import codesk from '../assets/codesk.png'
const About = () => {
  const images = [insideOffice, meetintouch , acces ,codesk];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);
  return (
    <section id="about" className="py-20 bg-primary-500/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-dark-500 rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="w-full aspect-video bg-white rounded-2xl shadow-xl flex items-center justify-center border-2 border-primary-500 relative z-10 overflow-hidden group transform-gpu">
              <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>
              
              {images.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover blur-xl opacity-60 scale-110" />
                  <img src={img} alt={`Exzy About ${index + 1}`} className="absolute inset-0 w-full h-full object-contain" />
                </div>
              ))}

              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex ? 'bg-primary-500 w-6' : 'bg-dark-500/30 hover:bg-dark-500/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-dark-500 mb-4 inline-block border-b-4 border-primary-500 pb-2">เกี่ยวกับบริษัท Exzy</h2>

            <p className="text-base text-dark-500/80 mb-4 leading-relaxed">
            Exzy (บริษัท เอ็กซ์ซี จำกัด) เป็นบริษัทที่มุ่งเน้นพัฒนาระบบ Smart Office และ Smart Workplace เพื่อตอบโจทย์การทำงานยุคใหม่แบบ Hybrid Working ครับ โดยนำเทคโนโลยีมาเชื่อมโยงการจัดการพื้นที่ บุคลากร และอุปกรณ์ต่าง ๆ เข้าด้วยกัน
            </p>
            <p className="text-base text-dark-500/80 leading-relaxed">
         โดยที่นี่มีโปรดักต์ที่ครอบคลุมการใช้ชีวิตในออฟฟิศหลายอย่างเลยครับ เช่น Meet in Touch (ระบบจองห้องประชุมอัจฉริยะ), Co Desk (ระบบจองโต๊ะทำงาน), Locker Space (ล็อกเกอร์อัจฉริยะ), Visitar (ระบบจัดการผู้มาติดต่อ) ไปจนถึงระบบบันทึกเวลาอย่าง Hybrid Time Attendance ซึ่งทั้งหมดนี้เข้ามาช่วยให้การจัดการพื้นที่ในออฟฟิศง่ายและเป็นระบบขึ้นครับ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
