import React from 'react';
import { Heart, Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-dark-950/90 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-brand-electric to-brand-cyan flex items-center justify-center font-heading font-bold text-white text-xs">
              W
            </div>
            <span className="font-heading font-bold text-white text-base tracking-tight">
              {personalInfo.name}
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Junior Software Developer | React.js Developer | MERN Developer
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            Based in {personalInfo.location}
          </p>
        </div>

        {/* Navigation Quick Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400" aria-label="Footer Navigation">
          <a href="#about" className="hover:text-brand-cyan transition-colors">About</a>
          <a href="#experience" className="hover:text-brand-cyan transition-colors">Experience</a>
          <a href="#skills" className="hover:text-brand-cyan transition-colors">Skills</a>
          <a href="#projects" className="hover:text-brand-cyan transition-colors">Projects</a>
          <button onClick={onOpenResume} className="hover:text-brand-cyan transition-colors">Resume</button>
          <a href="#contact" className="hover:text-brand-cyan transition-colors">Contact</a>
        </nav>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.links.email}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-slate-500 text-center md:text-right">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
