import React, { useEffect, useState } from 'react';

export default function CustomCursor({ isDark }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({ active: false, label: '' });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only initialize on devices with precision pointer (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e) => {
      setVisible(true);
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });

      // Detect hover context badge
      const interactiveEl = e.target.closest('[data-cursor], a, button, input, textarea');
      if (interactiveEl) {
        const customLabel = interactiveEl.getAttribute('data-cursor');
        let label = customLabel || '';
        if (!label) {
          const text = interactiveEl.innerText || '';
          if (text.includes('Start Project')) label = 'START';
          else if (text.includes('Explore') || text.includes('Inspect')) label = 'EXPLORE';
          else if (interactiveEl.tagName === 'BUTTON') label = 'SELECT';
          else if (interactiveEl.tagName === 'A') label = 'LINK';
        }
        setCursorState({ active: true, label });
      } else {
        setCursorState({ active: false, label: '' });
      }
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth animation loop for trailing ring
    let frameId;
    const loop = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrailingPos({ x: currentX, y: currentY });
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-purple-500 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-[0_0_10px_rgba(168,85,247,0.9)]"
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />

      {/* Trailing Fluid Halo */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[width,height,background-color,border-color] duration-300 rounded-full border ${
          cursorState.active
            ? isDark
              ? 'w-16 h-16 bg-purple-600/25 border-purple-400 backdrop-blur-[2px] shadow-[0_0_25px_rgba(168,85,247,0.4)]'
              : 'w-16 h-16 bg-purple-500/20 border-purple-600 backdrop-blur-[2px]'
            : isDark
              ? 'w-8 h-8 bg-purple-500/10 border-purple-500/40'
              : 'w-8 h-8 bg-purple-600/10 border-purple-500/50'
        }`}
        style={{ transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)` }}
      >
        {cursorState.label && (
          <span className="text-[8px] font-mono font-black tracking-widest text-purple-300 uppercase pointer-events-none drop-shadow">
            {cursorState.label}
          </span>
        )}
      </div>
    </>
  );
}