import React from 'react';
import { Target, Zap, Shield, Search } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-12 px-4 sm:px-6 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Sobre o Preço MZ
          </h2>
          <p className="text-base text-slate-700 font-medium mt-3 max-w-2xl mx-auto leading-relaxed">
            “O Preço MZ é uma plataforma independente criada para facilitar a pesquisa de preços de produtos e serviços em Moçambique.”
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center mb-3">
              <Target className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Nosso Objetivo</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Responder de forma rápida e clara à pergunta: <strong>“Quanto custa?”</strong>, ajudando consumidores e famílias moçambicanas a planearem os seus orçamentos.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Extremamente Leve</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Desenvolvido com foco total em velocidade e economia de megas, funcionando de forma instantânea mesmo em conexões de internet móvel 3G/4G mais lentas.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center mb-3">
              <Shield className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Independente e Gratuito</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Não vendemos produtos nem cobramos taxas. Nosso conteúdo é puramente informativo e baseado em pesquisas de mercado de referência local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
