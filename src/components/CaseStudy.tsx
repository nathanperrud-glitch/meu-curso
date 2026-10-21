import React from 'react';
import { useApp } from '../context/AppContext';
import { Play } from 'lucide-react';

export const CaseStudy: React.FC = () => {
  const { getImage, setActiveVideo } = useApp();
  const caseImage = getImage('estudo_caso');

  const openCaseVideo = () => {
    setActiveVideo({
      id: 'case-study-collagen',
      slotKey: 'estudo_caso',
      number: 'UGC-PROD',
      title: 'De Duas Imagens a Anúncio com Produto Físico',
      subtitle: 'Estudo de Caso Prático',
      tag: 'UGC PRODUTO',
      duration: '18s',
      image: caseImage,
      aspectRatio: '9/16',
      description: 'Combinação da foto de uma pessoa criada em IA com a foto real de um pote de colágeno físico.',
      script: {
        hook: 'Eu não tomo mais outro colágeno depois que descobri este com gosto de frutas vermelhas.',
        body: 'Misturo toda manhã no café sem aquele sabor amargo dos colágenos velhos de farmácia. Ele dissolve sem empelotar e minha pele ficou muito mais firme.',
        cta: 'Aproveite o frete grátis na compra de 2 potes pelo link da bio.'
      },
      promptUsed: 'Close-up of a stylish 35-year-old woman in a modern kitchen holding a physical red collagen tub, taking a sip, genuine happy expression, 4k ultra-realistic photo, cinematic depth of field.',
      estimatedCost: '$1,96 (7 tomadas geradas)'
    });
  };

  return (
    <section
      className="py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-t border-[#C9C4B7]"
      data-purpose="case-study-breakdown"
    >
      <div className="max-w-3xl mb-10">
        <div className="font-mono text-xs font-bold text-[#59574F] uppercase tracking-wider mb-2">
          ANÁLISE DE PRODUÇÃO PRÁTICA
        </div>
        <h2 className="font-brico font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#16150F]">
          De duas imagens <br className="hidden sm:inline" />
          a um anúncio com produto.
        </h2>
        <p className="text-[#59574F] text-sm sm:text-base mt-2">
          Acompanhe um exemplo real que combinou a foto de uma pessoa criada em IA com a foto real de um pote de suplemento físico.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FCFBF6] border-2 border-[#16150F] rounded-2xl p-5 sm:p-8 shadow-[4px_4px_0px_#16150F]">
        {/* Left: Vertical Poster */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            onClick={openCaseVideo}
            className="w-full max-w-[280px] bg-neutral-900 border-2 border-[#16150F] rounded-xl overflow-hidden shadow-[4px_4px_0px_#16150F] group cursor-pointer hover:-translate-y-1 transition-all"
          >
            <div className="aspect-[9/16] relative">
              <img
                src={caseImage}
                alt="Mulher segurando produto criado em IA"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16150F]/85 via-transparent to-transparent"></div>

              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium bg-[#16150F]/70 backdrop-blur-sm p-2 rounded border border-white/20">
                "Eu não tomo mais outro colágeno depois que descobri este."
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#CDF13B] border-2 border-[#16150F] flex items-center justify-center shadow-[2px_2px_0px_#16150F] group-hover:scale-110 transition-transform">
                  <Play size={16} fill="#16150F" className="text-[#16150F] ml-0.5" />
                </div>
              </div>
            </div>

            <div className="p-2.5 bg-[#FCFBF6] border-t border-[#16150F] text-center font-mono text-[11px] font-bold text-[#16150F]">
              Criativo final: 18 segundos · UGC Produto
            </div>
          </div>
        </div>

        {/* Right: 4 Numbered Steps */}
        <div className="lg:col-span-7 space-y-4">
          <div className="border-b border-[#C9C4B7] pb-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#16150F]">
              <span className="bg-[#CDF13B] text-[#16150F] w-5 h-5 rounded flex items-center justify-center border border-[#16150F] font-bold">
                1
              </span>
              <span>PREPARAÇÃO DAS IMAGENS</span>
            </div>
            <p className="text-xs sm:text-sm text-[#59574F] mt-1 ml-7">
              Geração do rosto em fundo neutro + remoção de fundo da foto original do pote fornecida pelo cliente.
            </p>
          </div>

          <div className="border-b border-[#C9C4B7] pb-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#16150F]">
              <span className="bg-[#CDF13B] text-[#16150F] w-5 h-5 rounded flex items-center justify-center border border-[#16150F] font-bold">
                2
              </span>
              <span>DECISÃO DE FALA E AÇÃO DA CENA</span>
            </div>
            <p className="text-xs sm:text-sm text-[#59574F] mt-1 ml-7">
              Ângulo: frustração com colágenos que têm gosto amargo. A personagem segura a embalagem enquanto bebe com naturalidade.
            </p>
          </div>

          <div className="border-b border-[#C9C4B7] pb-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#16150F]">
              <span className="bg-[#CDF13B] text-[#16150F] w-5 h-5 rounded flex items-center justify-center border border-[#16150F] font-bold">
                3
              </span>
              <span>GERAÇÃO DE 4 TOMADAS CURTAS</span>
            </div>
            <p className="text-xs sm:text-sm text-[#59574F] mt-1 ml-7">
              Clipes de 4 a 6 segundos gerados para permitir cortes dinâmicos: gancho no rosto, close no produto, uso real e CTA.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#16150F]">
              <span className="bg-[#CDF13B] text-[#16150F] w-5 h-5 rounded flex items-center justify-center border border-[#16150F] font-bold">
                4
              </span>
              <span>MONTAGEM COM VOZ E LEGENDA</span>
            </div>
            <p className="text-xs sm:text-sm text-[#59574F] mt-1 ml-7">
              Sincronização com locução animada e legendas dinâmicas pretas e amarelas para visualização com som desligado.
            </p>
          </div>

          {/* Cost transparency note */}
          <div className="bg-[#EFEBDD] p-3 rounded-lg border border-[#16150F]/20 text-xs font-mono text-[#59574F] mt-4">
            <span className="font-bold text-[#16150F]">Transparência de custo:</span> Foram feitas 7 gerações de clipe para escolher os 4 melhores. Custo total consumido na ferramenta de IA: <strong className="text-[#16150F] font-bold">$1,96</strong>.
          </div>
        </div>
      </div>
    </section>
  );
};
