<script>
	import { base } from '$app/paths';

	let clazz = '';
	export let href = '/';
	export { clazz as class };
</script>

<a href="{base}{href}" class={clazz} on:click><slot /></a>
