-- ============================================
-- Add products with URL-friendly batch_numbers
-- Run this in Supabase SQL Editor
-- ============================================

INSERT INTO products (
  product_name, technical_name, registration_number, batch_number,
  manufacturing_date, expiry_date, toxicity_level, cautionary_symbol_color,
  antidote_statement, gtin_number, manufactured_by, marketed_by,
  customer_care_number
) VALUES
(
  'Kesar Shakti',
  'Kesar Shakti - Plant Growth Promoter',
  '',
  'KesarShakti',
  '2025-01-15', '2027-01-14',
  'Non Toxic', 'green',
  'This is a biological product and is non-toxic. In case of accidental ingestion, drink plenty of water and consult a physician.',
  '',
  'Maheshwari Industries Amgaon',
  'Amrut Biochem',
  '1800-123-4567'
),
(
  'Black Gold',
  'Black Gold - Organic Fertilizer',
  '',
  'BlackGold',
  '2025-01-15', '2027-01-14',
  'Non Toxic', 'green',
  'This is a biological product and is non-toxic. In case of accidental ingestion, drink plenty of water and consult a physician.',
  '',
  'Maheshwari Industries Amgaon',
  'Amrut Biochem',
  '1800-123-4567'
),
(
  'Kala Moti',
  'Kala Moti - Organic Soil Conditioner',
  '',
  'KalaMoti',
  '2025-01-15', '2027-01-14',
  'Non Toxic', 'green',
  'This is a biological product and is non-toxic. In case of accidental ingestion, drink plenty of water and consult a physician.',
  '',
  'Maheshwari Industries Amgaon',
  'Amrut Biochem',
  '1800-123-4567'
);
