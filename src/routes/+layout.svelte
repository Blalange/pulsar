<script lang="ts">
	import Header from '$lib/components/header/header.svelte';
	import '../app.css';
	import { CCloadConfig, clientConfig } from '$lib/config';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onMount } from 'svelte';
	import BgLines from '../lib/components/bgLines.svelte';
	let { children } = $props();

	onMount(() => {
		CCloadConfig();
	});

	clientConfig.subscribe((config) => {
		// Only run in the browser
		if (typeof window !== 'undefined') {
			let theme = config.theme;
			window.document.documentElement.setAttribute('data-theme', theme);
		}
	});
</script>

<svelte:head>
	<script>
		let theme;
		function getFromLS() {
			const savedConfig = localStorage.getItem('config');
			return JSON.parse(savedConfig).theme;
		}

		fromLS = getFromLS();
		if (!fromLS) {
			theme = 'pulsar';
		} else {
			theme = fromLS;
		}

		window.document.documentElement.setAttribute('data-theme', theme);
	</script>
</svelte:head>

<ParaglideJS {i18n}>
	<div class="flex min-h-screen flex-col">
		<Header />
		<div class="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
			<BgLines />
		</div>
		<main id="main" class="flex-grow bg-primary">
			{@render children()}
		</main>
	</div>
</ParaglideJS>
