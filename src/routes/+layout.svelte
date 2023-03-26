<script lang="ts">
	import '../app.css';
	import { isNavigating } from './store';

	let navTransitionHold = true;

	// $: !navTransitionHold ? goto(`/${myGotoNameValue}`) : '';
	let navigating = false;
	$: {
		navigating = $isNavigating;
		if (navigating) setTimeout(() => (navTransitionHold = false), 300);
	}
</script>

<div class="app min-h-screen w-full">
	{#if navigating}
		<div class={`page-transition-cover fixed inset-0 z-20`}>
			<div
				class={`custom-page-transition top-left absolute top-0 right-1/2 left-0 ${
					navTransitionHold ? 'bottom-full' : ' bottom-0'
				} z-30 bg-primaryBlue`}
			/>
			<div
				class={`custom-page-transition bottom-right absolute right-0 bottom-0 left-1/2  ${
					navTransitionHold ? 'top-full' : 'top-0'
				} z-30 bg-primaryBlue`}
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
