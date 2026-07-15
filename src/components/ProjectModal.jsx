import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Reset image index when opening a new project
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
  }, [project]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const images = project?.images || [];
  const hasMultipleImages = images.length > 1;

  const handleNext = (e) => {
    e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return createPortal(
    <AnimatePresence>
      {project && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-dark-500/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-[10000] bg-white/80 backdrop-blur-sm p-2 rounded-full text-dark-500 hover:bg-primary-500 hover:text-white transition-colors shadow-sm"
            >
              <X size={24} />
            </button>

            {/* Image Slider Area */}
            <div className="w-full md:w-3/5 bg-dark-500 relative flex items-center justify-center min-h-[300px] md:min-h-0 overflow-hidden">
              {images.length > 0 ? (
                <>
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.img 
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ x: { type: "tween", ease: "easeInOut", duration: 0.3 }, opacity: { duration: 0.3 } }}
                      src={images[currentIndex]} 
                      alt={`${project.title} - ${currentIndex + 1}`} 
                      className="absolute w-full h-full object-contain object-center"
                    />
                  </AnimatePresence>
                  
                  {/* Navigation Arrows */}
                  {hasMultipleImages && (
                    <>
                      <button 
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all"
                      >
                        <ChevronRight size={24} />
                      </button>
                      
                      {/* Dots Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-dark-500/50 backdrop-blur-md px-4 py-2 rounded-full">
                        {images.map((_, idx) => (
                          <button 
                            key={idx}
                            onClick={() => {
                              setDirection(idx > currentIndex ? 1 : -1);
                              setCurrentIndex(idx);
                            }}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-primary-500 w-6' : 'bg-white/50 hover:bg-white'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-white/50">
                  <ImageIcon size={48} className="mb-4 opacity-50" />
                  <p>ไม่มีรูปภาพ</p>
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="w-full md:w-2/5 p-8 flex flex-col overflow-y-auto custom-scrollbar bg-slate-50">
              <div className="inline-block px-3 py-1 bg-primary-500/10 text-primary-600 text-xs font-bold rounded-full mb-4 w-max border border-primary-500/20">
                Project Details
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-dark-500 mb-6 leading-tight">{project.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags?.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-white text-dark-500/70 text-sm font-medium rounded-md border border-dark-500/10 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-dark-500 mb-2">รายละเอียดงาน</h3>
                <p className="text-base text-dark-500/80 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
