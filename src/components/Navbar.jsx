import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background elevation on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-glass py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg p-1"
            aria-label="Wasim Akram R - Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-electric to-brand-cyan p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-bold text-lg bg-gradient-to-r from-brand-cyan to-brand-violet bg-clip-text text-transparent">
                  W
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-slate-100 text-base sm:text-lg tracking-tight group-hover:text-brand-cyan transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-slate-400 hidden sm:block tracking-wide">
                Junior Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan ${
                    isActive
                      ? 'text-brand-cyan font-semibold hover:text-cyan-300 hover:bg-slate-800/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 hover:border-slate-500/80 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg text-white bg-gradient-to-r from-brand-electric to-brand-cyan hover:from-blue-600 hover:to-cyan-400 transition-all duration-200 shadow-glow-blue/40 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6 text-brand-cyan" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Portaled to document.body so it is completely opaque and never mixes with page UI) */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[99999] md:hidden">
          {/* Solid dark overlay */}
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Solid Opaque Drawer */}
          <div
            className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-[#0b0f17] border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-electric to-brand-cyan flex items-center justify-center font-heading font-bold text-white text-sm">
                    W
                  </div>
                  <span className="font-heading font-bold text-slate-100 text-sm">
                    Wasim Akram R
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 focus:outline-none"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2" aria-label="Mobile Navigation">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-brand-electric/20 text-brand-cyan font-semibold border border-brand-cyan/30'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <FileText className="w-4 h-4 text-brand-cyan" />
                <span>Download Resume</span>
              </button>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-brand-electric to-brand-cyan shadow-glow-blue/30 shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
