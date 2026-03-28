// validateAppJsCoreStructure.js
import fs from 'fs';

import { validateExpressImport } from '../Rules/ValidateExpressImport/validate.js';
import { fixExpressImport } from '../Rules/ValidateExpressImport/fix.js';

const validateAndFix = async (content) => {
    try {
        validateExpressImport(content);
    } catch (e) {
        if (e.message === 'MISSING_EXPRESS_IMPORT') {
            await fixExpressImport();
        } else throw e;
    }
};

export { validateAndFix };