const fs = require('fs');
let content = fs.readFileSync('components/selected-works-section.tsx', 'utf8');
content = content.replace(/grayscale group-hover:grayscale-0 /g, '');
fs.writeFileSync('components/selected-works-section.tsx', content);
