import { useState } from 'react';
import { SYSTEMS } from '@/data';

export function EstimateView() {
  const [area, setArea] = useState<number>(1000);
  const [systemId, setSystemId] = useState<string>(SYSTEMS[0].id);
  const [elecRate, setElecRate] = useState<number>(0.12);

  const selectedSys = SYSTEMS.find(s => s.id === systemId) || SYSTEMS[0];
  
  const setupCost = area * selectedSys.costPerSqFt;
  const powerCostPerMonth = area * selectedSys.powerCostPerSqFtMth * elecRate;
  const annualPower = powerCostPerMonth * 12;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Hydroponic Cost Estimator</h2>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1">Estimate capital setup costs and baseline electricity expenses based on system footprint.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-4 space-y-4 bg-white p-5 rounded-lg border border-slate-200 shadow-sm h-min">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">System Parameters</h3>
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block">System Type</label>
            <select 
              value={systemId}
              onChange={(e) => setSystemId(e.target.value)}
              className="w-full text-sm border-slate-200 rounded border bg-slate-50 p-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {SYSTEMS.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block">Growing Area (sq ft)</label>
            <input 
              type="number" 
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full text-sm border-slate-200 rounded border bg-slate-50 p-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block">Elec. Rate ($/kWh)</label>
            <input 
              type="number" 
              step="0.01"
              value={elecRate}
              onChange={(e) => setElecRate(Number(e.target.value))}
              className="w-full text-sm border-slate-200 rounded border bg-slate-50 p-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="md:col-span-8 space-y-5">
          <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm relative overflow-hidden">
            <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-1">Estimated Capital Expense (CapEx)</h4>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-black text-slate-800 tracking-tight">${setupCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="mt-4 w-full bg-slate-100 h-1.5 rounded-full">
              <div className="bg-emerald-500 h-full rounded-full" style={{ width: '100%' }}></div>
            </div>
            <p className="text-slate-500 text-xs mt-3">Based on average ${selectedSys.costPerSqFt}/sq.ft. for hardware, plumbing, and basic environmental controls.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">OptEx: Monthly Power</h4>
              <div className="text-3xl font-black text-emerald-800 tracking-tight">${powerCostPerMonth.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">OptEx: Annual Power</h4>
              <div className="text-3xl font-black text-emerald-800 tracking-tight">${annualPower.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
              <p className="text-[10px] text-slate-500 mt-1 uppercase">Estimated Energy Spend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
