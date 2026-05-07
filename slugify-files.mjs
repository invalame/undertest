import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function slugify(text) {
    if (!text) return '';
    return text.toString().toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
        .replace(/[^a-z0-9\-]/g, '-') // non-alphanumeric to hyphen
        .replace(/-+/g, '-') // collapse hyphens
        .replace(/^-+|-+$/g, ''); // trim hyphens
}

const targetDirs = ['music', 'albums', 'musicartist'];

function renameRecursively(dir) {
    if (!fs.existsSync(dir)) {
        console.warn(`Directorio no existe y será saltado: ${dir}`);
        return;
    }
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const oldPath = path.join(dir, file);
        const stats = fs.statSync(oldPath);

        if (stats.isDirectory()) {
            renameRecursively(oldPath);
        }

        let newName;
        if (stats.isDirectory()) {
            const newSlug = slugify(file);
            newName = newSlug || file; // fallback if symbols only
        } else {
            const ext = path.extname(file);
            const nameWithoutExt = path.basename(file, ext);
            const newSlug = slugify(nameWithoutExt);
            newName = (newSlug || nameWithoutExt) + ext.toLowerCase();
        }

        const newPath = path.join(dir, newName);

        if (oldPath !== newPath) {
            // Windows is case insensitive but preserves case. Renaming "A" to "a" might require a temp name if the OS doesn't handle it directly.
            // As a safe measure:
            if (oldPath.toLowerCase() === newPath.toLowerCase()) {
                 const tempPath = oldPath + '.temp';
                 fs.renameSync(oldPath, tempPath);
                 fs.renameSync(tempPath, newPath);
            } else {
                 fs.renameSync(oldPath, newPath);
            }
            console.log(`Renombrado: ${oldPath} -> ${newPath}`);
        }
    }
}

for (const dir of targetDirs) {
    const fullPath = path.join(__dirname, dir);
    console.log(`Procesando directorio: ${fullPath}`);
    renameRecursively(fullPath);
}
console.log('Renombrado completo. Revisa las carpetas locales.');
