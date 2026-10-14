import { getPlaiceholder } from 'plaiceholder';
import path from 'path';
import fs from 'fs/promises';

export async function getBlurDataURL(imagePath: string): Promise<string> {
  try {
    const fullPath = path.join(process.cwd(), 'public', imagePath);
    const file = await fs.readFile(fullPath);
    const { base64 } = await getPlaiceholder(file, { size: 10 });
    return base64;
  } catch (error) {
    console.error(`Erro ao gerar blur placeholder para ${imagePath}:`, error);
    // Fallback: 1x1px cinza escuro em base64
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsaGj4DwAFhAJ/2eMXXQAAAABJRU5ErkJggg==';
  }
}
