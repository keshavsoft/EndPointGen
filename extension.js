import { registerAllCommands } from './src/V7/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };