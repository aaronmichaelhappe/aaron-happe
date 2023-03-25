<script lang="ts">
	import Img from '../images/bzees.png';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleDispatch(event: Event, name: string) {
		dispatch('projectnavigate', { event, to: name.toLowerCase() });
	}
</script>

<a
	href="/bzees"
	class="flex flex-wrap justify-between gap-2 p-4"
	tabindex="0"
	on:click|preventDefault={(e) => handleDispatch(e, 'bzees')}
>
	<div class="w-full flex-none bg-gray-800 p-5 text-gray-200 xs:w-1/2 lg:w-1/3">
		<h3 class="pb-4 leading-[3rem]">Bzees Landing Page.</h3>
		<p class="leading-7">
			A landing page created for Bzees in 2017 or 2018. Some of re-created using Svelte and
			Tailwind. Some of it is the original code.
		</p>
	</div>

	<div class="w-full flex-1 bg-gray-400 p-1 transition-all duration-200 xs:w-1/2 lg:w-2/3">
		<img
			src={Img}
			alt="Description 3"
			class="w-full transform cursor-pointer border border-transparent transition-all duration-200 hover:-translate-y-[.1rem] hover:border-gray-400 hover:shadow-sm"
		/>
	</div>
</a>
