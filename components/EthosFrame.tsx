
import React from 'react';

const EthosFrame: React.FC = () => {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 divide-x divide-zinc-200">
      <div className="flex flex-col justify-center px-12 md:px-24">
        <h2 className="text-6xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-12">
          STRATEGY<br/>WITHOUT<br/>FRICTION
        </h2>
        <div className="h-px w-24 bg-black mb-8"></div>
        <p className="text-sm font-mono leading-relaxed max-w-sm">
          A PRIVATE ADVISORY FOR THE DIGITAL FRONTIER. WE DO NOT CONSULT. WE EXECUTE. EMINENCE IS THE ARCHITECTURE OF CERTAINTY IN AN UNCERTAIN ECONOMY.
        </p>
      </div>
      
      <div className="hidden md:flex flex-col justify-between p-24 bg-zinc-50">
        <div className="space-y-4">
            <span className="text-[10px] font-bold block border-b border-zinc-200 pb-2">01 / DISCOVERY_PROTOCOLS</span>
            <p className="text-[10px] leading-relaxed text-zinc-500 font-mono">
              [SYSTEM_LOG] INITIALIZING DATA HARVEST... SUCCESS.<br/>
              [SYSTEM_LOG] ANALYZING MARKET FRICTION... HIGH.<br/>
              [SYSTEM_LOG] DEPLOYING EMINENCE MODULES... ACTIVE.
            </p>
        </div>
        
        <div className="text-[40vw] font-black text-zinc-100 leading-none pointer-events-none select-none -mb-24 -mr-24 self-end">
          02
        </div>
      </div>
    </div>
  );
};

export default EthosFrame;
