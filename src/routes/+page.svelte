<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { A } from '$components';
	import { theme } from '$stores';
</script>

<div class="flex flex-grow flex-col justify-end p-6">
	<div class="flex flex-col space-y-4">
		<A class={twMerge($theme.button)} href="/new-game">New Game</A>
		<!-- <A class={twMerge($theme.button, $theme.buttonSecondary)} href="/settings">Settings</A> -->
	</div>
</div>
