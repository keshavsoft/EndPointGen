import { registerAllCommands } from './src/V36/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };