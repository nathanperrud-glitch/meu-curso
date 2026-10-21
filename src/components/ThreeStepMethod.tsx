import React from 'react';

export const ThreeStepMethod: React.FC = () => {
  return (
    <section
      className="py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-t border-[#C9C4B7]"
      data-purpose="method-steps"
      id="metodo"
    >
      <div className="max-w-3xl mb-12">
        <div className="font-mono text-xs font-bold text-[#59574F] uppercase tracking-wider mb-2">
          DO ZERO À VEICULAÇÃO
        </div>
        <h2 className="font-brico font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#16150F]">
          Do ângulo de venda <br className="hidden sm:inline" />
          ao criativo finalizado.
        </h2>
        <p className="text-[#59574F] text-base sm:text-lg mt-3 leading-relaxed">
          Comece pela mensagem, transforme o roteiro em tomadas de vídeo e finalize o anúncio com ritmo e música. Repita o ciclo a qualquer momento.
        </p>
      </div>

      {/* 3 Columns with Caveat Handwritten Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#C9C4B7]">
        {/* Step 01 */}
        <div className="pt-6 md:pt-0 md:pr-6 flex flex-col justify-between">
          <div>
            <div className="font-caveat text-6xl text-[#16150F] font-bold leading-none mb-3">
              01
            </div>
            <h3 className="font-brico font-bold text-xl text-[#16150F]">
              Defina o ângulo de venda e o roteiro.
            </h3>
            <p className="text-sm text-[#59574F] mt-2 leading-relaxed">
              O Estrategista ajuda você a analisar o avatar, as dores mais urgentes e cria 8 opções de ganchos com retenção alta para qualquer produto.
            </p>

            <div className="bg-[#EFEBDD] border border-[#16150F]/20 rounded-lg p-3.5 mt-4 text-xs">
              <span className="font-mono font-bold block text-[#16150F]">
                RECURSOS DESTA ETAPA:
              </span>
              <span className="text-[#59574F] mt-1 block">
                Agente Estrategista + 8 roteiros prontos de alta conversão para personalizar.
              </span>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#C9C4B7] text-xs font-mono font-semibold text-[#16150F] flex items-center justify-between">
            <span>Saída da etapa:</span>
            <span className="bg-[#FCFBF6] px-2.5 py-1 rounded border border-[#16150F] shadow-[1px_1px_0px_#16150F]">
              Ângulo → Roteiro
            </span>
          </div>
        </div>

        {/* Step 02 */}
        <div className="pt-6 md:pt-0 md:px-6 flex flex-col justify-between">
          <div>
            <div className="font-caveat text-6xl text-[#16150F] font-bold leading-none mb-3">
              02
            </div>
            <h3 className="font-brico font-bold text-xl text-[#16150F]">
              Gere as imagens e os clipes.
            </h3>
            <p className="text-sm text-[#59574F] mt-2 leading-relaxed">
              Defina o personagem, o cenário e a ação exata. Use nossa biblioteca de 86 prompts testados para produzir fotos e transformar em tomadas de 5 a 10 segundos.
            </p>

            <div className="bg-[#EFEBDD] border border-[#16150F]/20 rounded-lg p-3.5 mt-4 text-xs">
              <span className="font-mono font-bold block text-[#16150F]">
                RECURSOS DESTA ETAPA:
              </span>
              <span className="text-[#59574F] mt-1 block">
                86 prompts validados + Agente 6C + Arquiteto de Imagens e Cenas.
              </span>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#C9C4B7] text-xs font-mono font-semibold text-[#16150F] flex items-center justify-between">
            <span>Saída da etapa:</span>
            <span className="bg-[#FCFBF6] px-2.5 py-1 rounded border border-[#16150F] shadow-[1px_1px_0px_#16150F]">
              Imagens → Clipes
            </span>
          </div>
        </div>

        {/* Step 03 */}
        <div className="pt-6 md:pt-0 md:pl-6 flex flex-col justify-between">
          <div>
            <div className="font-caveat text-6xl text-[#16150F] font-bold leading-none mb-3">
              03
            </div>
            <h3 className="font-brico font-bold text-xl text-[#16150F]">
              Monte a versão final do anúncio.
            </h3>
            <p className="text-sm text-[#59574F] mt-2 leading-relaxed">
              Junte os melhores clipes na linha do tempo, sincronize a narração natural, adicione trilha de fundo sutil e efeitos sonoros para prender até o fim.
            </p>

            <div className="bg-[#EFEBDD] border border-[#16150F]/20 rounded-lg p-3.5 mt-4 text-xs">
              <span className="font-mono font-bold block text-[#16150F]">
                RECURSOS DESTA ETAPA:
              </span>
              <span className="text-[#59574F] mt-1 block">
                335 trilhas musicais livres de royalties + 57 efeitos sonoros de corte.
              </span>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#C9C4B7] text-xs font-mono font-semibold text-[#16150F] flex items-center justify-between">
            <span>Saída da etapa:</span>
            <span className="bg-[#FCFBF6] px-2.5 py-1 rounded border border-[#16150F] shadow-[1px_1px_0px_#16150F]">
              Clipes → Criativo pronto
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
