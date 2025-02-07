<script lang="ts">
	import '@fontsource/cherry-swash'
	import '../app.css'
	import {onNavigate} from '$app/navigation'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import {page} from '$app/state'

	const hardCodedMeta = {
		title: 'Gainzatron',
		description: 'The fitness app for the rest of us',
		og: '/og.jpg',
	}
	let {children} = $props()

	let title = $derived(
		page.data.meta?.title
			? `${page.data.meta?.title} | ${hardCodedMeta.title}`
			: hardCodedMeta.title
	)
	let description = $derived(
		page.data.meta?.description ? page.data.meta?.description : hardCodedMeta.description
	)
	let ogImageUrl = $derived(
		`${page.url.origin}${page.data.meta?.og ? page.data.meta?.og : hardCodedMeta.og}`
	)

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
	<title>{title}</title>
	<meta property="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Gainzatron" />
	<meta property="og:url" content={page.url.href} />

	<meta property="og:image" content={ogImageUrl} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header />
{@render children()}
<Footer />
