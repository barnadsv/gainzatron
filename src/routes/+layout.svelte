<script lang="ts">
	import '../app.css'
	import {Button} from '$lib/components/ui/button'
	import ThemeToggleIcon from '$lib/components/ThemeToggleIcon.svelte'
	let {children} = $props()
</script>

<header class="flex items-center justify-between">
	<Button variant="ghost" href="/">Gainzatron</Button>
	<Button
		variant="ghost"
		size="icon"
		onclick={() => {
			window?.toggleTheme && window.toggleTheme()
		}}
	>
		<ThemeToggleIcon class="size-5" />
	</Button>
</header>
{@render children()}
<footer>Made with 💛 by Barnabé</footer>
