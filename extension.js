import { registerAllCommands } from './src/V9/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };