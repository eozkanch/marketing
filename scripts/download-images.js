const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Dosya yolları
const dataFile = path.join(__dirname, '../data/allproduct.json');
const publicDir = path.join(__dirname, '../public/products');

// Public/products klasörünü oluştur
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// JSON dosyasını oku
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

// Tüm ürünleri ve image_url'lerini topla
const productsMap = new Map(); // Aynı image_url için sadece bir kez indir

function extractSlugFromDetailsLink(detailsLink) {
  if (!detailsLink) return 'unknown';
  // /collection/kahveler/products/turk-kahvesi-200g-taze-kavrulmus-cekilmis-ve-100-dogal
  // -> turk-kahvesi-200g-taze-kavrulmus-cekilmis-ve-100-dogal
  const parts = detailsLink.split('/');
  const productSlug = parts[parts.length - 1];
  return productSlug || 'unknown';
}

function getFileExtension(url) {
  // URL'den dosya uzantısını al (query string'den önce)
  const urlWithoutQuery = url.split('?')[0];
  const match = urlWithoutQuery.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i);
  return match ? match[1].toLowerCase() : 'jpg';
}

function sanitizeFileName(fileName) {
  // Dosya adındaki geçersiz karakterleri temizle
  return fileName
    .replace(/[^a-z0-9-]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

// Tüm ürünleri topla
data.allcategories?.forEach((category) => {
  category.data?.forEach((product) => {
    if (product.image_url && product.details_link) {
      const imageUrl = product.image_url.startsWith('//') 
        ? `https:${product.image_url}` 
        : product.image_url;
      
      // Eğer aynı image_url zaten varsa atla (duplicate kontrolü)
      if (!productsMap.has(imageUrl)) {
        const slug = extractSlugFromDetailsLink(product.details_link);
        const ext = getFileExtension(imageUrl);
        const fileName = `${sanitizeFileName(slug)}.${ext}`;
        const filePath = path.join(publicDir, fileName);
        
        productsMap.set(imageUrl, {
          fileName,
          filePath,
          detailsLink: product.details_link,
          name: product.name
        });
      }
    }
  });
});

console.log(`Toplam ${productsMap.size} benzersiz resim bulundu.`);

// Resim indirme fonksiyonu
function downloadImage(url, filePath, index, total) {
  return new Promise((resolve, reject) => {
    // Eğer dosya zaten varsa atla
    if (fs.existsSync(filePath)) {
      console.log(`[${index}/${total}] ✓ Zaten mevcut: ${path.basename(filePath)}`);
      resolve();
      return;
    }

    const protocol = url.startsWith('https') ? https : http;
    const fileName = path.basename(filePath);
    
    const file = fs.createWriteStream(filePath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Redirect'i takip et
        file.close();
        fs.unlinkSync(filePath);
        return downloadImage(response.headers.location, filePath, index, total)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filePath);
        reject(new Error(`HTTP ${response.statusCode} hatası: ${url}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`[${index}/${total}] ✓ İndirildi: ${fileName}`);
        resolve();
      });
      
      file.on('error', (err) => {
        file.close();
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
        reject(err);
      });
    }).on('error', (err) => {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      reject(err);
    });
  });
}

// Sırayla indir (çok fazla eşzamanlı istekten kaçınmak için)
async function downloadAll() {
  const entries = Array.from(productsMap.entries());
  const total = entries.length;
  let successCount = 0;
  let failCount = 0;
  
  // Batch olarak indir (5'er 5'er)
  const batchSize = 5;
  
  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize);
    
    await Promise.allSettled(
      batch.map(([url, info], batchIndex) => {
        const globalIndex = i + batchIndex + 1;
        return downloadImage(url, info.filePath, globalIndex, total)
          .then(() => {
            successCount++;
          })
          .catch((err) => {
            failCount++;
            console.error(`[${globalIndex}/${total}] ✗ Hata: ${info.fileName} - ${err.message}`);
          });
      })
    );
    
    // Her batch sonrası kısa bir bekleme
    if (i + batchSize < entries.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  console.log('\n=== Özet ===');
  console.log(`✓ Başarılı: ${successCount}`);
  console.log(`✗ Başarısız: ${failCount}`);
  console.log(`📁 Klasör: ${publicDir}`);
}

// Script'i çalıştır
downloadAll().catch(console.error);

