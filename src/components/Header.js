export default function Header({ verified = true }) {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top green accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-agri-dark via-agri to-agri-light" />

      <div className="max-w-2xl mx-auto px-4 py-5">
        {/* Logo & Title */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Logo Mark */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-agri to-agri-light flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg tracking-tight">BA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-tight">
                Bio<span className="text-agri">Amrut</span>
              </h1>
              <p className="text-xs text-gray-500 tracking-wide uppercase">
                Amrut Biochem Pvt. Ltd.
              </p>
            </div>
          </div>

          {/* Verified Badge */}
          {verified && (
            <div className="pulse-badge flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-3 py-1.5">
              <svg className="w-4 h-4 text-agri" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-semibold text-agri">Verified</span>
            </div>
          )}
        </div>

        {/* Verification Title Bar */}
        <div className="bg-agri-50 border border-green-200 rounded-xl px-4 py-3">
          <div className="flex items-start gap-2.5">
            <span className="text-lg mt-0.5">✅</span>
            <div>
              <p className="font-semibold text-agri-dark text-sm">
                QR Verified Product
              </p>
              <p className="text-xs text-gray-600 mt-0.5">
                This product information has been verified by BioAmrut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
