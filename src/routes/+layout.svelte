<script lang="ts">
	import '../app.css'
	import Header from '$lib/components/Header.svelte'
	let {children} = $props()
</script>

<svelte:head>
	<title>Gainzatron</title>
</svelte:head>

<Header />
{@render children()}
<footer>Made with 💛 by Barnabé</footer>
