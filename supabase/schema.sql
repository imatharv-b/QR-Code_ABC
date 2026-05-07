-- ============================================
-- BioAmrut Product Verification System
-- Run this in Supabase SQL Editor
-- ============================================

CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_name TEXT NOT NULL,
  technical_name TEXT NOT NULL,
  registration_number TEXT,
  batch_number TEXT NOT NULL UNIQUE,
  manufacturing_date DATE,
  expiry_date DATE,
  toxicity_level TEXT DEFAULT 'Moderately Toxic',
  cautionary_symbol_color TEXT DEFAULT 'blue',
  antidote_statement TEXT,
  gtin_number TEXT,
  manufactured_by TEXT,
  marketed_by TEXT,
  customer_care_number TEXT,
  product_image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Fast lookup by batch number
CREATE INDEX IF NOT EXISTS idx_products_batch ON products(batch_number);

-- Public read access (anyone with QR can view)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read"
  ON products FOR SELECT TO anon
  USING (true);

-- ============================================
-- Sample Data (3 products)
-- ============================================

INSERT INTO products (
  product_name, technical_name, registration_number, batch_number,
  manufacturing_date, expiry_date, toxicity_level, cautionary_symbol_color,
  antidote_statement, gtin_number, manufactured_by, marketed_by,
  customer_care_number
) VALUES
(
  'Amrut Super Gold - Humic Acid 98%',
  'Potassium Humate (Humic Acid 98% Granules)',
  'CIR/IMP/2024-HF/9284',
  'P2225HC012',
  '2025-01-15', '2027-01-14',
  'Slightly Toxic', 'green',
  'No specific antidote. If swallowed, do not induce vomiting. Rinse mouth with water. Seek medical attention immediately. In case of skin contact, wash with soap and water.',
  '8901234567890',
  'Maheshwari Industries Amgaon',
  'Amrut Biochem',
  '1800-123-4567'
),
(
  'Amrut Shield Pro - Chlorpyrifos 20% EC',
  'Chlorpyrifos 20% EC (Emulsifiable Concentrate)',
  'CIR/REG/2023-INS/5671',
  'P2225CP045',
  '2025-02-20', '2027-02-19',
  'Extremely Toxic', 'red',
  'ANTIDOTE: Atropine Sulphate. If swallowed, DO NOT induce vomiting. Contact a physician immediately. Remove contaminated clothing and wash skin with soap and water.',
  '8901234567906',
  'Maheshwari Industries Amgaon',
  'Amrut Biochem',
  '1800-123-4567'
),
(
  'BioAmrut NPK Consortia - Biofertilizer',
  'Azotobacter + PSB + KMB Consortium (CFU: 1x10^8/ml)',
  'FCO/BIO/2024/NPK-882',
  'P2225BF078',
  '2025-03-10', '2026-03-09',
  'Non Toxic', 'green',
  'This is a biological product and is non-toxic. In case of accidental ingestion, drink plenty of water and consult a physician.',
  '8901234567913',
  'Maheshwari Industries Amgaon',
  'Amrut Biochem',
  '1800-123-4567'
);
