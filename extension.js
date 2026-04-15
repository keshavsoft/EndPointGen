import { registerAllCommands } from './src/V31/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };