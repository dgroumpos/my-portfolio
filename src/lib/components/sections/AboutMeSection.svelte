<script lang="ts">
	import { SectionHeadline, Button } from '$components';
	import image from '$assets/profile.jpg';
	import { goto } from '$app/navigation';

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="section">
	<div class="container">
		<div class="columns is-vcentered">
			<!-- Left Column: Image -->
			<div class="column is-half has-text-centered">
				<figure class="image is-square">
					<img class="about-image" src={image} alt="" />
				</figure>
			</div>

			<!-- Right Column: Text -->
			<div class="column is-half">
				<h2 class="title is-2">About Me</h2>
				<hr class="underline" />

				<p class="content">
					Hello! I’m a passionate QA Engineer with a strong foundation in software and game
					development. My journey in technology has been a blend of meticulous testing, creativity,
					and a dedication to delivering high-quality software experiences.
				</p>

				<p class="content">
					With a background in graphic design, I bring a unique perspective to my work, combining
					technical precision with an eye for aesthetics. This experience allows me to ensure not
					only functional quality but also a user-friendly and visually appealing interface in the
					products I help build.
				</p>

				<p class="content">
					In my free time, I’m often diving into personal software projects, exploring new realms in
					video games, or playing music. Traveling is another passion of mine, as I love
					experiencing new places and cultures, which enriches my perspective and fuels my
					creativity.
				</p>

				<p class="content">
					Whether I’m working on a professional project or a hobby, I’m driven by a love for
					learning and a desire to bring ideas to life. I’m excited to keep growing, exploring, and
					contributing to the world of technology.
				</p>

				<!-- Call-to-Action Button -->
				<button class="button is-black is-large">Tell me about your project</button>
			</div>
		</div>
	</div>
</section>
