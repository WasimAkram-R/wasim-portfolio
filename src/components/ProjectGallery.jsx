import React, { useState } from 'react';
import { Briefcase, Filter, Sparkles, FolderGit2 } from 'lucide-react';
import { projectsData, filterCategories } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectDetailsModal from './ProjectDetailsModal';

export default function ProjectGallery({ onContactAboutProject }) {
  const [selectedFilter, setSelectedFilter] = useState('All Projects');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'All Projects') return true;
    return project.categories.includes(selectedFilter);
  });

  return (
    <section 
      id="projects" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
      aria-label="Featured Projects Gallery"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Production &amp; Application Projects
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Real software applications built with modern React.js, Node.js, WebSockets, REST APIs, and responsive design systems.
          </p>
        </div>

        {/* Filter Navigation (Master Prompt Requirement) */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-dark-900 border border-slate-800 shadow-sm">
            {filterCategories.map((category) => {
              const isActive = selectedFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-electric to-brand-cyan text-white shadow-glow-blue/30 shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>

        {/* Project Details Modal */}
        {activeModalProject && (
          <ProjectDetailsModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}

      </div>
    </section>
  );
}
