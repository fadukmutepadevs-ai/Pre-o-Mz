import React from 'react';
import { AlertCircle, Store, ShieldCheck, MapPin } from 'lucide-react';

export const PriceDisclaimer: React.FC = () => {
  return (
    <section className="py-8 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="bg-amber-50/80 border border-amber-200/90 rounded-2xl p-5 sm:p-7 text-slate-800">
        <div className="flex items-start gap-3.5 mb-4">
          <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-700 shrink-0 mt-0.5">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Importante: Aviso sobre os Preços</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1 leading-relaxed">
              “Os preços apresentados no Preço MZ são <strong>aproximados e informativos</strong> e podem variar de acordo com a loja, cidade, marca, modelo, disponibilidade e período. Consulte sempre o vendedor antes de realizar uma compra.”
            </p>
          </div>
        </div>

        {/* 3 Practical Bullet Points for Buyers in Mozambique */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 border-t border-amber-200/60 mt-3 text-xs text-slate-600">
          <div className="flex items-start gap-2">
            <Store className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800 block">Compare Lojas</span>
              <span>Preços podem variar entre lojas formais, armazéns grossistas e retalho de bairro.</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800 block">Exija Garantia</span>
              <span>Em eletrónicos e eletrodomésticos, certifique-se da nota fiscal e período de garantia.</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800 block">Variação Regional</span>
              <span>Custos de transporte interprovincial podem influenciar o preço final nas províncias.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
