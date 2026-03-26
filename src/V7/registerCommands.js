import * as vscode from 'vscode';
import { initCommand } from './commands/initCommand.js';
import { listenersCommand } from './commands/listenersCommand.js';
import { fetchCallsCommand } from './commands/fetchCallsCommand.js';
import { businessCommand } from './commands/businessCommand.js';
import { fetchFromServerCommand } from './commands/fetchFromServer.js';
import { addFetchCommand } from './commands/addFetch.js';

import { createEndpointCommand } from './commands/createEndpoint.js';
import { addSubRouteCommand } from './commands/addSubRoute.js';
import { addEndPointCommand } from './commands/addEndPoint.js';

export function registerAllCommands(context) {
    const init = vscode.commands.registerCommand('extension.initJs', initCommand(context));
    const createEndpoint = vscode.commands.registerCommand('extension.createEndpoint', createEndpointCommand(context));
    const addSubRoute = vscode.commands.registerCommand('extension.addSubRoute', addSubRouteCommand(context));
    const addEndPoint = vscode.commands.registerCommand('extension.addEndPoint', addEndPointCommand(context));

    const listeners = vscode.commands.registerCommand('extension.addListeners', listenersCommand(context));
    const fetchCalls = vscode.commands.registerCommand('extension.FetchCalls', fetchCallsCommand(context));
    const business = vscode.commands.registerCommand('extension.addBusiness', businessCommand(context));
    const fetchFromServer = vscode.commands.registerCommand('extension.fetchFromServer', fetchFromServerCommand(context));
    const addFetch = vscode.commands.registerCommand('extension.fetchCommand', addFetchCommand(context));

    context.subscriptions.push(init, createEndpoint, addSubRoute,
        addEndPoint,
        listeners, fetchCalls, business, fetchFromServer, addFetch);
};