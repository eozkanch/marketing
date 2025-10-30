const fs = require('fs');
const path = require('path');
const https = require('https');

// Dosya yolları
const dataFile = path.join(__dirname, '../data/allproduct.json');
const publicProductsDir = path.join(__dirname, '../public/products');

// Yardımcı fonksiyonlar
function extractSlugFromDetailsLink(detailsLink) {
  if (!detailsLink) return null;
  const parts = detailsLink.split('/');
  const productSlug = parts[parts.length - 1];
  return productSlug || null;
}

function getFileExtension(url) {
  const urlWithoutQuery = url.split('?')[0];
  const match = urlWithoutQuery.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i);
  return match ? match[1].toLowerCase() : 'jpg';
}

function sanitizeFileName(fileName) {
  return fileName
    .replace(/[^a-z0-9-]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function checkIfFileExists(product) {
  if (!product.details_link) return false;
  
  const slug = extractSlugFromDetailsLink(product.details_link);
  if (!slug) return false;
  
  const originalUrl = product.image_url || '';
  const ext = getFileExtension(originalUrl);
  const fileName = `${sanitizeFileName(slug)}.${ext}`;
  const filePath = path.join(publicProductsDir, fileName);
  
  if (fs.existsSync(filePath)) return true;
  
  // Farklı uzantılarda ara
  const possibleExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif'];
  for (const possibleExt of possibleExtensions) {
    const altFileName = `${sanitizeFileName(slug)}.${possibleExt}`;
    const altFilePath = path.join(publicProductsDir, altFileName);
    if (fs.existsSync(altFilePath)) return true;
  }
  
  return false;
}

// JSON dosyasını oku
console.log('JSON dosyası okunuyor...');
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

let fixedCount = 0;
let totalChecked = 0;

// Tüm ürünleri kontrol et ve düzelt
data.allcategories?.forEach((category) => {
  category.data?.forEach((product) => {
    if (product.image_url && product.image_url.startsWith('//bizimkiler.ch')) {
      totalChecked++;
      
      // Dosyanın local'de olup olmadığını kontrol et
      const fileExists = checkIfFileExists(product);
      
      if (!fileExists) {
        // Dosya yoksa image_url'i null yap
        product.image_url = null;
        fixedCount++;
      }
    }
  });
});

// Güncellenmiş JSON'u kaydet
console.log('\nGüncellenmiş JSON kaydediliyor...');
fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf8');

console.log('\n=== Özet ===');
console.log(`✓ Kontrol edilen: ${totalChecked}`);
console.log(`✓ Düzeltilen (image_url null yapıldı): ${fixedCount}`);
console.log(`📁 Dosya: ${dataFile}`);

