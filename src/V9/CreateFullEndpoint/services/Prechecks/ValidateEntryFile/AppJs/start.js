// src/V9/createFullEndpoint/services/Prechecks/ValidateEntryFile/AppJs/start.js

import { validateEntryFileExists } from './validateEntryFileExists.js';
import { validateAppJsNotEmpty } from './validateAppJsNotEmpty.js';
import { validateAppJsCoreStructure } from './validateAppJsCoreStructure.js';

const log = (msg) => console.log(`[CreateFullEndpoint][${new Date().toISOString()}] ${msg}`);

const validateAppJsStructure = ({ entryFilePath }) => {
    log(`START: App.js validation → ${entryFilePath};`);

    validateEntryFileExists({ entryFilePath });
    validateAppJsNotEmpty({ entryFilePath });
    validateAppJsCoreStructure({ entryFilePath });

    log('PASS: app.js fully validated;');
};

export { validateAppJsStructure };