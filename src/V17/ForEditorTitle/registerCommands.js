import * as vscode from 'vscode';

import { createEndpointCommand } from '../CommonCommands/CreateEndpoint/start.js';
import { addSubRouteCommand } from '../CommonCommands/AddSubRoute/start.js';

export function registerAllCommands(context) {
    const CreateEndpoint = vscode.commands.registerCommand('extension.editor.title.createEndpoint', createEndpointCommand(context));
    const addSubRoute = vscode.commands.registerCommand('extension.editor.title.addSubRoute', addSubRouteCommand(context));

    context.subscriptions.push(CreateEndpoint, addSubRoute);
};