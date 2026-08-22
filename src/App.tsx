import React, { useState, useMemo, useRef } from 'react';
import { Header } from './components/Header';
import { HeroSearch } from './components/HeroSearch';
import { FeaturedPrices } from './components/FeaturedPrices';
import { CategoryFilter } from './components/CategoryFilter';
import { PriceCatalog } from './components/PriceCatalog';
import { PriceDisclaimer } from './components/PriceDisclaimer';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { CATEGORIES, INITIAL_PRICES } from './data/pricesData';
import { CategoryId } from './types';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryId>('todos');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter featured items
  const featuredItems = useMemo(() => {
    return INITIAL_PRICES.filter((item) => item.isFeatured);
  }, []);

  // Compute item counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryId, number> = {
      todos: INITIAL_PRICES.length,
      smartphones: 0,
      computadores: 0,
      internet: 0,
      eletrodomesticos: 0,
      alimentacao: 0,
      carros: 0,
      servicos: 0,
    };

    INITIAL_PRICES.forEach((item) => {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    });

    return counts;
  }, []);

  const handleSelectCategory = (categoryId: CategoryId) => {
    setActiveCategory(categoryId);
    // Smooth scroll to catalog section
    const catalogEl = document.getElementById('precos');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSuggestion = (term: string) => {
    setSearchQuery(term);
    setActiveCategory('todos');
    const catalogEl = document.getElementById('precos');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setActiveCategory('todos');
  };

  const handleSearchFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
      searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleViewAll = () => {
    setActiveCategory('todos');
    setSearchQuery('');
    const catalogEl = document.getElementById('precos');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* 1. CABEÇALHO */}
      <Header onSearchFocus={handleSearchFocus} />

      {/* 2. DESTAQUE PRINCIPAL & PESQUISA */}
      <main className="flex-grow">
        <HeroSearch
          ref={searchInputRef}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectSuggestion={handleSelectSuggestion}
          totalItemsCount={INITIAL_PRICES.length}
        />

        {/* 3. PREÇOS EM DESTAQUE (Only shown when not actively filtering a specific query/category or at the top) */}
        {!searchQuery && activeCategory === 'todos' && (
          <FeaturedPrices
            featuredItems={featuredItems}
            onSelectCategory={handleSelectCategory}
            onViewAll={handleViewAll}
          />
        )}

        {/* 4. CATEGORIAS */}
        <CategoryFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          categoryCounts={categoryCounts}
        />

        {/* 5. ÚLTIMOS PREÇOS PESQUISADOS / CATÁLOGO COMPLETO */}
        <PriceCatalog
          items={INITIAL_PRICES}
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          onClearFilters={handleClearFilters}
          onSelectCategory={handleSelectCategory}
        />

        {/* 6. AVISO SOBRE OS PREÇOS */}
        <PriceDisclaimer />

        {/* 7. SOBRE O PREÇO MZ */}
        <AboutSection />
      </main>

      {/* 8. RODAPÉ */}
      <Footer />
    </div>
  );
}
