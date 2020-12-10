import type { AccentEnum } from '@this/constants/enums';
import { writableLocalStorage } from './writableLocalStorage';

export const accentStore = writableLocalStorage<AccentEnum>('accent', null);
