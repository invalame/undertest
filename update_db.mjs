import fs from 'fs';
import path from 'path';

function slugify(text) {
    if (!text) return '';
    return text.toString().toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

const dataJsPath = 'data.js';
let content = fs.readFileSync(dataJsPath, 'utf8');

const regex = /{\s*"nombre":\s*(".*?"|'.*?'),\s*"archivo":\s*(".*?"|'.*?')\s*}/g;

let count = 0;
const newContent = content.replace(regex, (match, nombreStr, archivoStr) => {
    count++;
    // parse quotes safely
    const nombre = JSON.parse(nombreStr.replace(/'/g, '"'));
    const archivoStrQuotes = archivoStr.startsWith("'") ? `"${archivoStr.slice(1, -1)}"` : archivoStr;
    const archivo = JSON.parse(archivoStrQuotes);
    
    const parts = archivo.split('/');
    const fileWithExt = parts.pop();
    
    const dotIndex = fileWithExt.lastIndexOf('.');
    let nameWithoutExt = fileWithExt;
    let ext = '';
    if (dotIndex !== -1 && dotIndex !== 0) {
        nameWithoutExt = fileWithExt.substring(0, dotIndex);
        ext = fileWithExt.substring(dotIndex).toLowerCase();
    }

    const folderSlugified = parts.map(slugify).join('/');
    const fileSlug = slugify(nameWithoutExt);

    return `{
        "nombre": ${JSON.stringify(nombre)},
        "archivo": ${JSON.stringify(archivo)},
        "folder": ${JSON.stringify(folderSlugified)},
        "file_slug": ${JSON.stringify(fileSlug)},
        "extension": ${JSON.stringify(ext)}
    }`;
});

fs.writeFileSync(dataJsPath, newContent, 'utf8');
console.log(`data.js ha sido actualizado con la nueva estructura. Reemplazados: ${count} objetos.`);
