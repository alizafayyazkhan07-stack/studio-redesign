import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 max-w-7xl mx-auto bg-[#f5f5f7] text-zinc-900">
      <div className="max-w-3xl mb-16 space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 shadow-sm inline-block">
          Philosophy & Commitment
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase leading-tight">
          Behind The Studio.
        </h2>
        <p className="text-sm font-mono text-zinc-500 uppercase tracking-wide">
          Anas Shariff — Creative Technologist & Studio Founder
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-6">
          <blockquote className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 leading-snug">
            "Great digital experiences are neither accidental nor overly complex. They are the natural result of disciplined craft, clarity of purpose, and technological precision."
          </blockquote>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            Founded by Anas Shariff, Studio operates at the intersection of high-end visual design and rigorous software engineering. Rather than treating artificial intelligence as a marketing gimmick or relying on generic templates, we engineer bespoke digital solutions that solve tangible operational and commercial challenges for founders, companies, and organizations globally.
          </p>
        </div>

        <div className="lg:col-span-5 space-y-4">
          {[
            { num: "01", title: "Deep Problem Diagnostics", desc: "We do not build without understanding. Every line of code begins with your core business objective." },
            { num: "02", title: "Intentional Aesthetic Restraint", desc: "We reject generic templates and decorative noise. Typography and negative space command executive authority." },
            { num: "03", title: "Production-Grade Engineering", desc: "Robust full-stack architectures built for high concurrency, zero downtime, and absolute reliability." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2">
              <span className="text-[10px] font-mono font-bold text-zinc-400">{item.num}</span>
              <h3 className="text-base font-bold uppercase tracking-tight text-zinc-900">{item.title}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}