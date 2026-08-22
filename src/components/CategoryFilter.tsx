import React from 'react';
import { CategoryId, CategoryOption } from '../types';
import { LayoutGrid } from 'lucide-react';

interface CategoryFilterProps {
  categories: CategoryOption[];
  activeCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
  categoryCounts: Record<CategoryId, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <section id="categorias" className="py-8 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayoutGrid className="w-5 h-5 text-blue-900" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Categorias
          </h2>
        </div>
        <span className="text-xs text-slate-500 hidden sm:inline">
          Toque para filtrar na mesma página
        </span>
      </div>

      {/* Grid of 7 Categories + Todos */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = categoryCounts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              id={`cat-btn-${cat.id}`}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all duration-150 cursor-pointer min-h-[76px] ${
                isActive
                  ? 'bg-blue-900 text-white border-blue-900 shadow-sm ring-2 ring-blue-900/20'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300 hover:bg-slate-50/80'
              }`}
            >
              <span className="text-xl sm:text-2xl mb-1 select-none" aria-hidden="true">
                {cat.emoji}
              </span>
              <span className={`text-xs font-semibold leading-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
                {cat.label}
              </span>
              <span className={`text-[10px] mt-0.5 ${isActive ? 'text-blue-200' : 'text-slate-400'}`}>
                {count} {count === 1 ? 'item' : 'itens'}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
