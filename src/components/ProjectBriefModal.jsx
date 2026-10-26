import React, { useState } from 'react';
import {
  X,
  Send,
  UploadCloud,
  CheckCircle2,
  Calendar,
  Sparkles,
  Link as LinkIcon,
  Phone,
  Mail,
  User,
  Layers,
  DollarSign
} from 'lucide-react';

export default function ProjectBriefModal({ isOpen, onClose, isDark }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectTypes: ['Web Platform'],
    budget: '$5k - $10k',
    timeline: '1 Month',
    description: '',
    referenceLink: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const serviceOptions = [
    'Web Platform',
    'UI/UX Design',
    'E-Commerce',
    'AI & RAG Systems',
    'Full-Stack App',
    'Data Analytics'
  ];

  const budgetOptions = ['$3k - $5k', '$5k - $10k', '$10k - $25k', '$25k+'];
  const timelineOptions = ['< 2 Weeks', '1 Month', '2-3 Months', 'Flexible'];

  const toggleService = (srv) => {
    setFormData((prev) => {
      const exists = prev.projectTypes.includes(srv);
      if (exists) {
        if (prev.projectTypes.length === 1) return prev;
        return { ...prev, projectTypes: prev.projectTypes.filter((s) => s !== srv) };
      }
      return { ...prev, projectTypes: [...prev.projectTypes, srv] };
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, fileName: file.name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`New Project Brief: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nServices: ${formData.projectTypes.join(', ')}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nBrief: ${formData.description}\nLink: ${formData.referenceLink}`
    );
    window.location.href = `mailto:anashamdan3874@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-xl animate-fade-in"
    >
      <div
        data-lenis-prevent
        className={`relative w-full max-w-4xl rounded-[28px] p-6 sm:p-8 border shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden transition-all ${
          isDark
            ? 'bg-[#0b0c10]/95 border-purple-500/25 text-zinc-100 shadow-purple-950/30'
            : 'bg-white/95 border-zinc-200 text-zinc-900 shadow-zinc-400/20'
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full border border-zinc-700/60 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer z-10"
          aria-label="Close project brief"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          /* Confirmation Screen */
          <div className="py-12 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-purple-600/20 border border-purple-500/40 text-purple-400 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight">Project Brief Received</h3>
            <p className={`text-xs sm:text-sm max-w-md mx-auto leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Thank you, <span className="font-semibold text-purple-400">{formData.name}</span>. We've logged your project scope and will follow up within 24 hours.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-7 py-2.5 rounded-full text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Non-Scrolling Compact 2-Column Split Form */
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Header Bar */}
            <div className="flex items-center justify-between pr-8 border-b border-zinc-800/60 pb-3">
              <div>
                <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold">
                  <Sparkles className="w-3 h-3" />
                  <span>Client Intake · Studio by Anas Shariff</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight uppercase leading-none mt-1">
                  Start Your Project
                </h2>
              </div>
              <span className="hidden sm:inline-block text-[10px] font-mono text-zinc-400 bg-purple-950/40 border border-purple-800/40 px-2.5 py-1 rounded-full">
                24h Response
              </span>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
              {/* Left Column: Contact & Services */}
              <div className="space-y-4">
                {/* Contact Inputs */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold flex items-center space-x-1.5">
                    <User className="w-3 h-3 text-purple-400" />
                    <span>Contact Information</span>
                  </span>

                  <div className="space-y-2">
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-medium border focus:outline-none focus:border-purple-500 transition-all ${
                        isDark ? 'bg-zinc-900/70 border-zinc-800 text-white placeholder-zinc-500' : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400'
                      }`}
                    />

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-medium border focus:outline-none focus:border-purple-500 transition-all ${
                          isDark ? 'bg-zinc-900/70 border-zinc-800 text-white placeholder-zinc-500' : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400'
                        }`}
                      />

                      <input
                        type="tel"
                        placeholder="Phone / WhatsApp"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-medium border focus:outline-none focus:border-purple-500 transition-all ${
                          isDark ? 'bg-zinc-900/70 border-zinc-800 text-white placeholder-zinc-500' : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Project Types Selection */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold flex items-center space-x-1.5">
                    <Layers className="w-3 h-3 text-purple-400" />
                    <span>Service Scope (Multi-Select)</span>
                  </span>

                  <div className="grid grid-cols-2 gap-1.5">
                    {serviceOptions.map((srv) => {
                      const selected = formData.projectTypes.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`px-3 py-2 rounded-xl text-[11px] font-medium border text-left truncate transition-all cursor-pointer ${
                            selected
                              ? 'bg-purple-600 text-white border-purple-500 font-semibold shadow-sm'
                              : isDark
                                ? 'bg-zinc-900/40 border-zinc-800/80 text-zinc-300 hover:border-zinc-700'
                                : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-300'
                          }`}
                        >
                          {selected ? '✓ ' : '+ '}
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Reference Link / File Upload in Left Column */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold flex items-center space-x-1.5">
                    <LinkIcon className="w-3 h-3 text-purple-400" />
                    <span>Reference / Figma Link (Optional)</span>
                  </span>
                  <input
                    type="url"
                    placeholder="https://figma.com/... or notion.so/..."
                    value={formData.referenceLink}
                    onChange={(e) => setFormData({ ...formData, referenceLink: e.target.value })}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs font-medium border focus:outline-none focus:border-purple-500 transition-all ${
                      isDark ? 'bg-zinc-900/70 border-zinc-800 text-white placeholder-zinc-500' : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400'
                    }`}
                  />
                </div>
              </div>

              {/* Right Column: Budget, Timeline, Scope & Submit */}
              <div className="space-y-4">
                {/* Budget Selection */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold flex items-center space-x-1.5">
                    <DollarSign className="w-3 h-3 text-purple-400" />
                    <span>Estimated Budget</span>
                  </span>

                  <div className="grid grid-cols-4 gap-1.5">
                    {budgetOptions.map((bgt) => {
                      const selected = formData.budget === bgt;
                      return (
                        <button
                          type="button"
                          key={bgt}
                          onClick={() => setFormData({ ...formData, budget: bgt })}
                          className={`py-2 px-1 text-center rounded-xl text-[11px] font-semibold border transition-all cursor-pointer ${
                            selected
                              ? 'bg-purple-600 text-white border-purple-500'
                              : isDark
                                ? 'bg-zinc-900/40 border-zinc-800 text-zinc-400'
                                : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                          }`}
                        >
                          {bgt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Timeline Selection */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold flex items-center space-x-1.5">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    <span>Target Delivery</span>
                  </span>

                  <div className="grid grid-cols-4 gap-1.5">
                    {timelineOptions.map((tm) => {
                      const selected = formData.timeline === tm;
                      return (
                        <button
                          type="button"
                          key={tm}
                          onClick={() => setFormData({ ...formData, timeline: tm })}
                          className={`py-2 px-1 text-center rounded-xl text-[11px] font-medium border transition-all cursor-pointer ${
                            selected
                              ? 'bg-purple-600/25 border-purple-500 text-purple-300 font-bold'
                              : isDark
                                ? 'bg-zinc-900/40 border-zinc-800 text-zinc-400'
                                : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                          }`}
                        >
                          {tm}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Brief Scope Description */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">
                    Project Vision & Goals *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Key deliverables, core challenges, or current benchmarks you want to elevate..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className={`w-full p-3 rounded-xl text-xs font-medium border focus:outline-none focus:border-purple-500 transition-all resize-none ${
                      isDark ? 'bg-zinc-900/70 border-zinc-800 text-white placeholder-zinc-500' : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400'
                    }`}
                  />
                </div>

                {/* Bottom Submit Action */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-zinc-500 font-mono">
                    Direct founder dispatch
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.45)] hover:shadow-[0_0_25px_rgba(147,51,234,0.65)] transition-all cursor-pointer"
                  >
                    <span>Submit Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}