import { startOrchestration } from './orchestration/startOrchestration.js';

export const initJsFromConfigCommand = (context) => {
    return async (uri) => startOrchestration(uri, context.extensionPath);
};