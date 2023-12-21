<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { A, Button, Card, Die, Icon, O, Radio, X } from '$components';
	import { ChevronLeft } from '$icons';
	import { game, theme } from '$stores';

	// handlers
	const startClickHandler = (e) => {
		game.start();
	};

	// props (internal)
	const colors = [
		{
			classes: 'bg-primary-500 dark:bg-primary-500',
			value: 'primary'
		},
		{
			classes: 'bg-secondary-500 dark:bg-secondary-500',
			value: 'secondary'
		},
		{
			classes: 'bg-tertiary-500 dark:bg-tertiary-500',
			value: 'tertiary'
		},
		{
			classes: 'bg-quartery-500 dark:bg-quartery-500',
			value: 'quartery'
		},
		{
			classes: 'bg-quinary-500 dark:bg-quinary-500',
			value: 'quinary'
		},
		{
			classes: 'bg-senary-500 dark:bg-senary-500',
			value: 'senary'
		},
		{
			classes: 'bg-septenary-500 dark:bg-septenary-500',
			value: 'septenary'
		},
		{
			classes: 'bg-octonary-500 dark:bg-octonary-500',
			value: 'octanary'
		}
	];
	const orders = [
		{ component: X, value: 'X' },
		{ component: Die, value: 'random' },
		{ component: O, value: 'O' }
	];
	const symbols = [
		{ component: X, value: 'X' },
		{ component: O, value: 'O' }
	];
</script>

<div class="flex flex-grow flex-col p-6">
	<div class="flex">
		<Button class={twMerge($theme.buttonIcon)} on:click={() => history.back()}>
			<Icon src={ChevronLeft} />
		</Button>
	</div>
	<div class="flex flex-grow flex-col items-center justify-center space-y-8">
		<div class="flex flex-col items-center space-y-4">
			<div class="text-[1.25rem] font-semibold">Choose Your Symbol</div>
			<div class="grid grid-cols-2 gap-8">
				{#each symbols as { component, value }}
					<Radio bind:group={$game.symbol} {value}>
						<Card
							class={twMerge(
								'flex aspect-square h-[3rem] flex-grow items-center justify-center rounded-lg p-0 transition duration-200',
								$game.symbol === value
									? 'bg-primary-500 dark:bg-primary-500 text-white'
									: 'dark:text-slate-400'
							)}
							slot="handle"
						>
							<svelte:component this={component} />
						</Card>
					</Radio>
				{/each}
			</div>
		</div>
		<div class="flex flex-col items-center space-y-4">
			<div class="text-[1.25rem] font-semibold">Which Symbol Goes First?</div>
			<div class="grid grid-cols-3 gap-8">
				{#each orders as { component, value }}
					<Radio bind:group={$game.order} {value}>
						<Card
							class={twMerge(
								'flex aspect-square h-[3rem] flex-grow items-center justify-center rounded-lg p-0 transition duration-200',
								$game.order === value
									? 'bg-primary-500 dark:bg-primary-500 text-white'
									: 'dark:text-slate-400'
							)}
							slot="handle"
						>
							<svelte:component this={component} />
						</Card>
					</Radio>
				{/each}
			</div>
		</div>
		<div class="flex flex-col items-center space-y-4">
			<div class="text-[1.25rem] font-semibold">Choose a color</div>
			<div
				class="grid grid-rows-2 gap-2"
				style="grid-template-columns: repeat({Math.ceil(colors.length / 2)}, minmax(0, 1fr);"
			>
				{#each colors as { classes, value }}
					<Radio bind:group={$game.color} {value}>
						<Card
							class={twMerge(
								'flex aspect-square h-[3rem] flex-grow items-center justify-center rounded-lg p-0 transition duration-200',
								classes,
								$game.color === value ? '' : 'opacity-20 dark:opacity-10'
							)}
							slot="handle"
						/>
					</Radio>
				{/each}
			</div>
		</div>
	</div>
	<A class={twMerge($theme.button)} href="/start" on:click={startClickHandler}>Start</A>
</div>
