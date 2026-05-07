import CautionarySymbol from "./CautionarySymbol";
import PdfButton from "./PdfButton";

function formatDate(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function TableRow({ label, children, isLast = false }) {
  return (
    <tr className={`${!isLast ? "border-b border-gray-200" : ""}`}>
      <td className="bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 w-2/5 align-top border-r border-gray-200">
        {label}
      </td>
      <td className="px-4 py-3 text-sm text-gray-800 w-3/5 align-top">
        {children}
      </td>
    </tr>
  );
}

export default function ProductTable({ product }) {
  const rows = [
    {
      label: "Name of the Product",
      value: <span className="font-medium">{product.product_name}</span>,
    },
    {
      label: "Technical Name",
      value: <span className="italic">{product.technical_name}</span>,
    },
    {
      label: "Registration Number",
      value: (
        <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded">
          {product.registration_number || "—"}
        </span>
      ),
    },
    {
      label: "Batch Number",
      value: (
        <span className="font-mono text-xs bg-agri-50 text-agri-dark px-2 py-0.5 rounded font-bold">
          {product.batch_number}
        </span>
      ),
    },
    {
      label: "Manufacturing Date",
      value: formatDate(product.manufacturing_date),
    },
    {
      label: "Date of Expiry",
      value: formatDate(product.expiry_date),
    },
    {
      label: "Cautionary Symbol",
      value: (
        <CautionarySymbol
          color={product.cautionary_symbol_color}
          toxicityLevel={product.toxicity_level}
        />
      ),
    },
    {
      label: "Level of Toxicity",
      value: (
        <span
          className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
            product.cautionary_symbol_color === "red"
              ? "bg-red-100 text-red-700"
              : product.cautionary_symbol_color === "yellow"
              ? "bg-yellow-100 text-yellow-700"
              : product.cautionary_symbol_color === "blue"
              ? "bg-blue-100 text-blue-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {product.toxicity_level}
        </span>
      ),
    },
    {
      label: "Antidote Statement",
      value: (
        <p className="text-xs leading-relaxed text-gray-600">
          {product.antidote_statement || "—"}
        </p>
      ),
    },
    {
      label: "Unique Identifier (GTIN)",
      value: (
        <span className="font-mono text-xs">{product.gtin_number || "—"}</span>
      ),
    },
    {
      label: "Manufactured By",
      value: (
        <p className="text-xs leading-relaxed">{product.manufactured_by || "—"}</p>
      ),
    },
    {
      label: "Marketed By",
      value: (
        <p className="text-xs leading-relaxed">{product.marketed_by || "—"}</p>
      ),
    },
    {
      label: "Customer Care Number",
      value: (
        <a
          href={`tel:${product.customer_care_number}`}
          className="text-blue-link font-medium hover:underline"
        >
          {product.customer_care_number || "—"}
        </a>
      ),
    },
    {
      label: "Leaflet Information",
      value: (
        <PdfButton url={product.leaflet_pdf_url} label="View Leaflet PDF" />
      ),
    },
    {
      label: "Product Label",
      value: (
        <PdfButton
          url={product.product_label_pdf_url}
          label="View Label PDF"
        />
      ),
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 mt-5 mb-6">
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1 h-5 bg-agri rounded-full" />
        <h2 className="text-base font-bold text-gray-800">
          Product Information
        </h2>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-agri">
              <th className="px-4 py-2.5 text-left text-xs font-semibold text-white uppercase tracking-wider border-r border-agri-light w-2/5">
                Parameter
              </th>
              <th className="px-4 py-2.5 text-left text-xs font-semibold text-white uppercase tracking-wider w-3/5">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                label={row.label}
                isLast={index === rows.length - 1}
              >
                {row.value}
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
