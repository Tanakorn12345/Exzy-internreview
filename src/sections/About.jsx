import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            {/* สามารถใส่รูปบรรยากาศออฟฟิศ Exzy หรือโลโก้ใหญ่ๆ ได้ที่นี่ */}
            <div className="aspect-video bg-slate-100 rounded-2xl shadow-inner flex items-center justify-center border border-slate-200">
              <span className="text-slate-400">รูปบรรยากาศบริษัท / ออฟฟิศ</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">เกี่ยวกับบริษัท Exzy</h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              [รอเนื้อหาจากคุณ: อธิบายสั้นๆ ว่า Exzy ทำเกี่ยวกับอะไร เช่น Smart Office Solutions, Hybrid Work]
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              [รอเนื้อหาจากคุณ: ทำไมถึงเลือกมาฝึกงานที่นี่ หรือบรรยากาศแรกที่เข้ามาเป็นอย่างไร]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
