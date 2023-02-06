<script lang="ts">
	import { fade } from "svelte/transition";
	import { flip } from "svelte/animate";
	import { show_users, users } from "@/stores";
</script>

{#if $show_users}
	<section>
		<h2>Users</h2>
		<ul>
			{#each $users as user (user.id)}
				<li animate:flip transition:fade|local>
					{user.name}
				</li>
			{/each}
		</ul>
	</section>
{/if}

<style>
	section {
		padding: 1rem;
		overflow-y: auto;
	}

	ul {
		padding-top: 1rem;
		color: var(--dark-font-color);
		list-style-type: none;
	}

	li {
		margin-block: 0.5rem;
	}
</style>
