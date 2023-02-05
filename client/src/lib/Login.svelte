<script lang="ts">
	export let name: string;

	let name_input = "";

	function handle_login() {
		name = name_input;
	}
</script>

<form on:submit|preventDefault={handle_login}>
	<label>
		Choose a name
		<input type="text" bind:value={name_input} required={true} />
	</label>

	<button>Start the chat</button>
</form>

<style>
	form {
		padding: 1rem;
	}

	label {
		display: block;
		margin-bottom: 1rem;
	}
</style>
