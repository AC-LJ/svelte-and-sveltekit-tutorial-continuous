import {writable, derived} from 'svelte/store';

export const viewportWidth = writable(0);

export const pageMode = derived(viewportWidth, ($viewportWidth) => {
	if ($viewportWidth < 768) return 'narrow'
	else if ($viewportWidth < 1280) return 'desktop'
	else return 'grid-cols-2'
});