// src/V30/ForExplorerCommands/InitJsFromConfig/services/extractData.js

import fs from 'fs/promises';
import path from 'path';
const CommonToFolderName = "Data";

export const extractData = async (targetPath) => {
    const schemasPath = path.join(targetPath, 'Config', 'Schemas');
    const outputPath = path.join(targetPath, CommonToFolderName);

    await fs.mkdir(outputPath, { recursive: true });

    const files = await fs.readdir(schemasPath);

    for (const file of files) {
        if (!file.endsWith('.json')) continue;

        const filePath = path.join(schemasPath, file);
        const raw = await fs.readFile(filePath, 'utf-8');
        const json = JSON.parse(raw);

        const dataArray = Array.isArray(json.data) ? json.data : [];

        const outFile = path.join(outputPath, file);
        await fs.writeFile(outFile, JSON.stringify(dataArray, null, 2) + '\n');

        // optional: clear original schema data
        json.data = [];
        await fs.writeFile(filePath, JSON.stringify(json, null, 2) + '\n');
    }
};