import { registerAllCommands } from './src/V6/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };