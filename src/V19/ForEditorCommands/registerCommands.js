import * as vscode from 'vscode';

import { appJsFileCommand } from './commands/forAppFile.js';

export function registerAllCommands(context) {
    const forAppJs = vscode.commands.registerCommand('extension.forAppJs', appJsFileCommand(context));
    const fixAppJs = vscode.commands.registerCommand('extension.fixAppJs', appJsFileCommand(context));

    context.subscriptions.push(forAppJs, fixAppJs);
};