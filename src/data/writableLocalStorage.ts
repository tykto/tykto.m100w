// Based on: https://www.npmjs.com/package/svelte-local-storage-store
import { get, writable } from 'svelte/store';

const safeParse = (value) => {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

function _writableLocalStorage(key, initialValue) {
  const store = writable(initialValue);
  const { subscribe, set } = store;

  const item = localStorage.getItem(key);
  if (item !== undefined) {
    set(safeParse(item));
  }

  return {
    set: (value) => {
      localStorage.setItem(key, JSON.stringify(value));
      set(value);
    },
    update: (cb) => {
      const value = cb(get(store));
      localStorage.setItem(key, JSON.stringify(value));
      set(value);
    },
    subscribe,
  };
}

// TODO: Fix `typeof(localStorage) === 'undefined'`
export const writableLocalStorage = (key, initialValue) =>
  typeof localStorage === 'undefined' ? writable(initialValue) : _writableLocalStorage(key, initialValue);
