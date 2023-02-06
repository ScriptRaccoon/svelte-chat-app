<script lang="ts">
	export let name: string;

	let name_input = "";

	function handle_login() {
		name = name_input;
	}
</script>

<form on:submit|preventDefault={handle_login}>
	<label for="name_input">Choose a name</label>

	<input
		type="text"
		id="name_input"
		bind:value={name_input}
		required={true}
	/>

	<button>Start the chat</button>
</form>

<style lang="scss">
	form {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		@media (min-width: 30rem) {
			flex-direction: row;
		}
	}
	label {
		white-space: nowrap;
	}
</style>
