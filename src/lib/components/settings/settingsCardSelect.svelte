<script lang="ts">
    interface Props {
        options: any[];
        name: string;
        id: string;
        value?: string;
        onchange?: () => void;
    }

    let {
        options,
        name,
        id,
        onchange = () => {},
        value = $bindable()
    }: Props = $props();
</script>

<select
    class="text-md bg-input border-input-border-color text-input-text h-10 w-full rounded-md border p-2"
    name={name}
    id={id}
    bind:value={value}
    onchange={onchange}
>
    {#each options as option}
        <option id={option.value} disabled={option.disabled} value={option.value}>
            {option.name}
        </option>
    {/each}
</select>