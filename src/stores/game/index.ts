import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// types
type Board = (null | 'O' | 'X')[];
type CurrentPlayer = null | 'computer' | 'user';
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
type Symbol = 'X' | 'O';

// default values
const defaultValues = {
	board: [...Array(9)].map((_) => null),
	color: 'primary',
	currentPlayer: null,
	order: 'random',
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
	currentPlayer: CurrentPlayer;
	order: Order;
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
		choose: () => {
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
				state.currentPlayer = 'user';
				return state;
			});
		}
	},
	set,
	start: () => {
		update((state) => {
			state.board = [...Array(9)].map((_) => null);
			state.currentPlayer =
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
					state.currentPlayer === 'user' ? state.symbol : state.symbol === 'X' ? 'O' : 'X';
				state.currentPlayer = state.currentPlayer === 'user' ? 'computer' : 'user';
				return state;
			});
		}
	}
};

export const game = publicMethods;
