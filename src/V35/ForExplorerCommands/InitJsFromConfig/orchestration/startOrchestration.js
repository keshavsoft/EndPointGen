import { finalize, fail } from '../utils/response.js';
import { copyTemplate } from '../services/copyTemplate.js';
import { runPrechecks } from '../services/precheck.js';
import { openEntryFile } from '../services/openFile.js';
import { extractData } from '../services/extractData.js';

const templatePath = '../../../../CommonTemplates/BaseWithVersions/V8';

export async function startOrchestration({ inTargetPath }) {
    try {
        const targetPath = inTargetPath;

        runPrechecks({
            targetPath,
            inTemplatePath: templatePath
        });

        copyTemplate({
            targetPath,
            inTemplatePath: templatePath
        });
        // ✅ use here
        await extractData(targetPath);

        openEntryFile(targetPath);

        finalize({
            message: `Node API initialized successfully 🚀\nFiles created: package.json, app.js\nLocation: ${targetPath}`
        });
    } catch (error) {
        fail(error);
    };
};