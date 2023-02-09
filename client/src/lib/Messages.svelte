<script lang="ts">
	import Message from "@/lib/Message.svelte";
	export let messages: message[] = [];
	export let messages_element: HTMLElement;
</script>

<section aria-label="messages" bind:this={messages_element}>
	<ol>
		{#each messages as message}
			<Message {message} />
		{/each}
	</ol>
</section>

<style>
	section {
		padding: 0.5rem;
		overflow-y: scroll;
		overflow-x: hidden;
		scroll-behavior: smooth;
		position: relative;
	}

	ol {
		list-style-type: none;
	}
</style>
