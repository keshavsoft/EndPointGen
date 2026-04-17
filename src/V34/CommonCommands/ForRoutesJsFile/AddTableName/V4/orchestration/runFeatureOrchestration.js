// src/V3/AddEndpoint/orchestration/runFeatureOrchestration.js
import fs from 'fs';
import path from 'path';
import * as vscode from 'vscode';
import { fileURLToPath } from 'url';
import { copyTemplate } from '../services/copyTemplate.js';
import { updateRouteJsFile } from '../services/UpdateRouteFile/start.js';
import { updateConfigFile } from '../services/updateConfig.js';

export async function runFeatureOrchestration({ context, inFileName }) {
    // const endpoint = await getEndpoint();
    // if (!endpoint) return null;

    const { folderName, tableName } = await getFolderAndTable();

    // fix inside localContext
    const localContext = {
        ...context,
        endpointFolder: path.join(context.targetPath, endpoint),
        routeFilePath: path.join(context.targetPath, endpoint),
        templatePath: fileURLToPath(new URL('../templates/Base', import.meta.url))
    };

    // inside runFeatureOrchestration
    copy({
        templatePath: localContext.templatePath,
        routeFilePath: localContext.routeFilePath,
        endpointFolder: localContext.endpointFolder
    });

    updateRouteJsFile({
        appJsPath: localContext.appJsPath, endpoint,
        inFileName
    });

    updateConfigFile({
        inEndpointFolder: localContext.endpointFolder,
        inTableName: endpoint
    });

    return { endpoint };
}
// update only this
async function getEndpoint() {
    const value = await vscode.window.showInputBox({ prompt: 'Enter Table name (e.g. TasksTable, in Config/Schemas folder)' });
    if (!value) return null;

    const clean = value.trim().replace(/[^a-zA-Z0-9-_]/g, '');
    if (!clean) return null;

    return clean;
};

async function getFolderAndTable() {
    const input = await vscode.window.showInputBox({
        prompt: "Enter FolderName and TableName",
        placeHolder: "Users Tasks"
    });

    if (!input) return null;

    const clean = input.trim();

    const separators = [' ', '.', ':'];

    let folderName = null;
    let tableName = null;

    for (const sep of separators) {
        if (clean.includes(sep)) {
            const parts = clean.split(sep).map(p => p.trim()).filter(Boolean);

            if (parts.length >= 2) {
                folderName = parts[0];
                tableName = parts[1];
                break;
            }
        }
    }

    // 👉 If only one value → use same for both
    if (!folderName) {
        folderName = clean;
        tableName = clean;
    }

    // sanitize
    folderName = folderName.replace(/[^a-zA-Z0-9_]/g, '');
    tableName = tableName.replace(/[^a-zA-Z0-9_]/g, '');

    return {
        folderName,
        tableName
    };
};

// change copy
function copy({ templatePath, routeFilePath, endpointFolder }) {
    if (!fs.existsSync(endpointFolder)) fs.mkdirSync(endpointFolder, { recursive: true });
    copyTemplate({ templatePath, targetPath: routeFilePath });
}