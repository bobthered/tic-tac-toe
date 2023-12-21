import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// types
type Board = (null | 'O' | 'X')[];
type Color =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'quartery'
	| 'quinary'
	| 'senary'
	| 'septenary'
	| 'octanary';
type Order = 'random' | 'X' | 'O';
type State = 'init' | 'computer' | 'draw' | 'lose' | 'user' | 'win';
type Symbol = 'X' | 'O';

// default values
const defaultValues = {
	board: [...Array(9)].map((_) => null),
	color: 'primary',
	order: 'random',
	state: 'init',
	symbol: 'X'
};

// initial value
const initialValues =
	browser && window.localStorage.getItem('game')
		? JSON.parse(window.localStorage.getItem('game'))
		: defaultValues;

// initial state
const { set, subscribe, update } = writable<{
	board: Board;
	color: Color;
	order: Order;
	state: State;
	symbol: Symbol;
}>(initialValues);

subscribe((state) => {
	if (browser) {
		window.localStorage.setItem('game', JSON.stringify(state));
	}
});

// public methods
const publicMethods = {
	computer: {
		choose: async () => {
			await new Promise((res) => {
				setTimeout(res, Math.floor(Math.random() * 1500) + 500);
			});
			update((state) => {
				// get dictionary of cells
				const cellDictionary = [...state.board].reduce(
					(obj: { [key: number]: null | 'O' | 'X' }, cell, i) => {
						obj[i] = cell;
						return obj;
					},
					{}
				);

				// filter for null cells
				const availableCells = Object.keys(cellDictionary).filter(
					(key) => cellDictionary[key] === null
				);

				// get random cell index
				const randomCellIndex = availableCells[Math.floor(Math.random() * availableCells.length)];

				state.board[randomCellIndex] = state.symbol === 'X' ? 'O' : 'X';
				state.state = 'user';
				return state;
			});
		}
	},
	set,
	start: () => {
		update((state) => {
			state.board = [...Array(9)].map((_) => null);
			state.state =
				(state.order === 'random' && Math.random() < 0.5) || state.order === state.symbol
					? 'user'
					: 'computer';

			return state;
		});
	},
	subscribe,
	update: {
		cell: (cellIndex: number) => {
			update((state) => {
				state.board[cellIndex] =
					state.state === 'user' ? state.symbol : state.symbol === 'X' ? 'O' : 'X';
				state.state = state.state === 'user' ? 'computer' : 'user';
				return state;
			});
		}
	}
};

export const game = publicMethods;
