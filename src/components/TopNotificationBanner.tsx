import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const TopNotificationBanner: React.FC = () => {
  return (
    <aside
      className="w-full bg-[#F4CB4A] text-[#16150F] py-2.5 px-4 border-b border-[#16150F] font-mono text-[11px] md:text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 z-40 relative"
      data-purpose="top-bar"
    >
      <span className="w-2 h-2 rounded-full bg-[#16150F] inline-block animate-pulse"></span>
      <span className="font-bold">Aproveite o custo reduzido:</span>
      <span className="hidden sm:inline text-[#16150F]/85 font-normal">
        Gere clipes a partir de $0,02 durante a disponibilidade da oferta.
      </span>
      <a
        className="underline font-bold inline-flex items-center gap-0.5 hover:text-white transition-colors ml-1"
        href="#custos"
      >
        <span>Ver oferta</span>
        <ArrowUpRight size={13} />
      </a>
    </aside>
  );
};
