import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ContactBanner({ onOpenBrief }) {
  return (
    <section id="contact" className="py-28 px-4 sm:px-6 max-w-5xl mx-auto text-center">
      <div className="p-10 sm:p-16 rounded-[32px] bg-white border border-zinc-200 shadow-xl space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 font-semibold inline-block">
          Commission Direction · Q4 Pipeline
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase leading-tight text-zinc-900">
          Creating Your Next Digital Masterpiece.
        </h2>
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-600 leading-relaxed">
          Have an ambitious digital product, web architecture, or AI pipeline in mind? Submit your scope parameters and receive an architectural diagnosis within 24 hours.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={onOpenBrief}
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-zinc-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-all shadow-lg cursor-pointer"
          >
            <span>Initiate Project Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[11px] font-mono text-zinc-400 pt-2">
          Guaranteed 24-hr Founder Response
        </p>
      </div>
    </section>
  );
}