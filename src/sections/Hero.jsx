import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase , Settings , Users} from 'lucide-react';
import exzyLogo from '../assets/logo exzy.jpg';


const Hero = () => {
  return (
    <section id="hero" className="relative pt-28 pb-32 flex items-center overflow-hidden  bg-white">
      {/* Background decoration */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-dark-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <motion.div
            className="w-full md:w-3/5 text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-600 font-medium text-sm mb-6">
              <Briefcase size={16} className="text-primary-500" />
              <span>IT Support Internship</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-dark-500 mb-6 tracking-tight leading-tight">
              My Internship at <br className="hidden md:block" />
              <span className="text-primary-500">Exzy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-dark-500/80 max-w-xl mb-10 leading-relaxed">
              ผมชื่อ นายธนกร ทิพย์วารีรัตนะ เป็นนักศึกษาฝึกงานด้าน IT Support ที่ Exzy ในช่วงมิถุนายน - กรกฎาคม 2026 ในบทความนี้ ผมจะแชร์ประสบการณ์การฝึกงานของผม รวมถึงหน้าที่ความรับผิดชอบที่ได้รับ ทักษะที่ได้เรียนรู้จากการทำงานจริง
            </p>

            
          </motion.div>

          <motion.div
            className="w-full md:w-2/5 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary-500 rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full border-4 border-primary-500 shadow-xl overflow-hidden flex items-center justify-center relative z-10 transition-transform duration-500 hover:scale-105">
                <img
                  src={exzyLogo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute top-10 -left-6 w-14 h-14 bg-dark-500 rounded-full shadow-lg border-2 border-white flex items-center justify-center z-20 animate-bounce text-white" style={{ animationDuration: '3s' }}>
                <Settings size={20} />
              </div>
              <div className="absolute bottom-10 -right-4 w-16 h-16 bg-primary-500 rounded-full shadow-lg border-2 border-white flex items-center justify-center z-20 animate-bounce text-white" style={{ animationDuration: '4s' }}>
                <Users size={22} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
