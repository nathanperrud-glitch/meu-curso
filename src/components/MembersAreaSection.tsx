import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Play, ArrowRight, ArrowUpRight, Download, Copy, Music, Sparkles } from 'lucide-react';

interface ModuleItem {
  id: string;
  number: string;
  title: string;
  lessonTitle: string;
  duration: string;
  materials: string;
  tag: string;
}

const MODULES: ModuleItem[] = [
  {
    id: 'aulas',
    number: '01.',
    title: 'As Aulas Passo a Passo',
    lessonTitle: 'Módulo 02 · Aula 04: Gerando Expressões Naturais e Sincronia Labial',
    duration: '14min · Material complementar em anexo',
    materials: 'Inclui: Prompts em texto copiável + links diretos para ferramentas.',
    tag: 'VIDEOAULAS HD'
  },
  {
    id: 'prompts',
    number: '02.',
    title: 'Os 86 Prompts Validados',
    lessonTitle: 'Biblioteca Mestra: 86 Prompts para Personagens e Produtos Físicos',
    duration: 'PDF & Notions atualizados semanalmente',
    materials: 'Inclui: Fórmulas prontas para copiar e colar no ChatGPT, Kling e Luma.',
    tag: 'PROMPTS 100% TESTADOS'
  },
  {
    id: 'recursos',
    number: '03.',
    title: 'Trilhas e Efeitos Sonoros',
    lessonTitle: 'Pack de Áudios: 335 Trilhas sem Royalties e 57 Efeitos de Corte',
    duration: 'Download direto em ZIP (2.4 GB)',
    materials: 'Inclui: Licença comercial irrestrita para veiculação no Meta, TikTok e YouTube.',
    tag: 'ÁUDIO & FX'
  },
  {
    id: 'marcas',
    number: '04.',
    title: 'Remoção de Marcas d\'Água',
    lessonTitle: 'Tutorial Rápido: Removendo Marcas e Ajustando Resolução com IA',
    duration: '08min · Ferramenta gratuita recomendada',
    materials: 'Inclui: Passo a passo para exportar em 1080p sem pagar taxas adicionais.',
    tag: 'WORKFLOW LIMPO'
  },
  {
    id: 'atualizacoes',
    number: '05.',
    title: 'Atualizações & Novas Aulas',
    lessonTitle: 'Canal de Atualizações: Últimos Modelos de Vídeo Adicionados ao Método',
    duration: 'Aulas adicionadas continuamente',
    materials: 'Inclui: Guias práticos dos modelos Kling AI, MiniMax, Luma e Flux.',
    tag: 'ACESSO VITALÍCIO'
  }
];

