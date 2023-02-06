<script lang="ts">
	export let my_message = "";
	export let send_message = () => {};
</script>

<form on:submit|preventDefault={send_message}>
	<input aria-label="message" type="text" bind:value={my_message} />
	<button>Send message</button>
</form>

<style lang="scss">
	form {
		padding: 1rem;
		background-color: var(--bg-color-2);
		display: flex;
		flex-direction: column;
		gap: 1rem;

		@media (min-width: 25rem) {
			flex-direction: row;
		}
	}

	input {
		flex-grow: 1;
	}
</style>
