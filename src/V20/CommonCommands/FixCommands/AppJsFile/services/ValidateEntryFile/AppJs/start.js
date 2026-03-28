// start.js (unchanged flow)
import { validateEntryFileExists } from './validateEntryFileExists.js';
import { validateAppJsNotEmpty } from './validateAppJsNotEmpty.js';
import { validateAppJsCoreStructure } from './ForCoreStructure/start.js';

const validateAppJsStructure = async ({ entryFilePath, context }) => {
    validateEntryFileExists({ entryFilePath });

    const result = await validateAppJsNotEmpty({ entryFilePath, context });
    if (result === 'STOP') return;

    await validateAppJsCoreStructure({ entryFilePath });
};

export { validateAppJsStructure };
