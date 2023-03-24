<script lang="ts">
	import '../app.css';
	// import 'iconify-icon';
</script>

<div class="app min-h-screen w-full">
	<!-- Header -->
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
</style>
