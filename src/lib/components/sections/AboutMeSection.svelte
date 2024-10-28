<script lang="ts">
	import { SectionHeadline, Button } from '$components';
	import image from '$assets/profile.jpg';
	import { goto } from '$app/navigation';

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="about-me section has-text-left">
	<div class="container">
		<SectionHeadline sectionName={'about-me'}>About me</SectionHeadline>
		<div class="mt-1 is-flex is-justify-content-space-between is-align-items-stretch">
			<figure class="image custom-image">
				<img src={image} alt="" style="border-radius: 2rem;" />
			</figure>
			<div class="content has-text-left custom-text">
				<p>
					Hello! I’m a passionate QA Engineer with a strong foundation in software and game
					development. My journey in technology has been a blend of meticulous testing, creativity,
					and a dedication to delivering high-quality software experiences.
				</p>

				<p>
					With a background in graphic design, I bring a unique perspective to my work, combining
					technical precision with an eye for aesthetics. This experience allows me to ensure not
					only functional quality but also a user-friendly and visually appealing interface in the
					products I help build.
				</p>

				<p>
					In my free time, I’m often diving into personal software projects, exploring new realms in
					video games, or playing music. Traveling is another passion of mine, as I love
					experiencing new places and cultures, which enriches my perspective and fuels my
					creativity.
				</p>

				<p>
					Whether I’m working on a professional project or a hobby, I’m driven by a love for
					learning and a desire to bring ideas to life. I’m excited to keep growing, exploring, and
					contributing to the world of technology.
				</p>
				<Button className={"is-medium"} {onclick}>Tell me about your project</Button>
			</div>
		</div>
	</div>
</section>

<style>
	.custom-image {
		width: 42%;
		border-radius: 100px;
		object-fit: cover;
	}

	.custom-text {
		width: 55%;
	}
</style>
