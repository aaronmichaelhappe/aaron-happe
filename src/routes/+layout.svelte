<script lang="ts">
	import '../app.css';

	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { beforeNavigate } from '$app/navigation';

	import { page } from '$app/stores';

	import type { PageData } from './$types';
	export let data: PageData;

	let visible = false;
	let previousId: string | null;
	let routeId: string | null = null;

	beforeNavigate(() => {
		// document.body.classList.add('hideScroll');
		// disable scroll handling on page navigation
		// disableScrollHandling();
	});

	$: pathname = data.props.pathname;

	$: {
		if (routeId !== $page.route.id && $page.route.id !== '/') {
			visible = true;
			setTimeout(() => (visible = false), 600);
			routeId = $page.route.id;
		}
	}
	// onMount if no mount and on hp dont run, first run
</script>

<div class="app w-full">
	{#key pathname}
		<div
			in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
			out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
			class="site-slot w-full"
		>
			<slot />
		</div>
	{/key}
</div>

<style lang="postcss">
	.app {
		display: flex;
		flex-direction: column;
	}

	.site-slot {
		flex: 1;
		@apply w-full;
	}

	footer {
		background-color: var(--themeGray-900);
	}
</style>
