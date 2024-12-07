<script lang="ts">
  interface Props {
    title: string;
    subtitle: string;
    children?: import('svelte').Snippet;
  }

  let { title, subtitle, children }: Props = $props();
</script>


<div class="mt-5 font-roboto">
    <hr />
    <div class="mt-3">
      <div class="text-2xl font-semibold">{title}</div>
      <div class="text-lg mb-5">{subtitle}</div>
      {@render children?.()}
    </div>
  </div>
  