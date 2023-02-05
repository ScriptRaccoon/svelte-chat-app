<script lang="ts">
	import type { message } from "@/types";
	import Message from "@/lib/Message.svelte";
	export let messages: message[] = [];
	export let messages_element: HTMLElement;
</script>

<section bind:this={messages_element}>
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
		scroll-behavior: smooth;
	}

	ol {
		list-style-type: none;
	}
</style>
