<script lang="ts">
	import Header from '$lib/components/header/header.svelte';
	import '../app.css';
	import { CCloadConfig, clientConfig } from '$lib/config';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onMount } from 'svelte';
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
	<Header />
	<div id="root" class="">
		{@render children()}
	</div>
</ParaglideJS>
