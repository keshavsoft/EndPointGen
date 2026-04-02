import * as vscode from 'vscode';

// import { writeEndPointCommand } from '../CommonCommands/ForEndPointsJsFile/WriteEndPoint/V1/start.js';
import { writeEndPointCommand } from '../CommonCommands/ForEndPointsJsFile/WriteEndPoint/V2/start.js';

export function registerAllCommands(context) {
    const writeEndPoint = vscode.commands.registerCommand('extension.editor.title.routes.writeEndPoint', writeEndPointCommand(context));

    context.subscriptions.push(writeEndPoint);
};