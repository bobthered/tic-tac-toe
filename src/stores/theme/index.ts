import { theme } from 'sveltewind/stores';
import { sveltewind } from 'sveltewind/themes';

theme.set(sveltewind);

theme.set({
	button:
		'rounded-full bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 focus:ring-primary-500/30',
	buttonContrast:
		'bg-slate-700 hover:bg-slate-800 focus:bg-slate-800 focus:ring-slate-700/30 dark:bg-slate-100 dark:hover:bg-slate-200 dark:focus:bg-slate-200 dark:focus:ring-slate-100/30 dark:text-slate-700',
	buttonError: 'bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-red-500/30',
	buttonIcon: 'aspect-square',
	buttonSecondary:
		'bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-600 focus:ring-secondary-500/30',
	buttonTransparent:
		'bg-transparent hover:bg-transparent focus:bg-transparent focus:ring-slate-700/30 dark:focus:ring-white/30 shadow-[inset]'
});

export { theme };
