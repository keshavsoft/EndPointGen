import { registerAllCommands } from './src/V2/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };