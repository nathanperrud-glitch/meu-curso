import React from 'react';
import { Star } from 'lucide-react';

export const TrustStatsBanner: React.FC = () => {
  return (
    <section
      className="border-y border-dashed border-[#C9C4B7] bg-[#F4F1E8]/90 py-8 px-4 sm:px-8 lg:px-12"
      data-purpose="trust-stats"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#C9C4B7]">
        <div className="text-center md:text-left md:pr-6 pt-4 md:pt-0">
          <div className="font-brico font-extrabold text-3xl sm:text-4xl text-[#16150F]">
            +9.913
          </div>
          <p className="text-xs sm:text-sm text-[#59574F] font-medium mt-1">
            Alunos ativos criando anúncios com IA em diversos nichos
          </p>
        </div>

        <div className="text-center md:text-left md:px-6 pt-4 md:pt-0">
          <div className="font-brico font-extrabold text-3xl sm:text-4xl text-[#16150F] flex items-center justify-center md:justify-start gap-2">
            <span>4,8/5</span>
            <div className="flex text-[#E5A500]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#E5A500" strokeWidth={0} />
              ))}
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#59574F] font-medium mt-1">
            Classificação média calculada em 76 avaliações recentes
          </p>
        </div>

        <div className="text-center md:text-left md:pl-6 pt-4 md:pt-0">
          <div className="font-brico font-extrabold text-3xl sm:text-4xl text-[#16150F]">
            Seu ritmo.
          </div>
          <p className="text-xs sm:text-sm text-[#59574F] font-medium mt-1">
            Acesso vitalício para rever aulas e novos recursos adicionados
          </p>
        </div>
      </div>
    </section>
  );
};
