<script lang="ts">
    import InputComponent from './settingsCardInput.svelte';
    import SelectComponent from './settingsCardSelect.svelte';
    import ButtonComponent from './settingsCardButton.svelte';
    import ConditionalInputComponent from './settingsCardConditionalInput.svelte';

    interface Inputs {
        input: boolean;
        required?: boolean;
        placeholder?: string;
        validate?: boolean;
        validateString?: string;
		id?: string
    }

    interface SelectOptions {
        value: string;
        name: string;
        disabled: boolean;
    }

    interface Both {
        enabled: boolean;
        showOnSelect?: {
            value: string;
        };
        showOnInput?: boolean;
    }

    interface Selects {
        select: boolean;
        name?: string;
        multiple?: boolean;
        options?: SelectOptions[];
		id?: string
    }

    interface Buttons {
        name: string;
        id: string;
    }

    interface Props {
        title: string;
        description: string;
        input: Inputs;
        select: Selects;
        both: Both;
        button: Buttons;
    }

	let { title, description, input, select, both, button }: Props = $props();
</script>

<div
    class={`{both.enabled ? "h-72" : "h-64"} bg-navbar-color flex w-64 flex-col items-center rounded-3xl p-4`}
>
    <h1 class="mb-2 text-3xl font-bold">{title}</h1>
    <p class="text-md w-full text-ellipsis text-center">{description}</p>
    <div class="flex h-full w-full flex-grow flex-col items-center justify-center gap-4">
        <!-- Input Component -->
        {#if input.input && !both.enabled}
            <InputComponent
                input={input.input}
                required={input.required}
                placeholder={input.placeholder}
				id={input.id}
            />
        {/if}

        <!-- Select Component -->
        {#if select.select}
            <SelectComponent
                options={select.options}
                name={select.name}
				id={select.id}
            />
        {/if}

        <!-- Conditional Input Component -->
        {#if both.enabled && both.showOnSelect?.value}
            <ConditionalInputComponent
                input={input.input}
                required={input.required}
                placeholder={input.placeholder}
                showOnSelectValue={both.showOnSelect?.value}
            />
        {/if}

        <!-- Button Component -->
        <ButtonComponent
            name={button.name}
            id={button.id}
        />
    </div>
</div>