import { useState } from 'react';
import { CROPS } from '@/data';

export function ProfitView() {
  const [cropId, setCropId] = useState<string>(CROPS[0].id);
  const [area, setArea] = useState<number>(1000);
  const [growCycles, setGrowCycles] = useState<number>(10);
  
  const selectedCrop = CROPS.find(c => c.id === cropId) || CROPS[0];
  
  const yieldPerCycle = area * selectedCrop.yieldPerSqFtLbs;
  const annualYield = yieldPerCycle * growCycles;
  const grossRev = annualYield * selectedCrop.marketPricePerLb;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Crop Profitability & Output</h2>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1">Forecast annual yield and gross revenue based on crop metrics and cycle velocity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-4 space-y-4 bg-white p-5 rounded-lg border border-slate-200 shadow-sm h-min">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Crop Configuration</h3>
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block">Selection</label>
            <select 
              value={cropId}
              onChange={(e) => setCropId(e.target.value)}
              className="w-full text-sm border-slate-200 rounded border bg-slate-50 p-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {CROPS.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block">Grow Area (sq ft)</label>
            <input 
              type="number" 
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full text-sm border-slate-200 rounded border bg-slate-50 p-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block">Cycles per Year</label>
            <input 
              type="number" 
              value={growCycles}
              onChange={(e) => setGrowCycles(Number(e.target.value))}
              className="w-full text-sm border-slate-200 rounded border bg-slate-50 p-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
            <span className="text-[10px] uppercase font-bold text-slate-500">Market Price</span>
            <span className="font-bold text-slate-700 text-sm">${selectedCrop.marketPricePerLb.toFixed(2)} / lb</span>
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col gap-5">
          <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm relative overflow-hidden flex-1">
            <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-1">Estimated Gross Revenue</h4>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-black text-slate-800 tracking-tight">${grossRev.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              <span className="text-xs text-slate-500 pb-1 mb-0.5">/ yr</span>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded border border-slate-100">
                <span className="text-[9px] font-bold text-slate-400 uppercase">Yield (Lbs/Cycle)</span>
                <p className="text-xl font-bold text-slate-800">{yieldPerCycle.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-100">
                <span className="text-[9px] font-bold text-slate-400 uppercase">Annual Yield (Lbs)</span>
                <p className="text-xl font-bold text-slate-800">{annualYield.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
