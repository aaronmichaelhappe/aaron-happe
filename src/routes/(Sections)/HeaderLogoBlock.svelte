<script lang="ts">
	import AaronHappeLogo from '$lib/AaronHappeLogo.svelte';
	//
	import classNames from 'classnames';

	let logoHeights = 'h-2.5rem sm:h-[3rem]';
	let textHeight = 'text-[2.5rem] sm:text-[3rem]';
	let textLeading = 'leading-[2.5rem] sm:leading-[3rem]';
	let relativeUnits = 'top-[1.25rem] left-[1.75rem]';
</script>

<AaronHappeLogo {logoHeights} {textHeight} {textLeading} {relativeUnits} scale="half" />
