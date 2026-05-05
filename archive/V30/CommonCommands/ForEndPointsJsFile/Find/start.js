import * as vscode from 'vscode';

import { startOrchestration } from './V14/orchestration/startOrchestration.js';

export async function findCommand(context, uri) {
    uri = uri || vscode.window.activeTextEditor?.document?.uri;

    return startOrchestration({
        uri
    });
};
