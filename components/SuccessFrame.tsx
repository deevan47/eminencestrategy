
import React from 'react';

const SuccessFrame: React.FC = () => {
  const cases = [
    { cat: "Healthcare", text: "Leveraged industry thought leadership to accelerate policy reform in India's emerging nutraceutical sector." },
    { cat: "Finance", text: "White-labelled research reports for a ratings agency, showcased at key government panels." },
    { cat: "Alternate Investments", text: "IP-Asset conceptualized around Gender Diversity and executed through a national Knowledge Series for a PE firm." },
    { cat: "Power", text: "Established a key player as the thought-leader in safety through owned assets." },
    { cat: "ESG", text: "Conceptualized and launched an industry-level recognition program, resulting in national coverage." },
    { cat: "Oil & Gas", text: "Created a reputation roadmap for a prominent player, instilling employee-level ownership." }
  ];

  return (
    <div className="h-full flex flex-col pt-24 md:pt-32">
      <div className="flex-none py-12 text-center border-b border-zinc-100 bg-eminence-red-light">
        <h2 className="text-eminence-red text-2xl md:text-4xl font-black tracking-[0.3em] uppercase">Success Narratives</h2>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-x divide-y divide-zinc-100 overflow-hidden">
        {cases.map((c, i) => (
          <div key={i} className="p-12 md:p-16 group hover:bg-zinc-50 transition-all duration-500 flex flex-col justify-center space-y-6">
            <h3 className="text-xl md:text-2xl font-black tracking-tighter uppercase text-black border-l-4 border-eminence-red pl-4 group-hover:translate-x-2 transition-transform">
              {c.cat}
            </h3>
            <p className="text-sm md:text-base font-medium leading-relaxed text-zinc-600 uppercase tracking-tight">
              {c.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessFrame;
