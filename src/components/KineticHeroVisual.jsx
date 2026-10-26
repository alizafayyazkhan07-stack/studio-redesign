import React, { useEffect, useRef } from 'react';

export default function KineticHeroVisual({ isDark }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const onMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    let step = 0;

    const draw = () => {
      step += 0.015;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + (mouseX - width / 2) * 0.15;
      const centerY = height * 0.42 + (mouseY - height * 0.42) * 0.15;

      // 3D Kinetic Ring Parameters
      const totalRings = 48;
      const baseRadius = Math.min(width, height) * 0.26;

      ctx.save();
      ctx.globalCompositeOperation = isDark ? 'screen' : 'source-over';

      for (let i = 0; i < totalRings; i++) {
        const ratio = i / totalRings;
        const angleOffset = step + ratio * Math.PI * 2;

        ctx.beginPath();
        const points = 72;
        for (let p = 0; p <= points; p++) {
          const theta = (p / points) * Math.PI * 2;

          // 3D Mobius twist formulas
          const waveA = Math.sin(theta * 2 + angleOffset) * (35 + ratio * 20);
          const waveB = Math.cos(theta * 3 - step * 0.8) * 25;
          const r = baseRadius + waveA + waveB + (ratio - 0.5) * 80;

          const x = centerX + Math.cos(theta) * r;
          const y = centerY + Math.sin(theta) * (r * 0.52 + Math.sin(angleOffset + theta) * 35);

          if (p === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();

        // High intensity neon purple / magenta / cyan gradient
        const grad = ctx.createLinearGradient(
          centerX - baseRadius,
          centerY - baseRadius,
          centerX + baseRadius,
          centerY + baseRadius
        );

        if (isDark) {
          grad.addColorStop(0, `rgba(168, 85, 247, ${0.15 + ratio * 0.45})`); // Neon Purple
          grad.addColorStop(0.5, `rgba(236, 72, 153, ${0.2 + ratio * 0.5})`); // Hot Pink
          grad.addColorStop(1, `rgba(56, 189, 248, ${0.15 + ratio * 0.35})`); // Cyan Glow
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.8;
        } else {
          grad.addColorStop(0, `rgba(147, 51, 234, ${0.2 + ratio * 0.3})`);
          grad.addColorStop(0.6, `rgba(192, 132, 252, ${0.15 + ratio * 0.25})`);
          grad.addColorStop(1, `rgba(99, 102, 241, ${0.2 + ratio * 0.2})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.4;
        }

        ctx.stroke();
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isDark]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {/* Background Glow Aura */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-all duration-700 ${
          isDark ? 'bg-purple-600/25' : 'bg-purple-300/35'
        }`}
      />

      {/* Dynamic 3D Kinetic Canvas */}
      <canvas
        ref={canvasRef}
        className="relative w-full h-full block"
      />
    </div>
  );
}