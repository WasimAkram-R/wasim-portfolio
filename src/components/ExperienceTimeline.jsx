import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Award,
  ChevronRight
} from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section 
      id="experience" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-20"
      aria-label="Experience & Education Timeline"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Experience &amp; Education Timeline
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A chronological overview of my professional development roles and academic foundation.
          </p>
        </div>

        {/* Category Toggle Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-dark-900 border border-slate-800 shadow-inner">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-brand-electric to-brand-cyan text-white shadow-glow-blue/30 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience (1+ Year)</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-brand-electric to-brand-cyan text-white shadow-glow-blue/30 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education (B.Tech 77.8%)</span>
            </button>
          </div>
        </div>

        {/* Experience Tab Content */}
        {activeTab === 'experience' && (
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10 max-w-4xl mx-auto">
            {experienceData.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Indicator Dot */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-125 duration-300 ${
                    exp.current
                      ? 'bg-brand-cyan/20 border-2 border-brand-cyan shadow-glow-cyan/50'
                      : 'bg-slate-800 border-2 border-slate-700'
                  }`}
                >
                  <div 
                    className={`w-2 h-2 rounded-full ${
                      exp.current ? 'bg-brand-cyan animate-ping' : 'bg-slate-400'
                    }`} 
                  />
                </div>

                {/* Card Container */}
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-slate-800/80 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-brand-cyan/90 flex items-center gap-2 mt-0.5">
                        <span>{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <ul className="mt-4 space-y-2.5 text-slate-300 text-xs sm:text-sm">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <ChevronRight className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800 hover:border-brand-cyan/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab Content */}
        {activeTab === 'education' && (
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10 max-w-4xl mx-auto">
            {educationData.map((edu) => (
              <div key={edu.id} className="relative group">
                {/* Timeline Indicator Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-brand-violet/20 border-2 border-brand-violet flex items-center justify-center transition-transform group-hover:scale-125 duration-300 shadow-glow-violet/40">
                  <div className="w-2 h-2 rounded-full bg-brand-violet" />
                </div>

                {/* Card Container */}
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-slate-800/80 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-violet transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-medium text-brand-violet/90 flex items-center gap-2 mt-0.5">
                        <span>{edu.institution}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-violet/20 text-brand-violet border border-brand-violet/30">
                        <Award className="w-3.5 h-3.5" />
                        Score: {edu.grade}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-slate-900/80 px-3 py-1 rounded-lg border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm">
                    {edu.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <ChevronRight className="w-4 h-4 text-brand-violet shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
