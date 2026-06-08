import React, { useState } from 'react';
import { TOOLS } from '@/data';
import { ToolCard } from '@/components/ToolCard';

interface HomeViewProps {
  favorites: string[];
  toggleFavorite: (id: string, e: React.MouseEvent) => void;
  onNavigate: (view: string) => void;
}

export function HomeView({ favorites, toggleFavorite, onNavigate }: HomeViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = ['all', 'economics', 'nutrients', 'comparison', 'planning'];
  
  const filteredTools = TOOLS.filter(t => activeCategory === 'all' || t.category === activeCategory);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Hydroponic Planning Hub</h2>
        <p className="text-[10px] uppercase font-bold text-slate-500 mt-1 tracking-wider">Estimate costs, plan nutrients, and forecast profitability.</p>
      </div>

      <div className="flex gap-2 pb-2 overflow-x-auto no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${
              activeCategory === cat 
                ? 'bg-slate-900 text-white' 
                : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTools.map(tool => (
          <ToolCard 
            key={tool.id} 
            tool={tool} 
            isFavorite={favorites.includes(tool.id)}
            onToggleFavorite={toggleFavorite}
            onOpen={onNavigate}
          />
        ))}
        {filteredTools.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500">
            No tools found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
