import React from 'react';

const ProjectCard = ({ imageSrc, title, description, tags }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-slate-50 rounded-3xl p-8 border border-slate-100 mb-8">
      <div className="w-full md:w-1/3 aspect-video bg-slate-200 rounded-xl flex items-center justify-center overflow-hidden relative">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-slate-400">รูปภาพโปรเจกต์</span>
        )}
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-4 whitespace-pre-line">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags && tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
