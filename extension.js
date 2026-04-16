import { registerAllCommands } from './src/V32/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };