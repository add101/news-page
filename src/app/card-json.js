import { promises as fs } from 'fs';
import path from 'path';

export async function getCardData() {
  const file = await fs.readFile(path.join(process.cwd(), 'src/app/news.json'), 'utf8');
  const data = JSON.parse(file);
  return data.newsCardData; 
}

  