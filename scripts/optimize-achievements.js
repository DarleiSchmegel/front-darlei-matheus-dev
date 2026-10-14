const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const achievementsDir = path.join(__dirname, '../public/assets/achievements');
const files = fs.readdirSync(achievementsDir);

async function optimizeImages() {
  console.log('Iniciando otimização de imagens...\n');

  for (const file of files) {
    if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;

    const inputPath = path.join(achievementsDir, file);
    const stats = fs.statSync(inputPath);
    const sizeBefore = (stats.size / 1024 / 1024).toFixed(2);

    try {
      const ext = path.extname(file);
      const tempPath = inputPath + '.tmp' + ext;

      await sharp(inputPath)
        .resize(1920, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .jpeg({ quality: 80, progressive: true, mozjpeg: true })
        .toFile(tempPath);

      fs.unlinkSync(inputPath);
      fs.renameSync(tempPath, inputPath);

      const statsAfter = fs.statSync(inputPath);
      const sizeAfter = (statsAfter.size / 1024 / 1024).toFixed(2);
      const reduction = (((stats.size - statsAfter.size) / stats.size) * 100).toFixed(1);

      console.log(`✓ ${file}`);
      console.log(`  ${sizeBefore}MB → ${sizeAfter}MB (redução de ${reduction}%)\n`);
    } catch (error) {
      console.error(`✗ Erro ao processar ${file}:`, error.message);
    }
  }

  console.log('Otimização concluída!');
}

optimizeImages().catch(console.error);
