export default function ProductImage({ imageUrl, productName }) {
  if (!imageUrl) {
    return (
      <div className="max-w-2xl mx-auto px-4 mt-5">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center">
          <svg
            className="w-16 h-16 text-gray-300 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm text-gray-400">Product Image</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 mt-5">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <img
          src={imageUrl}
          alt={productName || "Product Image"}
          className="w-full h-56 object-contain bg-gray-50 p-4"
          loading="eager"
        />
      </div>
    </div>
  );
}
