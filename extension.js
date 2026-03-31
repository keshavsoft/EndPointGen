import { registerAllCommands } from './src/V24/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };