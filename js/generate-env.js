const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const envScriptContent = `
window.env = {
  BOOKMARK_DATA_URL: '${process.env.BOOKMARK_DATA_URL || ''}'
};
`;

const outputFilePath = path.join(__dirname, 'env-data.js');
fs.writeFileSync(outputFilePath, envScriptContent, 'utf8');

console.log('env ok');
