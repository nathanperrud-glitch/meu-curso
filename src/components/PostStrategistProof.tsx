import React from 'react';
import { Star } from 'lucide-react';

export const PostStrategistProof: React.FC = () => {
  return (
    <section className="py-6 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full" data-purpose="strategist-proof">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#FCFBF6] border-2 border-[#16150F] rounded-xl p-4 sm:p-5 shadow-[3px_3px_0px_#16150F] text-xs">
          <div className="flex items-center justify-between font-mono font-bold mb-1.5">
            <span className="text-[#16150F]">AGILIDADE DE PLANEJAMENTO</span>
            <div className="flex text-[#E5A500]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="#E5A500" strokeWidth={0} />
              ))}
            </div>
          </div>
          <p className="text-[#59574F] italic leading-relaxed">
            “O prompt do Estrategista me economizou horas de brainstorm. Ele já dá o gancho, a descrição visual da cena e até o tom de voz da IA.”
          </p>
          <span className="block text-right font-mono font-bold mt-2 text-[#16150F]">
            — Rafael B., Agência Scale
          </span>
        </div>

        <div className="bg-[#FCFBF6] border-2 border-[#16150F] rounded-xl p-4 sm:p-5 shadow-[3px_3px_0px_#16150F] text-xs">
          <div className="flex items-center justify-between font-mono font-bold mb-1.5">
            <span className="text-[#16150F]">VENDA PARA CLIENTE INTERNACIONAL</span>
            <div className="flex text-[#E5A500]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="#E5A500" strokeWidth={0} />
              ))}
            </div>
          </div>
          <p className="text-[#59574F] italic leading-relaxed">
            “Criei um anúncio completo em francês para um e-commerce sem falar uma única palavra no idioma. O cliente aprovou de primeira.”
          </p>
          <span className="block text-right font-mono font-bold mt-2 text-[#16150F]">
            — Amanda V., Freelancer
          </span>
        </div>
      </div>
    </section>
  );
};
