import { registerAllCommands } from './src/V28/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };