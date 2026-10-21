import React, { useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { BRAND_CAROUSEL_ITEMS } from '../data/initialData';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';

export const BrandCarousel: React.FC = () => {
  const { getImage, setActiveVideo } = useApp();
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (trackRef.current) {
      const scrollPos = trackRef.current.scrollLeft;
      const index = Math.round(scrollPos / 290) + 1;
      setCurrentIndex(Math.min(Math.max(index, 1), 6));
    }
  };

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full" data-purpose="brand-ads-carousel">
      {/* Header with two columns */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#C9C4B7]">
        <div>
          <div className="font-mono text-xs font-bold text-[#59574F] uppercase tracking-wider mb-2">
            CAMPANHAS REAIS NO GERENCIADOR
          </div>
          <h2 className="font-brico font-extrabold text-3xl sm:text-4xl lg:text-[46px] leading-tight text-[#16150F]">
            Essa variedade <br />
            <span className="mark-lima">dá resultado para nós na Meta.</span>
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-sm text-[#59574F] leading-relaxed">
            Veja como o mesmo método gera anúncios completamente diferentes. A galeria permite comparar ganchos, cenas, personagens e montagens que usamos em nossas próprias campanhas pagas.
          </p>

          {/* Controls */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={scrollLeft}
              aria-label="Vídeo anterior"
              className="w-9 h-9 rounded bg-[#FCFBF6] border-2 border-[#16150F] flex items-center justify-center shadow-[2px_2px_0px_#16150F] hover:bg-[#CDF13B] transition-colors font-mono font-bold"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Próximo vídeo"
              className="w-9 h-9 rounded bg-[#FCFBF6] border-2 border-[#16150F] flex items-center justify-center shadow-[2px_2px_0px_#16150F] hover:bg-[#CDF13B] transition-colors font-mono font-bold"
            >
              <ArrowRight size={16} />
            </button>
            <span className="text-xs font-mono text-[#59574F] ml-2">
              {currentIndex} de 6 criativos
            </span>
          </div>
        </div>
      </div>

      {/* 9:16 Video Rail */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-6 scroll-smooth snap-x snap-mandatory"
      >
        {BRAND_CAROUSEL_ITEMS.map((item) => {
          const imageUrl = getImage(item.slotKey);

          return (
            <div
              key={item.id}
              onClick={() =>
                setActiveVideo({
                  id: item.id,
                  slotKey: item.slotKey,
                  number: item.number,
                  title: item.title,
                  subtitle: item.details,
                  tag: 'META ADS',
                  duration: item.details.split('·')[0].replace('Duração:', '').trim(),
                  image: imageUrl,
                  aspectRatio: '9/16',
                  description: `${item.title}. CTR alcançado: ${item.ctr} com CPM de ${item.cpm}.`,
                  estimatedCost: item.costToMake,
                  promptUsed: `Realistic ad video footage, hook curiosity, native mobile vertical framing 9:16.`
                })
              }
              className="w-[240px] sm:w-[280px] flex-shrink-0 snap-start bg-[#FCFBF6] border-2 border-[#16150F] rounded-xl p-2.5 shadow-[3px_3px_0px_#16150F] cursor-pointer hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[9/16] relative bg-neutral-900 rounded-lg overflow-hidden border border-[#16150F]">
                <img
                  src={imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-[#FCFBF6] text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-[#16150F]">
                  {item.number}
                </span>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#CDF13B] border-2 border-[#16150F] flex items-center justify-center shadow-[2px_2px_0px_#16150F] hover:scale-105 transition-transform">
                    <Play size={16} fill="#16150F" className="text-[#16150F] ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="mt-2.5 px-0.5">
                <p className="font-bold text-xs text-[#16150F] truncate">{item.title}</p>
                <span className="text-[10px] font-mono text-[#59574F] block mt-0.5">
                  {item.details}
                </span>
                <div className="flex items-center justify-between text-[10px] font-mono text-emerald-800 font-semibold mt-1 pt-1 border-t border-[#C9C4B7]">
                  <span>CTR: {item.ctr}</span>
                  <span>Custo IA: {item.costToMake}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
