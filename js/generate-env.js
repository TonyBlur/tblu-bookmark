const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { execSync } = require('child_process');

dotenv.config();
const pkg = require('../package.json');
let commitShort = '';
try {
  commitShort = execSync('git rev-parse --short=7 HEAD', { encoding: 'utf8' }).trim();
} catch (_) {
  commitShort = '';
}

const envScriptContent = `
window.env = {
  BOOKMARK_DATA_URL: '${process.env.BOOKMARK_DATA_URL || ''}',
  APP_PACKAGE_VERSION: '${pkg.version || ''}',
  COMMIT_SHORT: '${commitShort}'
};
`;

const outputFilePath = path.join(__dirname, 'env-data.js');
fs.writeFileSync(outputFilePath, envScriptContent, 'utf8');

console.log('env ok');
