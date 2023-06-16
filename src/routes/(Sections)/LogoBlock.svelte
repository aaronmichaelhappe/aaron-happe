<script lang="ts">
	import AaronHappeLogo from '$lib/AaronHappeLogo.svelte';
	export let userHasScrolled: Boolean;
</script>

<div class={`${!userHasScrolled ? 'block' : 'block md:hidden'}`}>
	<AaronHappeLogo />
</div>
<div class={`h-20 ${!userHasScrolled ? 'hidden ' : 'hidden md:block'}`} />
