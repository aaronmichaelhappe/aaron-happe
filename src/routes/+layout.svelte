<script lang="ts">
	import '../app.css';
	// import 'iconify-icon';
	// import { onMount } from 'svelte';

	// onMount(() => {});
</script>

<div class="app min-h-screen w-full">
	<!-- Header -->

	<div class="site-slot p-4 sm:p-8">
		<slot />
	</div>

	<footer class="py-2 text-center ">
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style lang="postcss">
	.app {
		display: flex;
		flex-direction: column;
		background-color: var(--themegray-900);
	}

	.site-slot {
		flex: 1;
		background-color: var(--themegray-900);
		@apply w-full;
	}

	footer {
		background-color: var(--themegray-900);
	}
</style>
