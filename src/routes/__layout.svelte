<script context="module">
import Time from "svelte-time";
</script>
<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import '@fontsource/barlow/300.css';
	import '@fontsource/barlow/400.css';
	import '@fontsource/barlow/500.css';
	import '@fontsource/barlow-semi-condensed/300.css';
	import '@fontsource/barlow-semi-condensed/400.css';
	import '@fontsource/barlow-semi-condensed/500.css';
	import '@fontsource/roboto-mono';
	import { onMount } from 'svelte';
	import Logo from './../lib/header/Logo.svelte';
	import { navigating, page } from '$app/stores';

	$: if($navigating) track();

	function track() {
		// Track a new page using setPath:
		// Update the path stored in the tracker:
		var _hsq = window._hsq = window._hsq || [];
		_hsq.push(['setPath', $navigating.to.pathname]);
		// Track the page view for the new page
		_hsq.push(['trackPageView']);
	}
</script>

<Header />

<main>
	<slot />
</main>

<footer>
</footer>

<style>
	.container.get-started {
		padding-bottom: 0;
	}

	h2 {
		font-weight: 400;
		padding-bottom: 1rem;
	}

	.get-started .button {
		display: inline-block;
		margin-bottom: 20px;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/*background: #5544a0;*/
		background: #694FB1;
		text-transform: lowercase;
	}

	.container {
		padding-top: 4rem;
		padding-bottom: 4rem;
	}

	strong {
		border-top: 1px solid rgba(255,255,255,.2);
		padding-top: .5rem;
		display: block;
		font-weight: 500;
		font-size: 1rem;
		padding-bottom: .5rem;
		letter-spacing: .03rem;
	}

	.info strong {
		padding-top: 1rem;
	}

	.footer-links {
		gap: 8vh;
	}

	.info {
		display: flex;
    flex-direction: column;
    justify-content: space-between;
		text-transform: lowercase;
		color: rgba(255,255,255,.8);
	}

	.info li img {
		width: 20px;
		margin-top: .5rem;
		opacity: .8;
		transition: opacity .5s ease;
	}

	.info li img:hover {
		opacity: 1;
	}

	.info .i-logo {
		width: 90px;
		padding: 1rem 0;
	}

	li {
		font-size: 1rem;
		padding: .2rem 0;
		letter-spacing: .03rem;
		font-weight: 300;
	}

	a {
		color: rgba(255,255,255,.8);
		text-decoration: none;
	}

	a:hover {
		color: rgba(255,255,255,1);
	}

	.copywright {
		text-transform: initial;
		font-size: .9rem;
		border-top: 1px solid rgba(255,255,255,.2);
		padding-top: 20px;
		color: rgba(255,255,255,.8);
		display: flex;
		font-weight: 300;
		letter-spacing: .03rem;
	}

	.button.primary-btn:hover {
		border-color: rgba(0,0,0,.3);
	}

	@media (min-width: 720px) {
		.container {
			padding: 8vh 2rem;
		}
		.info .i-logo {
			width: 113px;
		}
	}
</style>
