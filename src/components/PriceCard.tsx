import React, { useState } from 'react';
import { PriceItem } from '../types';
import { MapPin, Calendar, Check, Copy, Info, Sparkles } from 'lucide-react';

interface PriceCardProps {
  item: PriceItem;
  onSelectCategory?: (category: PriceItem['category']) => void;
}

export const PriceCard: React.FC<PriceCardProps> = ({ item, onSelectCategory }) => {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopy = () => {
    const text = `${item.title}: ${item.priceDisplay} (Fonte: Preço MZ)`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <article 
      id={`card-${item.id}`}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all duration-200 group relative"
    >
      <div>
        {/* Product / Service Image Banner */}
        <div className="relative h-44 sm:h-48 w-full bg-slate-100 overflow-hidden">
          {item.imageUrl && !imgError ? (
            <img
              src={item.imageUrl}
              alt={item.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
              <span className="text-4xl select-none mb-1" aria-hidden="true">
                {item.emoji}
              </span>
              <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                {item.categoryLabel}
              </span>
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 pointer-events-none" />

          {/* Top badges: Emoji + Category (Left) and Copy button (Right) */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 z-10">
            <div className="flex items-center gap-1.5 backdrop-blur-md bg-white/90 shadow-sm px-2.5 py-1 rounded-full border border-white/50">
              <span className="text-base select-none" aria-hidden="true">
                {item.emoji}
              </span>
              <button
                type="button"
                onClick={() => onSelectCategory && onSelectCategory(item.category)}
                className="text-[11px] font-semibold text-slate-800 hover:text-blue-900 tracking-wide transition-colors"
              >
                {item.categoryLabel}
              </button>
            </div>

            <button
              onClick={handleCopy}
              title="Copiar preço aproximado"
              className="backdrop-blur-md bg-white/90 hover:bg-white text-slate-700 shadow-sm p-1.5 rounded-full border border-white/50 transition-colors flex items-center gap-1 text-xs"
              aria-label={`Copiar preço de ${item.title}`}
            >
              {copied ? (
                <span className="text-emerald-700 font-bold flex items-center gap-1 text-[11px] px-1">
                  <Check className="w-3.5 h-3.5" /> Copiado
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Featured Tag on Image if applicable */}
          {item.isFeatured && (
            <div className="absolute bottom-2.5 left-2.5 z-10">
              <span className="inline-flex items-center gap-1 bg-amber-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                <Sparkles className="w-3 h-3 fill-slate-950" />
                Destaque
              </span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5">
          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-900 transition-colors mb-2.5">
            {item.title}
          </h3>

          {/* Approximate Price Highlighting (Soft Green Background) */}
          <div className="my-2.5 p-2.5 sm:p-3 bg-emerald-50/90 border border-emerald-200/80 rounded-lg">
            <div className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">
              Preço aproximado {item.unit ? `(${item.unit.replace('/', '')})` : ''}
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-emerald-700 tracking-tight">
              {item.priceDisplay}
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-3 leading-relaxed">
            {item.description}
          </p>

          {/* Tip / Note when available */}
          {item.tips && (
            <div className="mb-3 text-[11px] text-slate-600 bg-slate-50 border-l-2 border-amber-400 p-2 rounded-r flex items-start gap-1.5">
              <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
              <span className="leading-tight">{item.tips}</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Info: Location & Updated Date */}
      <div className="px-4 sm:px-5 pb-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-y-1 text-[11px] text-slate-500 bg-slate-50/50">
        <div className="flex items-center gap-1" title="Localização de referência">
          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="truncate max-w-[170px]">{item.location}</span>
        </div>
        <div className="flex items-center gap-1 font-medium text-slate-400">
          <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
          <span>{item.updatedDate}</span>
        </div>
      </div>
    </article>
  );
};
