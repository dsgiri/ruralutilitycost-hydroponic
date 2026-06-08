import { SYSTEMS } from '@/data';

export function CompareView() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">System Comparison Tool</h2>
        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mt-1">Review average metrics across different controlled environment architectures.</p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
              <tr>
                <th className="px-5 py-3 border-r border-slate-100">System Type</th>
                <th className="px-5 py-3 border-r border-slate-100">Est. Setup Cost (sq ft)</th>
                <th className="px-5 py-3 border-r border-slate-100">Power Use (Mo)</th>
                <th className="px-5 py-3">Water Use (Mo)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {SYSTEMS.map(sys => (
                <tr key={sys.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-3 font-bold text-slate-800 whitespace-nowrap border-r border-slate-100">{sys.name}</td>
                  <td className="px-5 py-3 whitespace-nowrap border-r border-slate-100">
                    <span className="font-semibold text-emerald-800 tracking-tight">
                      ${sys.costPerSqFt.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap text-slate-700 font-medium border-r border-slate-100">{sys.powerCostPerSqFtMth.toFixed(2)} kW/sqft</td>
                  <td className="px-5 py-3 whitespace-nowrap text-slate-700 font-medium">{sys.waterUsageGalSqFtMth.toFixed(1)} gal/sqft</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
