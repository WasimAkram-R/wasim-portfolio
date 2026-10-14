import React from 'react';
import { 
  User, 
  Code2, 
  Users2, 
  Bug, 
  Gauge, 
  CheckCircle, 
  Sparkles 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Code2,
      title: "Modular UI & Components",
      desc: "Architecting clean, reusable React components, custom hooks, and scalable layouts that maintain design consistency across screens.",
      color: "text-brand-cyan bg-cyan-950/40 border-cyan-800/40"
    },
    {
      icon: Users2,
      title: "Teamwork & Collaboration",
      desc: "Actively collaborating with developers and team leads in agile sprints, participating in code reviews, and meeting project milestones.",
      color: "text-brand-violet bg-violet-950/40 border-violet-800/40"
    },
    {
      icon: Bug,
      title: "Testing & Debugging",
      desc: "Systematic root-cause debugging, cross-browser validation, layout verification, and edge-case testing to ensure flawless UX.",
      color: "text-amber-400 bg-amber-950/40 border-amber-800/40"
    },
    {
      icon: Gauge,
      title: "Responsive Performance",
      desc: "Building mobile-first layouts, eliminating layout shifts, optimizing assets, and structuring fast REST API data flows.",
      color: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40"
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-20"
      aria-label="About Wasim Akram R"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Professional Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            About My Journey &amp; Engineering Philosophy
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A developer who bridges technical precision with modern user interfaces to create reliable, engaging software solutions.
          </p>
        </div>

        {/* Narrative & Philosophy Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Narrative Story Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-7 sm:p-9 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <h3 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
                <span>Passionate Junior Software Developer</span>
                <Sparkles className="w-5 h-5 text-brand-cyan" />
              </h3>

              <p>
                My journey in technology started with a curious mind at <strong className="text-slate-100">Anna University – BIT Campus</strong>, where I earned my B.Tech in Information Technology with a 77.8% academic record. I quickly discovered my passion for building dynamic, user-centered web applications.
              </p>

              <p>
                At <strong className="text-slate-100">TechSmew Innovations Pvt Ltd</strong>, I honed my practical skills as a React.js Developer Intern and subsequently transitioned to a Junior Software Developer role. Throughout my tenure, I developed core application modules, reusable UI components, responsive layouts, forms, and analytical dashboards.
              </p>

              <p>
                I thrive in collaborative environments where I can communicate with development teams, participate in active code reviews, diagnose and resolve frontend bugs, and enhance application usability for end-users.
              </p>
            </div>

            {/* Quick summary points */}
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>1+ Year Development Experience</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>React.js &amp; Modern JS</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>REST API Integration</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Agile Sprint &amp; Git Collaboration</span>
              </div>
            </div>
          </div>

          {/* 4 Professional Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={i} 
                  className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800/80 flex items-start gap-4"
                >
                  <div className={`p-2.5 rounded-xl border shrink-0 ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-white text-sm sm:text-base mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
