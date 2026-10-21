import React from 'react';
import { useApp } from '../context/AppContext';
import { PRICING_PLANS } from '../data/initialData';
import { ArrowUpRight, Check, ShieldCheck, Zap, Lock, DollarSign } from 'lucide-react';

export const PricingAndOffers: React.FC = () => {
  const { currency, setCurrency, openCheckout } = useApp();

  const bundlePlan = PRICING_PLANS.find((p) => p.id === 'bundle')!;
  const ugcPlan = PRICING_PLANS.find((p) => p.id === 'ugc')!;
  const animPlan = PRICING_PLANS.find((p) => p.id === 'animated')!;

  const getPrice = (plan: typeof bundlePlan) => {
    return currency === 'BRL' ? `R$ ${plan.priceBRL}` : `$ ${plan.priceUSD}`;
  };

  return (
    <section
      className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-t border-[#C9C4B7]"
      data-purpose="pricing-table"
      id="oferta"
    >
      {/* Header & Currency Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div className="max-w-3xl">
          <div className="font-mono text-xs font-bold text-[#59574F] uppercase tracking-wider mb-2">
            INSCRIÇÕES ABERTAS
          </div>
          <h2 className="font-brico font-extrabold text-3xl sm:text-4xl lg:text-[50px] leading-tight text-[#16150F]">
            Aprenda a produzir <br />
            <span className="mark-lima">os criativos de que você precisa.</span>
          </h2>
          <p className="text-[#59574F] text-sm sm:text-base mt-2">
            Escolha o pacote completo com todos os formatos ou comece pelo treinamento individual de sua preferência.
          </p>
        </div>

        {/* Currency Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-[#EFEBDD] border border-[#16150F] rounded-lg font-mono text-xs font-bold self-start sm:self-auto shadow-[2px_2px_0px_#16150F]">
          <span className="px-2 text-[#59574F] text-[11px]">Moeda:</span>
          <button
            onClick={() => setCurrency('BRL')}
            className={`px-3 py-1 rounded transition-colors ${
              currency === 'BRL'
                ? 'bg-[#16150F] text-[#CDF13B]'
                : 'text-[#16150F] hover:bg-[#FCFBF6]'
            }`}
          >
            BRL (R$)
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-3 py-1 rounded transition-colors ${
              currency === 'USD'
                ? 'bg-[#16150F] text-[#CDF13B]'
                : 'text-[#16150F] hover:bg-[#FCFBF6]'
            }`}
          >
            USD ($)
          </button>
        </div>
      </div>

      {/* Grid: 7 cols (Bundle) & 5 cols (Individual) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Bundle Card */}
        <div className="lg:col-span-7 bg-[#FCFBF6] border-2 border-[#16150F] rounded-2xl overflow-hidden shadow-[6px_6px_0px_#16150F] relative">
          {/* Top highlight bar */}
          <div className="bg-[#CDF13B] border-b-2 border-[#16150F] p-4 flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#16150F] flex items-center gap-1.5">
              <span>★</span> PACOTE COMPLETO (RECOMENDADO)
            </span>
            <span className="bg-[#16150F] text-[#F4F1E8] text-[10px] font-mono font-bold px-2 py-0.5 rounded">
              MAIS ESCOLHIDO
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#59574F] uppercase">
                {bundlePlan.subtitle}
              </span>
              <h3 className="font-brico font-extrabold text-2xl sm:text-3xl text-[#16150F] mt-1 leading-snug">
                Aprenda o método e crie em cada um destes formatos.
              </h3>
            </div>

            {/* Price block */}
            <div className="flex flex-wrap items-baseline gap-3 pb-6 border-b border-[#C9C4B7]">
              <span className="text-xs font-mono text-[#59574F]">Pagamento único</span>
              <div className="font-brico font-extrabold text-4xl sm:text-5xl text-[#16150F]">
                {getPrice(bundlePlan)}
              </div>
              {currency === 'BRL' && (
                <span className="text-xs text-[#59574F] font-mono">
                  {bundlePlan.installmentsBRL}
                </span>
              )}
            </div>

            {/* Feature items */}
            <div className="space-y-3 text-xs sm:text-sm">
              {bundlePlan.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#CDF13B] bg-[#16150F] rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px] mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-[#16150F] leading-snug">{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => openCheckout('bundle')}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#CDF13B] text-[#16150F] font-brico font-extrabold text-base sm:text-lg py-4 rounded-xl border-2 border-[#16150F] shadow-[3px_3px_0px_#16150F] hover:shadow-[5px_5px_0px_#16150F] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Quero o Pacote Completo</span>
                <ArrowUpRight size={22} className="stroke-[2.5]" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-[#59574F] mt-3">
                <span className="flex items-center gap-1">
                  <Lock size={12} /> Pagamento Seguro
                </span>
                <span className="flex items-center gap-1">
                  <Zap size={12} /> Acesso Imediato por E-mail
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck size={12} /> 7 Dias de Garantia
                </span>
              </div>
            </div>

            {/* Accordions */}
            <div className="space-y-2 pt-4 border-t border-[#C9C4B7] font-mono text-xs">
              <details className="group bg-[#EFEBDD]/60 border border-[#16150F]/30 rounded-lg p-3 cursor-pointer">
                <summary className="font-bold flex items-center justify-between list-none text-[#16150F]">
                  <span>O que preciso pagar além do curso?</span>
                  <span className="group-open:rotate-45 transition-transform text-base">+</span>
                </summary>
                <p className="mt-2 text-[#59574F] font-sans text-xs leading-relaxed">
                  Apenas os saldos de geração nas ferramentas de IA quando for produzir (cerca de $0,02 a $0,30 por vídeo curto). Sem mensalidades obrigatórias.
                </p>
              </details>

              <details className="group bg-[#EFEBDD]/60 border border-[#16150F]/30 rounded-lg p-3 cursor-pointer">
                <summary className="font-bold flex items-center justify-between list-none text-[#16150F]">
                  <span>Como funciona a garantia de 7 dias?</span>
                  <span className="group-open:rotate-45 transition-transform text-base">+</span>
                </summary>
                <p className="mt-2 text-[#59574F] font-sans text-xs leading-relaxed">
                  Se você acessar a área de membros, testar os prompts e achar que o conteúdo não é para você, basta solicitar o reembolso com 1 clique direto na plataforma.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* Secondary Column: 2 Stacked Individual Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card UGC */}
          <div className="bg-[#FCFBF6] border-2 border-[#16150F] rounded-2xl p-6 shadow-[3px_3px_0px_#16150F] relative flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold bg-[#EFEBDD] text-[#16150F] px-2 py-0.5 rounded border border-[#16150F]">
                {ugcPlan.subtitle}
              </span>
              <h4 className="font-brico font-bold text-xl text-[#16150F] mt-2">
                {ugcPlan.name}
              </h4>
              <p className="text-xs text-[#59574F] mt-1 leading-relaxed">
                {ugcPlan.description}
              </p>

              <div className="my-4">
                <span className="font-brico font-extrabold text-3xl text-[#16150F]">
                  {getPrice(ugcPlan)}
                </span>
                <span className="text-xs font-mono text-[#59574F] ml-2">Pagamento único</span>
              </div>

              <ul className="text-xs space-y-1.5 text-[#59574F] mb-6 font-mono">
                {ugcPlan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16150F]"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => openCheckout('ugc')}
              className="w-full inline-flex items-center justify-center gap-1.5 bg-[#FCFBF6] hover:bg-[#EFEBDD] text-[#16150F] font-bold text-sm py-3 rounded-xl border border-[#16150F] shadow-[2px_2px_0px_#16150F] hover:shadow-none transition-all cursor-pointer"
            >
              <span>Escolher Só UGC Realista</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Card Animated */}
          <div className="bg-[#FCFBF6] border-2 border-[#16150F] rounded-2xl p-6 shadow-[3px_3px_0px_#16150F] relative flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold bg-[#EFEBDD] text-[#16150F] px-2 py-0.5 rounded border border-[#16150F]">
                {animPlan.subtitle}
              </span>
              <h4 className="font-brico font-bold text-xl text-[#16150F] mt-2">
                {animPlan.name}
              </h4>
              <p className="text-xs text-[#59574F] mt-1 leading-relaxed">
                {animPlan.description}
              </p>

              <div className="my-4">
                <span className="font-brico font-extrabold text-3xl text-[#16150F]">
                  {getPrice(animPlan)}
                </span>
                <span className="text-xs font-mono text-[#59574F] ml-2">Pagamento único</span>
              </div>

              <ul className="text-xs space-y-1.5 text-[#59574F] mb-6 font-mono">
                {animPlan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16150F]"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => openCheckout('animated')}
              className="w-full inline-flex items-center justify-center gap-1.5 bg-[#FCFBF6] hover:bg-[#EFEBDD] text-[#16150F] font-bold text-sm py-3 rounded-xl border border-[#16150F] shadow-[2px_2px_0px_#16150F] hover:shadow-none transition-all cursor-pointer"
            >
              <span>Escolher Só Animados</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
