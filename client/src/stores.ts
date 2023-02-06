import { writable } from "svelte/store";

export const show_users = writable(false);

export const users = writable<user[]>([]);

export const name = writable("");
