<script lang="ts">
	import AaronHappeLogo from '$lib/AaronHappeLogo.svelte';
	//
	import classNames from 'classnames';
	export let userHasScrolled: Boolean | null = null;

	let logoHeights = 'h-5rem sm:h-[6rem]';
	let textHeight = 'text-[2.5rem] sm:text-[3rem]';
	let textLeading = 'leading-[2.5rem] sm:leading-[3rem]';
	let relativeUnits = 'top-[2rem] sm:top-[2.5rem] left-[3rem] sm:left-[3.5rem]';

	let spacerClasses = classNames({
		hidden: !userHasScrolled,
		'hidden md:flex': userHasScrolled
	});

	let spacerClassesReversed = classNames({
		flex: !userHasScrolled,
		'flex md:hidden': userHasScrolled
	});
</script>

<div class={spacerClassesReversed}>
	<AaronHappeLogo {logoHeights} {textHeight} {textLeading} {relativeUnits} />
</div>
<!-- spacer for when logo disappears into the header -->
<div class={` ${logoHeights} ${spacerClasses}`} />
