import { registerAllCommands } from './src/V8/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };