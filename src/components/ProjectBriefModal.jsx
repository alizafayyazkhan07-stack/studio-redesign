import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  
  // Multi-select capability tags matching your screenshot
  const [selectedCapabilities, setSelectedCapabilities] = useState([
    'Flagship Web Architecture',
    'Verified AI / RAG System'
  ]);

  // Budget bracket pill selection
  const [selectedBudget, setSelectedBudget] = useState('$5k - $10k');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    timeline: '',
    vision: ''
  });

  const capabilityOptions = [
    'Flagship Web Architecture',
    'Verified AI / RAG System',
    'Design System & Micro-Interactions',
    'AI Agents & Operations Automation',
    'High-Conversion E-Commerce Platform',
    'Full-Stack Cloud & API Infrastructure'
  ];

  const budgetOptions = ['$5k - $10k', '$10k - $25k', '$25k+'];

  // Lock background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleCapability = (cap) => {
    if (selectedCapabilities.includes(cap)) {
      setSelectedCapabilities(selectedCapabilities.filter(item => item !== cap));
    } else {
      setSelectedCapabilities([...selectedCapabilities, cap]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.vision.trim().length < 15) {
      alert("Please enter a brief summary of what you want to build (minimum 15 characters).");
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Background Dimming Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Container with Internal Scroll Only */}
      <div className="relative w-full max-w-lg max-h-[90vh] bg-white rounded-[32px] sm:rounded-[36px] border border-zinc-200 shadow-2xl z-10 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 sm:p-7 pb-4 border-b border-zinc-100 flex items-start justify-between bg-white shrink-0">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 font-bold uppercase">
              COMMISSION BRIEF
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight uppercase leading-none mt-1">
              START A PROJECT
            </h2>
            <p className="text-xs text-zinc-500 mt-1 font-normal">
              Tell us about your product, timeline, or engineering goals.
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-3"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="p-6 sm:p-7 pt-4 overflow-y-auto overscroll-contain flex-1" style={{ scrollbarWidth: 'thin' }}>
          {submitted ? (
            <div className="py-16 flex flex-col items-center justify-center text-center">
              <CheckCircle2 className="w-14 h-14 text-emerald-500 mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-tight">Project Brief Submitted</h3>
              <p className="text-xs text-zinc-500 mt-2 max-w-xs">
                Your scope has been logged. Our studio leads will contact you within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-zinc-200/90 bg-zinc-100/60 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400"
                />
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                  Work Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-zinc-200/90 bg-zinc-100/60 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-zinc-200/90 bg-zinc-100/60 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400"
                />
              </div>

              {/* Company / Brand Name */}
              <div>
                <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                  Company / Brand Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Acme Labs or studio.domain.com"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-zinc-200/90 bg-zinc-100/60 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400"
                />
              </div>

              {/* Capability Selectable Pill Tiles */}
              <div>
                <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
                  Key Disciplines &amp; Architecture
                </label>
                <div className="flex flex-col gap-2">
                  {capabilityOptions.map((cap) => {
                    const isSelected = selectedCapabilities.includes(cap);
                    return (
                      <button
                        key={cap}
                        type="button"
                        onClick={() => toggleCapability(cap)}
                        className={`w-full text-left px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-zinc-100 border-zinc-300 text-zinc-950 font-bold'
                            : 'bg-zinc-50/70 border-zinc-200/70 text-zinc-600 hover:bg-zinc-100/50'
                        }`}
                      >
                        {cap}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Estimated Budget Bracket */}
              <div>
                <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
                  Estimated Budget Bracket *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {budgetOptions.map((b) => {
                    const isSelected = selectedBudget === b;
                    return (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setSelectedBudget(b)}
                        className={`py-3 px-2 rounded-2xl text-xs sm:text-sm font-bold tracking-tight transition-all cursor-pointer text-center border ${
                          isSelected
                            ? 'bg-zinc-950 text-white border-zinc-950 shadow-sm'
                            : 'bg-zinc-100/70 text-zinc-800 border-zinc-200/80 hover:bg-zinc-100'
                        }`}
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Desired Launch Timeline */}
              <div>
                <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                  Desired Launch Timeline *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. 4-6 weeks, by end of Q2, ASAP"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-zinc-200/90 bg-zinc-100/60 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400"
                />
              </div>

              {/* What Do You Want To Build? (Vision & Objectives) */}
              <div>
                <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                  What Do You Want To Build? (Vision &amp; Objectives) *
                </label>
                <textarea
                  required
                  rows="4"
                  placeholder="Describe your product concept, target audience, and core problem to solve..."
                  value={formData.vision}
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-zinc-200/90 bg-zinc-100/60 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-zinc-950 hover:bg-black text-white text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all cursor-pointer"
                >
                  <span>Submit Project Brief</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}