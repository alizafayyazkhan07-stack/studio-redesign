import React, { useState, useRef, useEffect } from 'react';

export default function IntroScreen({ onFinish }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef(null);

  const finishIntro = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onFinish();
    }, 450);
  };

  useEffect(() => {
    // 5.5s safety timer to transition seamlessly into the main page
    const safetyTimer = setTimeout(() => {
      finishIntro();
    }, 5500);

    const vid = videoRef.current;
    if (vid) {
      vid.muted = true; // Permanently muted for all devices
      vid.playbackRate = 1.0;
      vid.play().catch(() => {
        finishIntro();
      });
    }

    return () => {
      clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <div
      onClick={finishIntro}
      style={{
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isFadingOut ? 0 : 1,
        transform: isFadingOut ? 'scale(1.02)' : 'scale(1)',
        pointerEvents: isFadingOut ? 'none' : 'auto'
      }}
      className="fixed inset-0 z-[9999] bg-[#ffffff] flex items-center justify-center p-3 sm:p-6 cursor-pointer select-none overflow-hidden will-change-transform"
    >
      {/* Apple Minimalist White Frame */}
      <div className="w-full h-full max-w-6xl max-h-[92vh] bg-[#ffffff] rounded-[28px] sm:rounded-[36px] border border-zinc-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
        
        {/* Full-Frame Silent Video Container */}
        <div className="w-full h-full flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={finishIntro}
            onError={finishIntro}
            className="w-full h-full max-h-[75vh] object-contain rounded-2xl will-change-transform"
            src="/intro.mp4"
          />
        </div>

      </div>
    </div>
  );
}