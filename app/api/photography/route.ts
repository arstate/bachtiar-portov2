import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const basePath = path.join(process.cwd(), 'database', 'fotografi');
  const photographyData = [];

  if (fs.existsSync(basePath)) {
    const categories = fs.readdirSync(basePath);
    for (const category of categories) {
      const categoryPath = path.join(basePath, category);
      if (fs.statSync(categoryPath).isDirectory()) {
        const detailPath = path.join(categoryPath, 'detail-galeri.txt');
        if (fs.existsSync(detailPath)) {
          const content = fs.readFileSync(detailPath, 'utf8');
          
          const lines = content.split('\n');
          let currentItem: any = { id: '', category: '', theme: '', layout: '', description: '', images: [] as any[] };
          let currentImage: any = null;

          for (let line of lines) {
            line = line.trim();
            if (!line) continue;
            
            if (line.startsWith('ID: ')) currentItem.id = line.substring(4);
            else if (line.startsWith('Category: ')) currentItem.category = line.substring(10);
            else if (line.startsWith('Theme: ')) currentItem.theme = line.substring(7);
            else if (line.startsWith('Layout: ')) currentItem.layout = line.substring(8);
            else if (line.startsWith('Description: ')) currentItem.description = line.substring(13);
            else if (line.startsWith('# Image')) {
              if (currentImage) currentItem.images.push(currentImage);
              currentImage = {};
            }
            else if (line.startsWith('Source: ') && currentImage) currentImage.src = line.substring(8);
            else if (line.startsWith('Location: ') && currentImage) currentImage.location = line.substring(10);
            else if (line.startsWith('Year: ') && currentImage) currentImage.year = line.substring(6);
          }
          if (currentImage) currentItem.images.push(currentImage);
          
          photographyData.push(currentItem);
        }
      }
    }
  }

  return NextResponse.json(photographyData);
}
