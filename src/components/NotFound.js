export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-md">
        {/* Warning Icon */}
        <div className="w-20 h-20 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Product Not Found
        </h2>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          The scanned QR code does not match any verified product in our system.
          Please ensure the QR code is from an authentic BioAmrut product.
        </p>

        {/* Help Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-left">
          <p className="text-xs font-semibold text-gray-700 mb-2">
            Need Help?
          </p>
          <ul className="text-xs text-gray-500 space-y-1.5">
            <li className="flex items-start gap-2">
              <span className="text-agri mt-0.5">•</span>
              Verify that the QR code is not damaged
            </li>
            <li className="flex items-start gap-2">
              <span className="text-agri mt-0.5">•</span>
              Contact our customer care:{" "}
              <a href="tel:1800-123-4567" className="text-blue-link font-medium">
                1800-123-4567
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-agri mt-0.5">•</span>
              Report suspected counterfeits to your nearest dealer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
