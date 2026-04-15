import * as vscode from 'vscode';

import { DATA_SOURCE_STRATEGIES } from './dataSourceStrategies.js';
import { showAllCommand } from '../../CommonCommands/ForEndPointsJsFile/ShowAll/V11/start.js';
import { findCommand } from '../../CommonCommands/ForEndPointsJsFile/Find/start.js';
import { filterCommand } from '../../CommonCommands/ForEndPointsJsFile/Filter/start.js';


export async function getRegisterCommend(context, uri) {

    // get current file uri if not passed
    uri = uri || vscode.window.activeTextEditor?.document?.uri;

    const selection = await vscode.window.showQuickPick(
        DATA_SOURCE_STRATEGIES.map(s => s.label),
        { placeHolder: "Select get methods" }
    );

    if (!selection) return;

    const strategy = DATA_SOURCE_STRATEGIES.find(s => s.label === selection);

    return handleStrategy({ strategy, context, uri });
}

async function handleStrategy({ strategy, context, uri }) {

    switch (strategy.id) {

        case "Show_All": {

            return showAllCommand(context, uri);
        };

        case "Find": {

            return findCommand(context, uri);
        };

        case "Filter": {

            return filterCommand(context, uri);
        };

        default:
            vscode.window.showErrorMessage("Unknown strategy");
    };
};


