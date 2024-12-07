<script lang="ts">
  interface Props {
    text: string;
    route: string;
    children?: import('svelte').Snippet;
  }

  let { text, route, children }: Props = $props();
</script>

<a
  class="group flex w-full flex-row items-center justify-center border-t-2 border-solid border-navbar-text-color p-4 lg:border-none h-1/3 lg:h-fit"
  id="header_anchor"
  href={route}
>
  {@render children?.()}
  <span
    class="font-roboto pl-2 text-center text-3xl font-bold text-text-color roboto transition duration-500 group-hover:text-text-hover-color lg:text-xl text-nowrap"
  >
    {text}
  </span>
</a>
