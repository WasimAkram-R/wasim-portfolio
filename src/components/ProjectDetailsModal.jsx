import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ShieldCheck
} from 'lucide-react';
import ProjectMockup from './ProjectMockup';

export default function ProjectDetailsModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll while modal is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Dark Backdrop that covers the full viewport including navbar */}
      <div 
        className="fixed inset-0 bg-dark-950/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[82vh] flex flex-col rounded-3xl bg-[#0b0f17] border border-slate-700 shadow-2xl overflow-hidden z-10 my-auto text-left">
        {/* Top Gradient Stripe */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${project.accentColor} shrink-0`} />

        {/* Modal Header */}
        <div className="p-5 sm:p-7 pb-4 flex items-start justify-between gap-4 border-b border-slate-800 shrink-0 bg-[#0b0f17]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs uppercase font-mono tracking-wider text-brand-cyan">
                {project.category}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {project.badge}
              </span>
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-heading font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 bg-[#0b0f17]">
          {/* Visual Showcase */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-md">
            <ProjectMockup type={project.mockupType} title={project.title} />
          </div>

          {/* Deep-dive Architecture Overview */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              Project Architecture &amp; Implementation
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800/80">
            <h3 className="text-sm font-heading font-semibold text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Key Technical Deliverables
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {project.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-cyan" />
              Complete Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-800/90 text-slate-200 border border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
