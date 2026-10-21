import React from 'react';
import { Star } from 'lucide-react';

export const IntermediateProof: React.FC = () => {
  return (
    <section className="py-10 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full" data-purpose="intermediate-proof">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#FCFBF6] border-2 border-[#16150F] rounded-xl p-5 sm:p-6 shadow-[3px_3px_0px_#16150F] flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono bg-[#EFEBDD] border border-[#16150F] px-2 py-0.5 rounded font-bold">
                PRIMEIRO VÍDEO CONCLUÍDO
              </span>
              <span className="text-xs text-[#59574F] font-mono">Comunidade Discord</span>
            </div>
            <p className="text-sm text-[#16150F] leading-relaxed font-medium italic">
              “Meu primeiro vídeo saiu em menos de 40 minutos seguindo a aula. O avatar ficou indistinguível de um ser humano real gravando no quarto. Já subi para teste no Meta Ads!”
            </p>
          </div>
          <div className="pt-4 border-t border-[#C9C4B7] flex items-center justify-between text-xs font-mono mt-3">
            <span className="font-bold text-[#16150F]">Lucas M. — Gestor de Tráfego</span>
            <span className="text-[#59574F]">Aluno verificado</span>
          </div>
        </div>

        <div className="bg-[#FCFBF6] border-2 border-[#16150F] rounded-xl p-5 sm:p-6 shadow-[3px_3px_0px_#16150F] flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono bg-[#EFEBDD] border border-[#16150F] px-2 py-0.5 rounded font-bold">
                FEEDBACK DE CLIENTE
              </span>
              <div className="flex text-[#E5A500]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#E5A500" strokeWidth={0} />
                ))}
              </div>
            </div>
            <p className="text-sm text-[#16150F] leading-relaxed font-medium italic">
              “Apresentei os 4 criativos para o dono do e-commerce de suplementos e ele achou que contratei uma produtora de SP. Paguei menos de $2 nas ferramentas para gerar tudo.”
            </p>
          </div>
          <div className="pt-4 border-t border-[#C9C4B7] flex items-center justify-between text-xs font-mono mt-3">
            <span className="font-bold text-[#16150F]">Juliana S. — Prestadora de Serviços</span>
            <span className="text-[#59574F]">Aluno verificado</span>
          </div>
        </div>
      </div>
    </section>
  );
};
