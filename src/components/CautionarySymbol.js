const SYMBOL_CONFIG = {
  red: {
    label: "DANGER",
    sublabel: "Extremely Toxic",
    bgClass: "bg-red-600",
    borderClass: "border-red-700",
    textClass: "text-red-700",
    bgLightClass: "bg-red-50",
  },
  yellow: {
    label: "WARNING",
    sublabel: "Highly Toxic",
    bgClass: "bg-yellow-500",
    borderClass: "border-yellow-600",
    textClass: "text-yellow-700",
    bgLightClass: "bg-yellow-50",
  },
  blue: {
    label: "CAUTION",
    sublabel: "Moderately Toxic",
    bgClass: "bg-blue-600",
    borderClass: "border-blue-700",
    textClass: "text-blue-700",
    bgLightClass: "bg-blue-50",
  },
  green: {
    label: "CAUTION",
    sublabel: "Slightly Toxic",
    bgClass: "bg-green-600",
    borderClass: "border-green-700",
    textClass: "text-green-700",
    bgLightClass: "bg-green-50",
  },
};

export default function CautionarySymbol({ color = "blue", toxicityLevel }) {
  const config = SYMBOL_CONFIG[color] || SYMBOL_CONFIG.blue;

  return (
    <div className="flex items-center gap-3">
      {/* Diamond Symbol */}
      <div className="relative flex-shrink-0">
        <div
          className={`w-12 h-12 ${config.bgClass} rotate-45 rounded-sm shadow-md flex items-center justify-center`}
        >
          <div className="-rotate-45 text-white">
            {color === "red" ? (
              // Skull & crossbones for extremely toxic
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM9 20v1c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9z" />
              </svg>
            ) : (
              // Exclamation for other levels
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L1 21h22L12 2zm0 4l7.53 13H4.47L12 6zm-1 5v4h2v-4h-2zm0 6v2h2v-2h-2z" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Label */}
      <div>
        <span
          className={`inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${config.bgLightClass} ${config.textClass} border ${config.borderClass}`}
        >
          {config.label}
        </span>
        <p className="text-xs text-gray-500 mt-1">
          {toxicityLevel || config.sublabel}
        </p>
      </div>
    </div>
  );
}
