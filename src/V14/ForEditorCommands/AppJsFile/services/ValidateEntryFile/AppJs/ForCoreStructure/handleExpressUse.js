// validateAppJsCoreStructure.js
import fs from 'fs';

import { validateAppUse } from '../Rules/validateAppUse/validate.js';
import { fixAppUse } from '../Rules/validateAppUse/fix.js';

const validateAndFix = async (content) => {
    try {
        validateAppUse(content);
    } catch (e) {
        if (e.message === 'MISSING_EXPRESS_USE') {
            await fixAppUse();
        } else throw e;
    }
};

export { validateAndFix };