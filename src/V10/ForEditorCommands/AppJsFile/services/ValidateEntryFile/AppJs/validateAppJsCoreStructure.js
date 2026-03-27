// validateAppJsCoreStructure.js
import fs from 'fs';
// import { validateExpressImport } from './checks/validateExpressImport.js';
import { validateAppInit } from './checks/validateAppInit.js';
import { validateAppUse } from './checks/validateAppUse.js';
import { validateServerListen } from './checks/validateServerListen.js';

import { validateExpressImport } from './Rules/ValidateExpressImport/validate.js';
import { fixExpressImport } from './Rules/ValidateExpressImport/fix.js';

const validateAppJsCoreStructure = async ({ entryFilePath }) => {
    const content = fs.readFileSync(entryFilePath, 'utf-8');

    // validateExpressImport(content);
    try {
        validateExpressImport(content);
    } catch (e) {
        if (e.message === 'MISSING_EXPRESS_IMPORT') {
            await fixExpressImport();
        } else throw e;
    };

    validateAppInit(content);
    validateAppUse(content);
    validateServerListen(content);
};

export { validateAppJsCoreStructure };