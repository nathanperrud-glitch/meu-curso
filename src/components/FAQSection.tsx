import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/initialData';
import { Search } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      className="py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-t border-[#C9C4B7]"
      data-purpose="faq-accordion"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-4 space-y-4">
          <div className="font-mono text-xs font-bold text-[#59574F] uppercase tracking-wider">
            TIRE SUAS DÚVIDAS
          </div>
          <h2 className="font-brico font-extrabold text-3xl sm:text-4xl lg:text-[43px] leading-tight text-[#16150F]">
            Ainda ficou com <br />
            <span className="mark-lima">alguma dúvida?</span>
          </h2>
          <p className="text-sm text-[#59574F] leading-relaxed">
            Perguntas frequentes sobre ferramentas, custos, formato das aulas e suporte aos alunos.
          </p>

          {/* Quick Search */}
          <div className="pt-2">
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#59574F]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar dúvida rápida..."
                className="w-full pl-9 pr-3 py-2 text-xs font-mono border-2 border-[#16150F] rounded-lg bg-[#FCFBF6] focus:outline-none focus:ring-2 focus:ring-[#CDF13B] shadow-[2px_2px_0px_#16150F]"
              />
            </div>
            {searchTerm && (
              <span className="text-[11px] font-mono text-[#59574F] mt-1.5 block">
                {filteredFaqs.length} resultado(s) encontrado(s)
              </span>
            )}
          </div>
        </div>

        {/* Right Column: 9 Accordions */}
        <div className="lg:col-span-8 divide-y divide-[#C9C4B7] border-y border-[#C9C4B7]">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <details key={idx} className="group py-4 cursor-pointer">
                <summary className="font-brico font-bold text-base sm:text-lg text-[#16150F] flex items-center justify-between list-none">
                  <span className="pr-4">{faq.question}</span>
                  <span className="group-open:rotate-45 transition-transform text-2xl font-mono text-[#16150F] ml-auto flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-[#59574F] leading-relaxed pr-6">
                  {faq.answer}
                </p>
              </details>
            ))
          ) : (
            <div className="py-8 text-center text-sm font-mono text-[#59574F]">
              Nenhuma pergunta encontrada com o termo "{searchTerm}". Tente outra palavra-chave.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
