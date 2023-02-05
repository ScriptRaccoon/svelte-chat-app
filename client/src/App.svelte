<script lang="ts">
	import { io, Socket } from "socket.io-client";
	async function handle_click() {
		const response = await fetch("/question");
		if (response.ok) {
			const data = await response.json();
			window.alert(data);
		}
	}

	const socket = io();

	socket.on("connect", () => {
		console.log("My socket ID:", socket.id);
	});

	socket.on("message", (msg) => {
		console.log(msg);
	});
</script>

<h1>Hi there!</h1>

<button on:click={handle_click}>Get answer</button>
