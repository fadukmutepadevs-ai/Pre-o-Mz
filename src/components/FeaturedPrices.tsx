import React from 'react';
import { PriceItem } from '../types';
import { PriceCard } from './PriceCard';
import { Flame, ArrowRight } from 'lucide-react';

interface FeaturedPricesProps {
  featuredItems: PriceItem[];
  onSelectCategory: (category: PriceItem['category']) => void;
  onViewAll: () => void;
}

export const FeaturedPrices: React.FC<FeaturedPricesProps> = ({
  featuredItems,
  onSelectCategory,
  onViewAll,
}) => {
  return (
    <section id="destaques" className="py-10 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-2 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Preços em Destaque
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Os itens e serviços com maior volume de consultas no mercado moçambicano.
          </p>
        </div>

        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-800 hover:text-blue-950 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors w-fit"
          id="btn-ver-todos-destaques"
        >
          <span>Ver lista completa</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {featuredItems.map((item) => (
          <PriceCard
            key={item.id}
            item={item}
            onSelectCategory={onSelectCategory}
          />
        ))}
      </div>
    </section>
  );
};
