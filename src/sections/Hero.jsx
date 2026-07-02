import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-20 pb-32 flex items-center overflow-hidden min-h-[80vh]">
      {/* Background decoration */}
      <div className="absolute top-0 w-full h-full bg-gradient-to-br from-primary-50 to-white -z-10" />
      <div className="absolute top-20 -right-20 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content - Left Aligned */}
          <motion.div
            className="w-full md:w-3/5 text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-600 font-medium text-sm mb-3">
              <Briefcase size={16} />
              <span>IT Support Internship</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              My Journey at <br className="hidden md:block" />
              <span className="text-primary-600">Exzy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed">
              [เพิ่มคำโปรยสั้นๆ ของคุณที่นี่ เช่น "ประสบการณ์ 4 เดือนกับการเรียนรู้การแก้ปัญหาไอทีในโลกการทำงานจริงกับทีมงานระดับมืออาชีพ"]
            </p>
          </motion.div>

          {/* Profile Image - Right Aligned on Desktop */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* รูปโปรไฟล์ */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-200 rounded-full border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center relative z-10">
                <span className="text-slate-400 text-lg font-medium">รูปโปรไฟล์ของคุณ</span>
                {/* <img src="/assets/profile.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
              </div>
              
              {/* Elements ตกแต่งรอบรูป */}
              <div className="absolute top-10 -left-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-xl">💻</span>
              </div>
              <div className="absolute bottom-10 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="text-2xl">⚙️</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
