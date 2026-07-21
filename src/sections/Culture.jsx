import React, { useState } from 'react';
import CultureModal from '../components/CultureModal';
import eatingImg from '../assets/insideoffice-heic.jpg';
import minewImg from '../assets/minew with.jpg';
import eating1Img from '../assets/eating.jpg';

const Culture = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const cultureData = [
    {
      id: 1,
      src: eatingImg,
      title: "การทำงานในออฟฟิศ",
      description: "อันนี้จะเป็นบรรยากาศการทำงานภายในออฟฟิศครับ โดยเราจะมีการ Stand-up Meeting กันในทุกเช้าช่วง 10 โมงครับ เพื่อจะเป็นการอัพเดทงานว่าวันนี้เราจะทำอะไรบ้าง ทำอะไรสำเร็จแล้วบ้าง และยังแลกเปลี่ยนความเห็นกันด้วย ซึ่งทำให้เรากับพี่ๆในทีมได้รับรู้ว่าใครทำอะไรในส่วนไหนครับ ซึ่งระหว่างวันก็จะมีช่วงที่จริงจังกับงานบ้างหรือช่วงพูดคุยเพื่อผ่อนคลายกันครับ ทำให้รู้สึกสบายใจและเป็นกันเองมากครับ",
      gridClass: "col-span-1 md:col-span-2"
    },
    {
      id: 2,
      src: minewImg,
      title: "ได้ดูระบบการจัดการ Minew",
      description: "อันนี้เป็นส่วนหนึ่งที่พี่เลี้ยงให้ศึกษาครับ เกี่ยวกับการทำงานของระบบ Minew และ Gateway ซึ่งเป็นส่วนหนึ่งของระบบ Co-Desk โดยช่วยตรวจสอบการรับส่งข้อมูล (Traffic) ระหว่างการทดสอบระบบ และจัดทำเอกสารการตั้งค่าพื้นฐานลงใน Obsidian เพื่อใช้เป็นข้อมูลอ้างอิงภายในองค์กร",
      gridClass: "col-span-1 md:col-span-1"
    },
    {
      id: 3,
      src: eating1Img,
      title: "พี่ๆในทีมเลี้ยงส่งสำหรับคนฝึกงานจบ",
      description: "อีกหนึ่งสิ่งที่ผมประทับใจคือ เมื่อสิ้นสุดการฝึกงาน พี่ ๆ ในทีมจะพาไปเลี้ยงส่งกินข้าวกัน 1 มื้อครับ ถือเป็นธรรมเนียมที่อบอุ่นของบริษัท ทำให้ผมรู้สึกได้รับการต้อนรับและเป็นส่วนหนึ่งของทีมตั้งแต่วันแรกจนถึงวันสุดท้ายของการฝึกงานเลยครับ",
      gridClass: "col-span-1 md:col-span-1"
    }
  ];

  const openModal = (index) => {
    setInitialSlide(index);
    setIsModalOpen(true);
  };
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
          {cultureData.map((item, index) => (
            <div 
              key={item.id} 
              onClick={() => openModal(index)}
              className={`${item.gridClass} h-full bg-white rounded-2xl shadow-md overflow-hidden relative group border border-primary-500/20 cursor-pointer`}
            >
              {/* Gradient overlay and Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent z-10 flex flex-col justify-end p-5 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-xl drop-shadow-md mb-1">{item.title}</h3>
                  <p className="text-primary-50 text-sm drop-shadow-md line-clamp-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
              
              <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}

          <div className="col-span-1 md:col-span-2 h-full bg-dark-500 rounded-2xl shadow-md overflow-hidden p-8 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 rounded-full filter blur-[50px] opacity-20"></div>
            <h3 className="text-2xl font-bold text-white mb-4 z-10">สิ่งที่ประทับใจ</h3>
            <p className="text-primary-100 text-base leading-relaxed z-10 overflow-y-auto pr-2 custom-scrollbar">
             ผมรู้สึกประทับใจในวันแรกที่เข้ามาฝึกครับ พี่ๆให้การต้อนรับอย่างดี พาแนะนำในส่วนต่างๆของออฟฟิศ ทำให้เราเข้าใจบริบทของ Exzy มากขึ้น เวลาทำสิ่งใหม่ๆก็จะมีการแนะนำตลอด ทำให้พร้อมที่เจอสิ่งใหม่ๆหรือปัญหาใหม่ที่เกิดขึ้น มีความเป็นกันเองคอยช่วยเหลืออยู่ตลอด ทำให้เราได้พัฒนาในด้านสกิลต่างๆและประสบการณ์การทำงานที่สามารถเอาไปต่อยอดในอนาคตได้จริงเลยครับ 
            </p>
          </div>
        </div>
        <CultureModal 
          items={cultureData}
          initialIndex={initialSlide}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default Culture;
