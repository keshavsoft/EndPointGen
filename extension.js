import { registerAllCommands } from './src/V30/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };