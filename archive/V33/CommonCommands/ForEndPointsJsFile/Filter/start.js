import * as vscode from 'vscode';

import { startOrchestration } from './V15/orchestration/startOrchestration.js';

export async function filterCommand(context, uri) {
    uri = uri || vscode.window.activeTextEditor?.document?.uri;

    return startOrchestration({
        uri
    });
};
