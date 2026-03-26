import { startOrchestration } from '../AddEndpoint/orchestration/startOrchestration.js';

export function addEndpointCommand(context) {
    return async (uri) => startOrchestration({ uri, extensionPath: context.extensionPath });
};