<script lang="ts">
	import Chat from "@/lib/Chat.svelte";
	import Header from "@/lib/Header.svelte";
	import Login from "@/lib/Login.svelte";
	import { name } from "./stores";
</script>

<svelte:head>
	<title>Svelte Chat App</title>
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href="/apple-touch-icon.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="/favicon-32x32.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="/favicon-16x16.png"
	/>
	<link rel="manifest" href="/site.webmanifest" />
	<link
		rel="mask-icon"
		href="/safari-pinned-tab.svg"
		color="#5bbad5"
	/>
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<Header />
{#if $name}
	<Chat />
{:else}
	<Login />
{/if}
