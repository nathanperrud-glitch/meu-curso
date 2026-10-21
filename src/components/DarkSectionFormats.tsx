import React from 'react';
import { useApp } from '../context/AppContext';
import { FORMAT_ITEMS } from '../data/initialData';
import { Play, ArrowUpRight } from 'lucide-react';

export const DarkSectionFormats: React.FC = () => {
  const { getImage, setActiveVideo } = useApp();

  return (
    <section
      className="bg-grid-tinta text-[#F4F1E8] py-20 px-4 sm:px-8 lg:px-12 border-b border-[#16150F]"
      data-purpose="dark-formats-gallery"
      id="formatos"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header of Dark Section */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-block bg-[#F4F1E8] text-[#16150F] font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
            EXPLORE NOVAS MENSAGENS
          </div>
          <h2 className="font-brico font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-white">
            Teste mais ângulos. <br className="hidden sm:inline" />
            <span className="mark-lima-solid">Sem gravar cada criativo.</span>
          </h2>
          <p className="text-[#F4F1E8]/75 text-base sm:text-lg leading-relaxed">
            Explore personagens digitais, clonagem de você mesmo, conversas no formato podcast e animações completas sem ligar câmeras e sem estúdios caros.
          </p>
        </div>

        {/* 3 Quick Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-y border-white/15 py-6">
          <div className="flex items-start gap-3">
            <span className="text-[#CDF13B] font-mono font-bold text-lg">01.</span>
            <p className="text-xs sm:text-sm text-[#F4F1E8]/80">
              Valide novos ganchos toda semana com rapidez e baixo custo de teste.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#CDF13B] font-mono font-bold text-lg">02.</span>
            <p className="text-xs sm:text-sm text-[#F4F1E8]/80">
              Crie variações ilimitadas dos anúncios vencedores trocando cenário e gancho.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#CDF13B] font-mono font-bold text-lg">03.</span>
            <p className="text-xs sm:text-sm text-[#F4F1E8]/80">
              Traduza vozes e adapte sotaques para vender nos EUA, Europa e América Latina.
            </p>
          </div>
        </div>

        {/* Usage Cost Notice Banner */}
        <div className="bg-[#F4F1E8]/10 border border-white/15 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-mono">
          <span className="text-[#F4F1E8]/90 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CDF13B] inline-block animate-pulse"></span>
            Pague somente por geração nas ferramentas. Média de $0,30 por vídeo de 15 segundos.
          </span>
          <a className="text-[#CDF13B] hover:underline flex items-center gap-1 font-bold" href="#custos">
            <span>Entenda o custo por uso</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Grid of the 7 Formats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FORMAT_ITEMS.map((format) => {
            const imageUrl = getImage(format.slotKey);

            return (
              <div
                key={format.id}
                onClick={() =>
                  setActiveVideo({
                    id: format.id,
                    slotKey: format.slotKey,
                    number: format.number,
                    title: format.title,
                    subtitle: format.category,
                    tag: format.badge,
                    duration: format.duration,
                    image: imageUrl,
                    aspectRatio: '9/16',
                    description: format.description,
                    estimatedCost: format.cost,
                    promptUsed: `Scene of ${format.title}, professional cinematic studio lighting, commercial ads 1080x1920.`
                  })
                }
                className="bg-[#201F18] border border-white/15 hover:border-[#CDF13B] rounded-xl p-3 flex flex-col space-y-3 group cursor-pointer transition-all duration-200 hover:-translate-y-1"
              >
                {/* 9:16 Thumbnail */}
                <div className="aspect-[9/16] relative rounded-lg bg-black/60 overflow-hidden border border-white/10">
                  <img
                    src={imageUrl}
                    alt={format.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-[#16150F]/80 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-white/20">
                    {format.number}
                  </span>
                  <span className="absolute top-2 right-2 bg-[#CDF13B] text-[#16150F] font-mono text-[9px] font-bold px-1.5 py-0.5 rounded">
                    {format.examplesCount}
                  </span>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-[#CDF13B] border border-[#16150F] flex items-center justify-center shadow-[2px_2px_0px_#16150F] group-hover:scale-110 transition-transform">
                      <Play size={15} fill="#16150F" className="text-[#16150F] ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <span className="text-[10px] font-mono text-[#CDF13B] font-bold uppercase tracking-wider">
                    {format.category}
                  </span>
                  <h3 className="font-brico font-bold text-lg text-[#F4F1E8] mt-0.5">
                    {format.title}
                  </h3>
                  <p className="text-xs text-[#F4F1E8]/70 mt-1 leading-relaxed">
                    {format.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer of Dark Section */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#F4F1E8]/70">
            * UGC, Animados e DualCast fazem parte do Pacote Completo.
          </span>
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 bg-[#CDF13B] text-[#16150F] font-brico font-extrabold text-sm px-6 py-3 rounded border border-[#16150F] shadow-[3px_3px_0px_#16150F] hover:shadow-[5px_5px_0px_#16150F] transition-all"
          >
            <span>Quero produzir meus criativos</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
