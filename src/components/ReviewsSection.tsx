import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      className="py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-t border-[#C9C4B7]"
      data-purpose="reviews-and-social-proof"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="font-mono text-xs font-bold text-[#59574F] uppercase tracking-wider mb-2">
            QUEM JÁ ESTÁ NO CAMPO DE BATALHA
          </div>
          <h2 className="font-brico font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#16150F]">
            Eles já estão criando. <br />
            <span className="mark-lima">Veja o que contam.</span>
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-sm text-[#59574F] leading-relaxed">
            Explore relatos de quem nunca tinha gerado uma imagem em inteligência artificial e de gestores experientes que trocaram diárias de filmagem por scripts rápidos.
          </p>
        </div>
      </div>

      {/* 3 Metrics in Line */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8 border-b border-[#C9C4B7] text-center sm:text-left">
        <div className="bg-[#FCFBF6] border-2 border-[#16150F] p-4 sm:p-5 rounded-xl shadow-[2px_2px_0px_#16150F]">
          <div className="font-brico font-extrabold text-3xl text-[#16150F] flex items-center justify-center sm:justify-start gap-2">
            <span>4,8</span>
            <span className="text-sm font-sans font-normal text-[#59574F]">/5</span>
          </div>
          <span className="text-xs font-mono text-[#59574F] block mt-0.5">
            76 avaliações na plataforma
          </span>
        </div>

        <div className="bg-[#FCFBF6] border-2 border-[#16150F] p-4 sm:p-5 rounded-xl shadow-[2px_2px_0px_#16150F]">
          <div className="font-brico font-extrabold text-3xl text-emerald-800 flex items-center justify-center sm:justify-start gap-2">
            <span>4,5</span>
            <span className="text-sm font-sans font-normal text-[#59574F]">/5</span>
          </div>
          <span className="text-xs font-mono text-[#59574F] block mt-0.5">
            Classificação média Trustpilot
          </span>
        </div>

        <div className="bg-[#FCFBF6] border-2 border-[#16150F] p-4 sm:p-5 rounded-xl shadow-[2px_2px_0px_#16150F]">
          <div className="font-brico font-extrabold text-3xl text-[#16150F]">
            +9.913
          </div>
          <span className="text-xs font-mono text-[#59574F] block mt-0.5">
            Alunos matriculados
          </span>
        </div>
      </div>

      {/* 3 Detailed Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        {/* Review 1 */}
        <div className="bg-[#FCFBF6] border-2 border-[#16150F] rounded-2xl p-5 sm:p-6 shadow-[3px_3px_0px_#16150F] flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="bg-[#EFEBDD] px-2 py-0.5 rounded border border-[#16150F] font-bold text-[#16150F]">
                AVALIAÇÃO VERIFICADA
              </span>
              <div className="flex text-[#E5A500]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#E5A500" strokeWidth={0} />
                ))}
              </div>
            </div>
            <h4 className="font-brico font-bold text-base text-[#16150F]">
              “Parecia piada... Não era pegadinha!”
            </h4>
            <p className="text-xs sm:text-sm text-[#59574F] leading-relaxed">
              “Fiquei desconfiado achando que os vídeos ficariam com aquela cara borrada de inteligência artificial de 2023. As técnicas de iluminação e consistência facial que ele ensina deixam 100% natural.”
            </p>
          </div>
          <div className="pt-4 border-t border-[#C9C4B7] mt-4 text-xs font-mono text-[#59574F]">
            <strong className="text-[#16150F] block">Vinicius C.</strong>
            <span>E-commerce de Cosméticos</span>
          </div>
        </div>

        {/* Review 2 */}
        <div className="bg-[#FCFBF6] border-2 border-[#16150F] rounded-2xl p-5 sm:p-6 shadow-[3px_3px_0px_#16150F] flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="bg-[#EFEBDD] px-2 py-0.5 rounded border border-[#16150F] font-bold text-[#16150F]">
                MERCADO EXTERNO
              </span>
              <div className="flex text-[#E5A500]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#E5A500" strokeWidth={0} />
                ))}
              </div>
            </div>
            <h4 className="font-brico font-bold text-base text-[#16150F]">
              “Enviei pro meu cliente e ele pediu mais quatro.”
            </h4>
            <p className="text-xs sm:text-sm text-[#59574F] leading-relaxed">
              “Cobro R$ 350 por criativo finalizado para lojas de drop e infoprodutores. O custo para gerar na ferramenta foi de menos de R$ 8. Minha margem virou quase 95%.”
            </p>
          </div>
          <div className="pt-4 border-t border-[#C9C4B7] mt-4 text-xs font-mono text-[#59574F]">
            <strong className="text-[#16150F] block">Marcela D.</strong>
            <span>Gestora de Tráfego Direto</span>
          </div>
        </div>

        {/* Review 3 */}
        <div className="bg-[#FCFBF6] border-2 border-[#16150F] rounded-2xl p-5 sm:p-6 shadow-[3px_3px_0px_#16150F] flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="bg-[#EFEBDD] px-2 py-0.5 rounded border border-[#16150F] font-bold text-[#16150F]">
                ECONOMIA DE TEMPO
              </span>
              <div className="flex text-[#E5A500]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#E5A500" strokeWidth={0} />
                ))}
              </div>
            </div>
            <h4 className="font-brico font-bold text-base text-[#16150F]">
              “O melhor conteúdo de anúncios que já vi.”
            </h4>
            <p className="text-xs sm:text-sm text-[#59574F] leading-relaxed">
              “Eu perdia sábados inteiros gravando e errando fala em frente ao ring light. Agora sento, coloco a ideia no Estrategista, gero os takes e em 1 hora tenho 5 anúncios prontos pro teste.”
            </p>
          </div>
          <div className="pt-4 border-t border-[#C9C4B7] mt-4 text-xs font-mono text-[#59574F]">
            <strong className="text-[#16150F] block">Felipe R.</strong>
            <span>Infoprodutor</span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <a
          href="#oferta"
          className="inline-flex items-center gap-2 bg-[#CDF13B] text-[#16150F] font-brico font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl border-2 border-[#16150F] shadow-[3px_3px_0px_#16150F] hover:shadow-[5px_5px_0px_#16150F] transition-all"
        >
          <span>Quero começar a criar também</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
};
