import React from 'react';
import { useApp } from '../context/AppContext';
import { Link2 } from 'lucide-react';

export const MainFooter: React.FC = () => {
  const { setIsImageManagerOpen } = useApp();

  return (
    <footer className="w-full bg-[#F4F1E8] border-t border-[#16150F] py-8 px-4 sm:px-8 lg:px-12 text-xs font-mono text-[#59574F]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-brico font-bold text-base text-[#16150F]">avatarhype</span>
          <span>© 2026. Todos os direitos reservados.</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <button
            onClick={() => setIsImageManagerOpen(true)}
            className="hover:text-[#16150F] underline flex items-center gap-1 font-bold text-[#16150F]"
          >
            <Link2 size={12} />
            <span>Gerenciar links das imagens</span>
          </button>
          <a className="hover:text-[#16150F] underline" href="#">
            Aviso legal
          </a>
          <a className="hover:text-[#16150F] underline" href="#">
            Privacidade
          </a>
          <a className="hover:text-[#16150F] underline" href="#">
            Termos
          </a>
        </div>
      </div>
    </footer>
  );
};
