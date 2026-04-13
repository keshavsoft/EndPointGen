import * as vscode from 'vscode';

import { showAllCommand } from '../CommonCommands/ForEndPointsJsFile/ShowAll/V11/start.js';
import { insertCommand } from '../CommonCommands/ForEndPointsJsFile/Insert/start.js';
// import { AlterEndPointCommand } from '../CommonCommands/ForEndPointsJsFile/AlterEndPoint/V6/start.js';
// import { DeleteEndPointCommand } from '../CommonCommands/ForEndPointsJsFile/DeleteEndPoint/V7/start.js';
import { deleteCommand } from '../CommonCommands/ForEndPointsJsFile/Delete/start.js';
import { findCommand } from '../CommonCommands/ForEndPointsJsFile/Find/start.js';

export function registerAllCommands(context) {
    const getEndPoint = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.showAll',
        (uri) => showAllCommand(context, uri)
    );

    const postEndPoint = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.insert',
        (uri) => insertCommand(context, uri)
    );

    const DeleteEndPoint = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.delete',
        (uri) => deleteCommand(context, uri)
    );

    const findEndPoint = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.find',
        (uri) => findCommand(context, uri)
    );


    // const AlterEndPoint = vscode.commands.registerCommand(
    //     'extension.editor.title.endpoints.alter',
    //     (uri) => AlterEndPointCommand(context, uri)
    // );

    context.subscriptions.push(getEndPoint, postEndPoint, DeleteEndPoint, findEndPoint);
};