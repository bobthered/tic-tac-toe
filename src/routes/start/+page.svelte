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
	const colorDictionary = {
		primary: 'text-primary-500',
		secondary: 'text-secondary-500',
		tertiary: 'text-tertiary-500',
		quartery: 'text-quartery-500',
		quinary: 'text-quinary-500',
		senary: 'text-senary-500',
		septenary: 'text-septenary-500',
		octanary: 'text-octanary-500'
	};
	const modal: { quit: Modal } = { quit: {} };
	const stateDictionary = {
		computer: "Computer's Turn",
		draw: '',
		init: '',
		lose: '',
		user: 'Your Turn',
		win: ''
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
	<div class="relative min-h-[3rem] text-center text-[2rem] font-semibold">
		{#each Object.keys(stateDictionary) as key}
			<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				{#if $game.state === key}
					<div class="whitespace-nowrap" transition:grow>
						{stateDictionary[$game.state]}
					</div>
				{/if}
			</div>
		{/each}
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
							/>
						</div>
					{/if}
					{#if cell === 'O'}
						<div
							class={twMerge(
								'flex flex-grow',
								$game.symbol === 'O' ? colorDictionary[$game.color] : ''
							)}
							in:grow
						>
							<O />
						</div>
					{/if}
					{#if cell === 'X'}
						<div
							class={twMerge(
								'flex flex-grow',
								$game.symbol === 'X' ? colorDictionary[$game.color] : ''
							)}
							in:grow
						>
							<X />
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
	<div class="relative flex min-h-[3rem] flex-col">
		<div class="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
			{#if $game.state === 'computer' || $game.state === 'user'}
				<div class="flex h-full w-full flex-col" transition:grow>
					<Button on:click={modal.quit.open}>Quit</Button>
				</div>
			{/if}
		</div>
	</div>
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
<Modal
	class="space-y-8"
	isOpen={$game.state === 'draw' || $game.state === 'lose' || $game.state === 'win'}
>
	<div>
		{#if $game.state === 'draw'}
			Draw
		{/if}
		{#if $game.state === 'lose'}
			You Lose
		{/if}
		{#if $game.state === 'win'}
			You Win
		{/if}
	</div>
	<div class="grid grid-cols-2 gap-2">
		<A class={twMerge($theme.button, $theme.buttonContrast)} href="/">Quit</A>
		<Button on:click={() => game.start()}>Play Again</Button>
	</div>
</Modal>
