import React from 'react';
import { useApp } from '../context/AppContext';
import { CREATIVE_VIDEOS } from '../data/initialData';
import { ArrowUpRight, Play, Star, Settings2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { getImage, setActiveVideo, setIsImageManagerOpen } = useApp();

  const heroVideos = CREATIVE_VIDEOS.map((vid) => ({
    ...vid,
    image: getImage(vid.slotKey) || vid.image,
  }));

  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full" data-purpose="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Copy & Primary CTA */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          {/* Badge / Retangular Stamp */}
          <div className="inline-flex items-center gap-2 bg-[#FCFBF6] border border-[#16150F] px-3 py-1.5 rounded text-xs font-mono font-bold tracking-tight shadow-[2px_2px_0px_#16150F]">
            <span className="w-2 h-2 rounded-full bg-[#CDF13B] border border-[#16150F] animate-pulse"></span>
            <span>CURSO EM VÍDEO · PASSO A PASSO</span>
          </div>

          {/* H1 with highlighter effect */}
          <h1 className="font-brico font-extrabold text-4xl sm:text-5xl lg:text-[62px] leading-[1.05] tracking-tight text-[#16150F]">
            Aprenda a criar <br />
            <span className="mark-lima">anúncios com IA.</span>
          </h1>

          {/* Supporting paragraph with lime vertical border */}
          <div className="border-l-4 border-[#CDF13B] pl-4 py-1 text-base sm:text-lg text-[#59574F] leading-relaxed max-w-xl">
            Produza anúncios para o seu negócio ou seus clientes usando{' '}
            <strong className="text-[#16150F] font-bold">personagens de IA</strong> ou sua própria imagem. Aprenda também a trabalhar com{' '}
            <strong className="text-[#16150F] font-bold">clonagem de voz</strong>, sem precisar fazer uma nova gravação para cada criativo.
          </div>

          {/* Fast social proof */}
          <div className="flex items-center gap-3 text-sm font-mono text-[#16150F]/85">
            <div className="flex text-[#E5A500]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#E5A500" strokeWidth={0} />
              ))}
            </div>
            <span className="font-bold text-[#16150F]">4,8/5</span>
            <span className="text-[#59574F] text-xs">(76 avaliações verificadas)</span>
          </div>

          {/* Primary CTA Block */}
          <div className="w-full sm:w-auto pt-2">
            <a
              href="#oferta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#CDF13B] text-[#16150F] font-brico font-extrabold text-base sm:text-lg px-8 py-4 rounded border-2 border-[#16150F] shadow-[3px_3px_0px_#16150F] hover:shadow-[6px_6px_0px_#16150F] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[2px_2px_0px_#16150F] transition-all duration-150"
            >
              <span>Quero produzir meus criativos</span>
              <ArrowUpRight size={22} className="stroke-[2.5]" />
            </a>
            <p className="font-mono text-xs text-[#59574F] mt-2.5 text-center sm:text-left">
              Pagamento único · Acesso vitalício imediato
            </p>
          </div>
        </div>

        {/* Right Column: 3 Vertical 9:16 Video Cards Staggered */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 items-start">
            {heroVideos.map((video, idx) => {
              // Stagger offsets
              const marginTopClass = idx === 1 ? 'mt-7 sm:mt-10' : idx === 2 ? 'mt-3 sm:mt-5' : 'mt-0';

              return (
                <div
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className={`relative bg-[#FCFBF6] border-2 border-[#16150F] rounded-md overflow-hidden shadow-[3px_3px_0px_#16150F] group cursor-pointer transition-transform duration-200 hover:-translate-y-1.5 ${marginTopClass}`}
                >
                  <div className="aspect-[9/16] relative bg-neutral-900 overflow-hidden">
                    <img
                      src={video.image}
                      alt={video.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16150F]/85 via-transparent to-transparent"></div>

                    {/* Badge Number */}
                    <span className="absolute top-2 left-2 bg-[#FCFBF6]/90 border border-[#16150F] text-[10px] font-mono font-bold px-1.5 py-0.5 rounded">
                      {video.number}
                    </span>

                    {/* Duration */}
                    <span className="absolute top-2 right-2 bg-[#16150F]/70 text-white text-[10px] font-mono px-1 rounded">
                      {video.duration}
                    </span>

                    {/* Central Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#CDF13B] border-2 border-[#16150F] flex items-center justify-center shadow-[2px_2px_0px_#16150F] group-hover:scale-110 transition-transform">
                        <Play size={16} fill="#16150F" className="text-[#16150F] ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Card bottom text */}
                  <div className="p-2 sm:p-2.5 bg-[#FCFBF6] border-t border-[#16150F]">
                    <p className="font-bold text-[11px] sm:text-xs leading-snug line-clamp-2 text-[#16150F]">
                      {video.title}
                    </p>
                    <span className="text-[9px] font-mono text-[#59574F] mt-0.5 block">
                      {video.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hero Gallery Caption */}
          <div className="flex flex-wrap items-center justify-between mt-4 text-[11px] font-mono text-[#59574F] px-1 gap-2">
            <span>* Exemplos 100% gerados pelo método do treinamento.</span>
            <div className="flex items-center gap-3">
              <a href="#formatos" className="underline font-bold text-[#16150F] hover:text-black">
                Ver todos os 7 formatos ↗
              </a>
              <button
                onClick={() => setIsImageManagerOpen(true)}
                className="text-[#16150F] hover:underline flex items-center gap-1 font-semibold"
                title="Configurar links diretos das imagens do hero"
              >
                <Settings2 size={12} />
                <span>Editar links</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
