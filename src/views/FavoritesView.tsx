import React from 'react';
import { TOOLS } from '@/data';
import { ToolCard } from '@/components/ToolCard';

interface FavoritesViewProps {
  favorites: string[];
  toggleFavorite: (id: string, e: React.MouseEvent) => void;
  onNavigate: (view: string) => void;
}

export function FavoritesView({ favorites, toggleFavorite, onNavigate }: FavoritesViewProps) {
  const favoriteTools = TOOLS.filter(t => favorites.includes(t.id));

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Saved Tools</h2>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1">Quick access to your most frequently used estimators.</p>
      </div>

      {favoriteTools.length === 0 ? (
        <div className="bg-slate-50 rounded-xl border border-slate-200 border-dashed p-12 text-center">
          <div className="w-12 h-12 bg-slate-100 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-slate-700 font-medium mb-1">No favorites yet</h3>
          <p className="text-slate-500 text-sm mb-4">Click the heart icon on any tool card to save it here.</p>
          <button 
            onClick={() => onNavigate('home')}
            className="text-emerald-600 font-medium hover:text-emerald-700 text-sm"
          >
            Browse all tools &rarr;
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {favoriteTools.map(tool => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
              onOpen={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
