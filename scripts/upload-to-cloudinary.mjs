import { readdir } from "node:fs/promises";
import path from "node:path";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config({ path: ".env.cloudinary.local" });

const assetsDirectory = path.resolve("src/assets");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

const requiredEnvironmentVariables = [
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
];

const missingVariables = requiredEnvironmentVariables.filter(
  (name) => !process.env[name],
);

if (missingVariables.length > 0) {
  console.error(
    `Missing environment variables: ${missingVariables.join(", ")}\n` +
      "Set them in your shell or in a local .env.cloudinary.local file.",
  );
  process.exitCode = 1;
} else {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  const imageFiles = await findImageFiles(assetsDirectory);

  if (imageFiles.length === 0) {
    console.error(`No supported images found in ${assetsDirectory}`);
    process.exitCode = 1;
  } else {
    console.log(`Uploading ${imageFiles.length} image(s) from ${assetsDirectory}...`);

    for (const filePath of imageFiles) {
      const publicId = getPublicId(filePath);

      try {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: "portfolio",
          public_id: publicId,
          overwrite: true,
          resource_type: "image",
        });

        console.log(`${path.relative(process.cwd(), filePath)} -> ${result.secure_url}`);
      } catch (error) {
        console.error(`Failed to upload ${filePath}:`, error);
        process.exitCode = 1;
      }
    }
  }
}

async function findImageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findImageFiles(entryPath)));
    } else if (supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(entryPath);
    }
  }

  return files;
}

function getPublicId(filePath) {
  const relativePath = path.relative(assetsDirectory, filePath);
  const withoutExtension = relativePath.slice(
    0,
    relativePath.length - path.extname(relativePath).length,
  );

  return withoutExtension.split(path.sep).join("/");
}
