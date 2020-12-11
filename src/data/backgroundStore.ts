import { background } from '@this/constants/theme';
import { derived } from 'svelte/store';
import { colourStore } from './colourStore';

export const backgroundStore = derived(colourStore, ($colourStore) => background[$colourStore]);
