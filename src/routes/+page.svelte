<script lang="ts">
	import Hero from './Hero.svelte'
	import {Button} from '$lib/components/ui/button/index.ts'
</script>

<Hero />

<section class="flex items-center justify-center gap-4 py-8">
	<Button
		variant="outline"
		onclick={() => {
			console.log('track that the use clicked this')
		}}
		href="/contact"
	>
		Contact
	</Button>
	<Button variant="outline" href="/personal">Generate a programme</Button>
	<Button variant="outline" href="https://discord.gg/sUpvwSdgjh">Join the community</Button>
</section>
