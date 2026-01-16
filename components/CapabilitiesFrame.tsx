
import React from 'react';

const CapabilitiesFrame: React.FC = () => {
  const capabilities = [
    { title: "CAPITAL_DEPLOYMENT", desc: "Sovereign fund orchestration and tactical asset allocation." },
    { title: "IDENTITY_ENGINEERING", desc: "Ultra-premium brand synthesis for high-stakes markets." },
    { title: "SYSTEMS_OPTIMIZATION", desc: "Bespoke internal protocols for enterprise efficiency." },
    { title: "MARKET_INTELLIGENCE", desc: "Asymmetric data synthesis and predictive modeling." },
    { title: "CRISIS_MANAGEMENT", desc: "Surgical execution under high-pressure conditions." },
    { title: "FUTURE_STACK", desc: "Next-gen infrastructure and digital asset stewardship." }
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-12 border-b border-zinc-900 flex justify-between items-end">
        <h2 className="text-4xl font-black tracking-tight uppercase">Capabilities</h2>
        <span className="text-[10px] font-mono text-zinc-500">[SECTION_03_BLUEPRINT]</span>
      </div>
      
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-x divide-y divide-zinc-900 border-zinc-900">
        {capabilities.map((cap, i) => (
          <div key={i} className="group p-12 flex flex-col justify-between hover:bg-zinc-900 transition-colors duration-500 cinematic-ease">
            <div className="flex justify-between">
              <span className="text-[10px] font-mono text-zinc-500">PROT_{i+1}</span>
              <div className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-white transition-all duration-300"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tighter mb-4">{cap.title}</h3>
              <p className="text-xs font-mono text-zinc-500 leading-relaxed uppercase">{cap.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapabilitiesFrame;
