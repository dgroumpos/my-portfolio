<script lang="ts">
	import type { Snippet } from 'svelte';

	interface SectionHeadlineProps {
		children: Snippet;
		sectionName: string;
	}
	let { children, sectionName }: SectionHeadlineProps = $props();
</script>

<div id={sectionName}>
	<h2 class="title is-2 has-text-black mb-0">{@render children()}</h2>
	<div class="underscore"></div>
</div>

