import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.join(process.cwd(), 'app', '_images');
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

/**
 * Рекурсивно обходит папку и конвертирует изображения в WebP,
 * удаляя исходные файлы после успешной конвертации
 */
async function convertFolder(folderPath) {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const fullPath = path.join(folderPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await convertFolder(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (EXTENSIONS.includes(ext)) {
        const webpPath = fullPath.replace(ext, '.webp');

        try {
          // Конвертация в WebP с балансом качества и размера
          await sharp(fullPath)
            .webp({
              quality: 75,  // баланс качества и веса
              effort: 6
            })
            .toFile(webpPath);

          // Удаляем исходный файл
          fs.unlinkSync(fullPath);

          console.log(`✅ ${fullPath} → ${webpPath} (исходный удалён)`);
        } catch (err) {
          console.error(`❌ Ошибка при конвертации ${fullPath}:`, err);
        }
      }
    }
  }
}

convertFolder(IMAGES_DIR)
  .then(() => console.log('Все изображения успешно конвертированы в WebP!'))
  .catch(err => console.error(err));
