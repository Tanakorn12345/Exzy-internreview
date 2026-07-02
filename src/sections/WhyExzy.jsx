import React from 'react';

const WhyExzy = () => {
  return (
    <section id="why-exzy" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
               ทำไมถึงเลือกมาฝึกงานที่ <span className="text-primary-600">Exzy?</span>
             </h2>
             
             <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-2 h-full bg-primary-500"></div>
                   <h3 className="text-xl font-bold text-slate-800 mb-2">[รอเนื้อหา: เหตุผลที่ 1]</h3>
                   <p className="text-slate-600 leading-relaxed">
                      [รอเนื้อหา: เช่น ความสนใจในเทคโนโลยี Smart Office, ชื่อเสียงของบริษัท หรือ รุ่นพี่แนะนำมา]
                   </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-2 h-full bg-accent-500"></div>
                   <h3 className="text-xl font-bold text-slate-800 mb-2">[รอเนื้อหา: เหตุผลที่ 2]</h3>
                   <p className="text-slate-600 leading-relaxed">
                      [รอเนื้อหา: เช่น ต้องการฝึกฝนทักษะการแก้ปัญหาในสภาพแวดล้อมการทำงานจริง หรือความท้าทายใหม่ๆ]
                   </p>
                </div>
             </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
             {/* ใส่รูปประกอบ เช่น รูปตอนสัมภาษณ์, รูปออฟฟิศสวยๆ หรือรูปคุณยืนอยู่หน้าบริษัท */}
             <div className="w-full max-w-md aspect-[4/5] bg-slate-200 rounded-3xl shadow-xl flex items-center justify-center transform rotate-2 hover:rotate-0 transition-transform duration-300 border-8 border-white">
                <span className="text-slate-400 font-medium">รูปภาพประกอบ (Why Exzy)</span>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyExzy;
