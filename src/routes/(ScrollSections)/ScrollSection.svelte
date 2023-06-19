<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { inview } from 'svelte-inview';

	export let currentSection = '';
	export let sectionEl: HTMLElement | null = null;
	export let name = '';
	export let id = '';

	const dispatch = createEventDispatcher();

	function handleInView(view: string) {
		dispatch('inview', {
			view: name
		});
	}
</script>

<section class="section-work mx-auto max-w-[1500px] pt-2">
	<div
		use:inview={{ threshold: 0.2 }}
		on:inview_change={() => handleInView(name)}
		bind:this={sectionEl}
		{id}
	>
		<div class={`cursor-pointer transition ${currentSection === name ? 'transition-in' : ''}`}>
			<slot />
		</div>
	</div>
</section>
