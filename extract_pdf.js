import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

async function extract() {
    try {
        let dataBuffer = fs.readFileSync('public/Gaur Gum Product .pdf');
        let data = await pdf(dataBuffer);
        fs.writeFileSync('guar_gum_extracted.txt', data.text);
        console.log("Extraction complete.");
    } catch (e) {
        console.error("Error extracting PDF:", e);
    }
}
extract();
