import React from 'react';

export function NotFoundView({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-lg border border-slate-200 shadow-sm px-4">
      <h2 className="text-6xl md:text-8xl font-black text-slate-800 mb-2">404</h2>
      <p className="text-lg md:text-xl text-slate-600 mb-8 font-medium">Wait, where did this row go?</p>
      <button 
        onClick={() => onNavigate('home')}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded font-bold min-h-[48px] uppercase tracking-wider text-sm transition-colors shadow-sm"
      >
        Return to Dashboard
      </button>
    </div>
  );
}
