import fs from 'fs';
import { updateImports } from "./updateImports.js";

export function updateAppJs({ appJsPath, endpoint }) {
    let content = fs.readFileSync(appJsPath, "utf-8");

    const importLine = `import { router as routerFrom${endpoint} } from "./${endpoint}/routes.js";`;
    const useLine = `app.use('/${endpoint}', routerFrom${endpoint});`;

    updateImports({ appJsPath, importLine });
    // insertAfterLastAppUse(content, useLine);

    // if (!content.includes(importLine)) {
    //     const importMatches = content.match(/import .*;\n/g);
    //     if (importMatches) {
    //         const lastImport = importMatches[importMatches.length - 1];
    //         content = content.replace(lastImport, `${lastImport}${importLine}\n`);
    //     }
    // }

    // if (!content.includes(useLine)) {
    //     const useMatches = content.match(/app\.use\(.*\);\n/g);
    //     if (useMatches) {
    //         const lastUse = useMatches[useMatches.length - 1];
    //         content = content.replace(lastUse, `${lastUse}${useLine}\n`);
    //     }
    // }

    // fs.writeFileSync(appJsPath, content);
};

function insertAfterLastImport1(content, line) {
    const imports = content.match(/import .*;\n/g);
    if (!imports) return content;

    const lastImport = imports[imports.length - 1];
    return content.includes(line)
        ? content
        : content.replace(lastImport, `${lastImport}${line}\n`);
};

function insertAfterLastImport2(content, line) {
    const imports = content.match(/^import\s.+$/gm);
    if (!imports) return content;

    const lastImport = imports[imports.length - 1];
    return content.includes(line)
        ? content
        : content.replace(lastImport, `${lastImport}\n${line}`);
};

function insertAfterLastImport(content, line) {
    const regex = /^import\s.+$/gm;
    let match, lastMatch;

    while ((match = regex.exec(content)) !== null) {
        lastMatch = match;
    }
    if (!lastMatch) return content;

    const insertPos = lastMatch.index + lastMatch[0].length;
    return content.includes(line)
        ? content
        : content.slice(0, insertPos) + "\n" + line + content.slice(insertPos);
};

function insertAfterLastAppUse(content, line) {
    const uses = content.match(/app\.use\(.*\);\n/g);
    if (!uses) return content;

    const lastUse = uses[uses.length - 1];
    return content.includes(line)
        ? content
        : content.replace(lastUse, `${lastUse}${line}\n`);
}