import { startOrchestration } from './orchestration/startOrchestration.js';

export function getEndPointCommand(context) {
    return async (uri) => startOrchestration({ uri, extensionPath: context.extensionPath });
};