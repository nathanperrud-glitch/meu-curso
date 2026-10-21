import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/initialData';

export const StickyBottomBar: React.FC = () => {
  const { currency, openCheckout } = useApp();
  const [isVisible, setIsVisible] = useState(false);

  const bundlePlan = PRICING_PLANS[0];
  const price = currency === 'BRL' ? `R$ ${bundlePlan.priceBRL}` : `$ ${bundlePlan.priceUSD}`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroThreshold = 450;
      const ofertaElement = document.getElementById('oferta');

      if (!ofertaElement) {
        setIsVisible(scrollY > heroThreshold);
        return;
      }

      const ofertaRect = ofertaElement.getBoundingClientRect();
      const inOferta = ofertaRect.top <= window.innerHeight && ofertaRect.bottom >= 0;

      setIsVisible(scrollY > heroThreshold && !inOferta);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Barra de oferta rápida"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#16150F] text-[#F4F1E8] border-t-2 border-[#16150F] px-4 py-2.5 sm:py-3 shadow-2xl transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="hidden sm:inline-block w-2.5 h-2.5 rounded-full bg-[#CDF13B] animate-pulse"></span>
          <div className="truncate">
            <span className="font-brico font-bold text-xs sm:text-sm text-white block sm:inline mr-2">
              Pacote Completo:
            </span>
            <span className="font-mono text-xs text-[#F4F1E8]/70 hidden md:inline">
              UGC Realista + Animados + DualCast
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <div className="text-right">
            <span className="font-brico font-extrabold text-base sm:text-xl text-[#CDF13B] block leading-none">
              {price}
            </span>
            <span className="text-[10px] font-mono text-[#F4F1E8]/60 hidden sm:block">
              vitalício
            </span>
          </div>

          <button
            onClick={() => openCheckout('bundle')}
            className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#CDF13B] hover:bg-[#bde02c] text-[#16150F] font-brico font-bold text-xs sm:text-sm px-4 py-2 rounded border border-[#16150F] shadow-[2px_2px_0px_#16150F] transition-all cursor-pointer"
          >
            <span>Ver Oferta</span>
            <ArrowUpRight size={14} className="stroke-[2.5]" />
          </button>
        </div>
      </div>
    </aside>
  );
};
