<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { A, Button, Modal, O, X } from '$components';
	import { game, theme } from '$stores';
	import { grow } from '$transitions';

	type Modal = {
		close?: (() => boolean) | undefined;
		isOpen?: boolean;
		open?: (() => boolean) | undefined;
		toggle?: (() => boolean) | undefined;
	};

	// props (internal)
	const modal: { quit: Modal } = { quit: {} };
	const stateDictionary = {
		computer: "Computer's Turn",
		draw: 'Draw',
		init: '',
		lose: 'You Lose',
		user: 'Your Turn',
		win: 'You Win'
	};
	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	// check if is a draw
	$: if ([...$game.board].filter((cell) => cell === null).length === 0) $game.state = 'draw';

	// check if player loses
	$: if (
		[...winningCombinations].filter(
			(winningCombination) =>
				winningCombination.filter(
					(index) => $game.board[index] !== $game.symbol && $game.board[index] !== null
				).length === 3
		).length > 0
	)
		$game.state = 'lose';

	// check if player wins
	$: if (
		[...winningCombinations].filter(
			(winningCombination) =>
				winningCombination.filter((index) => $game.board[index] === $game.symbol).length === 3
		).length > 0
	)
		$game.state = 'win';
	$: if ($game.state === 'computer') game.computer.choose();
</script>

<div class="flex flex-grow flex-col p-6">
	<div class="text-center text-[2rem] font-semibold">
		{stateDictionary[$game.state]}
	</div>
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
								class={twMerge(
									$theme.buttonTransparent,
									'disabled:bg-transparent',
									'flex flex-grow rounded-none'
								)}
								disabled={$game.state === 'user' ? undefined : 'disabled'}
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
	<Button on:click={modal.quit.open}>Quit</Button>
</div>

<Modal
	bind:close={modal.quit.close}
	bind:isOpen={modal.quit.isOpen}
	bind:open={modal.quit.open}
	bind:toggle={modal.quit.toggle}
	class="space-y-8"
>
	<div>Are you sure you want to quit?</div>
	<div class="grid grid-cols-2 gap-2">
		<Button class={$theme.buttonContrast} on:click={modal.quit.close}>Cancel</Button>
		<A class={twMerge($theme.button, $theme.buttonError)} href="/">Quit</A>
	</div>
</Modal>
