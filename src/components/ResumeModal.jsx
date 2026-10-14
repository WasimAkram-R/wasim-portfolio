import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { jsPDF } from 'jspdf';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { personalInfo, experienceData, educationData, skillsCategories, projectsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const printRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4'
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 40;
      const contentWidth = pageWidth - margin * 2;
      let y = 45;

      const checkPageBreak = (neededHeight) => {
        if (y + neededHeight > pageHeight - 40) {
          doc.addPage();
          y = 40;
        }
      };

      // Header
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(20, 30, 45);
      doc.text(personalInfo.name.toUpperCase(), margin, y);
      y += 20;

      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(6, 140, 170);
      doc.text('Junior Software Developer | React.js Developer | MERN Developer', margin, y);
      y += 16;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(75, 85, 99);
      const contactText = `Location: ${personalInfo.location}  |  Email: ${personalInfo.email}  |  Phone: ${personalInfo.phoneFormatted}`;
      doc.text(contactText, margin, y);
      y += 12;

      const linksText = `LinkedIn: linkedin.com/in/wasim-akram-b6b74822a  |  GitHub: github.com/WasimAkram-R`;
      doc.text(linksText, margin, y);
      y += 14;

      // Divider line
      doc.setDrawColor(200, 210, 220);
      doc.setLineWidth(1);
      doc.line(margin, y, pageWidth - margin, y);
      y += 18;

      // Section: Summary
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(6, 140, 170);
      doc.text('PROFESSIONAL SUMMARY', margin, y);
      y += 14;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(50, 50, 50);
      const bioLines = doc.splitTextToSize(personalInfo.bio, contentWidth);
      doc.text(bioLines, margin, y);
      y += bioLines.length * 12 + 12;

      // Section: Work Experience
      checkPageBreak(50);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(6, 140, 170);
      doc.text('WORK EXPERIENCE (1+ Year)', margin, y);
      y += 14;

      experienceData.forEach((exp) => {
        checkPageBreak(45);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(20, 20, 20);
        doc.text(`${exp.role} - ${exp.company}`, margin, y);
        
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8.5);
        doc.setTextColor(100, 100, 100);
        doc.text(exp.period, pageWidth - margin - doc.getTextWidth(exp.period), y);
        y += 12;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(55, 65, 81);
        exp.highlights.forEach((h) => {
          const hLines = doc.splitTextToSize(`• ${h}`, contentWidth - 10);
          checkPageBreak(hLines.length * 11);
          doc.text(hLines, margin + 5, y);
          y += hLines.length * 11 + 2;
        });

        const techStr = `Technologies: ${exp.technologies.join(', ')}`;
        const techLines = doc.splitTextToSize(techStr, contentWidth - 10);
        checkPageBreak(techLines.length * 11);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(80, 80, 80);
        doc.text(techLines, margin + 5, y);
        y += techLines.length * 11 + 8;
      });

      // Section: Education
      checkPageBreak(45);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(6, 140, 170);
      doc.text('EDUCATION', margin, y);
      y += 14;

      educationData.forEach((edu) => {
        checkPageBreak(35);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(20, 20, 20);
        doc.text(`${edu.degree} - ${edu.institution}`, margin, y);

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8.5);
        doc.setTextColor(100, 100, 100);
        const gradeStr = `${edu.period} | Score: ${edu.grade}`;
        doc.text(gradeStr, pageWidth - margin - doc.getTextWidth(gradeStr), y);
        y += 12;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(55, 65, 81);
        edu.highlights.forEach((h) => {
          const hLines = doc.splitTextToSize(`• ${h}`, contentWidth - 10);
          checkPageBreak(hLines.length * 11);
          doc.text(hLines, margin + 5, y);
          y += hLines.length * 11 + 2;
        });
        y += 6;
      });

      // Section: Technical Skills
      checkPageBreak(45);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(6, 140, 170);
      doc.text('TECHNICAL SKILLS', margin, y);
      y += 14;

      skillsCategories.forEach((cat) => {
        checkPageBreak(20);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(40, 40, 40);
        const catSkills = `${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`;
        const catLines = doc.splitTextToSize(catSkills, contentWidth);
        doc.text(catLines, margin, y);
        y += catLines.length * 11 + 3;
      });
      y += 6;

      // Section: Featured Projects
      checkPageBreak(45);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(6, 140, 170);
      doc.text('FEATURED PROJECTS', margin, y);
      y += 14;

      projectsData.forEach((proj) => {
        checkPageBreak(40);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(20, 20, 20);
        doc.text(`${proj.title} [${proj.category}]`, margin, y);
        y += 11;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(55, 65, 81);
        const descLines = doc.splitTextToSize(proj.description, contentWidth);
        doc.text(descLines, margin, y);
        y += descLines.length * 10 + 2;

        const techLines = doc.splitTextToSize(`Tech: ${proj.technologies.join(', ')}`, contentWidth);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(90, 90, 90);
        doc.text(techLines, margin, y);
        y += techLines.length * 10 + 6;
      });

      doc.save('Wasim_Akram_R_Resume.pdf');
    } catch (err) {
      console.error('PDF generation error, fallback to print:', err);
      window.print();
    }
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-dark-950/90 backdrop-blur-md transition-opacity no-print"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#0b0f17] border border-slate-700 shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[85vh]">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 bg-dark-950/90 border-b border-slate-800 flex items-center justify-between gap-4 no-print shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-cyan" />
            <h2 id="resume-modal-title" className="font-heading font-bold text-white text-base sm:text-lg">
              Curriculum Vitae — {personalInfo.name}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              title="Print or Save as PDF via browser"
            >
              <Printer className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="hidden sm:inline">Print Preview</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-brand-electric to-brand-cyan hover:from-blue-600 hover:to-cyan-400 transition-all shadow-sm"
              title="Download official PDF resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div 
          ref={printRef}
          className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0b0f17] text-slate-100 print:bg-white print:text-black print:p-0 flex-1"
        >
          {/* Candidate Header */}
          <div className="border-b border-slate-800 print:border-black/20 pb-6">
            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white print:text-black">
              {personalInfo.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-brand-cyan print:text-black mt-1">
              Junior Software Developer | React.js Developer | MERN Developer
            </p>

            <div className="mt-3 flex flex-wrap gap-y-1 gap-x-4 text-xs text-slate-400 print:text-black">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-400" />
                <a href={personalInfo.links.email} className="hover:underline">{personalInfo.email}</a>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-slate-400" />
                <a href={personalInfo.links.phone} className="hover:underline">{personalInfo.phoneFormatted}</a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-cyan print:text-black mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-black leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-cyan print:text-black mb-4">
              Work Experience
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div key={exp.id} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-heading font-bold text-white print:text-black">
                      {exp.role} — <span className="font-normal text-slate-300 print:text-black">{exp.company}</span>
                    </span>
                    <span className="text-slate-400 print:text-black text-xs font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc pl-4 mt-2 space-y-1 text-slate-300 print:text-black text-xs">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-cyan print:text-black mb-3">
              Education
            </h2>
            {educationData.map((edu) => (
              <div key={edu.id} className="text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-heading font-bold text-white print:text-black">
                    {edu.degree} — <span className="font-normal text-slate-300 print:text-black">{edu.institution}</span>
                  </span>
                  <span className="text-slate-400 print:text-black text-xs font-mono">
                    {edu.period} | Score: {edu.grade}
                  </span>
                </div>
                <p className="text-xs text-slate-400 print:text-black mt-1">
                  {edu.location}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-cyan print:text-black mb-3">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillsCategories.map((cat) => (
                <div key={cat.id} className="bg-slate-900/60 print:bg-transparent p-2.5 rounded-lg border border-slate-800 print:border-black/10">
                  <span className="font-semibold text-slate-200 print:text-black block mb-1">
                    {cat.title}
                  </span>
                  <p className="text-slate-400 print:text-black text-[11px]">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-cyan print:text-black mb-3">
              Key Projects
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              {projectsData.map((proj) => (
                <div key={proj.id} className="border-l-2 border-slate-800 print:border-black/30 pl-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white print:text-black">{proj.title}</span>
                    <span className="text-[11px] font-mono text-brand-cyan print:text-black">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-black mt-1">
                    {proj.description}
                  </p>
                  <p className="text-[11px] text-slate-500 print:text-black mt-1">
                    <strong>Tech:</strong> {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-dark-950 border-t border-slate-800 text-center no-print shrink-0">
          <span className="text-xs text-slate-400">
            Click <strong className="text-slate-200">Download PDF</strong> to save an official PDF resume document directly to your device.
          </span>
        </div>
      </div>
    </div>,
    document.body
  );
}
