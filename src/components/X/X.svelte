<script lang="ts">
	import { twMerge } from 'tailwind-merge';
</script>

<svg class={twMerge('h-full w-full', $$props.class)} fill="none" viewBox="0 0 24 24">
	<path d="M6 6L18 18" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
	<path d="M6 18L18 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
</svg>
