import React, { forwardRef, useState } from 'react';
import { Search, X, Sparkles, TrendingUp, RotateCw } from 'lucide-react';

interface HeroSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectSuggestion: (term: string) => void;
  totalItemsCount: number;
}

const POPULAR_SEARCHES = [
  'iPhone 15',
  'Samsung Galaxy',
  'Computador estudante',
  'Internet residencial',
  'Toyota Ractis',
  'Smart TV 43',
  'Arroz 25kg',
  'Carta de condução',
];

export const HeroSearch = forwardRef<HTMLInputElement, HeroSearchProps>(
  ({ searchQuery, onSearchChange, onSelectSuggestion, totalItemsCount }, ref) => {
    const [isReloading, setIsReloading] = useState(false);

    const handleClear = () => {
      onSearchChange('');
    };

    const handleReloadPage = () => {
      setIsReloading(true);
      setTimeout(() => {
        window.location.reload();
      }, 200);
    };

    return (
      <section className="bg-gradient-to-b from-[#0F2847] via-[#14345c] to-[#0F2847] text-white py-12 px-4 sm:px-6 relative overflow-hidden">
        {/* Subtle geometric pattern for depth */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Top Row: Tagline Badge and Refresh Button */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Guia Prático e Transparente de Preços em Moçambique</span>
            </div>

            <button
              type="button"
              id="refresh-page-btn-top"
              onClick={handleReloadPage}
              title="Recarregar e atualizar página"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 text-white text-xs font-semibold transition-all duration-150 cursor-pointer shadow-sm"
              aria-label="Atualizar página do site"
            >
              <RotateCw className={`w-3.5 h-3.5 text-blue-200 ${isReloading ? 'animate-spin' : ''}`} />
              <span>Atualizar página</span>
            </button>
          </div>

          {/* Main Hero Title with integrated Reload button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Quanto custa em Moçambique?
            </h1>
            <button
              type="button"
              id="refresh-page-btn-hero"
              onClick={handleReloadPage}
              title="Recarregar página"
              className="p-2 sm:p-2.5 rounded-xl bg-blue-800/70 hover:bg-blue-700 active:scale-95 border border-blue-600/40 text-blue-100 hover:text-white transition-all shadow-sm flex items-center gap-1.5 text-xs font-medium cursor-pointer"
              aria-label="Recarregar página"
            >
              <RotateCw className={`w-4 h-4 text-emerald-400 ${isReloading ? 'animate-spin' : ''}`} />
              <span className="sm:hidden font-semibold">Recarregar</span>
            </button>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Consulte preços aproximados de produtos e serviços antes de comprar. 
            Pesquise celulares, computadores, internet, alimentos, carros e muito mais.
          </p>

          {/* Search Input Box */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-2 sm:p-2.5 shadow-xl shadow-slate-950/25 border border-white/20">
            <div className="relative flex items-center">
              <div className="absolute left-3 sm:left-4 text-slate-400 pointer-events-none flex items-center">
                <Search className="w-5 h-5 text-slate-500" />
              </div>

              <input
                ref={ref}
                id="main-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="O que estás procurando? Ex: iPhone 15, TV, Arroz, Toyota..."
                className="w-full pl-11 sm:pl-12 pr-10 py-3.5 text-base sm:text-lg text-slate-900 bg-transparent placeholder-slate-400 focus:outline-none font-medium"
                aria-label="Pesquisar produtos e preços"
              />

              {searchQuery && (
                <button
                  onClick={handleClear}
                  className="absolute right-3 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
                  title="Limpar pesquisa"
                  aria-label="Limpar pesquisa"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Suggestions Chips */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-blue-200">
            <span className="flex items-center gap-1 font-medium text-blue-300 mr-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              Mais procurados:
            </span>
            {POPULAR_SEARCHES.map((term) => (
              <button
                key={term}
                onClick={() => onSelectSuggestion(term)}
                className="bg-blue-900/60 hover:bg-blue-800 text-blue-100 hover:text-white px-2.5 py-1 rounded-lg border border-blue-700/50 transition-colors cursor-pointer text-xs"
              >
                {term}
              </button>
            ))}
          </div>

          {/* Value currency indicator */}
          <div className="mt-6 text-xs text-blue-300/80">
            <span>Todos os valores expressos em <strong>Meticais (MT)</strong> • Consulta 100% gratuita</span>
          </div>
        </div>
      </section>
    );
  }
);

HeroSearch.displayName = 'HeroSearch';
