import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, Play, Pause, Volume2, Copy, Check, Sparkles, DollarSign, Layers } from 'lucide-react';

export const VideoModal: React.FC = () => {
  const { activeVideo, setActiveVideo, showToast, setIsImageManagerOpen } = useApp();
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(25);
  const [activeTab, setActiveTab] = useState<'roteiro' | 'prompt' | 'custos'>('roteiro');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!activeVideo) return;
    setIsPlaying(true);
    setProgress(15);
  }, [activeVideo]);

  // Simulated player progress
  useEffect(() => {
    if (!isPlaying || !activeVideo) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 200);
    return () => clearInterval(interval);
  }, [isPlaying, activeVideo]);

  if (!activeVideo) return null;

  const copyPromptOrScript = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    showToast('Copiado para a área de transferência!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FCFBF6] border-2 border-[#16150F] rounded-2xl shadow-[8px_8px_0px_#16150F] overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Top bar */}
        <div className="bg-[#CDF13B] border-b-2 border-[#16150F] p-3.5 px-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-[#16150F] text-[#CDF13B] text-xs font-mono font-bold px-2 py-0.5 rounded">
              CRIATIVO #{activeVideo.number}
            </span>
            <span className="font-brico font-bold text-sm sm:text-base text-[#16150F]">
              {activeVideo.title}
            </span>
          </div>
          <button
            onClick={() => setActiveVideo(null)}
            className="w-8 h-8 rounded border border-[#16150F] bg-white flex items-center justify-center hover:bg-[#16150F] hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content body: 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
          {/* Left Column: 9:16 Video Player Mockup */}
          <div className="md:col-span-6 p-4 sm:p-6 flex flex-col items-center justify-center bg-[#16150F]/5 border-b md:border-b-0 md:border-r border-[#C9C4B7]">
            <div className="w-[240px] sm:w-[260px] aspect-[9/16] relative bg-neutral-900 border-2 border-[#16150F] rounded-xl overflow-hidden shadow-[4px_4px_0px_#16150F] group">
              <img
                src={activeVideo.image}
                alt={activeVideo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none"></div>

              {/* Top overlay metadata */}
              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-mono text-white">
                <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded border border-white/20">
                  {activeVideo.tag}
                </span>
                <div className="flex items-center gap-1.5 bg-black/60 px-2 py-0.5 rounded border border-white/20">
                  <Volume2 size={12} className="text-[#CDF13B] animate-pulse" />
                  <span>{activeVideo.duration}</span>
                </div>
              </div>

              {/* Subtitles on video */}
              <div className="absolute bottom-12 left-3 right-3 text-white text-xs font-medium bg-black/65 backdrop-blur-sm p-2.5 rounded-lg border border-white/20 leading-snug">
                <span className="text-[#CDF13B] font-bold block text-[10px] uppercase font-mono mb-0.5">
                  FALA ATIVA DA IA:
                </span>
                "{activeVideo.script?.hook || activeVideo.description}"
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
                <div
                  className="h-full bg-[#CDF13B] transition-all duration-200"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Center Play/Pause button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#CDF13B] border-2 border-[#16150F] flex items-center justify-center shadow-[2px_2px_0px_#16150F] opacity-90 hover:opacity-100 hover:scale-105 transition-all"
                aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
              >
                {isPlaying ? (
                  <Pause size={18} className="text-[#16150F]" />
                ) : (
                  <Play size={18} className="text-[#16150F] ml-0.5" />
                )}
              </button>
            </div>

            <p className="font-mono text-[11px] text-[#59574F] mt-3 text-center">
              Renderizado com áudio sincronizado & lip-sync nativo
            </p>
          </div>

          {/* Right Column: Breakdown & Tabs */}
          <div className="md:col-span-6 p-4 sm:p-6 flex flex-col justify-between space-y-4">
            <div>
              {/* Tab buttons */}
              <div className="flex items-center gap-1.5 border-b border-[#C9C4B7] pb-3 font-mono text-xs">
                <button
                  onClick={() => setActiveTab('roteiro')}
                  className={`px-3 py-1.5 rounded font-bold border border-[#16150F] transition-all ${
                    activeTab === 'roteiro'
                      ? 'bg-[#CDF13B] text-[#16150F] shadow-[2px_2px_0px_#16150F]'
                      : 'bg-[#FCFBF6] text-[#59574F] hover:bg-[#EFEBDD]'
                  }`}
                >
                  Roteiro de Venda
                </button>
                <button
                  onClick={() => setActiveTab('prompt')}
                  className={`px-3 py-1.5 rounded font-bold border border-[#16150F] transition-all ${
                    activeTab === 'prompt'
                      ? 'bg-[#CDF13B] text-[#16150F] shadow-[2px_2px_0px_#16150F]'
                      : 'bg-[#FCFBF6] text-[#59574F] hover:bg-[#EFEBDD]'
                  }`}
                >
                  Prompt da Cena
                </button>
                <button
                  onClick={() => setActiveTab('custos')}
                  className={`px-3 py-1.5 rounded font-bold border border-[#16150F] transition-all ${
                    activeTab === 'custos'
                      ? 'bg-[#CDF13B] text-[#16150F] shadow-[2px_2px_0px_#16150F]'
                      : 'bg-[#FCFBF6] text-[#59574F] hover:bg-[#EFEBDD]'
                  }`}
                >
                  Custos
                </button>
              </div>

              {/* Tab 1: Script */}
              {activeTab === 'roteiro' && (
                <div className="py-3 space-y-3 font-mono text-xs">
                  <div className="p-2.5 bg-[#EFEBDD] rounded border border-[#16150F]/20">
                    <span className="font-bold text-[#16150F] block mb-1">
                      ⚡ GANCHO (0–3s):
                    </span>
                    <p className="text-[#59574F]">
                      {activeVideo.script?.hook || 'Gancho de quebra de padrão com foco em retenção.'}
                    </p>
                  </div>
                  <div className="p-2.5 bg-white rounded border border-[#C9C4B7]">
                    <span className="font-bold text-[#16150F] block mb-1">
                      📦 CORPO DO ANÚNCIO:
                    </span>
                    <p className="text-[#59574F]">
                      {activeVideo.script?.body || activeVideo.description}
                    </p>
                  </div>
                  <div className="p-2.5 bg-[#CDF13B]/20 rounded border border-[#16150F]/30">
                    <span className="font-bold text-[#16150F] block mb-1">
                      🎯 CHAMADA PARA AÇÃO (CTA):
                    </span>
                    <p className="text-[#59574F]">
                      {activeVideo.script?.cta || 'Toque no botão e garanta a sua vaga.'}
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: Prompt */}
              {activeTab === 'prompt' && (
                <div className="py-3 space-y-3 font-mono text-xs">
                  <div className="bg-[#16150F] text-[#F4F1E8] p-3.5 rounded-lg border border-[#16150F] space-y-2">
                    <div className="flex items-center justify-between text-neutral-400 text-[10px]">
                      <span>PROMPT_SISTEMA_V4.TXT</span>
                      <Sparkles size={12} className="text-[#CDF13B]" />
                    </div>
                    <p className="text-white text-xs leading-relaxed font-mono">
                      {activeVideo.promptUsed || 'UGC portrait shot, photorealistic lighting, 8k.'}
                    </p>
                  </div>
                  <p className="text-[#59574F] text-[11px]">
                    * Formulação compatível com Kling AI, Luma Dream Machine, Runway Gen-3 e MiniMax.
                  </p>
                </div>
              )}

              {/* Tab 3: Costs */}
              {activeTab === 'custos' && (
                <div className="py-3 space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-white border border-[#C9C4B7] rounded">
                    <span className="text-[#59574F]">Tomadas geradas:</span>
                    <strong className="text-[#16150F]">2 tentativas</strong>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white border border-[#C9C4B7] rounded">
                    <span className="text-[#59574F]">Tempo de render:</span>
                    <strong className="text-[#16150F]">~1min 40s</strong>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-[#CDF13B]/30 border border-[#16150F] rounded font-bold">
                    <span className="text-[#16150F]">Custo total consumido:</span>
                    <strong className="text-emerald-800 text-sm">
                      {activeVideo.estimatedCost || '$0,30'}
                    </strong>
                  </div>
                  <p className="text-[11px] text-[#59574F] mt-2">
                    Sem taxa de mensalidade. Você só gasta esse valor no momento da geração dentro da ferramenta pré-paga.
                  </p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-[#C9C4B7] space-y-2">
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    copyPromptOrScript(
                      activeTab === 'prompt'
                        ? activeVideo.promptUsed || ''
                        : `${activeVideo.script?.hook}\n\n${activeVideo.script?.body}\n\n${activeVideo.script?.cta}`
                    )
                  }
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-[#16150F] text-white rounded font-mono text-xs font-bold hover:bg-neutral-800 transition-colors shadow-[2px_2px_0px_#16150F]"
                >
                  {copied ? <Check size={14} className="text-[#CDF13B]" /> : <Copy size={14} />}
                  <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
                </button>

                <button
                  onClick={() => {
                    setActiveVideo(null);
                    setIsImageManagerOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#FCFBF6] border border-[#16150F] rounded font-mono text-xs font-bold hover:bg-[#CDF13B] transition-colors"
                  title="Alterar link da imagem deste criativo"
                >
                  <Layers size={14} />
                  <span>Trocar Imagem</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
