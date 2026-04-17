import { registerAllCommands } from './src/V33/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };