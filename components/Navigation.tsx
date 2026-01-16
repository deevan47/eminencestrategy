import React from 'react';

interface NavigationProps {
  activeFrame: number;
  totalFrames: number;
}

const Navigation: React.FC<NavigationProps> = ({ activeFrame, totalFrames }) => {
  const isDark = activeFrame === totalFrames - 1; 

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] px-6 md:px-12 h-20 md:h-24 flex justify-between items-center transition-all duration-700 ${isDark ? 'text-white bg-[#262626]/90' : 'text-black bg-white/95'} backdrop-blur-xl border-b border-zinc-100/10`}>
      <div className="flex flex-col">
        <span className="text-3xl logo-font text-eminence-red lowercase leading-none">eminence</span>
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 mt-1">Strategic Intelligence</span>
      </div>

      <div className="hidden lg:flex items-center gap-8 bg-zinc-900/5 px-8 py-3 rounded-full border border-zinc-900/5">
        {['HOME', 'TRUST', 'STRATEGY', 'SUCCESS', 'SPEAKS', 'CONTACT'].map((item, i) => {
          const targets = [0, 1, 2, 5, 6, 8];
          return (
            <button 
              key={item}
              className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:text-eminence-red ${activeFrame === targets[i] ? 'text-eminence-red scale-105' : ''}`}
              onClick={() => document.getElementById(`frame-${targets[i]}`)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col items-end">
        <div className="flex gap-1 md:gap-2">
          {Array.from({ length: totalFrames }).map((_, i) => (
            <div 
              key={i} 
              className={`h-[4px] transition-all duration-500 rounded-full ${activeFrame === i ? 'w-6 md:w-10 bg-eminence-red' : 'w-1 md:w-2 bg-zinc-300'}`}
            />
          ))}
        </div>
        <span className="text-[10px] font-bold mt-2 opacity-40 uppercase tracking-widest">SEQ_{activeFrame + 1}</span>
      </div>
    </nav>
  );
};

export default Navigation;