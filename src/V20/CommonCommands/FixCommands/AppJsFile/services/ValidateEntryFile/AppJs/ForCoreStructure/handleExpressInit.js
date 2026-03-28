// validateAppJsCoreStructure.js
import fs from 'fs';

import { validateAppInit } from '../Rules/validateAppInit/validate.js';
import { fixAppInit } from '../Rules/validateAppInit/fix.js';

const validateAndFix = async (content) => {
    try {
        validateAppInit(content);
    } catch (e) {
        if (e.message === 'MISSING_EXPRESS_INIT') {
            await fixAppInit();
        } else throw e;
    }
};

export { validateAndFix };