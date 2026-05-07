export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-2xl mx-auto px-4 py-5">
        <div className="flex flex-col items-center gap-2 text-center">
          {/* Company */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-agri to-agri-light flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">BA</span>
            </div>
            <span className="text-sm font-semibold text-gray-700">
              Bio<span className="text-agri">Amrut</span>
            </span>
          </div>

          <p className="text-xs text-gray-400">
            Amrut Biochem Pvt. Ltd. — Product Verification Portal
          </p>

          <p className="text-[10px] text-gray-300 mt-1">
            © {year} BioAmrut. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom green bar */}
      <div className="h-1 bg-gradient-to-r from-agri-dark via-agri to-agri-light" />
    </footer>
  );
}
