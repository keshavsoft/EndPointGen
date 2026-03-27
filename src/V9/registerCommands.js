import * as vscode from 'vscode';
import { initCommand } from './commands/initCommand.js';

import { createEndpointCommand } from './commands/createEndpoint.js';
import { addSubRouteCommand } from './commands/addSubRoute.js';
import { addEndPointCommand } from './commands/addEndPoint.js';
import { createFullEndpointCommand } from './commands/createFullEndpoint.js';

export function registerAllCommands(context) {
    const init = vscode.commands.registerCommand('extension.initJs', initCommand(context));
    const createEndpoint = vscode.commands.registerCommand('extension.createEndpoint', createEndpointCommand(context));
    const addSubRoute = vscode.commands.registerCommand('extension.addSubRoute', addSubRouteCommand(context));
    const addEndPoint = vscode.commands.registerCommand('extension.addEndPoint', addEndPointCommand(context));
    const createFullEndpoint = vscode.commands.registerCommand('extension.createFullEndpoint', createFullEndpointCommand(context));

    context.subscriptions.push(init, createEndpoint, addSubRoute,
        addEndPoint, createFullEndpoint
    );
};