<script lang="ts">
	import SettingsLayout from '$lib/components/settings/settingsLayout.svelte';
	import SettingsSection from '$lib/components/settings/settingsSection.svelte';
	import SettingsCard from '$lib/components/settings/settingsCard.svelte';
	import SettingsCardSelect from '$root/src/lib/components/settings/settingsCardSelect.svelte';
	import SettingsCardButton from '$root/src/lib/components/settings/settingsCardButton.svelte';
	import { CCsaveConfig, clientConfig } from '$root/src/lib/config';
	import * as m from '$lib/paraglide/messages.js';
	import { onMount } from 'svelte';
</script>

<SettingsLayout title={m.settings_appearance()}>
	<SettingsSection title="Appearance" subtitle="Change the look and feel of pulsar">
		<div class="flex flex-row flex-wrap items-center gap-4 font-roboto">
			<div class="flex flex-row flex-wrap justify-center gap-6 md:justify-normal">
				<div
					class={`{both.enabled ? "h-72" : "h-64"} flex w-64 flex-col items-center rounded-3xl bg-navbar-color p-4`}
				>
					<h1 class="mb-2 text-3xl font-bold">Theme</h1>
					<p class="text-md w-full text-ellipsis text-center">Change the theme</p>
					<div class="flex h-full w-full flex-grow flex-col items-center justify-center gap-4">
						<SettingsCardSelect
							options={[
								{ value: 'pulsar', name: 'Pulsar' },
								{ value: 'nebula', name: 'Nebula' },
								{ value: 'mocha-sapphire', name: 'Mocha Sapphire' },
								{ value: 'mocha-lavender', name: 'Mocha Lavender' }
							]}
							name="theme"
							id="theme"
							bind:value={$clientConfig.theme}
							onchange={() => CCsaveConfig()}
						/>
					</div>
				</div>
			</div>
		</div>
	</SettingsSection>
</SettingsLayout>
