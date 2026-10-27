import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProjectBriefModal({ isOpen, onClose, isDark, onSuccessSound }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    budget: '$5k - $15k',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccessSound) onSuccessSound();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-zinc-200 shadow-2xl p-6 sm:p-8 overflow-hidden text-zinc-900">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 font-semibold inline-block mb-2">
                Project Intake
              </span>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-zinc-900">
                Initiate Project Brief
              </h2>
              <p className="text-xs text-zinc-600 mt-1">
                Submit your scope parameters and receive an architectural diagnosis within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 mb-1 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tanzil Mungaye"
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-zinc-50 text-zinc-900 text-xs focus:outline-none focus:border-zinc-900 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 mb-1 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tanzil@studio.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-zinc-50 text-zinc-900 text-xs focus:outline-none focus:border-zinc-900 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 mb-1 font-semibold">
                    Primary Discipline
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-zinc-50 text-zinc-900 text-xs focus:outline-none focus:border-zinc-900 transition-colors"
                  >
                    <option>Web Development & UI/UX</option>
                    <option>AI & Machine Learning RAG</option>
                    <option>E-Commerce Architecture</option>
                    <option>Cloud Infrastructure & DevOps</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 mb-1 font-semibold">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-zinc-50 text-zinc-900 text-xs focus:outline-none focus:border-zinc-900 transition-colors"
                  >
                    <option>$5k - $15k</option>
                    <option>$15k - $30k</option>
                    <option>$30k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 mb-1 font-semibold">
                  Project Scope & Requirements
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your architectural goals..."
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-zinc-50 text-zinc-900 text-xs focus:outline-none focus:border-zinc-900 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-zinc-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Submit Architectural Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-zinc-100 border border-zinc-300 rounded-full flex items-center justify-center mx-auto text-zinc-900">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-zinc-900">
              Brief Successfully Submitted
            </h3>
            <p className="text-xs text-zinc-600 max-w-sm mx-auto">
              Thank you! Anas Shariff's architectural team will analyze your parameters and respond within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
