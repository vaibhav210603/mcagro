import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
    { url: 'https://mrcagro.com/image/Ajwain-Essential-Oil.png', name: 'ajwain.png' },
    { url: 'https://mrcagro.com/image/Cinnamon-Essential-Oil.png', name: 'cinnamon.png' },
    { url: 'https://mrcagro.com/image/Cumin-Seed-Essential-Oil.png', name: 'cumin.png' },
    { url: 'https://mrcagro.com/image/Lemongrass-Essential-Oil.png', name: 'lemongrass.png' },
    { url: 'https://mrcagro.com/image/Palmarosa-Essential-Oil.png', name: 'palmarosa.png' },
    { url: 'https://mrcagro.com/image/Peppermint-Essential-Oil.png', name: 'peppermint.png' },
    { url: 'https://mrcagro.com/image/Lemongrass-Chunks.png', name: 'lemongrass_chunks.png' }
];

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => file.close(resolve));
            } else {
                reject(`Failed to download ${url}: ${response.statusCode}`);
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err.message));
        });
    });
};

const run = async () => {
    const dir = path.join(__dirname, 'public', 'offerings');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    for (const img of images) {
        console.log(`Downloading ${img.url}...`);
        try {
            await download(img.url, path.join(dir, img.name));
        } catch(e) { console.error(e); }
    }
    console.log('Done downloading images!');
};

run();
