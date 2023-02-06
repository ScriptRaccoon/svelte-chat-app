<script lang="ts">
	import { fade } from "svelte/transition";
	import { flip } from "svelte/animate";

	export let users: user[] = [];
	export let name = "";
</script>

<aside>
	<ul>
		<span>Users: </span>
		{#each users as user (user.id)}
			<li animate:flip transition:fade>
				{user.name}
			</li>
		{/each}
	</ul>
	<p>
		You are logged in as <b
			>{name} &ndash;
			<a href="/" data-sveltekit-reload>Logout</a></b
		>
	</p>
</aside>

<style lang="scss">
	@use "../scss/breakpoints" as *;
	aside {
		padding: 0.75rem;
		color: var(--dark-font-color);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border-bottom: 0.1rem solid var(--separator-color);

		@media (min-width: $md) {
			flex-direction: row;
			justify-content: space-between;
		}
	}

	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
	}

	li {
		background-color: var(--bg-color-2);
		padding: 0.2rem 0.4rem;
		border-radius: 0.2rem;
	}
</style>
