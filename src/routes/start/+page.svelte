<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { A, Button, Modal, O, X } from '$components';
	import { game, theme } from '$stores';
	import { grow } from '$transitions';

	// props (internal)
	let modal: {
		close?: (() => boolean) | undefined;
		isOpen?: boolean;
		open?: (() => boolean) | undefined;
		toggle?: (() => boolean) | undefined;
	} = {};

	$: if ($game.currentPlayer === 'computer') game.computer.choose();
</script>

<div class="flex flex-grow flex-col p-6">
	<!-- {JSON.stringify($game, null, 2)} -->
	<div class="flex flex-grow items-center justify-center">
		<div class="grid flex-grow grid-cols-3 grid-rows-3">
			{#each $game.board as cell, i}
				<div
					class={twMerge(
						'flex aspect-square border-gray-600 dark:border-gray-400',
						i % 3 < 2 ? 'border-r-[4px]' : '',
						i < 6 ? 'border-b-[4px]' : ''
					)}
				>
					{#if cell === null}
						<div class="flex flex-grow" in:grow>
							<Button
								class={twMerge($theme.buttonTransparent, 'flex flex-grow rounded-none')}
								on:click={() => game.update.cell(i)}
							>
								{i}
							</Button>
						</div>
					{/if}
					{#if cell === 'O'}
						<div class="flex flex-grow" in:grow>
							<O />
						</div>
					{/if}
					{#if cell === 'X'}
						<div class="flex flex-grow" in:grow>
							<X />
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
	<Button on:click={modal.open}>Quit</Button>
</div>

<Modal
	bind:close={modal.close}
	bind:isOpen={modal.isOpen}
	bind:open={modal.open}
	bind:toggle={modal.toggle}
	class="space-y-8"
>
	<div>Are you sure you want to quit?</div>
	<div class="grid grid-cols-2 gap-2">
		<Button class={$theme.buttonContrast} on:click={modal.close}>Cancel</Button>
		<A class={twMerge($theme.button, $theme.buttonError)} href="/">Quit</A>
	</div>
</Modal>
