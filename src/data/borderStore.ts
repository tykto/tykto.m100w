import { border } from '@this/constants/theme';
import { derived } from 'svelte/store';
import { colourStore } from './colourStore';

export const borderStore = derived(colourStore, ($colourStore) => border[$colourStore]);
