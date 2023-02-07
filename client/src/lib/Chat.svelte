<script lang="ts">
	import { io, Socket } from "socket.io-client";
	import Menu from "@/lib/Menu.svelte";
	import Messages from "@/lib/Messages.svelte";
	import SendForm from "@/lib/SendForm.svelte";
	import { tick, onMount } from "svelte";
	import { reload_page, scroll_to_bottom } from "@/utils";
	import { users, name, show_users } from "@/stores";
	import Users from "./Users.svelte";

	let messages: message[] = [];
	let messages_element: HTMLElement;
	let my_message = "";

	const socket: Socket<
		server_to_client_events,
		client_to_server_events
	> = io();

	onMount(() => {
		socket.emit("login", $name);
	});

	socket.on("message", async (message) => {
		messages = [...messages, message];
		await tick();
		scroll_to_bottom(messages_element);
	});

	socket.on("users", (_users) => {
		$users = _users;
	});

	socket.on("disconnect", reload_page);

	function send_message() {
		socket?.emit("message", {
			author: $name,
			text: my_message,
			bot: false,
		});
		my_message = "";
	}
</script>

<Menu />

{#if $show_users}
	<Users />
{:else}
	<Messages bind:messages bind:messages_element />
	<SendForm bind:my_message {send_message} />
{/if}
