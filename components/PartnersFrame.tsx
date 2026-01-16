
import React from 'react';

const PartnersFrame: React.FC = () => {
  // Exact mapping of logos from the image to their official domains for Clearbit API
  const sectors = [
    {
      title: "Financial Services",
      rows: [
        {
          label: "Mutual Fund",
          logos: [
            { name: "ICICI PRUDENTIAL", domain: "icicipruamc.com" },
            { name: "QUANTUM", domain: "quantumamc.com" },
            { name: "HELIOS", domain: "helioscapital.in" },
            { name: "TATA MUTUAL", domain: "tatamutualfund.com" },
            { name: "LIC MUTUAL", domain: "licmf.com" },
            { name: "KOTAK", domain: "kotak.com" },
            { name: "BANDHAN", domain: "bandhanbank.com" }
          ]
        },
        {
          label: "Wealth",
          logos: [
            { name: "VALTRUST", domain: "valtrust.com" },
            { name: "CLUB MILLIONAIRE", domain: "clubmillionaire.in" },
            { name: "SVAN", domain: "svaninvestments.com" },
            { name: "UNICORN", domain: "unicornivc.com" },
            { name: "BANYAN TREE", domain: "banyantreeadvisors.com" }
          ]
        },
        {
          label: "Private Equity",
          logos: [
            { name: "MULTIPLES", domain: "multiplesequity.com" },
            { name: "UPWISERY", domain: "upwisery.com" },
            { name: "CARPEDIEM", domain: "carpediem-capital.com" },
            { name: "AON", domain: "aon.com" },
            { name: "HDFC ERGO", domain: "hdfcergo.com" }
          ]
        },
        {
          label: "Others",
          logos: [
            { name: "STANDARD CHARTERED", domain: "sc.com" },
            { name: "UJJIVAN", domain: "ujjivansfb.in" },
            { name: "C2FO", domain: "c2fo.com" },
            { name: "ANGEL ONE", domain: "angelone.in" },
            { name: "ACUITE", domain: "acuite.in" },
            { name: "GRIHUM", domain: "grihumfc.com" },
            { name: "FINSIGMA", domain: "finsigma.in" }
          ]
        }
      ]
    },
    {
      title: "Technology & Digital",
      rows: [
        {
          label: "Technology",
          logos: [
            { name: "QBURST", domain: "qburst.com" },
            { name: "AWS", domain: "aws.amazon.com" },
            { name: "CLOUDEXTEL", domain: "cloudextel.com" },
            { name: "QUANTIPHI", domain: "quantiphi.com" },
            { name: "HAMILTON RESEARCH", domain: "hamilton-research.com" }
          ]
        }
      ]
    },
    {
      title: "Consumer & FMCG",
      rows: [
        {
          label: "Food",
          logos: [
            { name: "WESTLIFE", domain: "westlife.co.in" },
            { name: "MCDONALDS", domain: "mcdonalds.com" },
            { name: "CAPITAL FOODS", domain: "capitalfoods.co.in" },
            { name: "CHING'S", domain: "chingssecret.com" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="h-full bg-white flex flex-col pt-24 md:pt-32 overflow-hidden">
      {/* Header */}
      <div className="px-12 py-6 flex justify-between items-end border-b border-zinc-100 bg-zinc-50">
        <div className="space-y-1">
          <h2 className="text-eminence-red text-2xl md:text-3xl font-black tracking-widest uppercase">Institutional Portfolio</h2>
          <p className="text-[11px] font-bold text-zinc-900 uppercase tracking-widest">Global Stakeholder Network // Verified Entities</p>
        </div>
        <div className="hidden md:block h-px w-1/3 bg-zinc-200 mb-2"></div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto px-6 md:px-12 py-8 space-y-6 scrollbar-hide">
        {sectors.map((sector, sIdx) => (
          <div key={sIdx} className="space-y-3">
            {/* Sector Header */}
            <div className="bg-eminence-red text-white py-2.5 px-6 text-[12px] font-black tracking-[0.2em] uppercase w-full text-center shadow-sm">
              {sector.title}
            </div>

            {/* Sector Rows */}
            <div className="space-y-2">
              {sector.rows.map((row, rIdx) => (
                <div key={rIdx} className="flex flex-col md:flex-row gap-2">
                  {/* Category Label */}
                  <div className="md:w-36 bg-zinc-900 text-white flex items-center justify-center p-4 text-[10px] md:text-[11px] font-black italic uppercase text-center shadow-sm shrink-0 border-l-4 border-eminence-red">
                    {row.label}
                  </div>

                  {/* Moving Logos Row */}
                  <div className="flex-1 relative overflow-hidden bg-white border border-zinc-100 flex items-center group">
                    <div className="flex animate-marquee py-3 gap-6">
                      {[...row.logos, ...row.logos, ...row.logos].map((logo, lIdx) => (
                        <div key={lIdx} className="min-w-[180px] md:min-w-[220px] h-20 border border-zinc-50 flex items-center justify-between px-6 bg-white shadow-sm hover:border-eminence-red transition-all cursor-pointer grayscale hover:grayscale-0 group/card">
                           <img 
                              src={`https://logo.clearbit.com/${logo.domain}?size=120`} 
                              alt={logo.name}
                              className="h-10 w-10 object-contain"
                              onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40?text=' + logo.name[0]; }}
                           />
                           <span className="text-zinc-900 font-black text-[10px] uppercase tracking-tighter text-right leading-tight max-w-[100px] border-l border-zinc-100 pl-3">
                             {logo.name}
                           </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Bar */}
      <div className="h-14 bg-eminence-red-light border-t border-zinc-100 flex items-center justify-center">
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-eminence-red animate-pulse"></div>
                <span className="text-[10px] font-black text-eminence-red tracking-[0.3em] uppercase">ADVISORY_ACTIVE</span>
            </div>
            <span className="text-[10px] font-bold text-zinc-400 tracking-[0.2em] uppercase">
              100% CONSISTENT BRANDING // GLOBAL ARCHITECTURE
            </span>
         </div>
      </div>
    </div>
  );
};

export default PartnersFrame;
