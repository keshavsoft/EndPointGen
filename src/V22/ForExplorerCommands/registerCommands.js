import * as vscode from 'vscode';
import { initCommand } from './commands/initCommand.js';

import { createEndpointCommand } from '../CommonCommands/CreateEndpoint/start.js';
import { addSubRouteCommand } from '../CommonCommands/AddSubRoute/start.js';
import { addEndPointCommand } from '../CommonCommands/AddEndPoint/start.js';
import { createFullEndpointCommand } from './commands/createFullEndpoint.js';

export const registerAllCommands = (context) => {
    const init = vscode.commands.registerCommand('extension.initJs', initCommand(context));
    const createEndpoint = vscode.commands.registerCommand('extension.createEndpoint', createEndpointCommand(context));
    const addSubRoute = vscode.commands.registerCommand('extension.addSubRoute', addSubRouteCommand(context));
    const addEndPoint = vscode.commands.registerCommand('extension.addEndPoint', addEndPointCommand(context));
    const createFullEndpoint = vscode.commands.registerCommand('extension.createFullEndpoint', createFullEndpointCommand(context));

    context.subscriptions.push(init, createEndpoint, addSubRoute,
        addEndPoint, createFullEndpoint
    );
};
