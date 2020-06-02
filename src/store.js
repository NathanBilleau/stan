import { writable } from 'svelte/store'

export const selectedItems = writable([])
export const score = writable(0)