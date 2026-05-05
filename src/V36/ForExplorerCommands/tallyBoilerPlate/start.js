import { startOrchestration } from './orchestration/startOrchestration.js';

export const initFromTallyBoilerPlate = (context) => {
    return async (uri) => startOrchestration({ inTargetPath: uri?.fsPath });
};