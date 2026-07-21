import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Exzyoffice from '../assets/whyexzy.jpg';
import mapexzy from '../assets/Mapexzy.png';
import insideoffice from '../assets/insideoffice.jpg';

const WhyExzy = () => {
  const images = [Exzyoffice, mapexzy];
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
    <section id="why-exzy" className="py-20 bg-dark-500 relative">
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-4 inline-block border-b-4 border-white-500 pb-2">ทำไมถึงเลือก Exzy</h2>

            <p className="text-base text-primary-100 mb-8 leading-relaxed">
              เหตุผลที่ตัดสินใจเลือกบริษัทนี้เพื่อเป็นสถานที่เก็บเกี่ยวประสบการณ์
            </p>
            
            <div className="space-y-6">
                {/* Reason 1 */}
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 relative overflow-hidden group hover:border-primary-400 hover:bg-white/15 transition-all">
                   <div className="absolute top-0 left-0 w-2 h-full bg-primary-400 group-hover:w-3 transition-all"></div>
                   <h3 className="text-lg font-bold text-white mb-2 ml-2">ได้ลงมือทำงานจริง
                   </h3>
                   <p className="text-primary-50/80 leading-relaxed ml-2">
                    โดยขึ้นชื่อว่า Exzy ที่ผลิตระบบ Smart Workplace ซึ่งเป็นนวัตกรรมที่ใช้กันมากในบริษัทหรือสำนักงานต่างๆ เราจะได้จับผลงานจริงที่บริษัทผลิตขึ้นมา และนำสกิลด้านการแก้ไขปัญหา และทางด้านเทคนิคเกี่ยวกับระบบคอมพิวเตอร์และระบบปฏิบัติการที่เรามี มาปรับใช้กับงานได้เต็มที่ครับ
                   </p>
                </div>
                
                {/* Reason 2 */}
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 relative overflow-hidden group hover:border-primary-400 hover:bg-white/15 transition-all">
                   <div className="absolute top-0 left-0 w-2 h-full bg-primary-400 group-hover:w-3 transition-all"></div>
                   <h3 className="text-lg font-bold text-white mb-2 ml-2">พี่เลี้ยงและทีมพร้อมให้คำแนะนำ</h3>
                   <p className="text-primary-50/80 leading-relaxed ml-2">
เวลาเมื่อเกิดปัญหาในการทำงานออกหน้างานกับพี่เลี้ยง (On-Site Support) เราก็จะได้ช่วยครับ ซึ่งอันไหนที่ยังไม่เข้่าใจ เราสามารถถามพี่เลี้ยงได้เลย พี่ๆใจดีมากบอกวิธีแก้ให้งานสำเร็จด้วยดีครับ หรืออยากถามเพิ่มเติมก็ถามได้เลย ทำให้เราเข้าใจตัวระบบเยอะขึ้นมากครับ
                   </p>
                </div>
                {/* Reason 3 */}
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 relative overflow-hidden group hover:border-primary-400 hover:bg-white/15 transition-all">
                   <div className="absolute top-0 left-0 w-2 h-full bg-primary-400 group-hover:w-3 transition-all"></div>
                   <h3 className="text-lg font-bold text-white mb-2 ml-2"> ออฟฟิศติดหลายสถานที่ เดินทางมาทำงานสะดวก</h3>
                   <p className="text-primary-50/80 leading-relaxed ml-2">
              โดยตัวบริษัท Exzy ตั้งอยู่ใจกลางเมืองซึ่งคือ แถวห้วยขวางครับ ซึ่งมีรถไฟฟ้า MRT สถานีห้วยขวาง ที่ตรงมา 500 แล้วถึงที่ออฟฟิศทันทีครับ ซึ่งสะดวกและประหยัดเวลาการเดินทางมาฝึกงานของเรามาก และยังมีห้างรอบข้าง เช่น เดอะสตรีท เซ็นทรัล พระราม 9 ที่เรามักไปกินข้าวช่วงกลางวันกันครับ
                   </p>
                </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center lg:pl-8 mt-12 lg:mt-0">
             <div className="w-full aspect-[4/3] bg-dark-400 rounded-3xl border-8 border-primary-500/20 shadow-2xl relative overflow-hidden group">
                 {images.map((img, index) => (
                   <img
                     key={index}
                     src={img}
                     alt={`Exzy Slide ${index + 1}`}
                     className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
                       index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                     }`}
                   />
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
                         index === currentIndex ? 'bg-primary-500 w-6' : 'bg-white/50 hover:bg-white'
                       }`}
                     />
                   ))}
                 </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyExzy;
