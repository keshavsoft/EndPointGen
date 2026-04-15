import * as vscode from 'vscode';

import { showAllCommand } from '../CommonCommands/ForEndPointsJsFile/ShowAll/V11/start.js';
import { insertCommand } from '../CommonCommands/ForEndPointsJsFile/Insert/start.js';
import { deleteCommand } from '../CommonCommands/ForEndPointsJsFile/Delete/start.js';
import { findCommand } from '../CommonCommands/ForEndPointsJsFile/Find/start.js';
import { filterCommand } from '../CommonCommands/ForEndPointsJsFile/Filter/start.js';
import { alterCommand } from '../CommonCommands/ForEndPointsJsFile/Alter/start.js';

export function registerAllCommands(context) {

    // GET dropdown command
    const getEndPoint = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.get',
        async (uri) => {

            const selection = await vscode.window.showQuickPick(
                [
                    { label: "ShowAll", value: "showAll" },
                    { label: "Find", value: "find" },
                    { label: "Filter", value: "filter" }
                ],
                {
                    placeHolder: "Select GET operation"
                }
            );

            if (!selection) return;

            switch (selection.value) {
                case "showAll":
                    return showAllCommand(context, uri);

                case "find":
                    return findCommand(context, uri);

                case "filter":
                    return filterCommand(context, uri);
            }
        }
    );


    // Other commands
    const postEndPoint = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.insert',
        (uri) => insertCommand(context, uri)
    );

    const DeleteEndPoint = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.delete',
        (uri) => deleteCommand(context, uri)
    );

    const alterEndPoint = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.alter',
        (uri) => alterCommand(context, uri)
    );

    context.subscriptions.push(
        getEndPoint,
        postEndPoint,
        DeleteEndPoint,
        alterEndPoint
    );
}