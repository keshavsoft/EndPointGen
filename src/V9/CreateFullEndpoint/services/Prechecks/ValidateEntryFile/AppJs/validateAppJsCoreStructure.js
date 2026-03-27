// src/V9/createFullEndpoint/services/Prechecks/ValidateEntryFile/AppJs/validateAppJsCoreStructure.js

import fs from 'fs';

const log = (msg) => console.log(`[CreateFullEndpoint][${new Date().toISOString()}] ${msg}`);

const validateAppJsCoreStructure = ({ entryFilePath }) => {
    log('CHECK: app.js core structure;');

    const content = fs.readFileSync(entryFilePath, 'utf-8');

    const checks = [
        { key: 'EXPRESS_IMPORT', value: content.includes('import express') || content.includes("require('express')") || content.includes('require("express")') },
        { key: 'APP_INIT', value: content.includes('express()') },
        { key: 'APP_USE', value: content.includes('app.use') },
        { key: 'SERVER_LISTEN', value: content.includes('listen(') }
    ];

    for (const check of checks) {
        if (!check.value) {
            log(`FAIL: Missing ${check.key};`);
            throw new Error(`MISSING_${check.key}`);
        }
        log(`PASS: ${check.key};`);
    }

    log('PASS: app.js core structure valid;');
};

export { validateAppJsCoreStructure };