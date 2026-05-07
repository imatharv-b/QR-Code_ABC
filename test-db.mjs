// Simple fetch test - no supabase library needed
const SUPABASE_URL = 'https://pxdmizopizkxikmzaljj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4ZG1pem9waXpreGlrbXphbGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NzgwNzYsImV4cCI6MjA5MjQ1NDA3Nn0.4bJb3eq7Mu2LbKUIvOloqasPaEWTGQMQGNCPJNa-bz0';

// Test 1: Get ALL products
console.log('Fetching ALL products...\n');
const allRes = await fetch(`${SUPABASE_URL}/rest/v1/products?select=batch_number,product_name`, {
  headers: {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`
  }
});
const allData = await allRes.json();
console.log(`Status: ${allRes.status}`);
if (Array.isArray(allData)) {
  console.log(`Found ${allData.length} products:`);
  allData.forEach(p => console.log(`  - "${p.batch_number}" -> "${p.product_name}"`));
} else {
  console.log('Response:', JSON.stringify(allData, null, 2));
}

// Test 2: Search for KesarShakti
console.log('\n--- Searching for KesarShakti ---');
const res = await fetch(`${SUPABASE_URL}/rest/v1/products?batch_number=eq.KesarShakti&select=*`, {
  headers: {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`
  }
});
const data = await res.json();
console.log(`Status: ${res.status}`);
console.log('Result:', JSON.stringify(data, null, 2));
