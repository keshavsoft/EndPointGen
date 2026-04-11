import { registerAllCommands } from './src/V29/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };