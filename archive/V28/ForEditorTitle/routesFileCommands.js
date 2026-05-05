import * as vscode from 'vscode';

// import { addEndPointCommand } from '../CommonCommands/ForRoutesJsFile/AddEndPoint/V1/start.js';
import { addEndPointCommand } from '../CommonCommands/ForRoutesJsFile/AddEndPoint/V2/start.js';

export function registerAllCommands(context) {
   const addEndPoint = vscode.commands.registerCommand('extension.editor.title.addEndPoint', addEndPointCommand(context));

    context.subscriptions.push(addEndPoint);
};