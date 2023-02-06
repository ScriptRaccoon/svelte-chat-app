<script lang="ts">
	import { io, Socket } from "socket.io-client";
	import Status from "@/lib/Status.svelte";
	import Messages from "@/lib/Messages.svelte";
	import SendForm from "@/lib/SendForm.svelte";
	import { tick, onMount } from "svelte";
	import { scroll_to_bottom } from "@/utils";

	export let name = "";

	let messages: message[] = [];
	let messages_element: HTMLElement;
	let my_message = "";

	let users: user[] = [];

	const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
		io();

	onMount(() => {
		socket.emit("login", name);
	});

	socket.on("message", async (message) => {
		messages = [...messages, message];
		await tick();
		scroll_to_bottom(messages_element);
	});

	socket.on("users", (_users) => {
		users = _users;
	});

	function send_message() {
		socket?.emit("message", {
			author: name,
			text: my_message,
			bot: false,
		});
		my_message = "";
	}
</script>

<Status {users} />
<Messages bind:messages bind:messages_element />
<SendForm bind:my_message {send_message} />
