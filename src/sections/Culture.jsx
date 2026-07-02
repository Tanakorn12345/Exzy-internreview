import React from 'react';

const Culture = () => {
  return (
    <section id="culture" className="py-20 bg-primary-500/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark-500 mb-4 inline-block border-b-4 border-primary-500 pb-2">บรรยากาศการทำงาน (Culture)</h2>
          <p className="text-lg text-dark-500/80 max-w-2xl mx-auto mt-4">
            การใช้ชีวิตในออฟฟิศ พี่ๆ ในทีม และสภาพแวดล้อม
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 aspect-video bg-white rounded-2xl shadow-md overflow-hidden relative group border border-primary-500/20">
            <div className="absolute inset-0 bg-dark-500/10 group-hover:bg-dark-500/5 transition-colors duration-300"></div>
            <div className="w-full h-full flex flex-col items-center justify-center text-primary-500/50">
               <span className="text-4xl mb-2">📸</span>
               <p>[รอใส่รูปถ่ายรวมกับทีม / ปาร์ตี้]</p>
            </div>
          </div>
          
          <div className="aspect-square bg-white rounded-2xl shadow-md overflow-hidden relative group border border-primary-500/20">
             <div className="absolute inset-0 bg-dark-500/10 group-hover:bg-dark-500/5 transition-colors duration-300"></div>
             <div className="w-full h-full flex flex-col items-center justify-center text-primary-500/50 p-4 text-center">
               <span className="text-4xl mb-2">☕️</span>
               <p>[รอใส่รูปมุมพักผ่อน / โต๊ะทำงาน]</p>
            </div>
          </div>

          <div className="aspect-square bg-white rounded-2xl shadow-md overflow-hidden relative group border border-primary-500/20">
             <div className="absolute inset-0 bg-dark-500/10 group-hover:bg-dark-500/5 transition-colors duration-300"></div>
             <div className="w-full h-full flex flex-col items-center justify-center text-primary-500/50 p-4 text-center">
               <span className="text-4xl mb-2">🎮</span>
               <p>[รอใส่รูปกิจกรรมอื่นๆ]</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 aspect-video bg-dark-500 rounded-2xl shadow-md overflow-hidden p-8 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 rounded-full filter blur-[50px] opacity-20"></div>
            <h3 className="text-2xl font-bold text-white mb-4 z-10">สิ่งที่ประทับใจที่สุด</h3>
            <p className="text-primary-100 text-lg leading-relaxed z-10">
              "[รอเนื้อหา: เล่าถึงความประทับใจ เช่น พี่ๆ สอนงานดีมาก ให้โอกาสทดลองทำอะไรใหม่ๆ หรือความยืดหยุ่นในการทำงาน]"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
