const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'public');

// All external PDF URLs from Investors.tsx that need to be downloaded locally
const downloads = [
    // Quarterly Financials
    { url: 'https://www.mrcagro.com/Image/Financial_statements_30_Sep_2024.pdf', localPath: '/quaterlies/Financial_statements_30_Sep_2024.pdf' },
    { url: 'https://www.mrcagro.com/Image/Financial%20statements%2030%20June%202024.pdf', localPath: '/quaterlies/Financial_statements_30_June_2024.pdf' },
    { url: 'https://www.mrcagro.com/Image/Annual%20report.pdf', localPath: '/quaterlies/Annual_report_Mar_2024.pdf' },
    { url: 'https://www.mrcagro.com/Image/MRC30092023.pdf', localPath: '/quaterlies/MRC30092023.pdf' },
    { url: 'https://www.mrcagro.com/Image/financial-statements-for-quarter-ended-on-30-june-2023.pdf', localPath: '/quaterlies/financial-statements-for-quarter-ended-on-30-june-2023.pdf' },
    { url: 'https://www.mrcagro.com/Image/Financial-statements-for-quarter-ended-on-31-March-2023.pdf', localPath: '/quaterlies/Financial-statements-for-quarter-ended-on-31-March-2023.pdf' },
    { url: 'https://www.mrcagro.com/Image/financial-results-for-quarter-ended-on-31-12-2022.pdf', localPath: '/quaterlies/financial-results-for-quarter-ended-on-31-12-2022.pdf' },

    // Annual Reports
    { url: 'https://www.mrcagro.com/Image/annual-report-2025.pdf', localPath: '/annual-reports/annual-report-2025.pdf' },
    { url: 'https://www.mrcagro.com/Image/23-24.pdf', localPath: '/annual-reports/annual-report-2024.pdf' },
    { url: 'https://www.mrcagro.com/Image/22-23.pdf', localPath: '/annual-reports/annual-report-2023.pdf' },
    { url: 'https://www.mrcagro.com/Image/annual-report-2022.pdf', localPath: '/annual-reports/annual-report-2022.pdf' },
    { url: 'https://www.mrcagro.com/Image/annual-report-2021.pdf', localPath: '/annual-reports/annual-report-2021.pdf' },
    { url: 'https://www.mrcagro.com/Image/annual-report-2020.pdf', localPath: '/annual-reports/annual-report-2020.pdf' },
    { url: 'https://www.mrcagro.com/Image/annual-report-2019.pdf', localPath: '/annual-reports/annual-report-2019.pdf' },
    { url: 'https://www.mrcagro.com/Image/annual-report-2018.pdf', localPath: '/annual-reports/annual-report-2018.pdf' },

    // RPT Disclosure
    { url: 'https://www.mrcagro.com/Image/RPT%20Disclosure.pdf', localPath: '/documentforwebsiteupdate/RPT_Disclosure.pdf' },

    // Compliance
    { url: 'https://www.mrcagro.com/Image/annual-secretarial-compliance-certificate.pdf', localPath: '/documentforwebsiteupdate/annual-secretarial-compliance-certificate.pdf' },
];

function downloadFile(url, destPath) {
    return new Promise((resolve, reject) => {
        const fullPath = path.join(PUBLIC_DIR, destPath);
        const dir = path.dirname(fullPath);

        // Create directory if it doesn't exist
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const file = fs.createWriteStream(fullPath);
        const protocol = url.startsWith('https') ? https : http;

        const request = protocol.get(url, (response) => {
            // Handle redirects
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                file.close();
                fs.unlinkSync(fullPath);
                console.log(`  ↳ Redirecting to: ${response.headers.location}`);
                downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
                return;
            }

            if (response.statusCode !== 200) {
                file.close();
                fs.unlinkSync(fullPath);
                reject(new Error(`HTTP ${response.statusCode} for ${url}`));
                return;
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close();
                const stats = fs.statSync(fullPath);
                console.log(`  ✓ Downloaded: ${destPath} (${(stats.size / 1024).toFixed(1)} KB)`);
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
    console.log(`\nDownloading ${downloads.length} PDFs from mrcagro.com...\n`);

    let success = 0;
    let failed = 0;

    for (const { url, localPath } of downloads) {
        console.log(`Downloading: ${path.basename(localPath)}`);
        try {
            await downloadFile(url, localPath);
            success++;
        } catch (err) {
            console.log(`  ✗ FAILED: ${err.message}`);
            failed++;
        }
    }

    console.log(`\n--- Done ---`);
    console.log(`Success: ${success}/${downloads.length}`);
    if (failed > 0) console.log(`Failed: ${failed}/${downloads.length}`);
}

main();
