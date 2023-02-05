<script lang="ts">
	import Chat from "@/lib/Chat.svelte";
	import Header from "@/lib/Header.svelte";
	import Login from "@/lib/Login.svelte";
	let name = "";
</script>

<Header />
{#if name}
	<Chat {name} />
{:else}
	<Login bind:name />
{/if}
