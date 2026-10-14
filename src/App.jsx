import React, { useState } from 'react';
import BackgroundGlow from './components/BackgroundGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import Skills from './components/Skills';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  const handleContactAboutProject = (projectTitle) => {
    setContactSubject(projectTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 relative selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Background ambient lighting and reactive mouse glow */}
      <BackgroundGlow />

      {/* Main Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Page Content Landmark */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <ExperienceTimeline />
        <Skills />
        <ProjectGallery onContactAboutProject={handleContactAboutProject} />
        <Contact defaultSubject={contactSubject} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Interactive Resume View / Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
