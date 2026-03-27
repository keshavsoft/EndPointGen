// src/V2/InitJs/orchestration/startOrchestration.js;

import { finalize, fail } from '../utils/response.js';
import { copyTemplate } from '../services/copyTemplate.js';
import { runPrechecks } from '../services/precheck.js';

export async function startOrchestration(uri) {
    const log = (msg) => console.log(`[${new Date().toISOString()}] ${msg}`);
    try {
        log('START');

        const targetPath = uri.fsPath; log('Path resolved');

        runPrechecks({ targetPath }); log('Prechecks passed');

        copyTemplate({ targetPath }); log('Template copied');

        finalize({
            message: `Node API initialized successfully 🚀\nFiles created: package.json, app.js\nLocation: ${targetPath}`
        });
    } catch (error) {
        log('ERROR');
        fail(error);
    }
};