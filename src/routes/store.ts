import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

export const myGotoName = writable('');
export const isNavigating = writable(false);

function handleMyGoto(routeName: string) {
  // Perform your tasks here based on the new value
  if (routeName !== '') {
    isNavigating.set(true);
  }

}

myGotoName.subscribe(handleMyGoto);
