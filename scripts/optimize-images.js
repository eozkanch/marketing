const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Optimize edilecek klasörler
const directories = [
  path.join(__dirname, '../public/products'),
  path.join(__dirname, '../public/categories'),
];

// Optimize edilecek formatlar
const formats = [
  { ext: 'webp', options: { quality: 85, effort: 6 } },
  { ext: 'avif', options: { quality: 75, effort: 4 } },
];

// Orijinal dosyaları sakla (backup)
const backupDir = path.join(__dirname, '../public/_backup');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath, format, options) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Max genişlik/yükseklik (1920px)
    const maxDimension = 1920;
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > maxDimension || height > maxDimension) {
      if (width > height) {
        width = maxDimension;
        height = Math.round((metadata.height / metadata.width) * maxDimension);
      } else {
        height = maxDimension;
        width = Math.round((metadata.width / metadata.height) * maxDimension);
      }
    }
    
    await image
      .resize(width, height, { fit: 'inside', withoutEnlargement: true })
      .toFormat(format, options)
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    return {
      originalSize,
      newSize,
      savings: parseFloat(savings),
      success: true,
    };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory does not exist: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir, { withFileTypes: true });
  const imageFiles = files.filter(
    (file) =>
      file.isFile() &&
      /\.(jpg|jpeg|png)$/i.test(file.name) &&
      !file.name.includes('_optimized')
  );

  console.log(`\nProcessing ${imageFiles.length} images in ${dir}...`);

  for (const file of imageFiles) {
    const inputPath = path.join(dir, file.name);
    const baseName = path.parse(file.name).name;
    
    // WebP versiyonu oluştur
    const webpPath = path.join(dir, `${baseName}.webp`);
    const result = await optimizeImage(inputPath, webpPath, 'webp', formats[0].options);
    
    if (result.success) {
      console.log(
        `✓ ${file.name} → ${baseName}.webp (${(result.originalSize / 1024).toFixed(1)}KB → ${(result.newSize / 1024).toFixed(1)}KB, ${result.savings}% savings)`
      );
    }
    
    // Orijinal dosyayı optimize et (aynı formatta ama küçültülmüş)
    const optimizedPath = path.join(dir, `${baseName}_optimized${path.extname(file.name)}`);
    const optimizedResult = await optimizeImage(inputPath, optimizedPath, path.extname(file.name).slice(1), { quality: 85 });
    
    if (optimizedResult.success) {
      console.log(
        `✓ ${file.name} → ${path.basename(optimizedPath)} (${(optimizedResult.originalSize / 1024).toFixed(1)}KB → ${(optimizedResult.newSize / 1024).toFixed(1)}KB, ${optimizedResult.savings}% savings)`
      );
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  for (const dir of directories) {
    await processDirectory(dir);
  }
  
  console.log('\n✅ Image optimization complete!');
  console.log('\nNote: Original files are preserved. Review the optimized versions and update your code to use them.');
}

main().catch(console.error);

