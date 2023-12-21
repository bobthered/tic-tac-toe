import { elasticInOut } from 'svelte/easing';
export const grow = (_) => {
	return {
		duration: 200,
		css: (t: number) => {
			const eased = elasticInOut(t);

			return `
            transform: scale(${eased});`;
		}
	};
};
