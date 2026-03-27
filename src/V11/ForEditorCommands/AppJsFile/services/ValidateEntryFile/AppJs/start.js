// start.js (unchanged flow)
import { validateEntryFileExists } from './validateEntryFileExists.js';
import { validateAppJsNotEmpty } from './validateAppJsNotEmpty.js';
import { validateAppJsCoreStructure } from './validateAppJsCoreStructure.js';

const validateAppJsStructure = async ({ entryFilePath }) => {
    validateEntryFileExists({ entryFilePath });
    validateAppJsNotEmpty({ entryFilePath });
    await validateAppJsCoreStructure({ entryFilePath });
};

export { validateAppJsStructure };
