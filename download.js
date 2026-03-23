import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const team = [
    { url: 'https://mrcagro.com/Image/ashokk_singh.jpg', name: 'ashokk_singh.jpg' },
    { url: 'https://mrcagro.com/Image/Sanjay-Kumar-Singh.jpg', name: 'sanjay_kumar_singh.jpg' },
    { url: 'https://mrcagro.com/Image/Swati.jpg', name: 'swati.jpg' },
    { url: 'https://mrcagro.com/Image/Jainendra_Baxi.jpg', name: 'jainendra_baxi.jpg' },
    { url: 'https://mrcagro.com/Image/director.jpg', name: 'rahul_mathur.jpg' },
    { url: 'https://mrcagro.com/Image/Shweta.jpg', name: 'shweta.jpg' },
    { url: 'https://mrcagro.com/Image/Tyler.jpg', name: 'tyler.jpg' },
    { url: 'https://mrcagro.com/Image/Mehul.jpg', name: 'mehul.jpg' },
    { url: 'https://mrcagro.com/Image/Deepak_Kilania.jpg', name: 'deepak_kilania.jpg' }
];

const maharashtra = [
    { url: 'https://mrcagro.com/Image/farm1.jpg', name: 'mh_farm1.jpg' },
    { url: 'https://mrcagro.com/Image/farm2.jpg', name: 'mh_farm2.jpg' },
    { url: 'https://mrcagro.com/Image/farm3.jpg', name: 'mh_farm3.jpg' },
    { url: 'https://mrcagro.com/Image/farm4.jpg', name: 'mh_farm4.jpg' }
];

const up = [
    { url: 'https://mrcagro.com/Image/farm7.jpg', name: 'up_farm1.jpg' },
    { url: 'https://mrcagro.com/Image/farm8.jpg', name: 'up_farm2.jpg' },
    { url: 'https://mrcagro.com/Image/farm9.jpg', name: 'up_farm3.jpg' },
    { url: 'https://mrcagro.com/Image/farm10.jpg', name: 'up_farm4.jpg' }
];

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else {
                reject(`Failed to download ${url}: ${response.statusCode}`);
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err.message));
        });
    });
};

const run = async () => {
    const teamDir = path.join(__dirname, 'public', 'team');
    const farmsDir = path.join(__dirname, 'public', 'farms');
    
    if (!fs.existsSync(teamDir)) fs.mkdirSync(teamDir, { recursive: true });
    if (!fs.existsSync(farmsDir)) fs.mkdirSync(farmsDir, { recursive: true });

    for (const img of team) {
        console.log(`Downloading ${img.url}...`);
        try {
            await download(img.url, path.join(teamDir, img.name));
        } catch(e) { console.error(e); }
    }
    
    for (const img of maharashtra) {
        console.log(`Downloading ${img.url}...`);
        try {
            await download(img.url, path.join(farmsDir, img.name));
        } catch(e) { console.error(e); }
    }

    for (const img of up) {
        console.log(`Downloading ${img.url}...`);
        try {
            await download(img.url, path.join(farmsDir, img.name));
        } catch(e) { console.error(e); }
    }
    console.log('Done!');
};

run();
