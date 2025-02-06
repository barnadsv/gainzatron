<script lang="ts">
	import {Button} from '$lib/components/ui/button'
	import ThemeToggleIcon from './ThemeToggleIcon.svelte'
</script>

<header class="flex items-center justify-between px-inline py-2">
	<Button class="font-serif font-bold" variant="ghost" href="/">Gainzatron</Button>
	<div class="flex items-center">
		<nav>
			<Button variant="ghost" href="/contact">Contact</Button>
		</nav>
		<Button
			variant="ghost"
			size="icon"
			aria-label="Toggle theme"
			onclick={() => {
				if (window?.toggleTheme) {
					window.toggleTheme()
				}
			}}
		>
			<ThemeToggleIcon class="size-5" />
		</Button>
	</div>
</header>

<style lang="postcss">
	header {
		view-transition-name: header;
	}
</style>
