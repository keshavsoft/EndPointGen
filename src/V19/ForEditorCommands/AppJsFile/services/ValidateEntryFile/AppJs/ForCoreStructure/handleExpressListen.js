// validateAppJsCoreStructure.js
import fs from 'fs';

import { validateAppListen } from '../Rules/validateAppListen/validate.js';
import { fixServerListen } from '../Rules/validateAppListen/fix.js';

const validateAndFix = async (content) => {
    try {
        validateAppListen(content);
    } catch (e) {
        if (e.message === 'MISSING_EXPRESS_LISTEN') {
            await fixServerListen();
        } else throw e;
    }
};

export { validateAndFix };