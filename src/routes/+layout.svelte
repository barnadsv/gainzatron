<script lang="ts">
	import '@fontsource/cherry-swash'
	import '../app.css'
	import {onNavigate} from '$app/navigation'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	let {children} = $props()

	onNavigate((navigation) => {
		if (document.startViewTransition && navigation.from?.url.href !== navigation.to?.url.href) {
			if (navigation.delta && navigation.delta < 0) {
				document.documentElement.dataset.back = 'true'
			} else {
				document.documentElement.removeAttribute('data-back')
			}

			return new Promise((resolve) => {
				if (document.startViewTransition) {
					document.startViewTransition(async () => {
						resolve()
						await navigation.complete
					})
				}
			})
		}
	})

	$effect(() => {
		// Add data-testid now that our app is hydrated
		// We have Playwright "wait" for this before starting any test
		document.documentElement.dataset.testid = 'hydrated'
	})
</script>

<svelte:head>
	<title>Gainzatron</title>
</svelte:head>

<Header />
{@render children()}
<Footer />
