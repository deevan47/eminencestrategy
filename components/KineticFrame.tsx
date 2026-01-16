
import React from 'react';

const KineticFrame: React.FC = () => {
  const words = ["EMINENCE", "EXECUTION", "PRECISION", "SCALE", "POWER", "STRATEGY"];
  
  return (
    <div className="w-full">
      <div className="marquee-track flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex">
            {words.map((word) => (
              <span key={word} className="text-[15vw] font-black tracking-tighter mx-16 text-zinc-100 hover:text-black transition-colors duration-300 cursor-default">
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="px-12 mt-12 flex justify-between border-t border-zinc-200 pt-8">
        <span className="text-[10px] font-bold uppercase tracking-widest">Momentum Analysis / Active</span>
        <span className="text-[10px] font-mono uppercase text-zinc-400">Velocity: 124.5 units / sec</span>
      </div>
    </div>
  );
};

export default KineticFrame;
