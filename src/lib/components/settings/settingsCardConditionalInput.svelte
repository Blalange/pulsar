<script lang="ts">
    export let input: any;
    export let required: boolean;
    export let placeholder: string;
    export let showOnSelectValue: string | undefined;
</script>

{#if showOnSelectValue}
    <input
        id={`inputOnSelectValue${showOnSelectValue}`}
        class="text-md bg-input border-input-border-color text-input-text hidden h-10 w-full rounded-md border p-2"
        required={required}
        placeholder={placeholder}
    />
{/if}