import { writable } from 'svelte/store';

interface IProgress {
  current: number;
  count: number;
}

export const disabledStore = writable<boolean>(true);
export const wordStore = writable<string>(null);
export const progressStore = writable<IProgress>({ current: 0, count: 0 });
export const countdownStore = writable<number>(null);
export const intervalHandleStore = writable<NodeJS.Timeout>(null);
export const timeoutHandleStore = writable<NodeJS.Timeout>(null);
