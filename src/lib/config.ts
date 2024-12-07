import { writable } from 'svelte/store';

export type ClientConfig = {
	foo?: boolean;
	theme?: string;
};
export type ServerConfig = {
	foo?: boolean;
};

export const defaultClientConfig: ClientConfig = {
	foo: true,
	theme: 'pulsar',
};

export const defaultServerConfig: ServerConfig = {};

export const clientConfig = writable<ClientConfig>({ ...defaultClientConfig, });
export const serverConfig = writable<ServerConfig>({ ...defaultServerConfig, });

export function SCloadConfig() {

}

export function CCloadConfig() {
	if (typeof window === 'undefined') return;
	const savedConfig = localStorage.getItem('config');
	console.log(savedConfig);
	if (savedConfig) {
		const parsedConfig = JSON.parse(savedConfig);
		clientConfig.set({ ...defaultClientConfig, ...parsedConfig });
	} else {
		clientConfig.set(defaultClientConfig);
	}
}

// Function to save config to localStorage and cookies
export function CCsaveConfig() {
	if (typeof window === 'undefined') return;
	clientConfig.subscribe((currentConfig) => {
		localStorage.setItem('config', JSON.stringify(currentConfig));
		document.cookie = `config=${JSON.stringify(currentConfig)}`;
	})();
}

/**
 * Resets the global configuration to its default values, and optionally saves it to storage.
 *
 * @param {boolean} noSave - Whether to save the default configuration to storage. Defaults to false.
 * @return {void}
 */
export function CCresetToDefaults(noSave = false) {
	clientConfig.set(defaultClientConfig);
	if (!noSave) CCsaveConfig();
}

export function CCeditKey(key: string, value: never) {
	clientConfig.update((config) => {
		const keys = key.split('.');
		let currentLevel = config;

		for (let i = 0; i < keys.length; i++) {
			const currentKey = keys[i];
			if (i === keys.length - 1) {
				// This is the deepest level, set the value here
				currentLevel[currentKey] = value;
			} else {
				// If the property doesn't exist yet, initialize it as an empty object
				if (!currentLevel[currentKey]) {
					currentLevel[currentKey] = {};
				}
				// Go deeper
				currentLevel = currentLevel[currentKey];
			}
		}

		return config;
	});
	CCsaveConfig();
}
