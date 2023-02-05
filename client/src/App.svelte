<script lang="ts">
	import { io, Socket } from "socket.io-client";
	import type {
		ServerToClientEvents,
		ClientToServerEvents,
	} from "./types";

	let messages: string[] = [];
	let my_message: string = "";

	const socket = io() as Socket<
		ClientToServerEvents,
		ServerToClientEvents
	>;

	socket.on("connect", () => {
		console.log("My socket ID:", socket.id);
	});

	socket.on("message", (msg) => {
		messages = [...messages, msg];
	});

	function handle_submit() {
		socket.emit("message", my_message);
		my_message = "";
	}
</script>

<h1>Chat App</h1>

<form on:submit|preventDefault={handle_submit}>
	<input type="text" bind:value={my_message} />
	<button>Send</button>
</form>

<div>
	{#each messages as message}
		<div>{message}</div>
	{/each}
</div>
