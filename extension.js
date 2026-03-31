import { registerAllCommands } from './src/V26/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };