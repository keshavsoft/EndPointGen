import { registerAllCommands } from './src/V35/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };