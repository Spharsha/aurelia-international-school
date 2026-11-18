import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const imageDir = path.join(process.cwd(), "public", "images");

const files = await fs.readdir(imageDir);
const pngFiles = files.filter((file) => /\.png$/i.test(file));

for (const file of pngFiles) {
  const inputPath = path.join(imageDir, file);
  const outputPath = path.join(imageDir, `${path.parse(file).name}.webp`);

  await sharp(inputPath).webp({ quality: 82, effort: 6 }).toFile(outputPath);

  const original = await fs.stat(inputPath);
  const converted = await fs.stat(outputPath);

  console.log(
    `${file}: ${(original.size / 1024 / 1024).toFixed(2)} MB → ${(converted.size / 1024 / 1024).toFixed(2)} MB`,
  );
}

console.log("\nImage conversion completed!");
