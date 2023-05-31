<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { inview } from 'svelte-inview';

	export let currentSection = '';
	export let sectionEl: HTMLDivElement | null;
	export let name = '';

	const dispatch = createEventDispatcher();

	function handleInView(view: string) {
		dispatch('inview', {
			view: name
		});
	}
</script>

<section class="section-work mx-auto max-w-[1500px]">
	<div
		use:inview={{ threshold: 0.2 }}
		on:inview_change={() => handleInView(name)}
		bind:this={sectionEl}
	>
		<div class={`cursor-pointer transition ${currentSection === name ? 'transition-in' : ''}`}>
			<slot />
		</div>
	</div>
</section>
