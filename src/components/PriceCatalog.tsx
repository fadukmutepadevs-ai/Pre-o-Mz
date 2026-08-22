import React, { useState, useMemo } from 'react';
import { PriceItem, CategoryId } from '../types';
import { PriceCard } from './PriceCard';
import { Tag, SlidersHorizontal, SearchX, ArrowUpDown } from 'lucide-react';

interface PriceCatalogProps {
  items: PriceItem[];
  activeCategory: CategoryId;
  searchQuery: string;
  onClearFilters: () => void;
  onSelectCategory: (category: CategoryId) => void;
}

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'title';

export const PriceCatalog: React.FC<PriceCatalogProps> = ({
  items,
  activeCategory,
  searchQuery,
  onClearFilters,
  onSelectCategory,
}) => {
  const [sortBy, setSortBy] = useState<SortOption>('default');

  const filteredAndSortedItems = useMemo(() => {
    let result = [...items];

    // Filter by Category
    if (activeCategory !== 'todos') {
      result = result.filter((item) => item.category === activeCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(q);
        const descMatch = item.description.toLowerCase().includes(q);
        const locMatch = item.location.toLowerCase().includes(q);
        const tagMatch = item.tags.some((tag) => tag.toLowerCase().includes(q));
        const catMatch = item.categoryLabel.toLowerCase().includes(q);
        return titleMatch || descMatch || locMatch || tagMatch || catMatch;
      });
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.minPrice - b.minPrice);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.maxPrice - a.maxPrice);
    } else if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [items, activeCategory, searchQuery, sortBy]);

  return (
    <section id="precos" className="py-10 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-3 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-blue-900" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Últimos Preços Pesquisados
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {searchQuery ? (
              <span>
                Resultados para <strong className="text-slate-800">"{searchQuery}"</strong>
                {activeCategory !== 'todos' && ` na categoria selecionada`} ({filteredAndSortedItems.length} encontrados)
              </span>
            ) : (
              <span>
                Consulta completa com valores aproximados de referência para Moçambique ({filteredAndSortedItems.length} itens)
              </span>
            )}
          </p>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <label htmlFor="sort-select" className="text-xs text-slate-500 flex items-center gap-1">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span>Ordenar:</span>
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-blue-800"
          >
            <option value="default">Recomendados / Recentes</option>
            <option value="price-asc">Menor Preço (MT)</option>
            <option value="price-desc">Maior Preço (MT)</option>
            <option value="title">Nome (A - Z)</option>
          </select>
        </div>
      </div>

      {/* Grid of Results */}
      {filteredAndSortedItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredAndSortedItems.map((item) => (
            <PriceCard
              key={item.id}
              item={item}
              onSelectCategory={onSelectCategory}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-xl border border-dashed border-slate-300 p-8 text-center max-w-lg mx-auto my-6">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-3">
            <SearchX className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800 mb-1">
            Nenhum preço encontrado
          </h3>
          <p className="text-xs text-slate-500 mb-4 leading-relaxed">
            Não encontramos resultados para "{searchQuery}". Tente pesquisar por outro termo ou categoria.
          </p>
          <button
            onClick={onClearFilters}
            className="px-4 py-2 text-xs font-semibold bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            Limpar Filtros e Ver Todos
          </button>
        </div>
      )}
    </section>
  );
};
