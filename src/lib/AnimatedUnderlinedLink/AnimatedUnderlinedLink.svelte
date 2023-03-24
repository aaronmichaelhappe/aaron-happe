<script lang="ts">
	import classNames from 'classnames';
	import { tweened } from 'svelte/motion';
	import { createEventDispatcher } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	export let href: string | undefined = '#';
	export let name: string;
	export let wrappingEl: string = 'li';
	export let customAClasses: undefined | string = undefined;
	export let customNameClasses: undefined | string = undefined;
	export let customLineClasses: undefined | string = undefined;
	export let customLiClasses: undefined | string = undefined;
	export let triggerUnderline: undefined | Boolean = undefined;
	export let lineHeight: string = '.1rem';

	$: aClasses = customAClasses
		? classNames('inline-block', customAClasses)
		: classNames('inline-block', $$props.class);
	$: nameClasses = classNames('h-auto', customNameClasses);
	$: lineClasses = classNames(
		'underline-line inline-block bg-themegray-900',
		`h-[${lineHeight}] `,
		customLineClasses
	);

	$: triggerUnderline ? animateLine(null, true) : triggerUnderline;
	$: liClasses = classNames(`leading-[${lineHeight}] `, customLiClasses);

	const dispatch = createEventDispatcher();
	const size = tweened(0, {
		duration: 300,
		easing: cubicInOut
	});

	function animateLine(e: Event | null, enter: boolean) {
		$size = enter ? 1 : 0;
	}
	function handleClick(event: MouseEvent) {
		dispatch('scrollto', { event, to: 'work' });
	}
</script>

<svelte:element this={wrappingEl} class="uppercase leading-[.5]">
	<a
		class={`${aClasses} cursor-pointer`}
		{href}
		on:click={handleClick}
		on:mouseenter={(e) => animateLine(e, true)}
		on:mouseleave={(e) => animateLine(e, false)}
	>
		<span class={nameClasses}>{name}</span>
		<span style="transform: scaleX({$size}); transform-origin: 0 0" class={lineClasses} />
	</a>
</svelte:element>

<style class="postcss">
	.underline-line {
		width: calc(100% - (1ch / 2));
	}
</style>
