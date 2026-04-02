const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'public');

const downloads = [
    // AGM
    { url: 'https://www.mrcagro.com/Image/Notice-of-AGM-2025.pdf', localPath: '/agm-egm/Notice-of-AGM-2025.pdf' },

    // EGM Notices
    { url: 'https://www.mrcagro.com/Image/NOTICE%20OF%20EGM.pdf', localPath: '/agm-egm/NOTICE-OF-EGM.pdf' },
    { url: 'https://www.mrcagro.com/Image/EGM%20Notice%20.pdf', localPath: '/agm-egm/EGM-Notice.pdf' },
    { url: 'https://www.mrcagro.com/Image/Corrigendum%20to%20Notice%20of%20EGM.pdf', localPath: '/agm-egm/Corrigendum-to-Notice-of-EGM.pdf' },
    { url: 'https://www.mrcagro.com/Image/Proccedings%20of%20EGM.pdf', localPath: '/agm-egm/Proceedings-of-EGM.pdf' },
    { url: 'https://www.mrcagro.com/Image/Notice-06062025.pdf', localPath: '/agm-egm/Notice-06062025.pdf' },
    { url: 'https://www.mrcagro.com/Image/Corrigendum-to-Notice-of-EGM-Dated-28-06-2025.pdf', localPath: '/agm-egm/Corrigendum-to-Notice-of-EGM-Dated-28-06-2025.pdf' },

    // EGM Outcomes
    { url: 'https://www.mrcagro.com/Image/EGM%20Out%20Come.pdf', localPath: '/agm-egm/EGM-Outcome-03-04-2024.pdf' },
    { url: 'https://www.mrcagro.com/Image/EGM-Outcome-28-%2006-2025-new.pdf', localPath: '/agm-egm/EGM-Outcome-28-06-2025.pdf' },
];

function downloadFile(url, destPath) {
    return new Promise((resolve, reject) => {
        const fullPath = path.join(PUBLIC_DIR, destPath);
        const dir = path.dirname(fullPath);

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const file = fs.createWriteStream(fullPath);
        const protocol = url.startsWith('https') ? https : http;

        const request = protocol.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                file.close();
                if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
                console.log(`  -> Redirecting to: ${response.headers.location}`);
                downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
                return;
            }

            if (response.statusCode !== 200) {
                file.close();
                if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
                reject(new Error(`HTTP ${response.statusCode} for ${url}`));
                return;
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close();
                const stats = fs.statSync(fullPath);
                console.log(`  OK: ${destPath} (${(stats.size / 1024).toFixed(1)} KB)`);
                resolve();
            });
        });

        request.on('error', (err) => {
            file.close();
            if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
            reject(err);
        });

        request.setTimeout(30000, () => {
            request.destroy();
            reject(new Error(`Timeout downloading ${url}`));
        });
    });
}

async function main() {
    console.log(`\nDownloading ${downloads.length} AGM/EGM PDFs from mrcagro.com...\n`);

    let success = 0;
    let failed = 0;

    for (const { url, localPath } of downloads) {
        console.log(`Downloading: ${path.basename(localPath)}`);
        try {
            await downloadFile(url, localPath);
            success++;
        } catch (err) {
            console.log(`  FAILED: ${err.message}`);
            failed++;
        }
    }

    console.log(`\n--- Done ---`);
    console.log(`Success: ${success}/${downloads.length}`);
    if (failed > 0) console.log(`Failed: ${failed}/${downloads.length}`);
}

main();
