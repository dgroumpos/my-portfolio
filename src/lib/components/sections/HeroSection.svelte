<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$components/Button.svelte';

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="hero">
	<div class="container has-text-left hero-body">
		<h3 class="subtitle is-size-5 has-text-left pb-4 has-text-black has-text-weight-semibold">
			<span>Hello</span>! I'm Dimitris
		</h3>
			<h1 class="title mb-0 is-1 has-text-black has-text-weight-bold">I am a QA engineer,</h1>
			<h1 class="title mb-0  is-1 has-text-black has-text-weight-bold">software, game developer</h1>
			<h1 class="title mb-0  is-1 has-text-black has-text-weight-bold">and coding</h1>
			<h1 class="title is-1 has-text-weight-bold has-text-grey">is my passion!</h1>
		<Button className={"is-medium"} {onclick}>Let's talk</Button>
	</div>
</section>

<style>
	span {
		text-decoration: underline;
		text-decoration-line: 50%;
	}
</style>
