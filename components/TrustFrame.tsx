
import React from 'react';

const TrustFrame: React.FC = () => {
  const stats = [
    { val: "92%", desc: "Trust recommendations from third-parties outweighing direct brand content." },
    { val: "20%", desc: "Direct business growth driven by employee stakeholder alignment protocols." },
    { val: "51%", desc: "Average premium yield spent on brands with verified strategic trust indexes." }
  ];

  return (
    <div className="h-full bg-white blueprint-grid flex flex-col">
      <div className="flex-none h-40 border-b border-zinc-900/10 flex items-center px-12">
        <div className="space-y-1">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Quantifying Trust</h2>
          <p className="text-xs font-bold text-zinc-400 tracking-widest uppercase">Empirical Reputation Analysis // Sector: Global Corporate</p>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 divide-x divide-zinc-900/10 border-b border-zinc-900/10">
        {stats.map((s, i) => (
          <div key={i} className="p-16 flex flex-col justify-between group hover:bg-zinc-50 transition-all duration-1000 weighted-ease">
            <div className="flex justify-between items-start">
               <span className="text-eminence-red font-mono text-sm font-black">[{s.val}]</span>
               <span className="text-xs font-mono text-zinc-300">MOD_0{i+1}</span>
            </div>
            <div>
              <h3 className="text-huge text-zinc-900 opacity-10 group-hover:opacity-100 group-hover:text-eminence-red transition-all duration-700 mb-8">{s.val}</h3>
              <p className="text-sm md:text-lg font-black tracking-tight uppercase text-zinc-800 leading-tight">
                {s.desc}
              </p>
            </div>
            <div className="h-px w-0 bg-eminence-red group-hover:w-full transition-all duration-700"></div>
          </div>
        ))}
      </div>

      <div className="h-48 flex items-center justify-between px-12 bg-zinc-50 border-t border-zinc-900/10">
        <p className="text-xl md:text-2xl font-medium text-black max-w-4xl italic leading-snug">
          "Like glass and fine porcelain, reputation is binary. One hairline crack, and the entire architecture of trust collapses."
        </p>
        <button className="bg-zinc-950 text-white px-16 py-8 text-xs font-black tracking-[0.4em] uppercase hover:bg-eminence-red transition-all weighted-ease shadow-2xl">
          Audit Your Reputation
        </button>
      </div>
    </div>
  );
};

export default TrustFrame;
