<script lang="ts">
    import Logo from "$lib/components/logo.svelte"
</script>

<div
class="flex flex-wrap mt-16 justify-center content-center w-full bg-primary fixed inset-0 h-[calc(100%-4rem)] z-0 flex-col items-center"
>
<div
  class="w-full flex flex-col justify-center items-center content-center h-2/4"
>
  <div class="flex flex-row items-center mb-8">
    <div class="h-32 w-32 fill-logo-color">
      <Logo />
    </div>
    <h1
      class="font-roboto whitespace-nowrap text-logo-text sm:visible text-5xl sm:text-7xl roboto"
    >
      pulsar.
    </h1>
  </div>
  <input
    id="nebula-input"
    class="transition-all duration-300 font-roboto h-14 rounded-t-2xl w-10/12 rounded-b-2xl border border-input-border-color bg-input p-2 text-center text-xl text-input-text placeholder:text-input-text roboto focus:outline-none md:w-3/12"
    placeholder="yipee"
  />
  <div
    id="omnibox"
    class="hidden p-1 transition-all duration-300 flex flex-col w-10/12 md:w-3/12 h-full flex-grow bg-input text-center items-center rounded-b-2xl border-input-border-color border-b border-r border-l"
  >
  </div>
</div>
<div
  id="version"
  class="flex flex-row w-full absolute bottom-4 pr-4 pl-4 text-text-color h-6 justify-between font-roboto"
>
  <p>Version: </p>
  <p>&copy; Nebula Services 2024</p>
</div>
</div>