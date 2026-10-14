import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Search, 
  CheckCircle2, 
  Layers, 
  Sparkles
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping helper
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return Code2;
      case 'Server': return Server;
      case 'Database': return Database;
      case 'Wrench': return Wrench;
      case 'Cpu': return Cpu;
      default: return Layers;
    }
  };

  // Flatten or filter skills
  const filteredCategories = skillsCategories
    .filter(cat => selectedCategory === 'all' || cat.id === selectedCategory)
    .map(cat => ({
      ...cat,
      skills: cat.skills.filter(skill => 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(cat => cat.skills.length > 0);

  const totalSkillsCount = skillsCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section 
      id="skills" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
      aria-label="Technical Skills and Technologies"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-violet/10 text-brand-violet border border-brand-violet/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Stack Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Technical Skills &amp; Developer Tooling
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified technical proficiencies spanning modern frontend frameworks, backend runtimes, databases, version control, and collaborative platforms.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl bg-dark-900 border border-slate-800 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-brand-electric text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              All Skills ({totalSkillsCount})
            </button>
            {skillsCategories.map((cat) => {
              const Icon = getCategoryIcon(cat.iconName);
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-electric text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Skill Search for Recruiters */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills (e.g. React, Git)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-dark-900/90 border border-slate-800 focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan text-slate-200 placeholder:text-slate-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => {
            const Icon = getCategoryIcon(category.iconName);
            return (
              <div key={category.id} className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800/80">
                  <div className="p-1.5 rounded-lg bg-slate-800/80 text-brand-cyan">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono ml-auto">
                    {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="glass-panel glass-panel-hover rounded-xl p-4 border border-slate-800/80 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="mb-1.5">
                          <span className="font-heading font-semibold text-white text-sm group-hover:text-brand-cyan transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-normal">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 glass-panel rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs text-brand-cyan hover:underline"
              >
                Reset search filter
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
