
import React from 'react';

const ProtocolFrame: React.FC = () => {
  return (
    <div className="h-full bg-black text-white flex flex-col p-16 md:p-24">
      <div className="flex justify-between items-start border-b border-zinc-800 pb-16">
        <div className="text-huge font-black tracking-tighter text-eminence-red leading-none">PROTOCOL</div>
        <div className="flex flex-col items-end gap-6 text-right">
           <span className="text-[10px] font-mono tracking-[0.5em] text-zinc-500 uppercase">Status: Live / Deployment Ready</span>
           <h3 className="text-4xl font-black tracking-tighter uppercase leading-none">The Private Office</h3>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-24 mt-24">
        <div className="space-y-6">
          <h4 className="text-eminence-red text-xs font-black uppercase tracking-widest">Global HQ</h4>
          <ul className="text-xs font-mono space-y-4 text-zinc-400 uppercase tracking-widest leading-loose">
            <li className="text-white font-black">MUMBAI / INDIA</li>
            <li>LONDON / UK</li>
            <li>DUBAI / UAE</li>
            <li>NEW YORK / USA</li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-eminence-red text-xs font-black uppercase tracking-widest">Connect</h4>
          <ul className="text-xs font-mono space-y-4 text-zinc-400 uppercase tracking-widest">
            <li className="text-white">ENCRYPTED@EMINENCE</li>
            <li>+91 000 000 0000</li>
            <li>SIGNAL: SECURED</li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-6">
          <h4 className="text-eminence-red text-xs font-black uppercase tracking-widest">Statement of Precision</h4>
          <p className="text-xs font-mono text-zinc-500 uppercase leading-loose text-justify">
            Eminence Strategy operates at the intersection of psychology and architecture. 
            We do not just manage reputation; we construct it with mathematical certainty. 
            Our protocols are designed for leaders who demand zero-friction execution. 
            © 2025 EMINENCE STRATEGIC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>

      <div className="mt-auto pt-12 border-t border-zinc-900 flex justify-between items-end opacity-20">
        <span className="text-[10px] font-mono uppercase tracking-[1em]">Secure System Terminal v4.0</span>
        <div className="text-right">
           <span className="text-[10px] font-mono block">UTC_TIMESTAMP: {new Date().toISOString()}</span>
           <span className="text-[10px] font-mono">ENCRYPTION: AES_256_ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default ProtocolFrame;
