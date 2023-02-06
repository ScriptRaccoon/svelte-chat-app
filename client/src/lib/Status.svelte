<script lang="ts">
	import { fade } from "svelte/transition";
	import { flip } from "svelte/animate";

	export let users: user[] = [];

	let show_users = true;

	function reload() {
		window.location.reload();
	}

	function toggle_users() {
		show_users = !show_users;
	}
</script>

<aside>
	{#if show_users}
		<li class="users">
			<span>Users: </span>
			{#each users as user (user.id)}
				<li class="user" animate:flip transition:fade|local>
					{user.name}
				</li>
			{/each}
		</li>
	{/if}
	<button on:click={toggle_users}>
		{#if show_users}
			Hide users
		{:else}
			Show users
		{/if}
	</button>
	<button on:click={reload}>Logout</button>
</aside>

<style lang="scss">
	@use "../scss/breakpoints" as *;
	aside {
		padding: 0.75rem;
		border-bottom: 0.1rem solid var(--separator-color);
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		gap: 0.5rem;
	}

	.users {
		color: var(--dark-font-color);
		flex-grow: 1;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.25rem;
		list-style-type: none;
	}

	.user {
		background-color: var(--bg-color-2);
		padding: 0.2rem 0.4rem;
		border-radius: 0.2rem;
	}
</style>
