import React from 'react';

export const InventoryStats: React.FC = () => {
  return (
    <section
      className="py-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full"
      data-purpose="resources-inventory"
    >
      {/* 4 Metrics in Line */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12 border-b border-[#C9C4B7] text-center md:text-left">
        <div className="bg-[#FCFBF6] border-2 border-[#16150F] p-4 sm:p-5 rounded-xl shadow-[3px_3px_0px_#16150F]">
          <div className="font-brico font-extrabold text-3xl sm:text-4xl text-[#16150F]">
            3
          </div>
          <span className="font-mono text-xs font-bold text-[#59574F] block mt-1">
            AGENTES DE IA
          </span>
          <p className="text-[11px] text-[#59574F]/85 mt-1 leading-snug">
            Estrategista, 6C Criativo e Arquiteto de Cenas.
          </p>
        </div>

        <div className="bg-[#FCFBF6] border-2 border-[#16150F] p-4 sm:p-5 rounded-xl shadow-[3px_3px_0px_#16150F]">
          <div className="font-brico font-extrabold text-3xl sm:text-4xl text-[#16150F]">
            86
          </div>
          <span className="font-mono text-xs font-bold text-[#59574F] block mt-1">
            PROMPTS PRONTOS
          </span>
          <p className="text-[11px] text-[#59574F]/85 mt-1 leading-snug">
            Fórmulas testadas para personagens e produtos.
          </p>
        </div>

        <div className="bg-[#FCFBF6] border-2 border-[#16150F] p-4 sm:p-5 rounded-xl shadow-[3px_3px_0px_#16150F]">
          <div className="font-brico font-extrabold text-3xl sm:text-4xl text-[#16150F]">
            8
          </div>
          <span className="font-mono text-xs font-bold text-[#59574F] block mt-1">
            DOCUMENTOS-GUIA
          </span>
          <p className="text-[11px] text-[#59574F]/85 mt-1 leading-snug">
            Checklists e guias de montagem passo a passo.
          </p>
        </div>

        <div className="bg-[#FCFBF6] border-2 border-[#16150F] p-4 sm:p-5 rounded-xl shadow-[3px_3px_0px_#16150F]">
          <div className="font-brico font-extrabold text-3xl sm:text-4xl text-[#16150F]">
            392
          </div>
          <span className="font-mono text-xs font-bold text-[#59574F] block mt-1">
            ÁUDIOS & FX
          </span>
          <p className="text-[11px] text-[#59574F]/85 mt-1 leading-snug">
            Trilhas de fundo e efeitos sonoros liberados.
          </p>
        </div>
      </div>

      {/* First Session Roadmap */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-10">
        <div className="md:col-span-5 space-y-2">
          <span className="font-mono text-xs font-bold text-[#59574F] uppercase tracking-wider">
            SUA PRIMEIRA SESSÃO
          </span>
          <h3 className="font-brico font-extrabold text-2xl sm:text-3xl text-[#16150F] leading-tight">
            Organize seu processo de produção com IA.
          </h3>
          <p className="text-sm text-[#59574F] leading-relaxed">
            Em apenas <strong className="text-[#16150F]">2h17 de aulas diretas</strong> e sem enrolação, você configura as ferramentas certas e já exporta seu primeiro anúncio completo.
          </p>
        </div>

        <div className="md:col-span-7 space-y-3">
          <div className="flex items-start gap-3 bg-[#FCFBF6] border-2 border-[#16150F] p-3.5 rounded-xl shadow-[2px_2px_0px_#16150F]">
            <span className="font-mono font-bold text-[#CDF13B] bg-[#16150F] px-2 py-0.5 rounded text-xs">
              1
            </span>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#16150F]">
                Configurar as ferramentas certas
              </p>
              <p className="text-xs text-[#59574F] mt-0.5">
                Cadastre-se nas plataformas recomendadas que oferecem o menor custo por vídeo gerado.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#FCFBF6] border-2 border-[#16150F] p-3.5 rounded-xl shadow-[2px_2px_0px_#16150F]">
            <span className="font-mono font-bold text-[#CDF13B] bg-[#16150F] px-2 py-0.5 rounded text-xs">
              2
            </span>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#16150F]">
                Abrir os prompts e materiais
              </p>
              <p className="text-xs text-[#59574F] mt-0.5">
                Copie a estrutura do roteiro e cole seus dados no agente de estratégia inteligente.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#FCFBF6] border-2 border-[#16150F] p-3.5 rounded-xl shadow-[2px_2px_0px_#16150F]">
            <span className="font-mono font-bold text-[#CDF13B] bg-[#16150F] px-2 py-0.5 rounded text-xs">
              3
            </span>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#16150F]">
                Produzir e revisar seu primeiro anúncio
              </p>
              <p className="text-xs text-[#59574F] mt-0.5">
                Junte as tomadas no editor gratuito e exporte pronto para publicação no Meta Ads ou TikTok.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
