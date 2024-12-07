<script lang="ts">
	import { isMobileNavOpen } from '$lib/store';
	import Icon from '$lib/components/icon.svelte';
	import HeaderButton from './headerButton.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { header_home } from '../../paraglide/messages/en';
	import { onMount } from 'svelte';
	let isMobileNavOpenLocal = true;
	onMount(() => {
		const right_caret = document.getElementById('right_caret');
		const hamburger_menu = document.getElementById('hamburger_menu');
		const mobileNavTrigger = document.getElementById('mobileNavTrigger');

		// Set the store to true when the button is clicked
		function openDialog() {
			if (isMobileNavOpenLocal == false) {
				isMobileNavOpen.set(true);
				if (hamburger_menu && right_caret) {
					hamburger_menu.style.display = 'none';
					right_caret.style.display = 'block';
				}
			} else {
				isMobileNavOpen.set(false);
				if (hamburger_menu && right_caret) {
					hamburger_menu.style.display = 'block';
					right_caret.style.display = 'none';
				}
			}
		}

		isMobileNavOpen.subscribe((open) => {
			if (open) {
				isMobileNavOpenLocal = true;
				if (hamburger_menu && right_caret) {
					hamburger_menu.style.display = 'none';
					right_caret.style.display = 'block';
				}
			} else {
				isMobileNavOpenLocal = false;
				if (hamburger_menu && right_caret) {
					hamburger_menu.style.display = 'block';
					right_caret.style.display = 'none';
				}
			}
		});

		// Add an event listener to the button

		if (mobileNavTrigger) {
			mobileNavTrigger.addEventListener('click', openDialog);
		}
	});
</script>

<div
	id="navbar"
	class="border-border-color bg-navbar-color relative z-30 flex h-16 flex-row items-center justify-center border-b-2 px-4"
>
	<div class="w-1/8">
		<div class="relative hidden flex-row lg:flex">
			<HeaderButton text={m.header_home()} route={`/`}>
				<Icon
					icon="ph:house-bold"
					class="text-text-color group-hover:text-text-hover-color h-6 w-6 transition duration-500 md:h-6 md:w-6"
				/>
			</HeaderButton>
			<HeaderButton text={m.header_settings()} route={`/settings/appearance`}>
				<Icon
					icon="ph:wrench-fill"
					class="text-text-color group-hover:text-text-hover-color h-6 w-6 transition duration-500 md:h-6 md:w-6"
                    noDefaultClass={true}
				/>
			</HeaderButton>
		</div>
		<div class="flex lg:hidden" id="mobileNavTrigger">
			<Icon icon="ph:text-align-justify-bold" class="text-text-color h-9 w-9" id="hamburger_menu" />
			<Icon icon="ph:caret-right-bold" class="text-text-color hidden h-9 w-9" id="right_caret" />
		</div>
	</div>
</div>
