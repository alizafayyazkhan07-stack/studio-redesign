import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

export default function EdgeStatusWidget({ isDark }) {
  const [time, setTime] = useState('');
  const [latency] = useState(24);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-30 hidden sm:flex items-center space-x-3 px-3.5 py-2 rounded-full border backdrop-blur-md transition-all shadow-lg text-[10px] font-mono bg-black/60 border-purple-500/20 text-zinc-300">
      {/* Live Pulsing Beacon */}
      <div className="flex items-center space-x-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-bold text-white tracking-wider">STUDIO EDGE</span>
      </div>

      <span className="text-zinc-600">|</span>

      {/* Latency */}
      <div className="flex items-center space-x-1 text-emerald-400">
        <Activity className="w-3 h-3" />
        <span>{latency}MS PING</span>
      </div>

      <span className="text-zinc-600">|</span>

      {/* Live Time */}
      <span className="text-zinc-400">{time}</span>
    </div>
  );
}