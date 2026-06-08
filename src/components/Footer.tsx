export function Footer({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <footer className="bg-[#F4F5F2] border-t border-slate-200 py-3 px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 mt-auto font-medium">
      <div>
        <span className="italic">Disclaimer: Calculations are based on generalized agricultural models. Verify with your agronomist.</span>
      </div>
      <div className="flex gap-4">
        <button onClick={() => onNavigate?.('legal')} className="hover:text-slate-600 transition-colors uppercase tracking-widest font-bold">Privacy Policy</button>
        <button onClick={() => onNavigate?.('legal')} className="hover:text-slate-600 transition-colors uppercase tracking-widest font-bold">Terms</button>
        <button onClick={() => onNavigate?.('legal')} className="hover:text-slate-600 transition-colors uppercase tracking-widest font-bold">Legal Disclaimers</button>
        <button onClick={() => onNavigate?.('contact')} className="hover:text-slate-600 transition-colors uppercase tracking-widest font-bold">Contact</button>
        <button onClick={() => onNavigate?.('about')} className="hover:text-slate-600 transition-colors uppercase tracking-widest font-bold">About RUC</button>
      </div>
    </footer>
  );
}

