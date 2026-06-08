import { CROPS } from '@/data';

export function ECPHView() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">EC/pH Target Planner</h2>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1">Recommended target ranges by crop for controlled hydroponic environments.</p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
              <tr>
                <th className="px-5 py-3 border-r border-slate-100">Crop Type</th>
                <th className="px-5 py-3 border-r border-slate-100">Target EC (mS/cm)</th>
                <th className="px-5 py-3">Target pH</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {CROPS.map(crop => (
                <tr key={crop.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-3 whitespace-nowrap font-bold text-slate-800 border-r border-slate-100">{crop.name}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-emerald-800 font-bold border-r border-slate-100"><span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded inline-block">{crop.targetEC}</span></td>
                  <td className="px-5 py-3 whitespace-nowrap text-sky-800 font-bold"><span className="bg-sky-50 text-sky-700 px-2 py-1 rounded inline-block">{crop.targetPH}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
