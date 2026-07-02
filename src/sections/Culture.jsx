import React from 'react';

const Culture = () => {
  return (
    <section id="culture" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">บรรยากาศการทำงาน (Culture)</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            การใช้ชีวิตในออฟฟิศ พี่ๆ ในทีม และสภาพแวดล้อม
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[4/3] bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200">
             <span className="text-slate-400">รูปเพื่อนร่วมงาน / ปาร์ตี้ / โต๊ะทำงาน</span>
          </div>
          <div className="flex flex-col justify-center px-4">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">การทำงานร่วมกับทีม</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              [รอเนื้อหา: พี่ๆ ดูแลดีไหม มีกิจกรรมอะไรบ้าง การสอนงานเป็นอย่างไร]
            </p>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">สวัสดิการ & สภาพแวดล้อม</h3>
            <p className="text-slate-600 leading-relaxed">
              [รอเนื้อหา: ของว่าง, มุมพักผ่อน, หรือการใช้ระบบ Smart Office ของบริษัท]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
