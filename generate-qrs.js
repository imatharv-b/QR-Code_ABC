import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';

// Change this to your final Vercel or BioAmrut domain once deployed
const BASE_URL = 'https://bioamrut.com'; 

// Put your batch numbers here! Add as many as you need.
const batchNumbers = [
  'P2225HC012', 
  'P2225CP045',
  'P2225BF078'
];

const outputDir = path.join(process.cwd(), 'qrcodes');

// Create output folder if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

async function generateQRCodes() {
  console.log(`\n🚀 Generating QR Codes for ${batchNumbers.length} products...\n`);

  for (const batch of batchNumbers) {
    const url = `${BASE_URL}/${batch}`;
    const outputPath = path.join(outputDir, `${batch}.png`);
    
    try {
      // Generate QR Code with high error correction (good for printing)
      await QRCode.toFile(outputPath, url, {
        color: {
          dark: '#1B4332',  // Dark Amrut Green
          light: '#FFFFFF'  // White background
        },
        errorCorrectionLevel: 'H',
        scale: 10, // Size of the QR code
        margin: 2
      });
      console.log(`✅ Created: ${batch}.png -> ${url}`);
    } catch (err) {
      console.error(`❌ Failed to create QR for ${batch}:`, err);
    }
  }
  
  console.log(`\n🎉 All done! You can find your QR codes in the "qrcodes" folder.`);
}

generateQRCodes();
