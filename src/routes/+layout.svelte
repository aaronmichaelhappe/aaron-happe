<script lang="ts">
	import '../app.css';

	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let visible = false;
	let previousId: string | null;
	let routeId: string | null = null;

	$: {
		if (routeId !== $page.route.id && $page.route.id !== '/') {
			previousId = routeId;
			visible = true;
			setTimeout(() => (visible = false), 600);
		}
	}
	// onMount if no mount and on hp dont run, first run
</script>

<div class="app min-h-screen w-full">
	{#if visible}
		<div class={`page-transition-cover fixed inset-0 z-20`}>
			<div
				in:fly={{ y: '-100%' }}
				out:fly={{ y: '100%' }}
				class={`custom-page-transition top-left absolute bottom-0 top-0 right-1/2  left-0
				z-30 bg-primaryBlue`}
			/>
			<div
				in:fly={{ y: '100%' }}
				out:fly={{ y: '-100%' }}
				class={`custom-page-transition bottom-right absolute right-0 bottom-0 left-1/2 top-0 z-30 bg-primaryBlue`}
			/>
		</div>
	{/if}
	<div class="site-slot">
		<slot />
	</div>
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

	.custom-page-transition {
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}
</style>
