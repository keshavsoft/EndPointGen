import * as vscode from 'vscode';

import { getEndPointCommand } from '../CommonCommands/ForEndPointsJsFile/GetEndPoint/V9/start.js';
import { postEndPointCommand } from '../CommonCommands/ForEndPointsJsFile/PostEndPoint/V7/start.js';
// import { DeleteEndPointCommand } from '../CommonCommands/ForEndPointsJsFile/DeleteEndPoint/V6/start.js';
import { AlterEndPointCommand } from '../CommonCommands/ForEndPointsJsFile/AlterEndPoint/V6/start.js';
import { DeleteEndPointCommand } from '../CommonCommands/ForEndPointsJsFile/DeleteEndPoint/V7/start.js';

export function registerAllCommands(context) {
    const getEndPoint = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.get',
        (uri) => getEndPointCommand(context, uri)
    );

    const postEndPoint = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.post',
        (uri) => postEndPointCommand(context, uri)
    );

    const DeleteEndPoint = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.delete',
        (uri) => DeleteEndPointCommand(context, uri)
    );

    const AlterEndPoint = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.alter',
        (uri) => AlterEndPointCommand(context, uri)
    );

    // const getEndPoint = vscode.commands.registerCommand('extension.editor.title.endpoints.get', getEndPointCommand(context));
    // const postEndPoint = vscode.commands.registerCommand('extension.editor.title.endpoints.post', postEndPointCommand(context));
    // const DeleteEndPoint = vscode.commands.registerCommand('extension.editor.title.endpoints.delete', DeleteEndPointCommand(context));

    context.subscriptions.push(getEndPoint, postEndPoint, DeleteEndPoint, AlterEndPoint);
};