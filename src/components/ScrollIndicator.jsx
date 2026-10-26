import React, { useEffect, useState } from 'react';

export default function ScrollIndicator({ isDark }) {
  const sections = [
    { id: 'home', label: '01 // DIRECTION' },
    { id: 'services', label: '02 // PRACTICES' },
    { id: 'ai-solutions', label: '03 // AI PIPELINES' },
    { id: 'about', label: '04 // STUDIO LABS' },
    { id: 'contact', label: '05 // INTAKE' },
  ];

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col space-y-4 pointer-events-auto">
      {sections.map((s) => {
        const isActive = activeSection === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center justify-end space-x-3 cursor-pointer"
          >
            <span
              className={`text-[10px] font-mono tracking-widest uppercase transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                isActive
                  ? 'text-purple-400 font-bold opacity-100'
                  : isDark
                    ? 'text-zinc-400'
                    : 'text-zinc-600'
              }`}
            >
              {s.label}
            </span>
            <div
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-6 h-1.5 bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]'
                  : isDark
                    ? 'w-2 h-1.5 bg-zinc-800 group-hover:bg-purple-400/50'
                    : 'w-2 h-1.5 bg-zinc-300 group-hover:bg-purple-400/50'
              }`}
            />
          </a>
        );
      })}
    </div>
  );
}