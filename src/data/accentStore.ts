//import type { AccentEnum } from '@app/constants/enums';
import { writableLocalStorage } from './writableLocalStorage';

export const accentStore = writableLocalStorage('accent', null);
