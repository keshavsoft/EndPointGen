// validateAppJsCoreStructure.js
import fs from 'fs';
// import { validateAppUse } from './checks/validateAppUse.js';
// import { validateServerListen } from './checks/validateServerListen.js';

import { validateAndFix } from './handleExpressImport.js';
import { validateAndFix as handleExpressInit } from './handleExpressInit.js';
import { validateAndFix as handleExpressUse } from './handleExpressUse.js';
import { validateAndFix as handleExpressListen } from './handleExpressListen.js';

const validateAppJsCoreStructure = async ({ entryFilePath }) => {
    const content = fs.readFileSync(entryFilePath, 'utf-8');

    await validateAndFix(content);

    await handleExpressInit(content);

    await handleExpressUse(content);

    await handleExpressListen(content);

    // validateAppUse(content);
    // validateServerListen(content);
};

export { validateAppJsCoreStructure };