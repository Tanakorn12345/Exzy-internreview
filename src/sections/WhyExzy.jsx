import React from 'react';

const WhyExzy = () => {
  return (
    <section id="why-exzy" className="py-20 bg-dark-500 relative">
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">ทำไมถึงเลือกฝึกงานที่ <span className="text-primary-400">Exzy?</span></h2>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              เหตุผลส่วนตัวที่ตัดสินใจเลือกบริษัทนี้เพื่อเป็นสถานที่เก็บเกี่ยวประสบการณ์ก่อนเรียนจบ
            </p>
            
            <div className="space-y-6">
                {/* Reason 1 */}
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 relative overflow-hidden group hover:border-primary-400 hover:bg-white/15 transition-all">
                   <div className="absolute top-0 left-0 w-2 h-full bg-primary-400 group-hover:w-3 transition-all"></div>
                   <h3 className="text-xl font-bold text-white mb-2 ml-2">[รอเนื้อหา: เหตุผลที่ 1]</h3>
                   <p className="text-primary-50/80 leading-relaxed ml-2">
                      [รอเนื้อหา: เช่น วัฒนธรรมองค์กร, เทคโนโลยีที่ใช้, หรือชื่อเสียงของบริษัท]
                   </p>
                </div>
                
                {/* Reason 2 */}
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 relative overflow-hidden group hover:border-primary-400 hover:bg-white/15 transition-all">
                   <div className="absolute top-0 left-0 w-2 h-full bg-primary-400 group-hover:w-3 transition-all"></div>
                   <h3 className="text-xl font-bold text-white mb-2 ml-2">[รอเนื้อหา: เหตุผลที่ 2]</h3>
                   <p className="text-primary-50/80 leading-relaxed ml-2">
                      [รอเนื้อหา: เช่น ต้องการฝึกฝนทักษะการแก้ปัญหาในสภาพแวดล้อมการทำงานจริง หรือความท้าทายใหม่ๆ]
                   </p>
                </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
             {/* คุณสามารถเปลี่ยนเป็นรูปภาพออฟฟิศ หรือรูปถ่ายของคุณกับทีมได้ */}
             <div className="w-full max-w-md aspect-square bg-dark-400 rounded-full border-8 border-primary-500/30 flex items-center justify-center shadow-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-primary-500/20 group-hover:bg-transparent transition-colors duration-500"></div>
                 <span className="text-primary-200 text-lg">รูปภาพประกอบ (ถ้ามี)</span>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyExzy;
