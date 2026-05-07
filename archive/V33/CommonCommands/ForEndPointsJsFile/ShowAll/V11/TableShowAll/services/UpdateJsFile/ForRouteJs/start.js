import { updateImports } from "./forImportLine.js";
import { updateAppUse } from './forUseLine.js';

const fileNameToInsert = "controller.js";

const updateRouteJsFile = ({ appJsPath, endpoint }) => {
    const importLine = `import { getFunc } from "./${endpoint}/${fileNameToInsert}";`;
    const useLine = `router.get('/${endpoint}', getFunc);`;

    updateImports({ appJsPath, importLine });

    updateAppUse({
        appJsPath: appJsPath,
        useLine
    });
};

export { updateRouteJsFile };
