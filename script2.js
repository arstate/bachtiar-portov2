const fs = require('fs');

let content = fs.readFileSync('components/selected-works-section.tsx', 'utf8');

// The goal is to add onClick to the <div className="relative w-full aspect-... group">
// We can use a regex that matches the div and the following <Image src={VAR.src}
// where VAR is either `img`, `section.images[0]`, `section.images[1]`, etc.

const regex = /<div (className="relative w-full aspect-\[[^\]]+\][^"]* bg-neutral-800 overflow-hidden group[^"]*")>\s*<Image\s*src={([^}]+)\.src}/g;

content = content.replace(regex, (match, className, varName) => {
    return `<div ${className} onClick={() => { if (activeTab === 'photography') setSelectedPhotography({ category: section.category, description: section.description, image: ${varName}, _gear: getRandomGear() }); }}>
                        <Image 
                          src={${varName}.src}`;
});

fs.writeFileSync('components/selected-works-section.tsx', content);
