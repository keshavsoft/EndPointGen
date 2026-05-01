import { startOrchestration } from './orchestration/startOrchestration.js';

export const initJsFromConfigCommand = (context) => {
    return async (uri) => startOrchestration({ inTargetPath: uri?.fsPath });
};