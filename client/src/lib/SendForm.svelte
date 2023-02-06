<script lang="ts">
	export let my_message = "";
	export let send_message = () => {};
</script>

<form on:submit|preventDefault={send_message}>
	<input aria-label="message" type="text" bind:value={my_message} />
	<button>Send message</button>
</form>

<style lang="scss">
	@use "../scss/breakpoints" as *;
	form {
		padding: 1rem;
		background-color: var(--bg-color-2);
		display: flex;
		flex-direction: column;
		gap: 1rem;

		@media (min-width: $md) {
			flex-direction: row;
		}
	}

	input {
		flex-grow: 1;
	}
</style>
