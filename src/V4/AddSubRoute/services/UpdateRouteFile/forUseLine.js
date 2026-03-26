import fs from 'fs';

const updateAppUse = ({ appJsPath, useLine }) => {
    try {
        let content = fs.readFileSync(appJsPath, "utf-8");

        const index = findInsertIndex(content);
        content = insertLine(content, index, useLine);

        fs.writeFileSync(appJsPath, content);
    } catch (e) {
        console.error("APP USE ERROR:", e);
    }
};

const findInsertIndex1 = (content) => {
    const regex = /app\.use\(.*\);/g;
    let match, last;
    while ((match = regex.exec(content)) !== null) last = match;

    if (last) return last.index + last[0].length;

    const fallback = "const app = express();";
    const idx = content.indexOf(fallback);
    return idx !== -1 ? idx + fallback.length : -1;
};

const findInsertIndex2 = (content) => {
    const regex = /app\.use\(.*\);/g;
    let match, last;
    while ((match = regex.exec(content)) !== null) last = match;

    if (last) return last.index + last[0].length;

    const fallbackRegex = /const\s+app\s*=\s*express\(\)\s*;/;
    const fallbackMatch = content.match(fallbackRegex);

    if (fallbackMatch) {
        return fallbackMatch.index + fallbackMatch[0].length;
    }

    return content.length; // last fallback → append at end
};

const findInsertIndex = (content) => {
    const regex = /router\.use\(.*\);/g;
    let match, last;
    while ((match = regex.exec(content)) !== null) last = match;

    if (last) return last.index + last[0].length;

    const fallbackRegex = /const\s+router\s*=\s*express\.Router\(\)\s*;/;
    const fallbackMatch = content.match(fallbackRegex);

    if (fallbackMatch) {
        return fallbackMatch.index + fallbackMatch[0].length;
    }

    return content.length;
};

const insertLine = (content, index, line) => {
    if (index === -1 || content.includes(line)) return content;
    return content.slice(0, index) + "\n" + line + content.slice(index);
};

export { updateAppUse };