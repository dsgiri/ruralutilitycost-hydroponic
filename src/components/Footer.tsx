export function Footer() {
  return (
    <footer className="bg-[#F4F5F2] border-t border-slate-200 py-3 px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 mt-auto font-medium">
      <div>
        <span className="italic">Disclaimer: Calculations are based on generalized agricultural models. Verify with your agronomist.</span>
      </div>
      <div className="flex gap-4">
        <button className="hover:text-slate-600 transition-colors">Privacy Policy</button>
        <button className="hover:text-slate-600 transition-colors">Terms</button>
        <button className="hover:text-slate-600 transition-colors">Legal Disclaimers</button>
        <button className="hover:text-slate-600 transition-colors">Contact</button>
        <button className="hover:text-slate-600 transition-colors">About RUC</button>
      </div>
    </footer>
  );
}
