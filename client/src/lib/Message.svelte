<script lang="ts">
	export let message: message;
</script>

<li class:bot={message.bot}>
	{#if !message.bot}
		<span class="author">
			{message.author}:
		</span>
	{/if}
	<span>{message.text}</span>
</li>

<style>
	li {
		margin-bottom: 0.5rem;
	}

	.author {
		color: var(--dark-font-color);
	}

	.bot {
		font-weight: bold;
	}
</style>
