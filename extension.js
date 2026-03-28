import { registerAllCommands } from './src/V22/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };