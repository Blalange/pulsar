<script lang="ts">
    interface Props {
        name: string;
        id: string;
        onclick?: () => void;
    }

    let { name, id, onclick = () => {} }: Props = $props();
</script>

<button
    id={id.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}
    class="border-input-border-color text-input-text bg-input hover:border-input hover:bg-input-border-color hover:text-input active:bg-input active:text-input-text h-10 w-36 rounded-md border transition-all duration-200 hover:font-bold"
    {onclick}
    >
    {name}
</button>