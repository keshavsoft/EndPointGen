import updateImports from "./updateImports/index.js";
import updateAppUse from "./updateUse/index.js";

export function updateAppJs({ appJsPath, endpoint }) {
    updateImports({ appJsPath, endpoint });
    updateAppUse({ appJsPath, endpoint });

    // updateAppUse({
    //     appJsPath: context.appJsPath,
    //     useLine: `app.use('/${endpoint}', routerFrom${endpoint});`
    // });
};