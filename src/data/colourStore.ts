//import type { ColourEnum } from '@app/constants/enums';
import { writableLocalStorage } from './writableLocalStorage';

export const colourStore = writableLocalStorage('colour', null);
