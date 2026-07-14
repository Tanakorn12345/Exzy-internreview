import React from 'react';


import { Maximize2, Image as ImageIcon } from 'lucide-react';

const ProjectCard = ({ title, description, tags, images, onClick }) => {
  const coverImage = images && images.length > 0 ? images[0] : null;
  const imageCount = images ? images.length : 0;

  return (
    <div 
      onClick={onClick}
      className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-xl border border-primary-500/20 group hover:border-primary-500 hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      
      {/* ฝั่งรูปภาพ */}
      <div className="w-full md:w-5/12 relative overflow-hidden bg-slate-100 flex items-center justify-center min-h-[250px]">
        <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-[2px]">
          <div className="bg-white/90 text-primary-600 px-4 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
            <Maximize2 size={18} />
            <span>ดูรูปภาพเพิ่มเติม</span>
          </div>
        </div>
        
        {imageCount > 1 && (
          <div className="absolute top-4 right-4 bg-dark-500/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 flex items-center gap-1.5">
            <ImageIcon size={14} />
            <span>1 / {imageCount}</span>
          </div>
        )}

        {coverImage ? (
          <img 
            src={coverImage} 
            alt={title} 
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-primary-500/40">
             [รอใส่รูปโปรเจกต์]
          </div>
        )}
      </div>

      {/* ฝั่งเนื้อหา */}
      <div className="w-full md:w-7/12 p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-dark-500 mb-4 group-hover:text-primary-600 transition-colors">{title}</h3>
        
        <p className="text-dark-500/70 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-primary-500/10 text-primary-600 text-sm font-medium rounded-md border border-primary-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
