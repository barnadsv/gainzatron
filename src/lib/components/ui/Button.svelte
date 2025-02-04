<script lang="ts">
	import type {HTMLAttributes} from 'svelte/elements'
	import type {Snippet} from 'svelte'
	import {Button, type ButtonRootProps} from 'bits-ui'
	type Props = {
		children: Snippet
	} & ButtonRootProps
	let {children, ...restProps}: Props = $props()
</script>

<Button.Root {...restProps} class="rounded-xl bg-orange-600 px-4 py-2 text-orange-50">
	{@render children()}
</Button.Root>
