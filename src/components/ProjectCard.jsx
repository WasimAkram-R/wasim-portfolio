import React from 'react';
import { ExternalLink, Github, ArrowUpRight, Info, Layers } from 'lucide-react';
import ProjectMockup from './ProjectMockup';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <div className="group relative rounded-2xl bg-dark-900/80 border border-slate-800/90 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl">
      {/* Top subtle glow on hover */}
      <div 
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`}
      />

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Custom Visual Mockup */}
        <div className="mb-5 relative rounded-xl overflow-hidden shadow-inner">
          <ProjectMockup type={project.mockupType} title={project.title} />
        </div>

        {/* Category & Badge Header */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-brand-cyan">
            {project.category}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {project.badge}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors line-clamp-1 mb-1">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs font-medium text-slate-400 mb-3 line-clamp-1">
          {project.subtitle}
        </p>

        {/* Project Description */}
        <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-5 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-950/70 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-800 text-slate-400">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="px-5 sm:px-6 py-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelectProject(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan hover:text-white transition-colors group/btn focus:outline-none"
        >
          <span>Explore Architecture &amp; Details</span>
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.links.liveDemo && (
            <a
              href={project.links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-cyan/15 text-brand-cyan hover:bg-brand-cyan/25 border border-brand-cyan/30 text-xs font-semibold transition-all hover:scale-105"
              title="Live Demo"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
