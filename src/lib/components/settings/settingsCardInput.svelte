<script lang="ts">
    export let input: any;
    export let required: boolean;
    export let placeholder: string;
    export let id: string
</script>

<input
    class="text-md bg-input border-input-border-color text-input-text h-10 w-full rounded-md border p-2"
    required={required}
    placeholder={placeholder}
    id={id}
/>