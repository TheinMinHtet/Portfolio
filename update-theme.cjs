const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

const replacements = {
    'text-white': 'text-black',
    'border-white/5': 'border-black/5',
    'border-white/10': 'border-gray-200',
    'border-white/20': 'border-gray-300',
    'border-white/30': 'border-gray-400',
    'bg-white/5': 'bg-black/5',
    'bg-white/10': 'bg-black/10',
    'bg-white/20': 'bg-black/20',
    'bg-black/40': 'bg-white/40',
    'bg-[#09090b]': 'bg-white',
    'bg-[#121214]': 'bg-white',
    'hover:text-white': 'hover:text-black',
    'group-hover/btn:text-white': 'group-hover/btn:text-black',
    'group-hover/item:text-white': 'group-hover/item:text-black',
    'group-hover:text-white': 'group-hover:text-black',
    'text-[#fafafa]': 'text-black',
    'rgba(255,255,255,0.2)': 'rgba(0,0,0,0.1)'
};

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    for (const [oldStr, newStr] of Object.entries(replacements)) {
        // Simple string replacement loop
        content = content.split(oldStr).join(newStr);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Done!');
