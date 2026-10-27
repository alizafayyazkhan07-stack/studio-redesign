import React from 'react';

export default function Footer({ onOpenBrief }) {
  return (
    <footer className="pt-20 pb-12 px-4 sm:px-6 max-w-7xl mx-auto border-t border-zinc-200 bg-[#f5f5f7] text-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold tracking-tighter uppercase text-zinc-900">STUDIO</span>
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 font-semibold border-l border-zinc-300 pl-2">BY ANAS SHARIFF</span>
          </div>
          <p className="text-xs text-zinc-600 max-w-sm leading-relaxed">
            Architecting bespoke digital experiences, high-performance web systems, and deterministic AI pipelines for forward-thinking enterprises.
          </p>
          <button
            type="button"
            onClick={onOpenBrief}
            className="text-xs font-bold uppercase tracking-wider text-zinc-900 hover:underline cursor-pointer"
          >
            Submit Direct Brief →
          </button>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">Navigation</h4>
          <ul className="space-y-2 text-xs text-zinc-600">
            <li><a href="#home" className="hover:text-zinc-900 transition-colors">Digital Direction</a></li>
            <li><a href="#services" className="hover:text-zinc-900 transition-colors">Core Disciplines</a></li>
            <li><a href="#ai-solutions" className="hover:text-zinc-900 transition-colors">AI Pipeline Architecture</a></li>
            <li><a href="#about" className="hover:text-zinc-900 transition-colors">Diagnostic Methodology</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">Direct Inquiries</h4>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Connect directly with Anas Shariff for executive direction, private architectural consultations, or technical advisement.
          </p>
          <div className="space-y-2">
            <a 
              href="https://whatsapp.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white border border-zinc-200 text-xs font-semibold text-zinc-800 hover:bg-zinc-100 transition-all shadow-sm"
            >
              <span>WhatsApp Studio</span>
            </a>
            <div>
              <a 
                href="mailto:anasharifdar3874@gmail.com"
                className="text-xs font-mono text-zinc-600 hover:text-zinc-900 underline"
              >
                anasharifdar3874@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono">
        <p>© 2026 Studio by Anas Shariff. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <span>Bangalore · Global Deployment</span>
          <span className="px-2.5 py-1 rounded-full bg-zinc-200 text-zinc-800 font-semibold text-[10px]">Production Ready V1</span>
        </div>
      </div>
    </footer>
  );
}