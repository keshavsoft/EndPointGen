import { registerAllCommands } from './src/V34/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };