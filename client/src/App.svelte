<script lang="ts">
	async function handle_click() {
		const response = await fetch("/question");
		if (response.ok) {
			const data = await response.json();
			window.alert(data);
		}
	}
</script>

<h1>Hi there!</h1>

<button on:click={handle_click}>Get answer</button>
