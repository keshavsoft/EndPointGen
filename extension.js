import { registerAllCommands } from './src/V27/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };