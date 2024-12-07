<script lang="ts">
	import Logo from '$lib/components/logo.svelte';
  import * as m from '$lib/paraglide/messages.js';
</script>

<div
	class="inset-0 z-0 mt-16 flex h-[calc(100%-4rem)] w-full flex-col flex-wrap content-center items-center justify-center"
>
	<div class="flex h-2/4 w-full flex-col content-center items-center justify-center">
		<div class="mb-8 flex flex-row items-center">
			<div class="h-32 w-32 fill-logo-color">
				<Logo />
			</div>
			<h1
				class="roboto whitespace-nowrap font-roboto text-5xl text-logo-text sm:visible sm:text-7xl"
			>
				pulsar.
			</h1>
		</div>
		<input
			id="nebula-input"
			class="roboto h-14 w-10/12 rounded-b-2xl rounded-t-2xl border border-input-border-color bg-input p-2 text-center font-roboto text-xl text-input-text transition-all duration-300 placeholder:text-input-text focus:outline-none md:w-3/12"
			placeholder={m.home_placeholder()}
		/>
		<div
			id="omnibox"
			class="flex hidden h-full w-10/12 flex-grow flex-col items-center rounded-b-2xl border-b border-l border-r border-input-border-color bg-input p-1 text-center transition-all duration-300 md:w-3/12"
		></div>
	</div>
	<div
		id="version"
		class="absolute bottom-4 flex h-6 w-full flex-row justify-between pl-4 pr-4 font-roboto text-text-color"
	>
		<p>&copy; Blålange</p>
	</div>
</div>
