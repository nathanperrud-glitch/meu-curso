import React from 'react';

export const PostOfferProof: React.FC = () => {
  return (
    <section className="py-6 px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto w-full" data-purpose="post-offer-testimonial">
      <div className="bg-[#FCFBF6] border-2 border-[#16150F] rounded-2xl p-5 sm:p-6 shadow-[3px_3px_0px_#16150F] flex flex-col sm:flex-row items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-[#CDF13B]/40 border-2 border-[#16150F] flex-shrink-0 flex items-center justify-center font-brico font-bold text-3xl text-[#16150F]">
          “
        </div>
        <div className="space-y-1 text-center sm:text-left">
          <span className="font-mono text-[10px] font-bold text-[#59574F] uppercase tracking-wider">
            O PACOTE COMPLETO DEPOIS DE COMPRAR
          </span>
          <p className="font-brico font-bold text-base sm:text-lg text-[#16150F] leading-snug">
            “Peguei o pacote completo achando que só usaria o UGC, mas o módulo de criativos animados dobrou o CTR das minhas campanhas de app.”
          </p>
          <span className="text-xs font-mono text-[#59574F] block">
            Guilherme P. — Fundador de Startup
          </span>
        </div>
      </div>
    </section>
  );
};
