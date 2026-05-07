import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "BioAmrut - Product Verification",
  description:
    "Scan QR codes to verify authentic BioAmrut agrochemical and fertilizer products. Official product verification portal by Amrut Biochem.",
  keywords: "BioAmrut, product verification, QR code, agrochemical, fertilizer, pesticide, Amrut Biochem",
  openGraph: {
    title: "BioAmrut Product Verification",
    description: "Verify your BioAmrut product authenticity",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
