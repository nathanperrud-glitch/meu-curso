import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  return (
    <section
      className="bg-grid-tinta text-[#F4F1E8] py-24 sm:py-32 px-4 sm:px-8 lg:px-12 text-center relative border-t border-[#16150F]"
      data-purpose="final-call-to-action"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="inline-block bg-[#F4F1E8] text-[#16150F] font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
          COMECE AINDA HOJE
        </div>

        <h2 className="font-brico font-extrabold text-4xl sm:text-6xl lg:text-[76px] leading-[1.05] tracking-tight text-[#F4F1E8]">
          Comece a produzir seus próprios <br className="hidden sm:inline" />
          <span className="text-[#CDF13B]">criativos.</span>
        </h2>

        <p className="text-[#F4F1E8]/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Leve o processo de roteiro inteligente, geração sem mensalidades e montagem rápida para os anúncios do seu negócio ou dos seus clientes.
        </p>

        <div className="pt-4">
          <a
            href="#oferta"
            className="inline-flex items-center justify-center gap-3 bg-[#CDF13B] text-[#16150F] font-brico font-extrabold text-lg sm:text-xl px-10 py-5 rounded-xl border-2 border-[#16150F] shadow-[4px_4px_0px_#F4F1E8] hover:bg-[#bce02b] hover:shadow-[6px_6px_0px_#F4F1E8] transition-all"
          >
            <span>Quero produzir meus criativos</span>
            <ArrowUpRight size={24} className="stroke-[2.5]" />
          </a>

          <p className="font-mono text-xs text-[#F4F1E8]/55 mt-3.5">
            Pagamento único · Acesso vitalício imediato · Garantia incondicional de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
};
