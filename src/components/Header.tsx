import React, { useState } from 'react';
import { Search, Menu, X, Tag } from 'lucide-react';

interface HeaderProps {
  onSearchFocus?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearchFocus }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="inicio" className="sticky top-0 z-40 bg-[#0F2847] text-white border-b border-blue-900/60 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          id="logo-link"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-lg shadow-sm group-hover:bg-emerald-400 transition-colors">
            MZ
          </div>
          <div>
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-xl font-bold tracking-tight text-white">Preço MZ</span>
              <span className="text-[10px] uppercase font-bold tracking-wider bg-blue-800 text-blue-200 px-1.5 py-0.5 rounded">
                Moçambique
              </span>
            </div>
            <p className="text-[11px] text-blue-200/80 leading-tight">Guia de Preços Informativos</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-blue-100">
          <button 
            onClick={() => scrollToSection('inicio')} 
            className="hover:text-white hover:underline underline-offset-8 transition-colors cursor-pointer"
            id="nav-inicio"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('destaques')} 
            className="hover:text-white hover:underline underline-offset-8 transition-colors cursor-pointer"
            id="nav-destaques"
          >
            Destaques
          </button>
          <button 
            onClick={() => scrollToSection('categorias')} 
            className="hover:text-white hover:underline underline-offset-8 transition-colors cursor-pointer"
            id="nav-categorias"
          >
            Categorias
          </button>
          <button 
            onClick={() => scrollToSection('precos')} 
            className="hover:text-white hover:underline underline-offset-8 transition-colors cursor-pointer"
            id="nav-precos"
          >
            Preços
          </button>
          <button 
            onClick={() => scrollToSection('sobre')} 
            className="hover:text-white hover:underline underline-offset-8 transition-colors cursor-pointer"
            id="nav-sobre"
          >
            Sobre
          </button>
        </nav>

        {/* Right Search shortcut & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          {onSearchFocus && (
            <button
              onClick={onSearchFocus}
              className="hidden sm:flex items-center gap-1.5 text-xs bg-blue-900/80 hover:bg-blue-800 text-blue-100 px-3 py-1.5 rounded-md border border-blue-700/50 transition-colors"
              title="Pesquisar preços"
              id="header-search-btn"
            >
              <Search className="w-3.5 h-3.5 text-emerald-400" />
              <span>Pesquisar</span>
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-900/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Abrir menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1a30] border-b border-blue-900 px-4 pt-3 pb-5 space-y-3" id="mobile-nav-panel">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-900/70"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('destaques')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:bg-blue-900/70"
          >
            🔥 Preços em Destaque
          </button>
          <button 
            onClick={() => scrollToSection('categorias')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:bg-blue-900/70"
          >
            📂 Categorias
          </button>
          <button 
            onClick={() => scrollToSection('precos')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:bg-blue-900/70"
          >
            🏷️ Todos os Preços
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:bg-blue-900/70"
          >
            ℹ️ Sobre o Preço MZ
          </button>
          <div className="pt-2 border-t border-blue-900/80 text-xs text-blue-300 px-3">
            Moçambique • Valores em Meticais (MT)
          </div>
        </div>
      )}
    </header>
  );
};
