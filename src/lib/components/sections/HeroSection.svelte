<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$components/Button.svelte';

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="hero is-bold">
	<div class="hero-body">
		<div class="container">
			<p class="intro-text">Hello! I'm Dimitris</p>
			<h1 class="headline">
				<span>I'm a</span> QA <span>engineer</span><br />
				game <span>developer</span><br />
				software <span>engineer</span><br />
				<span>and</span> coding <span>is my passion.</span>
			</h1>
			<div class="mt-5">
				<Button className={'is-black is-medium'} {onclick}>Let's talk</Button>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-body {
		text-align: left;
	}
	.intro-text {
		font-size: 1rem;
		font-weight: 400;
		color: #4a4a4a; /* Light gray for intro text */
	}
	.headline {
		font-size: 3rem;
		font-weight: 900;
		color: #222;
		line-height: 1.2;
	}
	.headline span {
		font-weight: 400; /* Make specific parts of text lighter */
	}
</style>
