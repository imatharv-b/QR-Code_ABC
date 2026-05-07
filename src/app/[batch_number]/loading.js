export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="border-b border-gray-200">
        <div className="h-1.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
        <div className="max-w-2xl mx-auto px-4 py-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="skeleton w-11 h-11 rounded-xl" />
              <div>
                <div className="skeleton w-28 h-5 mb-1.5" />
                <div className="skeleton w-36 h-3" />
              </div>
            </div>
            <div className="skeleton w-20 h-7 rounded-full" />
          </div>
          <div className="skeleton w-full h-14 rounded-xl" />
        </div>
      </div>

      {/* Image Skeleton */}
      <div className="max-w-2xl mx-auto px-4 mt-5">
        <div className="skeleton w-full h-56 rounded-xl" />
      </div>

      {/* Table Skeleton */}
      <div className="max-w-2xl mx-auto px-4 mt-5 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="skeleton w-1 h-5 rounded-full" />
          <div className="skeleton w-36 h-5" />
        </div>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {/* Table Header */}
          <div className="skeleton w-full h-9" />
          {/* Table Rows */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex border-b border-gray-100">
              <div className="w-2/5 p-3">
                <div className="skeleton w-24 h-4" />
              </div>
              <div className="w-3/5 p-3">
                <div className="skeleton w-40 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
