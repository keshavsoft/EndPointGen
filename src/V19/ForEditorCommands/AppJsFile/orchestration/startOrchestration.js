// src/V9/createFullEndpoint/orchestration/startOrchestration.js

import * as vscode from 'vscode';
import { validateEntryFilePath } from "../services/ValidateEntryFile/start.js";

export async function startOrchestration({ uri }) {

    const log = (m) => console.log(`[CreateFullEndpoint][${new Date().toISOString()}] ${m}`);
    try {
        const editor = vscode.window.activeTextEditor;

        const filePath = uri.fsPath;
        // const content = editor.document.getText();

        validateEntryFilePath({ entryFilePath: filePath });
    } catch (e) {
        log(`ERROR: ${e.message};`);
        vscode.window.showErrorMessage(`Error: ${e.message}`);
    }
};