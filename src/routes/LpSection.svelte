<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';

	export let currentSection = '';
	export let sectionEl: HTMLDivElement | null;
	export let title = '';
	export let name = '';

	let fadeInText = false;
	const dispatch = createEventDispatcher();

	onMount(() => {
		setTimeout(() => {
			fadeInText = true;
		}, 180);
	});

	function handleInView(view: string) {
		dispatch('inview', {
			view: name
		});
	}
</script>

<section class="section-work mx-auto max-w-[1300px]">
	<div>
		<h4
			class={`transition ${
				fadeInText ? 'transition-in' : ''
			} px-4 pb-4 text-[3rem] font-bold text-white sm:text-[4rem]`}
		>
			{title}
		</h4>
	</div>
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
