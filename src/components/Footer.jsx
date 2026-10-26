import React from 'react';
import { ArrowUpRight, MessageSquare, Mail } from 'lucide-react';

export default function Footer({ isDark, onOpenBrief }) {
  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        isDark ? 'bg-[#070709] border-zinc-900 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Studio Brand */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="inline-block select-none">
              <span className="text-xl font-black tracking-widest uppercase leading-none text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]">
                STUDIO
              </span>
              <span className="block text-[9px] font-mono tracking-[0.25em] text-purple-400 font-bold uppercase mt-1">
                BY ANAS SHARIFF
              </span>
            </a>
            <p className="text-xs leading-relaxed max-w-sm">
              Architecting bespoke digital experiences, high-performance web systems, and deterministic AI pipelines for forward-thinking enterprises.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBrief}
                data-cursor="START"
                className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-purple-400 hover:text-purple-300 font-bold cursor-pointer"
              >
                <span>Submit Direct Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-zinc-200">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-purple-400 transition-colors">Digital Direction</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Core Disciplines</a></li>
              <li><a href="#ai-solutions" className="hover:text-purple-400 transition-colors">AI Pipeline Architecture</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-colors">Diagnostic Methodology</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Studio Connect */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-zinc-200">
              Direct Inquiries
            </span>
            <p className="text-xs leading-relaxed">
              Connect directly with Anas Shariff for executive direction, private architectural consultations, or technical advisement.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {/* WhatsApp direct chat link */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                data-cursor="LINK"
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs transition-all ${
                  isDark
                    ? 'border-zinc-800 bg-zinc-900/60 hover:border-emerald-500/50 text-emerald-400'
                    : 'border-zinc-200 bg-white hover:border-emerald-500 text-emerald-600'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Studio</span>
              </a>

              {/* Direct Mail */}
              <a
                href="mailto:anashamdan3874@gmail.com"
                data-cursor="LINK"
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs transition-all ${
                  isDark
                    ? 'border-zinc-800 bg-zinc-900/60 hover:border-purple-500/50 text-purple-400'
                    : 'border-zinc-200 bg-white hover:border-purple-500 text-purple-600'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>anashamdan3874@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-3">
          <div>
            © {new Date().getFullYear()} Studio by Anas Shariff. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>Bangalore · Global Deployment</span>
            <span className="text-purple-400">Production Ready V1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}