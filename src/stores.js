import { writable, get } from 'svelte/store';
import * as Xadrez from './components/xadrez/xadrez.js';

function titleStore() {
	const { subscribe, set } = writable('Xadrez');

	return {
		subscribe,
		set,
		empty: () => set('Xadrez'),
		page: (title) => set(`Xadrez - ${title}`)
	};
}

export function positionStore() {
	const position = writable(Xadrez.startpos());

	return {
		subscribe: position.subscribe,
		set: (newpos) => {
			position.set(newpos);
		},
		startpos: () => {
			position.set(Xadrez.startpos());
		},
		is_startpos: () => {
			let pos = get(position);
			return pos === Xadrez.startpos();
		},
		make_move: (from, to) => {
			let oldpos = get(position);
			let newpos = Xadrez.make_move(oldpos, from + to);
			if (newpos === null) {
				console.log(from + to + " is an illegal move");
				return false;
			}
			position.set(newpos);
			return true;
		},
		evaluate: () => {
			return Xadrez.evaluate(get(position));
		},
		side_to_move: () => {
			return Xadrez.side_to_move(get(position));
		},
		game_state: () => {
			return Xadrez.game_state(get(position));
		},
		legal_moves: (from = null, to = null) => {
			return Xadrez.legal_moves(get(position), from, to);
		}
	}
}

export const title = titleStore();
