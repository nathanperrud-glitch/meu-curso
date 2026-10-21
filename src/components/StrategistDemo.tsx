import React, { useState } from 'react';
import { STRATEGIST_PRESETS } from '../data/initialData';
import { useApp } from '../context/AppContext';
import { Sparkles, Copy, Check, Terminal, ChevronRight } from 'lucide-react';

export const StrategistDemo: React.FC = () => {
  const { showToast } = useApp();
  const [selectedPresetId, setSelectedPresetId] = useState<string>('montessori');
  const [activeTab, setActiveTab] = useState<'analise' | 'angulos' | 'roteiro'>('analise');
  const [isCopied, setIsCopied] = useState(false);

  const activePreset =
    STRATEGIST_PRESETS.find((p) => p.id === selectedPresetId) || STRATEGIST_PRESETS[0];

  const handleCopyScript = () => {
    const text = `${activePreset.script.hook}\n\n${activePreset.script.problem}\n\n${activePreset.script.cta}`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    showToast('Roteiro copiado para a área de transferência!');
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section
      className="py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-t border-[#C9C4B7]"
      data-purpose="ai-strategist-demo"
    >
      <div className="max-w-3xl mb-10">
        <div className="font-mono text-xs font-bold text-[#59574F] uppercase tracking-wider mb-2">
          AGENTE INTELIGENTE INCLUSO
        </div>
        <h2 className="font-brico font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#16150F]">
          Defina seu ângulo. <br className="hidden sm:inline" />
          <span className="mark-lima">Desenvolva o roteiro.</span>
        </h2>
        <p className="text-[#59574F] text-sm sm:text-base mt-2">
          Use nosso Agente Estrategista customizado para ChatGPT e Claude para dissecar seu cliente ideal e transformar dados em anúncios prontos.
        </p>
      </div>

      {/* Preset Selector */}
      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-mono">
        <span className="font-bold text-[#16150F]">Testar com outro nicho:</span>
        {STRATEGIST_PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => setSelectedPresetId(preset.id)}
            className={`px-3 py-1.5 rounded-md border border-[#16150F] font-semibold transition-all ${
              selectedPresetId === preset.id
                ? 'bg-[#16150F] text-[#CDF13B] shadow-[2px_2px_0px_#16150F]'
                : 'bg-[#FCFBF6] text-[#16150F] hover:bg-[#EFEBDD]'
            }`}
          >
            {preset.category}
          </button>
        ))}
      </div>

      {/* Interactive Panel */}
      <div className="bg-[#FCFBF6] border-2 border-[#16150F] rounded-2xl overflow-hidden shadow-[4px_4px_0px_#16150F] grid grid-cols-1 lg:grid-cols-12">
        {/* Left Side: Terminal Tinta */}
        <div className="lg:col-span-4 bg-[#16150F] text-[#F4F1E8] p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#16150F]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#CDF13B]"></span>
              <span className="font-mono text-[10px] text-[#F4F1E8]/60 ml-2">
                AGENTE_ESTRATEGISTA.MD
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono text-[#CDF13B] uppercase font-bold tracking-wider">
                PRODUTO / OFERTA ANALISADA:
              </span>
              <p className="font-brico font-bold text-lg text-white mt-1 leading-snug">
                {activePreset.productName}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono text-[#F4F1E8]/60 uppercase tracking-wider">
                MERCADO ALVO:
              </span>
              <p className="font-mono text-sm text-[#F4F1E8] mt-0.5">
                {activePreset.targetMarket}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs text-[#F4F1E8]/70 leading-relaxed">
              O agente cruza mais de 12 variáveis de comportamento de compra para entregar o gancho e a cena de abertura ideal.
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#CDF13B]">
            <span className="flex items-center gap-1.5">
              <Terminal size={14} /> Agente Estrategista ativo
            </span>
            <span className="w-2 h-2 rounded-full bg-[#CDF13B] animate-pulse"></span>
          </div>
        </div>

        {/* Right Side: Interactive Tabs */}
        <div className="lg:col-span-8 p-5 sm:p-6 flex flex-col justify-between">
          <div>
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#C9C4B7] pb-3 font-mono text-xs">
              <button
                onClick={() => setActiveTab('analise')}
                className={`px-3 py-1.5 rounded font-bold border border-[#16150F] transition-all ${
                  activeTab === 'analise'
                    ? 'bg-[#CDF13B] text-[#16150F] shadow-[2px_2px_0px_#16150F]'
                    : 'bg-[#FCFBF6] text-[#59574F] hover:bg-[#EFEBDD]'
                }`}
              >
                01. Análise do Cliente
              </button>
              <button
                onClick={() => setActiveTab('angulos')}
                className={`px-3 py-1.5 rounded font-bold border border-[#16150F] transition-all ${
                  activeTab === 'angulos'
                    ? 'bg-[#CDF13B] text-[#16150F] shadow-[2px_2px_0px_#16150F]'
                    : 'bg-[#FCFBF6] text-[#59574F] hover:bg-[#EFEBDD]'
                }`}
              >
                02. 3 Ângulos Gerados
              </button>
              <button
                onClick={() => setActiveTab('roteiro')}
                className={`px-3 py-1.5 rounded font-bold border border-[#16150F] transition-all ${
                  activeTab === 'roteiro'
                    ? 'bg-[#CDF13B] text-[#16150F] shadow-[2px_2px_0px_#16150F]'
                    : 'bg-[#FCFBF6] text-[#59574F] hover:bg-[#EFEBDD]'
                }`}
              >
                03. Roteiro Pronto
              </button>
            </div>

            {/* Content Tab 01: Análise */}
            {activeTab === 'analise' && (
              <div className="py-4 space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-bold text-[#16150F] uppercase bg-[#EFEBDD] px-2 py-0.5 rounded border border-[#16150F]/20">
                    DOR LATENTE DETECTADA
                  </span>
                  <p className="text-sm font-semibold text-[#16150F] pt-1">
                    {activePreset.latentPain}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-bold text-[#16150F] uppercase bg-[#EFEBDD] px-2 py-0.5 rounded border border-[#16150F]/20">
                    OBJEÇÃO FREQUENTE
                  </span>
                  <p className="text-sm text-[#59574F] pt-1">
                    {activePreset.objection}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-bold text-[#16150F] uppercase bg-[#EFEBDD] px-2 py-0.5 rounded border border-[#16150F]/20">
                    DESEJO CENTRAL
                  </span>
                  <p className="text-sm text-[#59574F] pt-1">
                    {activePreset.coreDesire}
                  </p>
                </div>
              </div>
            )}

            {/* Content Tab 02: Ângulos */}
            {activeTab === 'angulos' && (
              <div className="py-4 space-y-3">
                {activePreset.angles.map((angle, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border ${
                      angle.isSelected
                        ? 'bg-[#EFEBDD] border-[#16150F] shadow-[2px_2px_0px_#16150F]'
                        : 'bg-[#FCFBF6] border-[#C9C4B7] opacity-80'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-[#16150F]">
                      {angle.title}:
                    </span>
                    <p className="text-sm font-medium text-[#16150F] mt-1">
                      {angle.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Content Tab 03: Roteiro */}
            {activeTab === 'roteiro' && (
              <div className="py-4 space-y-3 font-mono text-xs">
                <div className="border-l-3 border-[#CDF13B] pl-3 py-0.5 bg-[#CDF13B]/10 rounded-r">
                  <span className="font-bold text-[#16150F] block">
                    {activePreset.script.hook.split(':')[0]}:
                  </span>
                  <p className="text-[#59574F] mt-0.5">
                    {activePreset.script.hook.split(':')[1]?.replace(/"/g, '') || activePreset.script.hook}
                  </p>
                </div>

                <div className="border-l-3 border-[#16150F] pl-3 py-0.5 bg-[#EFEBDD]/40 rounded-r">
                  <span className="font-bold text-[#16150F] block">
                    {activePreset.script.problem.split(':')[0]}:
                  </span>
                  <p className="text-[#59574F] mt-0.5">
                    {activePreset.script.problem.split(':')[1]?.replace(/"/g, '') || activePreset.script.problem}
                  </p>
                </div>

                <div className="border-l-3 border-[#CDF13B] pl-3 py-0.5 bg-[#CDF13B]/10 rounded-r">
                  <span className="font-bold text-[#16150F] block">
                    {activePreset.script.cta.split(':')[0]}:
                  </span>
                  <p className="text-[#59574F] mt-0.5">
                    {activePreset.script.cta.split(':')[1]?.replace(/"/g, '') || activePreset.script.cta}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleCopyScript}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#CDF13B] text-[#16150F] border border-[#16150F] rounded font-mono text-xs font-bold shadow-[2px_2px_0px_#16150F] hover:shadow-[1px_1px_0px_#16150F] transition-all"
                  >
                    {isCopied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{isCopied ? 'Roteiro Copiado!' : 'Copiar Roteiro Formatado'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer of Panel */}
          <div className="pt-4 border-t border-[#C9C4B7] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono mt-4">
            <span className="text-[#59574F]">
              Compatível com: ChatGPT Plus, Claude 3.5 Sonnet ou versão gratuita.
            </span>
            <span className="text-[#16150F] font-bold bg-[#EFEBDD] px-2.5 py-1 rounded border border-[#16150F]">
              Incluso no Pacote
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
