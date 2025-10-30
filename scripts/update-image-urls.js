const fs = require('fs');
const path = require('path');

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

function generateNewImagePath(product) {
  if (!product.details_link) return null;
  
  const slug = extractSlugFromDetailsLink(product.details_link);
  if (!slug) return null;
  
  // Orijinal image_url'den uzantıyı al
  const originalUrl = product.image_url || '';
  const ext = getFileExtension(originalUrl);
  
  // Dosya adını oluştur
  const fileName = `${sanitizeFileName(slug)}.${ext}`;
  const filePath = path.join(publicProductsDir, fileName);
  
  // Dosya gerçekten var mı kontrol et
  if (fs.existsSync(filePath)) {
    return `/products/${fileName}`;
  }
  
  // Eğer dosya yoksa, farklı uzantılarda ara
  const possibleExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif'];
  for (const possibleExt of possibleExtensions) {
    const altFileName = `${sanitizeFileName(slug)}.${possibleExt}`;
    const altFilePath = path.join(publicProductsDir, altFileName);
    if (fs.existsSync(altFilePath)) {
      return `/products/${altFileName}`;
    }
  }
  
  // Hiçbir dosya bulunamadıysa null döndür (orijinal URL'i koruyabiliriz)
  return null;
}

// JSON dosyasını oku
console.log('JSON dosyası okunuyor...');
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

let updatedCount = 0;
let notFoundCount = 0;
let totalCount = 0;

// Tüm ürünleri güncelle
data.allcategories?.forEach((category, catIndex) => {
  category.data?.forEach((product, prodIndex) => {
    if (product.image_url && product.details_link) {
      totalCount++;
      const newImagePath = generateNewImagePath(product);
      
      if (newImagePath) {
        // Eğer zaten güncellenmişse atla
        if (product.image_url !== newImagePath && !product.image_url.startsWith('/products/')) {
          product.image_url = newImagePath;
          updatedCount++;
        }
      } else {
        notFoundCount++;
        // Dosya bulunamadıysa log yaz ama değiştirme
        console.log(`⚠ Dosya bulunamadı: ${product.details_link} (${product.name})`);
      }
    }
  });
});

// Güncellenmiş JSON'u kaydet
console.log('\nGüncellenmiş JSON kaydediliyor...');
fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf8');

console.log('\n=== Özet ===');
console.log(`✓ Toplam ürün kontrol edildi: ${totalCount}`);
console.log(`✓ Güncellenen: ${updatedCount}`);
console.log(`⚠ Dosya bulunamayan: ${notFoundCount}`);
console.log(`📁 Dosya: ${dataFile}`);

