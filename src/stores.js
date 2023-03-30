import { writable } from 'svelte/store';

function titleStore() {
	const { subscribe, set } = writable('Xadrez');

	return {
		subscribe,
		set,
		empty: () => set('Xadrez'),
		page: (title) => set(`Xadrez - ${title}`)
	};
}

export const title = titleStore();
