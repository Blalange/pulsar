<script lang="ts">
  import Icon from '$lib/components/icon.svelte';
  import SidebarButton from '$lib/components/sidebarButton.svelte';
  import * as m from '$lib/paraglide/messages.js';
  export let title = "";
  </script>

<div class="flex flex-row font-roboto">
    <div class="text-text-color mt-16 fixed inset-0 h-[calc(100%-4rem)] z-0 flex-col flex md:flex-row">
        <div class="items-center md:p-3 sm:p-3 flex flex-row border-border-color md:gap-10 xl:gap-10 max-sm:gap-5 sm:gap-5 md:border-r-2 lg:w-2/12 md:w-3/12 md:flex-col md:bg-navbar-color md:gap-0 overflow-x-auto md:overflow-x-hidden overflow-y-hidden max-md:ml-1 max-md:mr-1 max-md:max-h-24 max-md:min-h-24 max-md:justify-left max-md:scroll-ml-3 max-md:scroll-mr-3 max-md:snap-x max-md:snap-mandatory">
        <SidebarButton title={m.settings_appearance()} route={`/settings/appearance`}>
          <Icon icon="ph:palette" class="h-6 w-6 text-text-color transition duration-500 group-hover:text-text-hover-color md:h-6 md:w-6" />
        </SidebarButton>
        <SidebarButton title={m.settings_proxy()} route={`/settings/pr`}>
          <Icon icon="ph:globe-hemisphere-east-fill" class="h-6 w-6 text-text-color transition duration-500 group-hover:text-text-hover-color md:h-6 md:w-6" />
        </SidebarButton>
        <SidebarButton title={m.settings_tab()} route={`/settings/tab/`}>
          <Icon icon="ph:laptop-fill" class="h-6 w-6 text-text-color transition duration-500 group-hover:text-text-hover-color md:h-6 md:w-6" />
        </SidebarButton>
        <SidebarButton title={m.settings_misc()} route={`/settings/misc`}>
          <Icon icon="ph:gear" class="h-6 w-6 text-text-color transistion duration-500 group-hover:text-text-hover-color md:h-6 md:w=6" />
        </SidebarButton>
        <SidebarButton title={m.settings_credits()} route={`/settings/credits`}>
          <Icon icon="ph:user" class="h-6 w-6 text-text-color transistion duration-500 group-hover:text-text-hover-color md:h-6 md:w=6" />
        </SidebarButton>
      </div>
      <div class="p-8 md:pb-2 w-full flex-grow overflow-y-auto">
        <p class="text-5xl font-semibold mb-5">{m.settings_settings()}</p>
        <p class="text-2xl">{title}</p>
        <slot />
      </div>
    </div>
  </div>
  