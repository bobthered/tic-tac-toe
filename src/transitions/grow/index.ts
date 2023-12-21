import { quadInOut } from 'svelte/easing';
export const grow = (_) => {
	return {
		duration: 200,
		css: (t: number) => {
			const eased = quadInOut(t);

			return `
            transform: scale(${eased});`;
		}
	};
};
