import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  ExternalLink,
  MessageSquare,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ defaultSubject = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: defaultSubject || '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState(null);

  // Update subject if passed from project modal
  React.useEffect(() => {
    if (defaultSubject) {
      setFormData(prev => ({ ...prev, subject: `Inquiry regarding ${defaultSubject}` }));
    }
  }, [defaultSubject]);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) errors.subject = 'Please provide a subject line';
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitFeedback(null);

    // Prepare mailto link with encoded subject and message
    const mailtoSubject = encodeURIComponent(formData.subject);
    const mailtoBody = encodeURIComponent(
      `Hi Wasim,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      // Open the mail client with prefilled content
      window.open(mailtoUrl, '_blank');
      setSubmitFeedback({
        type: 'success',
        message: 'Your email client has been launched with your message pre-filled. You can also contact directly at wasim90422@gmail.com!'
      });
    }, 600);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
      aria-label="Contact Wasim Akram R"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in hiring for a Junior Software Developer or React.js Developer or MERN Developer role? Feel free to reach out directly via email, phone, or the contact form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Verified Contact Information (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <span>Contact Details</span>
                <Sparkles className="w-4 h-4 text-brand-cyan" />
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-dark-900/90 border border-slate-800 flex items-start justify-between gap-3 group">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                    <a 
                      href={personalInfo.links.email}
                      className="text-sm font-semibold text-white hover:text-brand-cyan transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-dark-900/90 border border-slate-800 flex items-start justify-between gap-3 group">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-electric/10 text-brand-electric border border-brand-electric/20 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Phone &amp; WhatsApp</div>
                    <a 
                      href={personalInfo.links.phone}
                      className="text-sm font-semibold text-white hover:text-brand-electric transition-colors"
                    >
                      {personalInfo.phoneFormatted}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-dark-900/90 border border-slate-800 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-brand-violet/10 text-brand-violet border border-brand-violet/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Open to on-site, hybrid, and remote opportunities
                  </div>
                </div>
              </div>

              {/* Social Profiles / Professional Networks */}
              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Professional Profiles
                </div>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-brand-cyan/40 text-xs font-medium text-slate-200 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-brand-cyan/40 text-xs font-medium text-slate-200 transition-all"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-slate-800">
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to stage a message or send an interview / project enquiry directly.
              </p>

              {submitFeedback && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{submitFeedback.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: null });
                      }}
                      placeholder="Wasim Akram"
                      className={`w-full px-4 py-2.5 rounded-xl bg-dark-900/90 border text-slate-200 text-sm focus:outline-none transition-colors ${
                        formErrors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-brand-cyan'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: null });
                      }}
                      placeholder="codewithwasim@gmail.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-dark-900/90 border text-slate-200 text-sm focus:outline-none transition-colors ${
                        formErrors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-brand-cyan'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (formErrors.subject) setFormErrors({ ...formErrors, subject: null });
                    }}
                    placeholder="e.g. Junior React Developer Opportunity"
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-900/90 border text-slate-200 text-sm focus:outline-none transition-colors ${
                      formErrors.subject ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-brand-cyan'
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: null });
                    }}
                    placeholder="Describe your role requirements or project details..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-900/90 border text-slate-200 text-sm focus:outline-none transition-colors ${
                      formErrors.message ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-brand-cyan'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-electric to-brand-cyan hover:from-blue-600 hover:to-cyan-400 transition-all duration-300 shadow-glow-blue/40 shadow-md active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Preparing Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
