import * as vscode from 'vscode';

import { startOrchestration } from './V13/orchestration/startOrchestration.js';

export async function deleteCommand(context, uri) {
    uri = uri || vscode.window.activeTextEditor?.document?.uri;

    return startOrchestration({
        uri
    });
};
