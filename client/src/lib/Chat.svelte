<script lang="ts">
	import { io, Socket } from "socket.io-client";
	import Status from "@/lib/Status.svelte";
	import Messages from "@/lib/Messages.svelte";
	import SendForm from "@/lib/SendForm.svelte";
	import { tick, onMount } from "svelte";

	import type {
		message,
		user,
		ServerToClientEvents,
		ClientToServerEvents,
	} from "@/types";

	export let name = "";

	let messages: message[] = [];
	let messages_element: HTMLElement;
	let my_message = "";

	let users: user[] = [];

	const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
		io();

	onMount(() => {
		socket.emit("name", name);
	});

	socket.on("message", async (message) => {
		messages = [...messages, message];
		scroll_to_bottom();
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

	async function scroll_to_bottom() {
		await tick();
		if (messages_element) {
			messages_element.scrollTop =
				messages_element.scrollHeight;
		}
	}
</script>

<Status {users} {name} />
<Messages bind:messages bind:messages_element />
<SendForm bind:my_message {send_message} />
