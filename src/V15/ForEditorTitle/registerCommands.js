import * as vscode from 'vscode';

import { createEndpointCommand } from '../CommonCommands/CreateEndpoint/start.js';

export function registerAllCommands(context) {
    const CreateEndpoint = vscode.commands.registerCommand('extension.editor.title.createEndpoint', createEndpointCommand(context));

    context.subscriptions.push(CreateEndpoint);
};