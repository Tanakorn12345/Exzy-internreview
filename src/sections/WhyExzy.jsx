import React from 'react';
import Exzyoffice from '../assets/whyexzy.jpg';

const WhyExzy = () => {
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
                    โดยขึ้นชื่อว่า Exzy ที่ผลิตระบบ Smart Workplace ซึ่งเป็นนวัตกรรมที่ใช้กันมากในบริษัทหรือสำนักงานต่างๆ เราจะได้จับผลงานจริงที่บริษัทผลิตขึ้นมา และนำสกิลด้านการแก้ไขปัญหา และทางด้านเทคนิคเกี่ยวกับระบบคอมพิวเตอร์และระบบปฏิบัติการ มาปรับใช้กับงานได้เต็มที่ครับ
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
             <div className="w-full bg-dark-400 rounded-3xl border-8 border-primary-500/20 shadow-2xl relative overflow-hidden group">
                 <img
                   src={Exzyoffice}
                   alt="Exzy Office"
                   className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                 />
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyExzy;
