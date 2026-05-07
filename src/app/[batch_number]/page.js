import { supabase } from "@/lib/supabase";

// Force dynamic rendering - never cache this page
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { batch_number } = await params;

  const { data: product } = await supabase
    .from("products")
    .select("product_name")
    .eq("batch_number", batch_number)
    .single();

  if (!product) {
    return {
      title: "Product Not Found - Amrut Biochem",
      description: "The scanned product could not be found.",
    };
  }

  return {
    title: `${product.product_name} - Amrut Biochem`,
    description: `Product information for ${product.product_name}. Batch: ${batch_number}`,
  };
}

async function getProduct(batchNumber) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("batch_number", batchNumber)
    .single();

  if (error || !data) return null;
  return data;
}

function formatDate(dateStr) {
  if (!dateStr) return "\u2014";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

const SYMBOL_CONFIG = {
  red: {
    label: "DANGER", bg: "bg-red-600", border: "border-red-200",
    text: "text-red-700", light: "bg-red-50",
  },
  yellow: {
    label: "WARNING", bg: "bg-yellow-500", border: "border-yellow-200",
    text: "text-yellow-700", light: "bg-yellow-50",
  },
  blue: {
    label: "CAUTION", bg: "bg-blue-600", border: "border-blue-200",
    text: "text-blue-700", light: "bg-blue-50",
  },
  green: {
    label: "SAFE", bg: "bg-green-600", border: "border-green-200",
    text: "text-green-700", light: "bg-green-50",
  },
};

function NotFoundView() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="h-1.5 bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-[#40916C]" />
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2D6A4F] to-[#40916C] flex items-center justify-center shadow">
            <span className="text-white font-bold text-base">AB</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">Amrut <span className="text-[#2D6A4F]">Biochem</span></h1>
          </div>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-sm text-gray-500 mb-4">The scanned QR code does not match any product in our database.</p>
          <p className="text-xs text-gray-400">
            Customer Care: <a href="tel:1800-123-4567" className="text-[#2563eb] font-medium">1800-123-4567</a>
          </p>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-[#40916C]" />
    </div>
  );
}

export default async function ProductPage({ params }) {
  const { batch_number } = await params;
  const product = await getProduct(batch_number);

  if (!product) {
    return <NotFoundView />;
  }

  const sym = SYMBOL_CONFIG[product.cautionary_symbol_color] || SYMBOL_CONFIG.blue;

  const rows = [
    { label: "Name of the Product", value: product.product_name, bold: true },
    { label: "Technical Name", value: product.technical_name, italic: true },
    { label: "Registration Number", value: product.registration_number },
    { label: "Batch Number", value: product.batch_number, mono: true },
    { label: "Manufacturing Date", value: formatDate(product.manufacturing_date) },
    { label: "Date of Expiry", value: formatDate(product.expiry_date) },
    { label: "Toxicity Level", value: product.toxicity_level, badge: sym },
    { label: "Antidote Statement", value: product.antidote_statement, small: true },
    { label: "GTIN Number", value: product.gtin_number, mono: true },
    { label: "Manufactured By", value: product.manufactured_by, small: true },
    { label: "Marketed By", value: product.marketed_by, small: true },
    { label: "Customer Care", value: product.customer_care_number, phone: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="h-1.5 bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-[#40916C]" />
        <div className="max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2D6A4F] to-[#40916C] flex items-center justify-center shadow">
                <span className="text-white font-bold text-base">AB</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800">Amrut <span className="text-[#2D6A4F]">Biochem</span></h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Product Image */}
      {product.product_image_url && (
        <div className="max-w-lg mx-auto w-full px-4 mt-4">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <img
              src={product.product_image_url}
              alt={product.product_name}
              className="w-full h-48 object-contain bg-white p-3"
            />
          </div>
        </div>
      )}

      {/* Cautionary Symbol */}
      <div className="max-w-lg mx-auto w-full px-4 mt-4">
        <div className={`${sym.light} border ${sym.border} rounded-xl p-3 flex items-center gap-3`}>
          <div className="flex-shrink-0">
            <div className={`w-10 h-10 ${sym.bg} rotate-45 rounded-sm shadow flex items-center justify-center`}>
              <svg className="w-5 h-5 text-white -rotate-45" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
              </svg>
            </div>
          </div>
          <div>
            <span className={`text-xs font-bold uppercase tracking-wider ${sym.text}`}>
              {sym.label}
            </span>
            <p className="text-[11px] text-gray-500">{product.toxicity_level}</p>
          </div>
        </div>
      </div>

      {/* Product Info Table */}
      <div className="max-w-lg mx-auto w-full px-4 mt-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1 h-4 bg-[#2D6A4F] rounded-full" />
          <h2 className="text-sm font-bold text-gray-800">Product Information</h2>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-[#2D6A4F] flex">
            <div className="w-2/5 px-3 py-2 text-[10px] font-semibold text-white uppercase tracking-wider border-r border-[#40916C]">Parameter</div>
            <div className="w-3/5 px-3 py-2 text-[10px] font-semibold text-white uppercase tracking-wider">Details</div>
          </div>

          {rows.map((row, i) => (
            <div key={i} className={`flex ${i < rows.length - 1 ? "border-b border-gray-100" : ""}`}>
              <div className="w-2/5 px-3 py-2.5 text-xs font-semibold text-gray-600 bg-gray-50 border-r border-gray-100 flex items-start">
                {row.label}
              </div>
              <div className="w-3/5 px-3 py-2.5 text-xs text-gray-800 flex items-start">
                {row.bold ? (
                  <span className="font-semibold">{row.value || "\u2014"}</span>
                ) : row.italic ? (
                  <span className="italic text-gray-600">{row.value || "\u2014"}</span>
                ) : row.mono ? (
                  <span className="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded">{row.value || "\u2014"}</span>
                ) : row.badge ? (
                  <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${row.badge.light} ${row.badge.text}`}>
                    {row.value || "\u2014"}
                  </span>
                ) : row.small ? (
                  <p className="text-[11px] leading-relaxed text-gray-600">{row.value || "\u2014"}</p>
                ) : row.phone ? (
                  <a href={`tel:${row.value}`} className="text-[#2563eb] font-medium hover:underline">{row.value || "\u2014"}</a>
                ) : (
                  <span>{row.value || "\u2014"}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-white border-t border-gray-200">
        <div className="max-w-lg mx-auto px-4 py-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#2D6A4F] to-[#40916C] flex items-center justify-center">
              <span className="text-white font-bold text-[8px]">AB</span>
            </div>
            <span className="text-xs font-semibold text-gray-600">Amrut <span className="text-[#2D6A4F]">Biochem</span></span>
          </div>
          <p className="text-[10px] text-gray-400">&copy; {new Date().getFullYear()} Amrut Biochem</p>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-[#40916C]" />
      </footer>
    </div>
  );
}
