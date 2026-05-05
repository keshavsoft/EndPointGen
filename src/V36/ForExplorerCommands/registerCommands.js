import * as vscode from 'vscode';
import { initCommand } from './commands/initCommand.js';
import { initJsFromEnvCommand } from './InitJsFromEnv/start.js';
import { initJsFromConfigCommand } from './InitJsFromConfig/start.js';
import { initFromExpressBoilerPlate } from './expressBoilerPlate/start.js';

import { createEndpointCommand } from '../CommonCommands/CreateEndpoint/start.js';

export const registerAllCommands = (context) => {
    const init = vscode.commands.registerCommand('extension.initJs', initCommand(context));
    const initJsFromEnv = vscode.commands.registerCommand('extension.initJsFromEnv', initJsFromEnvCommand(context));
    const initJsFromConfig = vscode.commands.registerCommand('extension.initJsFromConfig', initJsFromConfigCommand(context));
    const initJsFromExpressBoilerPlate = vscode.commands.registerCommand('extension.expressBoilerPlate', initFromExpressBoilerPlate(context));

    const createEndpoint = vscode.commands.registerCommand('extension.createEndpoint', createEndpointCommand(context));

    context.subscriptions.push(init, createEndpoint, initJsFromEnv,
        initJsFromConfig, initJsFromExpressBoilerPlate
    );
};
