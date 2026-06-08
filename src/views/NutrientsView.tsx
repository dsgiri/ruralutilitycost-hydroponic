import { useState } from 'react';

export function NutrientsView() {
  const [reservoirVol, setReservoirVol] = useState<number>(50);
  const [stockConcentration, setStockConcentration] = useState<number>(100);
  const [targetEC, setTargetEC] = useState<number>(1.5);
  
  // Very simplified illustrative math for standard A/B stock addition
  const requiredMlPerGal = (targetEC / 1.0) * (100 / stockConcentration) * 10;
  const totalMlNeeded = requiredMlPerGal * reservoirVol;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Nutrient Solution Calculator</h2>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1">Calculate stock solution required to reach target EC for your reservoir.</p>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <h4 className="text-[10px] font-bold text-blue-600 uppercase mb-2">Expert System Note</h4>
        <p className="text-[10px] text-blue-800 leading-relaxed">
          Informational Only. Nutrient planning outcomes depend on water source quality, salt grades, and environmental factors. Do not rely solely on this for actual agronomy without measuring reservoir EC.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-4 bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Reservoir Settings</h3>
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block">Reservoir Vol. (Gal)</label>
            <input 
              type="number" 
              value={reservoirVol}
              onChange={(e) => setReservoirVol(Number(e.target.value))}
              className="w-full text-sm border-slate-200 rounded border bg-slate-50 p-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block">Target EC (mS/cm)</label>
            <input 
              type="number" 
              step="0.1"
              value={targetEC}
              onChange={(e) => setTargetEC(Number(e.target.value))}
              className="w-full text-sm border-slate-200 rounded border bg-slate-50 p-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block">Stock Concentration (x)</label>
            <input 
              type="number" 
              value={stockConcentration}
              onChange={(e) => setStockConcentration(Number(e.target.value))}
              className="w-full text-sm border-slate-200 rounded border bg-slate-50 p-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="bg-[#2D4031] rounded-lg p-5 text-white shadow-sm flex flex-col justify-center relative overflow-hidden">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-4">Estimated Addition</h3>
          <div className="mb-6 z-10">
            <div className="text-4xl font-black text-white mb-1 tracking-tight">
              {totalMlNeeded.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-xl text-slate-300 font-normal">mL</span>
            </div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest">Total Part A & B needed</div>
          </div>
          
          <div className="bg-emerald-900/50 p-3 rounded text-sm border border-emerald-800 z-10">
            <div className="flex justify-between items-center text-emerald-200">
              <span className="text-[10px] uppercase font-bold tracking-widest">Rate per gallon</span>
              <span className="font-medium text-white">{requiredMlPerGal.toFixed(1)} mL/gal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
