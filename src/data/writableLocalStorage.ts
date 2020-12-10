// Based on: https://www.npmjs.com/package/svelte-local-storage-store
import { get, writable } from 'svelte/store';

const safeParse = (value: string) => {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

const make = <T>(key: string, initialValue: T) => {
  const store = writable<T>(initialValue);
  const { subscribe, set } = store;

  const item = localStorage.getItem(key);
  if (item !== undefined) {
    set(safeParse(item));
  }

  return {
    set: (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));
      set(value);
    },
    update: (updater: (value: T) => T) => {
      const value = updater(get(store));
      localStorage.setItem(key, JSON.stringify(value));
      set(value);
    },
    subscribe,
  };
};

export const writableLocalStorage = <T>(key: string, initialValue: T) => ((process as any).browser ? make<T>(key, initialValue) : writable<T>(initialValue));
