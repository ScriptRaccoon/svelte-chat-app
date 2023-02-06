<script lang="ts">
	import { show_users } from "@/stores";
	import { reload_page } from "@/utils";

	function toggle_users() {
		$show_users = !$show_users;
	}
</script>

<menu>
	<button on:click={toggle_users}>
		{#if $show_users}
			Show chat
		{:else}
			Show users
		{/if}
	</button>
	<button on:click={reload_page}>Logout</button>
</menu>

<style lang="scss">
	menu {
		padding: 0.75rem;
		border-bottom: 0.1rem solid var(--separator-color);
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		gap: 0.5rem;
	}
</style>
