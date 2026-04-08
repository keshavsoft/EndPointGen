import * as vscode from 'vscode';

// import { writeEndPointCommand } from '../CommonCommands/ForEndPointsJsFile/WriteEndPoint/V3/start.js';
import { getEndPointCommand } from '../CommonCommands/ForEndPointsJsFile/GetEndPoint/V4/start.js';
import { postEndPointCommand } from '../CommonCommands/ForEndPointsJsFile/PostEndPoint/V5/start.js';
import { DeleteEndPointCommand } from '../CommonCommands/ForEndPointsJsFile/DeleteEndPoint/V5/start.js';

export function registerAllCommands(context) {
    // const writeEndPoint = vscode.commands.registerCommand('extension.editor.title.routes.writeEndPoint', writeEndPointCommand(context));
    const getEndPoint = vscode.commands.registerCommand('extension.editor.title.endpoints.get', getEndPointCommand(context));
    const postEndPoint = vscode.commands.registerCommand('extension.editor.title.endpoints.post', postEndPointCommand(context));
    const DeleteEndPoint = vscode.commands.registerCommand('extension.editor.title.endpoints.delete', DeleteEndPointCommand(context));

    context.subscriptions.push(getEndPoint, postEndPoint, DeleteEndPoint);
};