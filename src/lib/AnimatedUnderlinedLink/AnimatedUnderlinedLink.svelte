<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import classNames from 'classnames';

	export let name: string;
	export let lineHeight: string = '.1rem';
	export let wrappingEl: string = 'li';
	export let customAClasses: undefined | string = undefined;
	export let customNameClasses: undefined | string = undefined;
	export let customLineClasses: undefined | string = undefined;
	export let customLiClasses: undefined | string = undefined;
	export let href: string | undefined = undefined;
	export let stuck: boolean = false;

	$: {
		if (stuck) {
			$size = 1;
		} else {
			$size = 0;
		}
	}

	$: aClasses = customAClasses
		? classNames('inline-block', customAClasses)
		: classNames('inline-block', $$props.class);
	$: nameClasses = classNames('h-auto', customNameClasses);
	$: lineClasses = classNames(
		'underline-line inline-block bg-themegray-900',
		`h-[${lineHeight}] `,
		customLineClasses
	);

	$: liClasses = classNames(`uppercase leading-[.5] `, customLiClasses);

	const dispatch = createEventDispatcher();
	const size = tweened(0, {
		duration: 300,
		easing: cubicInOut
	});

	export function animateLine(e: Event | null, enter: boolean) {
		if (!stuck) {
			$size = enter ? 1 : 0;
		}
	}
	function handleClick(event: MouseEvent) {
		dispatch('animatedlinkclicked', { event, to: name.toLowerCase() });
	}
</script>

<svelte:element this={wrappingEl} class={liClasses}>
	<a
		class={`${aClasses} cursor-pointer`}
		{href}
		tabindex="0"
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
