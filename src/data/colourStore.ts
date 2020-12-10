import type { ColourEnum } from '@this/constants/enums';
import { writableLocalStorage } from './writableLocalStorage';

export const colourStore = writableLocalStorage<ColourEnum>('colour', null);
