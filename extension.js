import { registerAllCommands } from './src/V3/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };