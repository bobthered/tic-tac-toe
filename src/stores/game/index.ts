import { writable } from 'svelte/store';

export const game = writable({
	color: 'primary',
	order: 'random',
	symbol: 'X'
});
