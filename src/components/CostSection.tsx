import React from 'react';
import { Check, ArrowUpRight, Zap, Info } from 'lucide-react';

export const CostSection: React.FC = () => {
  return (
    <section
      className="py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-t border-[#C9C4B7]"
      data-purpose="usage-costs-breakdown"
      id="custos"
    >
      <div className="max-w-3xl mb-10">
        <div className="font-mono text-xs font-bold text-[#59574F] uppercase tracking-wider mb-2">
          TRANSPARÊNCIA TOTAL
        </div>
        <h2 className="font-brico font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#16150F]">
          Crie sem mensalidades. <br className="hidden sm:inline" />
          <span className="mark-lima">Pague só pelo que usar.</span>
        </h2>
        <p className="text-[#59574F] text-sm sm:text-base mt-2">
          Você não fica preso a assinaturas caras de US$ 100/mês. As ferramentas que ensinamos funcionam no modelo pré-pago por créditos.
        </p>
      </div>

      {/* Large Pay-As-You-Go Comparison Card */}
      <div className="bg-[#FCFBF6] border-2 border-[#16150F] rounded-2xl overflow-hidden shadow-[4px_4px_0px_#16150F] grid grid-cols-1 lg:grid-cols-12">
        {/* Left: How Credits Work */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase bg-[#EFEBDD] px-2.5 py-1 rounded border border-[#16150F]">
              COMO FUNCIONA O SALDO
            </span>
          </div>

          <h3 className="font-brico font-bold text-xl sm:text-2xl text-[#16150F] leading-snug">
            Coloque saldo. Crie. O valor é descontado a cada uso.
          </h3>

          <p className="text-sm text-[#59574F] leading-relaxed">
            Pense nisso como abastecer o carro: você recarrega $5 ou $10 quando quiser produzir novos vídeos e o saldo fica disponível na sua conta para quando precisar.
          </p>

          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded bg-[#CDF13B] border border-[#16150F] flex items-center justify-center font-bold text-[#16150F]">
                ✓
              </span>
              <span className="text-[#16150F]">
                Você escolhe quando recarregar (ex: $5 dura mais de 15 testes de vídeo)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded bg-[#CDF13B] border border-[#16150F] flex items-center justify-center font-bold text-[#16150F]">
                ✓
              </span>
              <span className="text-[#16150F]">
                Sem renovação automática ou cobranças surpresa no cartão de crédito
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded bg-[#CDF13B] border border-[#16150F] flex items-center justify-center font-bold text-[#16150F]">
                ✓
              </span>
              <span className="text-[#16150F]">
                Se parar de produzir vídeos por um mês, não paga rigorosamente nada
              </span>
            </div>
          </div>
        </div>

        {/* Right: Black Demonstration Panel */}
        <div className="lg:col-span-5 bg-[#16150F] text-[#F4F1E8] p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#16150F]">
          <div>
            <span className="font-mono text-xs text-[#F4F1E8]/60 uppercase tracking-wider">
              RECARGA MÍNIMA SUGERIDA
            </span>
            <div className="font-brico font-extrabold text-5xl sm:text-6xl text-[#CDF13B] mt-2">
              $5
            </div>
            <p className="text-xs text-[#F4F1E8]/75 mt-1.5 leading-relaxed">
              Saldo inicial suficiente para gerar mais de 15 clipes de vídeo de alta resolução em ferramentas selecionadas.
            </p>
          </div>

          <div className="my-6 pt-6 border-t border-white/10 space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-mono text-[#F4F1E8]/80">Custo médio por tomada (10-15s):</span>
              <span className="font-brico font-bold text-xl text-white">~$0,30</span>
            </div>
            <div className="flex items-baseline justify-between text-[#CDF13B]">
              <span className="text-xs font-mono font-bold">Ofertas encontradas no método:</span>
              <span className="font-brico font-bold text-xl">a partir de $0,02</span>
            </div>
          </div>

          <div className="text-[11px] font-mono text-[#F4F1E8]/65 bg-white/5 p-3 rounded-lg border border-white/10">
            * Custos de créditos pagos diretamente nas ferramentas parceiras, totalmente independentes do valor do treinamento.
          </div>
        </div>
      </div>

      {/* Sub-block: Bloco 15 Cost Opportunity */}
      <div className="mt-6 bg-[#FEF9C3] border-2 border-[#16150F] rounded-2xl p-6 shadow-[3px_3px_0px_#16150F] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-2">
          <span className="font-mono text-[10px] font-bold bg-[#16150F] text-[#CDF13B] px-2.5 py-0.5 rounded">
            OPORTUNIDADE DE CUSTO
          </span>
          <h3 className="font-brico font-extrabold text-xl sm:text-2xl text-[#16150F]">
            Produza mais criativos. Aproveite o custo mais baixo.
          </h3>
          <p className="text-xs sm:text-sm text-[#59574F] leading-relaxed">
            Dentro do treinamento compartilhamos plataformas que oferecem modelos em fase promocional onde tomadas de 10 segundos custam apenas <strong className="text-[#16150F]">R$ 0,10 ($0,02)</strong>. Isso permite testar dezenas de variações de anúncio com orçamento de cafezinho.
          </p>
        </div>

        <div className="md:col-span-4 flex flex-col items-center sm:items-end justify-center">
          <div className="bg-[#FCFBF6] border-2 border-[#16150F] p-4 rounded-xl text-center shadow-[2px_2px_0px_#16150F]">
            <span className="text-[10px] font-mono text-[#59574F] line-through block">
              Habitual: ~$0,30
            </span>
            <div className="font-brico font-extrabold text-3xl text-emerald-800">
              Apenas $0,02
            </div>
            <span className="text-[10px] font-mono text-[#59574F] block mt-0.5">
              por clipe em modelos indicados
            </span>
          </div>
        </div>
      </div>

      {/* Clarification on Voice Cloning */}
      <div className="mt-6 bg-[#FCFBF6] border-2 border-[#16150F] rounded-xl p-5 shadow-[2px_2px_0px_#16150F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <div className="space-y-1">
          <span className="font-bold text-[#16150F] flex items-center gap-1.5">
            <Info size={14} className="text-[#16150F]" />
            Sua imagem já está inclusa no curso de UGC.
          </span>
          <p className="text-[#59574F]">
            A clonagem de voz pessoal é ensinada com ferramenta opcional externa (~$9/mês enquanto usar, sem obrigatoriedade).
          </p>
        </div>
        <span className="bg-[#EFEBDD] px-3 py-1.5 rounded border border-[#16150F] font-bold text-[#16150F] flex-shrink-0">
          Módulo Opcional
        </span>
      </div>
    </section>
  );
};
