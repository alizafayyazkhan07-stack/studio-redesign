import React, { useState } from 'react';

export default function Footer({ isDark }) {
  const [cookieConsent, setCookieConsent] = useState(true);

  const footerNavigation = {
    services: [
      { name: 'Web Platforms', href: '#services' },
      { name: 'AI & Machine Systems', href: '#services', badge: 'New' },
      { name: 'WebGL & Motion', href: '#services', badge: '2026' },
      { name: 'Cloud Architecture', href: '#services' },
    ],
    resources: [
      { name: 'Case Studies', href: '#services' },
      { name: 'Design System', href: '#services' },
      { name: 'Component Library', href: '#services' },
      { name: 'Tech Stack Matrix', href: '#services' },
    ],
    company: [
      { name: 'About Studio', href: '#home' },
      { name: 'Contact Us', href: 'mailto:contact@anas-shariff.com' },
      { name: 'Client Portal', href: '#home' },
      { name: 'Press & Media', href: '#home' },
    ],
  };

  return (
    <footer
      className={`relative pt-24 pb-28 border-t transition-colors duration-300 ${
        isDark ? 'bg-[#09090b] border-zinc-900 text-zinc-400' : 'bg-[#fafafa] border-zinc-200 text-zinc-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top: Logo on left, Nav Columns on right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 pb-16">
          {/* Left Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#home" className="inline-block group">
                <img
                  src="/brand/logo.png"
                  alt="Studio by Anas Shariff"
                  style={{
                    mixBlendMode: isDark ? 'screen' : 'normal',
                    filter: isDark ? 'invert(1) brightness(1.2)' : 'none',
                  }}
                  className="h-10 sm:h-12 w-auto object-contain select-none transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <p className="mt-4 text-xs sm:text-sm max-w-xs leading-relaxed text-zinc-500">
                Digital direction, high-performance web architecture, and modern product engineering.
              </p>
            </div>

            <div className="hidden md:block pt-12">
              <span className={`text-xs font-mono ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                © Studio by Anas Shariff 2026.
              </span>
            </div>
          </div>

          {/* Right Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4 className={`text-xs font-semibold uppercase tracking-wider mb-5 ${isDark ? 'text-zinc-300' : 'text-zinc-900'}`}>
                Services
              </h4>
              <ul className="space-y-3.5 text-sm">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`inline-flex items-center space-x-2 transition-colors ${
                        isDark ? 'hover:text-white' : 'hover:text-zinc-950'
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.badge && (
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold border ${
                            isDark
                              ? 'bg-zinc-800 text-blue-400 border-zinc-700'
                              : 'bg-zinc-100 text-blue-600 border-zinc-200'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className={`text-xs font-semibold uppercase tracking-wider mb-5 ${isDark ? 'text-zinc-300' : 'text-zinc-900'}`}>
                Resources
              </h4>
              <ul className="space-y-3.5 text-sm">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-zinc-950'}`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className={`text-xs font-semibold uppercase tracking-wider mb-5 ${isDark ? 'text-zinc-300' : 'text-zinc-900'}`}>
                Company
              </h4>
              <ul className="space-y-3.5 text-sm">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-zinc-950'}`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Copyright */}
        <div className="md:hidden pb-8">
          <span className={`text-xs font-mono ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
            © Studio by Anas Shariff 2026.
          </span>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6 ${
            isDark ? 'border-zinc-900' : 'border-zinc-200'
          }`}
        >
          <div className="flex items-center space-x-6 text-xs">
            <a href="#home" className={`transition-colors ${isDark ? 'hover:text-zinc-200' : 'hover:text-zinc-900'}`}>
              Privacy
            </a>
            <a href="#home" className={`transition-colors ${isDark ? 'hover:text-zinc-200' : 'hover:text-zinc-900'}`}>
              Terms
            </a>
            <a href="#home" className={`transition-colors ${isDark ? 'hover:text-zinc-200' : 'hover:text-zinc-900'}`}>
              Copyright
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center space-x-5 text-sm">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className={`transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'}`}
            >
              YouTube
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className={`transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'}`}
            >
              𝕏
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className={`transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'}`}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Floating Mobbin Cookie Pill */}
      {cookieConsent && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div
            className={`flex items-center space-x-4 px-5 py-2.5 rounded-full backdrop-blur-xl border shadow-2xl text-xs ${
              isDark
                ? 'bg-zinc-900/95 border-zinc-800 text-zinc-300'
                : 'bg-white/95 border-zinc-200 text-zinc-700'
            }`}
          >
            <span>
              We use cookies.{' '}
              <a href="#home" className="underline hover:text-blue-500 font-medium">
                Read more
              </a>
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCookieConsent(false)}
                className={`px-3.5 py-1.5 rounded-full font-semibold transition-all ${
                  isDark
                    ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                    : 'bg-zinc-950 text-white hover:bg-zinc-800'
                }`}
              >
                Accept
              </button>
              <button
                onClick={() => setCookieConsent(false)}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  isDark ? 'hover:text-white text-zinc-400' : 'hover:text-zinc-950 text-zinc-500'
                }`}
              >
                Deny
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}