export const MembersAreaSection: React.FC = () => {
  const { getImage, showToast } = useApp();
  const [selectedModuleIndex, setSelectedModuleIndex] = useState(0);

  const activeModule = MODULES[selectedModuleIndex];
  const platformImage = getImage('plataforma_alunos');

  return (
    <section
      className="py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-t border-[#C9C4B7]"
      data-purpose="members-area-preview"
      id="plataforma"
    >
      <div className="max-w-3xl mb-10">
        <div className="font-mono text-xs font-bold text-[#59574F] uppercase tracking-wider mb-2">
          ECOSSISTEMA COMPLETO
        </div>
        <h2 className="font-brico font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#16150F]">
          Prompts, agentes <br className="hidden sm:inline" />
          e recursos de produção.
        </h2>
        <p className="text-[#59574F] text-sm sm:text-base mt-2">
          Encontre todas as aulas, modelos de prompt e materiais prontos em uma plataforma organizada e rápida de navegar.
        </p>
      </div>

      {/* Grid: 5 Menu Options on Left + Mockup Viewer on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Vertical Menu */}
        <div className="lg:col-span-4 space-y-2.5">
          {MODULES.map((item, idx) => {
            const isSelected = idx === selectedModuleIndex;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedModuleIndex(idx)}
                className={`w-full text-left p-3.5 rounded-xl border-2 border-[#16150F] font-semibold flex items-center justify-between text-xs sm:text-sm transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#CDF13B] shadow-[3px_3px_0px_#16150F] translate-x-1'
                    : 'bg-[#FCFBF6] hover:bg-[#EFEBDD] text-[#16150F] shadow-[2px_2px_0px_#16150F]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="font-mono font-bold">{item.number}</span>
                  <span>{item.title}</span>
                </span>
                <ArrowRight size={15} />
              </button>
            );
          })}
        </div>

        {/* Right Platform Mockup */}
        <div className="lg:col-span-8 bg-[#FCFBF6] border-2 border-[#16150F] rounded-2xl p-4 sm:p-6 shadow-[4px_4px_0px_#16150F]">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between border-b border-[#C9C4B7] pb-3 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400 border border-[#16150F]"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 border border-[#16150F]"></span>
              <span className="w-3 h-3 rounded-full bg-green-400 border border-[#16150F]"></span>
              <span className="font-mono text-xs text-[#59574F] ml-2">
                Área de Membros AvatarHype
              </span>
            </div>
            <span className="font-mono text-[10px] bg-[#EFEBDD] px-2 py-0.5 rounded border border-[#16150F] font-bold text-[#16150F]">
              {activeModule.tag}
            </span>
          </div>

          {/* Player Mockup */}
          <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden relative border-2 border-[#16150F] flex items-center justify-center">
            <img
              src={platformImage}
              alt="Interface da plataforma de membros"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#CDF13B] border-2 border-[#16150F] flex items-center justify-center shadow-[3px_3px_0px_#16150F] hover:scale-105 transition-transform cursor-pointer">
                <Play size={20} fill="#16150F" className="text-[#16150F] ml-1" />
              </div>

              <p className="font-brico font-bold text-white text-base sm:text-xl mt-3 max-w-lg leading-snug">
                {activeModule.lessonTitle}
              </p>
              <span className="font-mono text-xs text-[#CDF13B] mt-1 font-semibold">
                {activeModule.duration}
              </span>
            </div>
          </div>

          {/* Bottom Summary & Download Link */}
          <div className="mt-4 pt-3 border-t border-[#C9C4B7] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono">
            <span className="text-[#59574F]">{activeModule.materials}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => showToast('Arquivo disponibilizado na Área de Membros!')}
                className="font-bold underline text-[#16150F] hover:text-black flex items-center gap-1"
              >
                <span>Baixar anexos</span>
                <Download size={12} />
              </button>
              <a href="#oferta" className="font-bold bg-[#CDF13B] px-2.5 py-1 rounded border border-[#16150F]">
                Garantir acesso ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-block of Continuous Updates */}
      <div className="mt-10 bg-[#EFEBDD] border-2 border-[#16150F] rounded-2xl p-5 sm:p-6 shadow-[3px_3px_0px_#16150F] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-[#FCFBF6] px-2 py-0.5 rounded border border-[#16150F]">
            ATUALIZAÇÕES SEMPRE INCLUSAS
          </span>
          <h3 className="font-brico font-extrabold text-xl sm:text-2xl text-[#16150F]">
            Acompanhe as novidades com as atualizações incluídas.
          </h3>
          <p className="text-xs sm:text-sm text-[#59574F] max-w-2xl leading-relaxed">
            Volte às aulas sempre que novos modelos de vídeo ou geradores forem lançados. O método evolui constantemente e seu acesso nunca expira.
          </p>
        </div>

        <div className="flex-shrink-0">
          <span className="font-mono text-xs font-bold bg-[#CDF13B] text-[#16150F] px-4 py-2.5 rounded-lg border-2 border-[#16150F] shadow-[2px_2px_0px_#16150F] block text-center">
            Acesso Sem Limite de Tempo
          </span>
        </div>
      </div>
    </section>
  );
};
