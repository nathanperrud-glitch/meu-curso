import React from 'react';
import { useApp } from '../context/AppContext';
import { Link2, ArrowUpRight, UserCheck } from 'lucide-react';

export const MainHeader: React.FC = () => {
  const { setIsImageManagerOpen, openCheckout } = useApp();

  return (
    <header className="w-full bg-[#F4F1E8]/95 backdrop-blur-sm border-b border-[#16150F] sticky top-0 z-30 px-4 sm:px-8 lg:px-12 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-brico font-extrabold text-2xl md:text-3xl tracking-tighter text-[#16150F] flex items-center gap-1.5"
        >
          <span>avatarhype</span>
          <span className="text-[10px] bg-[#CDF13B] text-[#16150F] px-1.5 py-0.5 rounded border border-[#16150F] font-mono tracking-normal font-bold">
            AI
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-tight text-[#16150F]/90">
          <a className="hover:text-[#16150F] hover:underline transition-colors" href="#formatos">
            Os formatos
          </a>
          <a className="hover:text-[#16150F] hover:underline transition-colors" href="#metodo">
            O método
          </a>
          <a className="hover:text-[#16150F] hover:underline transition-colors" href="#plataforma">
            A área de alunos
          </a>
          <a className="hover:text-[#16150F] hover:underline transition-colors" href="#custos">
            Custos por uso
          </a>
          <a
            className="underline decoration-[#16150F] decoration-2 underline-offset-4 hover:text-black flex items-center gap-0.5 font-bold"
            href="#oferta"
          >
            <span>Ver cursos e preço</span>
            <ArrowUpRight size={13} />
          </a>
        </nav>

        {/* Action Buttons: Direct Image Link Manager + Já sou aluno */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsImageManagerOpen(true)}
            className="inline-flex items-center gap-1.5 bg-[#FCFBF6] hover:bg-[#EFEBDD] text-[#16150F] text-xs font-mono font-bold px-3 py-1.5 rounded border border-[#16150F] shadow-[2px_2px_0px_#16150F] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            title="Visualizar e personalizar links diretos das imagens do HTML"
          >
            <Link2 size={13} className="text-[#16150F]" />
            <span className="hidden sm:inline">Links das Imagens</span>
            <span className="sm:hidden">Imagens</span>
          </button>

          <button
            onClick={() => openCheckout('bundle')}
            className="bg-[#FCFBF6] hover:bg-[#CDF13B] text-[#16150F] text-xs md:text-sm font-bold px-3.5 py-1.5 rounded border border-[#16150F] shadow-[2px_2px_0px_#16150F] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-1.5"
          >
            <UserCheck size={14} className="hidden sm:inline" />
            <span>Já sou aluno</span>
          </button>
        </div>
      </div>
    </header>
  );
};
