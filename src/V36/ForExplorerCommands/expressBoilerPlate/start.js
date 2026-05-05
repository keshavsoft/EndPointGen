import { startOrchestration } from './orchestration/startOrchestration.js';

export const initFromExpressBoilerPlate = (context) => {
    return async (uri) => startOrchestration({ inTargetPath: uri?.fsPath });
};