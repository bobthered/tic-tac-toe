import { theme } from 'sveltewind/stores';
import { sveltewind } from 'sveltewind/themes';

theme.set(sveltewind);

theme.set({
	button:
		'rounded-full bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 focus:ring-primary-500/30',
	buttonIcon: 'aspect-square',
	buttonSecondary:
		'bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-600 focus:ring-secondary-500/30'
});

export { theme };
