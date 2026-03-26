import { updateImports } from "./forImportLine.js";
import { updateAppUse } from './forUseLine.js';
const findName = "router";

export function updateRouteJsFile({ appJsPath, endpoint }) {
    const importLine = `import { router as routerFrom${endpoint} } from "./${endpoint}/routes.js";`;
    const useLine = `${findName}.use('/${endpoint}', routerFrom${endpoint});`;

    updateImports({ appJsPath, importLine });

    updateAppUse({
        appJsPath: appJsPath,
        useLine
    });
};
