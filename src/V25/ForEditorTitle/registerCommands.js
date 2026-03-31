import * as vscode from 'vscode';

import { createEndpointCommand } from '../CommonCommands/CreateEndpoint/start.js';
import { addSubRouteCommand } from '../CommonCommands/AddSubRoute/start.js';
import { addEndPointCommand } from '../CommonCommands/AddEndPoint/start.js';
// import { appJsFileCommand } from '../CommonCommands/FixCommands/V1/AppJsFile/start.js';
import { appJsFileCommand } from '../CommonCommands/FixCommands/V3/AppJsFile/start.js';

export function registerAllCommands(context) {
    const CreateEndpoint = vscode.commands.registerCommand('extension.editor.title.createEndpoint', createEndpointCommand(context));
    const addSubRoute = vscode.commands.registerCommand('extension.editor.title.addSubRoute', addSubRouteCommand(context));
    const addEndPoint = vscode.commands.registerCommand('extension.editor.title.addEndPoint', addEndPointCommand(context));
    const fixAppJs = vscode.commands.registerCommand('extension.fixAppJs', appJsFileCommand(context));

    context.subscriptions.push(CreateEndpoint, addSubRoute, addEndPoint, fixAppJs);
};