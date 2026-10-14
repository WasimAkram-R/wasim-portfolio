import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Send, 
  MapPin, 
  Briefcase, 
  Code2, 
  Sparkles, 
  CheckCircle2,
  Terminal,
  Layers,
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const techPills = [
    { name: "React.js", color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/30" },
    { name: "JavaScript (ES6+)", color: "text-yellow-400 border-yellow-500/30 bg-yellow-950/30" },
    { name: "Tailwind CSS", color: "text-teal-400 border-teal-500/30 bg-teal-950/30" },
    { name: "HTML5 & CSS3", color: "text-orange-400 border-orange-500/30 bg-orange-950/30" },
    { name: "Node.js", color: "text-green-400 border-green-500/30 bg-green-950/30" },
    { name: "Git & GitHub", color: "text-rose-400 border-rose-500/30 bg-rose-950/30" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Introduction & Hero Section"
    >
      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Main Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability & Location Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Available for Software &amp; React Opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/80">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                {personalInfo.location}
              </span>
            </div>

            {/* Candidate Title & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-4">
              Hello, I'm <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Role & Experience Subtitle */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-slate-300 text-base sm:text-lg font-medium mb-5">
              <span className="text-brand-cyan font-semibold">{personalInfo.role}</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-brand-violet font-semibold">{personalInfo.roleSpecialization}</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-emerald-400 font-semibold">MERN Developer</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1 text-slate-400 text-sm">
                <Briefcase className="w-4 h-4 text-brand-blue" />
                {personalInfo.experienceYears} Development Experience
              </span>
            </div>

            {/* Compelling Headline */}
            <p className="font-heading text-lg sm:text-xl font-medium text-slate-200 mb-4 max-w-2xl leading-relaxed">
              "{personalInfo.headline}"
            </p>

            {/* Intro paragraph based on verified experience */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              {personalInfo.shortIntro}
            </p>

            {/* Prominent Actions (Master Prompt Section 4) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              {/* 1. View My Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-brand-electric to-brand-cyan hover:from-blue-600 hover:to-cyan-400 transition-all duration-300 shadow-glow-blue/50 shadow-lg hover:shadow-glow-cyan/50 active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* 2. Download Resume */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-brand-cyan/50 transition-all duration-300 hover:text-white active:scale-95 shadow-sm"
              >
                <Download className="w-4 h-4 text-brand-cyan" />
                <span>Download Resume</span>
              </button>

              {/* 3. Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-800/40 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all active:scale-95"
              >
                <Send className="w-4 h-4 text-brand-violet" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Secondary Link: Explore Technical Skills */}
            <div className="flex items-center justify-center lg:justify-start">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-brand-cyan transition-colors group"
              >
                <Code2 className="w-4 h-4 text-brand-cyan group-hover:rotate-12 transition-transform" />
                <span>Explore Technical Skills &amp; Stack</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Interactive Visual Card / Terminal Preview */}
          <div className="w-full lg:w-5/12 max-w-md">
            <div className="relative">
              {/* Glowing Aura backdrop */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-cyan/20 via-brand-electric/20 to-brand-violet/20 blur-xl opacity-75 animate-pulse-glow" />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-dark-900/90 border border-slate-800 shadow-2xl p-5 sm:p-6 backdrop-blur-xl">
                {/* Code Editor Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>developer.profile.ts</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                    Active
                  </span>
                </div>

                {/* Developer Information Snippet */}
                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <div className="text-slate-400">
                    <span className="text-brand-violet font-semibold">const</span>{' '}
                    <span className="text-brand-cyan">developer</span> = &#123;
                  </div>

                  <div className="pl-4 space-y-1.5 text-slate-300">
                    <div>
                      <span className="text-slate-500">name:</span>{' '}
                      <span className="text-emerald-300">"{personalInfo.name}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-500">role:</span>{' '}
                      <span className="text-emerald-300">"{personalInfo.role}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-500">specialization:</span>{' '}
                      <span className="text-emerald-300">"React.js &amp; MERN Developer"</span>,
                    </div>
                    <div>
                      <span className="text-slate-500">experience:</span>{' '}
                      <span className="text-amber-300">"{personalInfo.experienceYears}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-500">location:</span>{' '}
                      <span className="text-emerald-300">"{personalInfo.location}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-500">status:</span>{' '}
                      <span className="text-emerald-400 font-bold">"Ready to Build"</span>
                    </div>
                  </div>

                  <div className="text-slate-400">&#125;;</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Compact Visual Section: Selected Technologies (Section 4 requirement) */}
        <div className="mt-14 pt-8 border-t border-slate-800/60">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-cyan" />
              Core Technologies &amp; Stack
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {techPills.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-transform duration-200 hover:-translate-y-0.5 ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Down indicator */}
      <a
        href="#about"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 p-2 rounded-full text-slate-500 hover:text-brand-cyan transition-colors animate-bounce"
        aria-label="Scroll down to About section"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
