import React from 'react';


const ProjectCard = ({ title, description, tags, imageSrc }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-xl border border-primary-500/20 group hover:border-primary-500 transition-all duration-300">
      
      {/* ฝั่งรูปภาพ */}
      <div className="w-full md:w-5/12 relative overflow-hidden bg-primary-500/5 aspect-video md:aspect-auto">
        <div className="absolute inset-0 bg-primary-500/10 group-hover:opacity-0 transition-opacity duration-300"></div>
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
