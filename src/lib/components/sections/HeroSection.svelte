<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$components/Button.svelte';

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="section">
	<div class="container has-text-left">
		<h3 class="subtitle is-size-6 has-text-left pb-4 has-text-black has-text-weight-semibold">
			<span class="has-underline">Hello</span>! I'm Dimitris
		</h3>
		<div class="title is-size-1 has-text-black">
			<h1 class="has-text-weight-bold">I am a QA engineer,</h1>
			<h1 class="has-text-weight-bold">software, game developer</h1>
			<h1 class="has-text-weight-bold">and coding</h1>
			<h1 class="has-text-weight-bold has-text-grey">is my passion!</h1>
		</div>
		<Button className="is-mobile is-centered" {onclick}>Let's talk</Button>
	</div>
</section>

<style>
	.has-underline {
		text-decoration: underline;
	}
</style>
