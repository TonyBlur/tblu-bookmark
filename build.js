const fs = require('fs');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config();

const htmlFilePath = path.resolve(__dirname, 'index.html');
let html = fs.readFileSync(htmlFilePath, 'utf8');

const bookmarkDataUrl = process.env.BOOKMARK_DATA_URL || '';
html = html.replace('REPLACE_WITH_BOOKMARK_DATA_URL', bookmarkDataUrl);

fs.writeFileSync(htmlFilePath, html);
console.log('Environment variables injected into index.html');
